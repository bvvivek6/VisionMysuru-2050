import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendSubmissionEmail = async (
  leaderEmail,
  leaderName,
  teamId,
  teamName,
  solutionName,
  organizationName
) => {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not set. Skipping email.");
      return;
    }

    const htmlContent = `
        <div style="background: linear-gradient(135deg, #fafaf9, #fef3c7); padding: 22px 26px; border-bottom: 1px solid #fde68a;">
          <h2 style="margin: 0; font-size: 22px; color: #111827;">
            Submission Received Successfully ✨
          </h2>
          <p style="margin-top: 6px; font-size: 14px; color: #374151;">
            Vision Mysuru 2050 — Shaping the Future of Our Heritage City
          </p>
        </div>
        <div style="padding: 26px; color: #111827; font-size: 14px; line-height: 1.6;">
          <p>Dear <strong>${leaderName}</strong>,</p>

          <p>
            Thank you for submitting your idea as part of <strong>Vision Mysuru 2050</strong>.
            We are pleased to confirm that your submission has been received successfully.
          </p>

          <!-- Team Info Card -->
          <div style="padding: 12px; margin: 24px 0; border-radius: 12px; border: 4px solid #fde68a;">
            <p style="font-size: 12px; color: #92400e; margin: 0;">Team ID</p>
            <p style="font-size: 26px; font-weight: bold; color: #7c2d12; margin: 4px 0 14px;">
              ${teamId}
            </p>

          </div>

          <!-- Project Details -->
          <table style="width: 100%; border-collapse: collapse; margin-top: 12px;">
            <tr>
              <td style="padding: 6px 0; color: #374151;"><strong>Team Name</strong></td>
              <td style="padding: 6px 0;">${teamName}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #374151;"><strong>Project Title</strong></td>
              <td style="padding: 6px 0;">${solutionName}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #374151;"><strong>Organization/Institute</strong></td>
              <td style="padding: 6px 0;">${organizationName}</td>
            </tr>
          </table>
          <p style="margin-top: 22px;">
            All subsequent communication, including evaluation outcomes and next steps, will be shared through official correspondence.
          </p>
          <div style="margin-top: 20px;">
            <a href="https://vision-mysuru-2050.vercel.app/"
              style="display: inline-block; padding: 10px 18px; background-color: #f59e0b; color: #111827; text-decoration: none; border-radius: 6px; font-weight: bold;">
              Visit Official Website
            </a>
          </div>
          <div style="margin-top: 26px; padding-top: 18px; border-top: 1px solid #e5e7eb; font-size: 13px; color: #374151;">
            <p style="margin: 0;">
              📩 For any queries or assistance, please contact us at
              <a href="mailto:vision2050@sdmimd.ac.in" style="color: #b45309; text-decoration: none;">
                vision2050@sdmimd.ac.in
              </a>
            </p>
          </div>
          <p style="margin-top: 24px;">
            Regards,<br />
            <strong>Vision Mysuru 2050 Team</strong>
          </p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "Vision Mysuru 2050 <onboarding@resend.dev>",
      to: leaderEmail,
      subject: `Submission Successful - Vision Mysuru 2050 (Team ID: ${teamId})`,
      html: htmlContent,
    });

    console.log(`Confirmation email sent to ${leaderEmail}`);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
};

export default sendSubmissionEmail;
