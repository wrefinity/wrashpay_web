import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Send welcome email to subscriber
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Welcome to Wrashpay Newsletter',
      html: `
        <h2>Welcome to Wrashpay Newsletter!</h2>
        <p>Thank you for subscribing to our newsletter. You'll now receive updates about:</p>
        <ul>
          <li>New features and services</li>
          <li>Special offers and promotions</li>
          <li>Industry insights and tips</li>
          <li>Company news and updates</li>
        </ul>
        <p>Best regards,<br>The Wrashpay Team</p>
      `,
    });

    // Notify admin about new subscriber
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Newsletter Subscriber',
      html: `
        <h2>New Newsletter Subscriber</h2>
        <p>Email: ${email}</p>
        <p>Date: ${new Date().toLocaleString()}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}
