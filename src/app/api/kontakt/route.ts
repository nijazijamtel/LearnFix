import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs'; // required for nodemailer

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Sva polja su obavezna' },
        { status: 400 }
      );
    }

    // Create transporter using your SMTP environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_USER, // send to yourself
      subject: `📩 Nova kontakt poruka od ${name}`,
      html: `
        <h3>Nova poruka</h3>
        <p><b>Ime:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Poruka:</b></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Kontakt API error:', err);
    return NextResponse.json(
      { success: false, error: err.message || 'Došlo je do greške pri slanju poruke' },
      { status: 500 }
    );
  }
}

