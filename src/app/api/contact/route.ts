import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, company, email, phone, service, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const fieldRow = (label: string, value: string, isLink = false) => `
    <tr>
      <td style="padding:12px 16px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#6B7280;width:130px;vertical-align:top;white-space:nowrap;border-bottom:1px solid #E8F4FD">${label}</td>
      <td style="padding:12px 16px;font-size:15px;color:#1A1A2E;border-bottom:1px solid #E8F4FD">${isLink ? `<a href="mailto:${value}" style="color:#0055A5;text-decoration:none">${value}</a>` : value}</td>
    </tr>`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>New Enquiry — Spiral Constructions</title></head>
<body style="margin:0;padding:0;background:#F5F5F5;font-family:Arial,Helvetica,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F5F5;padding:32px 16px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

        <!-- Header -->
        <tr>
          <td style="background:#002B5C;padding:28px 32px;border-radius:6px 6px 0 0">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <div style="font-size:22px;font-weight:700;color:#FFFFFF;letter-spacing:-0.02em">SPIRAL CONSTRUCTIONS</div>
                  <div style="font-size:11px;color:#0080CC;letter-spacing:0.12em;text-transform:uppercase;margin-top:3px">Geotechnical &amp; Environmental Solutions</div>
                </td>
                <td align="right" valign="middle">
                  <div style="background:#0055A5;color:#FFFFFF;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:6px 14px;border-radius:4px;display:inline-block">New Enquiry</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Blue accent bar -->
        <tr><td style="background:#0055A5;height:4px"></td></tr>

        <!-- Body -->
        <tr>
          <td style="background:#FFFFFF;padding:32px">
            <p style="margin:0 0 24px;font-size:16px;color:#1A1A2E;font-weight:600">You have received a new enquiry.</p>

            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E8F4FD;border-radius:6px;overflow:hidden;border-collapse:collapse">
              ${fieldRow("Name", name)}
              ${company ? fieldRow("Company", company) : ""}
              ${fieldRow("Email", email, true)}
              ${phone ? fieldRow("Phone", phone) : ""}
              ${service ? fieldRow("Service", service) : ""}
              <tr>
                <td style="padding:12px 16px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#6B7280;width:130px;vertical-align:top;white-space:nowrap">Message</td>
                <td style="padding:12px 16px;font-size:15px;color:#1A1A2E;white-space:pre-wrap;line-height:1.6">${message}</td>
              </tr>
            </table>

            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;background:#E8F4FD;border-radius:6px;padding:16px 20px">
              <tr>
                <td style="font-size:13px;color:#0055A5;padding:16px 20px">
                  Reply directly to this email to respond to <strong>${name}</strong> at <a href="mailto:${email}" style="color:#0055A5">${email}</a>.
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#002B5C;padding:20px 32px;border-radius:0 0 6px 6px">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="font-size:12px;color:#6B7280">
                  <span style="color:#FFFFFF;font-weight:600">Spiral Constructions Pvt. Ltd.</span><br>
                  <span style="color:#0080CC">www.spiralcon.com</span>
                </td>
                <td align="right" style="font-size:11px;color:#6B7280">
                  This email was generated automatically<br>from the Spiral Constructions contact form.
                </td>
              </tr>
            </table>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const { error } = await resend.emails.send({
    from: "Spiral Constructions <noreply@spiralcon.com>",
    to: "prem.nambiar@spiralcon.com",
    // to: "nanduttanvsabhi@gmail.com",
    replyTo: email,
    subject: `New Enquiry from ${name}${company ? ` (${company})` : ""}`,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
