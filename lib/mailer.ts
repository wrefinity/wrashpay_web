import nodemailer from 'nodemailer';


export class MailService {
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    port: Number(process.env.MAIL_PORT),
    host: process.env.MAIL_HOST,
    secure: false,
    auth: {
      user: process.env.FROM_EMAIL!,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  private baseTemplate(header: string, content: string, isUrgent: boolean = false) {
    const primaryColor = isUrgent ? '#DC143C' : '#A91B0D'; // Crimson shades
    const secondaryColor = '#F5F5F5';
    const textColor = '#333333';
    const lightText = '#777777';

    return `
      <div style="font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: ${textColor}; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <div style="background: ${primaryColor}; padding: 25px; text-align: center;">
          <img src="https://yourbills.com/logo.png" alt="BillPay Logo" style="height: 40px; margin-bottom: 15px;">
          <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">${header}</h1>
        </div>
        
        <div style="padding: 30px; background: white;">
          ${content}
          
          <div style="margin-top: 30px; font-size: 14px; color: ${lightText}; border-top: 1px solid #eee; padding-top: 20px;">
            <p>Need help? <a href="mailto:support@yourbills.com" style="color: ${primaryColor}; text-decoration: none;">Contact our support team</a></p>
            <p style="margin-bottom: 0;">© ${new Date().getFullYear()} BillPay. All rights reserved.</p>
          </div>
        </div>
      </div>
    `;
  }

  // Enhanced Email Verification Template
  async complain(email: string, complain: string) {
    const html = this.baseTemplate(
      'Complain Notification',
      `
        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px;">Welcome to BillPay! To complete your registration, please verify your email address using the code below:</p>
        
        <div style="
          font-size: 28px;
          font-weight: bold;
          letter-spacing: 2px;
          background: #F9F9F9;
          padding: 15px 20px;
          width: fit-content;
          border-radius: 6px;
          margin: 20px auto;
          border: 1px dashed #A91B0D;
          color: #A91B0D;
        ">${complain}</div>
        
        <p style="font-size: 15px; line-height: 1.6; color: #777;">
          This verification code will expire in 10 minutes. If you didn't create an account with BillPay, 
          please ignore this email or <a href="mailto:security@yourbills.com" style="color: #A91B0D;">contact our security team</a>.
        </p>
        
        <div style="background: #FFF5F5; border-left: 4px solid #A91B0D; padding: 12px; margin: 20px 0; border-radius: 0 4px 4px 0;">
          <p style="font-size: 14px; margin: 0; color: #555;">
            <strong>Security Tip:</strong> Never share this code with anyone. BillPay will never ask you for your verification code.
          </p>
        </div>
      `
    );

    await this.transporter.sendMail({
      from: `"WRASH-PAY" <${process.env.FROM_EMAIL}>`,
      to: email,
      subject: 'Verify Your BillPay Account',
      html,
    });
  }
}