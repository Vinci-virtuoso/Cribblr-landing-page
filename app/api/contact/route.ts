import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { fullName, companyName, emailAddress, phoneNumber,projectScope } = await req.json();

    // Prepare Airtable API request
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME;

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_NAME) {
      return NextResponse.json({ error: "Airtable credentials not set" }, { status: 500 });
    }

    const airtableUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(
      AIRTABLE_TABLE_NAME
    )}`;

    const airtableRes = await fetch(airtableUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          'fullName': fullName,
          'companyName': companyName,
          'emailAddress': emailAddress,
          'phoneNumber': phoneNumber,
          'projectScope': projectScope,
        },
      }),
    });

    if (!airtableRes.ok) {
      const error = await airtableRes.text();
      console.error("Airtable API Error:", error); // Log the specific error from Airtable
      return NextResponse.json({ error: "Failed to submit to Airtable" }, { status: 500 }); // Return a more generic error to the client
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
