import nodemailer from "nodemailer";

const sendSubmissionEmail = async (
  leaderEmail,
  leaderName,
  teamId,
  solutionName,
  organizationName
) => {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn(
        "Email credentials not found in environment variables. Skipping email."
      );
      return;
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const subject = `Submission Successful - Vision Mysuru 2050 (Team ID: ${teamId})`;

    const htmlContent = `
        <div style="font-family: 'Montserrat', sans-serif; max-width: 620px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; border: 1px solid #e5e7eb; overflow: hidden;">
            <div style="background-color: #fafaf9; padding: 20px 24px; color: #111827;">
                <h2 style="margin: 0; font-size: 22px;">Submission Received Successfully!✨</h2>
                <p style="margin: 6px 0 0; font-size: 14px; opacity: 0.95;">
                Vision Mysuru 2050 — Shaping the Future of Our Heritage City
                </p>
            </div>
            <div style="padding: 24px;">
                <p style="font-size: 15px; color: #111827;">
                Dear <strong>${leaderName}</strong>,
                </p>

                <p style="font-size: 14px; color: #374151; line-height: 1.6;">
                Warm greetings from <strong>Vision Mysuru 2050</strong>.  
                We are pleased to confirm that your idea has been successfully submitted and officially recorded.
                </p>

                <!-- Team ID Highlight -->
                <div style="background-color: #fffbeb; padding: 16px; margin: 22px 0; border-radius: 6px;">
                <p style="margin: 0; font-size: 12px; color: #92400e; text-transform: uppercase; letter-spacing: 0.05em;">
                    Your Official Team ID
                </p>
                <p style="margin: 6px 0 0; font-size: 28px; font-weight: bold; color: #7c2d12; letter-spacing: 1.5px;">
                    ${teamId}
                </p>
                <p style="margin: 6px 0 0; font-size: 12px; color: #92400e;">
                    Kindly mention this ID in all future communications
                </p>
                </div>

                <!-- Submission Summary -->
                <div style="background-color: #fdfcf9; padding: 18px; border-radius: 8px; border: 1px solid #e7e5e4;">
                <h3 style="margin-top: 0; margin-bottom: 10px; font-size: 13px; color: #57534e; text-transform: uppercase; letter-spacing: 0.04em;">
                    Submission Overview
                </h3>
                <p style="margin: 6px 0; font-size: 14px; color: #1c1917;">
                    <strong>Project Title:</strong> ${solutionName}
                </p>
                <p style="margin: 6px 0; font-size: 14px; color: #1c1917;">
                    <strong>Organization / Institution:</strong> ${organizationName}
                </p>
                </div>

                <p style="margin-top: 20px; font-size: 14px; color: #374151; line-height: 1.6;">
                Your submission will be reviewed by our expert panel.  
                Shortlisting updates will be communicated via the official dashboard.
                </p>

                <p style="font-size: 14px; color: #374151;">
                For any assistance, please reply to this email or contact us at  
                <a href="mailto:${process.env.EMAIL_USER}" style="color: #1e40af; text-decoration: underline;">
                    ${process.env.EMAIL_USER}
                </a>.
                </p>

                <!-- Footer -->
                <div style="margin-top: 28px; padding-top: 16px; border-top: 1px dashed #d6d3d1;">
                <p style="margin: 0; font-size: 14px; color: #1c1917;">
                    With warm regards,
                </p>
                <p style="margin: 4px 0 0; font-size: 15px; font-weight: bold; color: #7c2d12;">
                    Vision Mysuru 2050 Team
                </p>
                <p style="margin: 4px 0 0; font-size: 12px; color: #78716c;">
                    Honouring heritage • Inspiring innovation • Building tomorrow 🇮🇳
                </p>
                </div>
            </div>
        </div>

    `;

    const mailOptions = {
      from: `"Vision Mysuru 2050" <${process.env.EMAIL_USER}>`,
      to: leaderEmail,
      subject: subject,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Confirmation email sent to ${leaderEmail}`);
  } catch (error) {
    console.error("Failed to send email:", error);
    // Silent fail so client request doesn't crash
  }
};

export default sendSubmissionEmail;
