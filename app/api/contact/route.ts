import { NextRequest, NextResponse } from 'next/server';

// Temporary GET handler for debugging route availability
export async function GET() {
  return NextResponse.json({ ok: true, message: 'Mailchimp endpoint is live' });
}

export async function POST(request: NextRequest) {
  console.log('[api/contact] POST invoked');
  try {
    // Ensure Content-Type is application/json
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Invalid Content-Type, expected application/json' },
        { status: 415 }
      );
    }

    const body = await request.json();
    const { fullName, companyName, emailAddress, phoneNumber, projectScope } = body;

    // Validate payload
    if (!fullName || !companyName || !emailAddress || !phoneNumber || !projectScope) {
      return NextResponse.json(
        { error: 'Missing required fields', received: body },
        { status: 400 }
      );
    }

    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX; // e.g., 'us21'
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_SERVER_PREFIX || !AUDIENCE_ID) {
      console.error('[api/contact] Missing Mailchimp env vars');
      return NextResponse.json(
        { error: 'Mailchimp configuration not found' },
        { status: 500 }
      );
    }

    // Mailchimp requires Basic auth with API key as password
    const auth = Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64');
    const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    const mcResponse = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: emailAddress,
        status: 'subscribed',
        merge_fields: {
          FNAME: fullName,
          COMPANY: companyName,
          PHONE: phoneNumber,
          SCOPE: projectScope,
        },
      }),
    });

    const mcData = await mcResponse.json();
    if (!mcResponse.ok) {
      console.error('[api/contact] Mailchimp error:', mcData);
      return NextResponse.json(
        { error: 'Mailchimp API error', details: mcData },
        { status: mcResponse.status }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Subscribed to Mailchimp', data: mcData },
      { status: 200 }
    );
  } catch (err) {
    console.error('[api/contact] Unexpected error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
