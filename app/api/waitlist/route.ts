import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyTurnstile(token: string): Promise<boolean> {
  const body = new URLSearchParams();
  body.append("secret", process.env.TURNSTILE_SECRET_KEY!);
  body.append("response", token);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
  });

  const data = await res.json();
  return data.success === true;
}

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, company, use_case, website, turnstileToken } =
      await req.json();

    // ── Honeypot check — bots fill this field, humans don't ──
    if (website && website.trim() !== "") {
      // Silently succeed so bots don't know they were caught
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // ── Required fields ──
    if (!firstName || !email) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // ── Cloudflare Turnstile verification ──
    if (!turnstileToken) {
      return NextResponse.json({ error: "Please complete the security check." }, { status: 400 });
    }

    const turnstileOk = await verifyTurnstile(turnstileToken);
    if (!turnstileOk) {
      return NextResponse.json({ error: "Security check failed. Please try again." }, { status: 400 });
    }

    // ── Send email via Resend ──
    const { error } = await resend.emails.send({
      from: "ACI Waitlist <noreply@mail.adaptivecompoundintelligence.com>",
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
