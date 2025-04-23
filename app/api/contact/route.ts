import { NextRequest, NextResponse } from 'next/server';

type ContactPayload = {
  fullName: string;
  companyName: string;
  emailAddress: string;
  phoneNumber: string;
  projectScope: string;
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    const { fullName, companyName, emailAddress, phoneNumber, projectScope } = body;

    if (!fullName || !companyName || !emailAddress || !phoneNumber || !projectScope) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY!;
    const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX!; // e.g., 'us21'
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;

    const response = await fetch(`https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`, {
      method: 'POST',
      headers: {
        Authorization: `apikey ${MAILCHIMP_API_KEY}`,
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

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: 'Mailchimp error', details: errorData }, { status: response.status });
    }

    return NextResponse.json({ success: true, message: 'Subscribed to Mailchimp' }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
