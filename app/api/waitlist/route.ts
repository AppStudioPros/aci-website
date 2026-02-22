import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, company, use_case } = await req.json();

    if (!firstName || !email) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "ACI Waitlist <onboarding@resend.dev>",
      to: ["info@adaptivecompoundintelligence.com"],
      replyTo: email,
      subject: `New Early Access Request — ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0B; color: #F5F5F0; padding: 32px; border-radius: 12px;">
          <h2 style="color: #F59E0B; margin-bottom: 24px;">New ACI Early Access Request</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #8A8A8F; width: 140px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #F5F5F0;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #8A8A8F; vertical-align: top;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #F59E0B;">${email}</a></td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 10px 0; color: #8A8A8F; vertical-align: top;">Company / Size</td>
              <td style="padding: 10px 0; color: #F5F5F0;">${company}</td>
            </tr>` : ""}
            ${use_case ? `
            <tr>
              <td style="padding: 10px 0; color: #8A8A8F; vertical-align: top;">Use Case</td>
              <td style="padding: 10px 0; color: #F5F5F0; white-space: pre-wrap;">${use_case}</td>
            </tr>` : ""}
          </table>

          <hr style="border: none; border-top: 1px solid #1E1E21; margin: 24px 0;" />
          <p style="color: #5A5A5F; font-size: 12px; margin: 0;">
            Adaptive Compound Intelligence™ — Patent Pending US App. 63/987,765
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Waitlist API error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
