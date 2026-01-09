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
      <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; border: 1px solid #e5e7eb;">
        <div style="background-color: #fafaf9; padding: 20px 24px; color: #111827;">
          <h2 style="margin: 0; font-size: 22px;">Submission Received Successfully ✨</h2>
          <p style="margin-top: 6px; font-size: 14px;">
            Vision Mysuru 2050 — Shaping the Future of Our Heritage City
          </p>
        </div>

        <div style="padding: 24px;">
          <p>Dear <strong>${leaderName}</strong>,</p>

          <p>
            We are pleased to confirm that your idea has been successfully submitted.
          </p>

          <div style="background-color: #fffbeb; padding: 16px; margin: 22px 0; border-radius: 6px;">
            <p style="font-size: 12px; color: #92400e;">Your Team ID</p>
            <p style="font-size: 28px; font-weight: bold; color: #7c2d12;">
              ${teamId}
            </p>
            <p style="font-size: 12px; color: #92400e; margin-top: 10px;">Team Name</p>
            <p style="font-size: 20px; font-weight: bold; color: #7c2d12;">
              ${teamName}
            </p>
          </div>

          <p><strong>Project Title:</strong> ${solutionName}</p>
          <p><strong>Organization:</strong> ${organizationName}</p>

          <p style="margin-top: 20px;">
            Updates will be shared via the official dashboard.
          </p>

          <p style="margin-top: 24px;">
            Regards,<br/>
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
