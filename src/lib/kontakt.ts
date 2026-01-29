import nodemailer from 'nodemailer';

interface KontaktData {
  name: string;
  email: string;
  message: string;
}

export async function sendKontakt(data: KontaktData) {
  const { name, email, message } = data;

  if (!name || !email || !message) {
    throw new Error('Sva polja su obavezna');
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false, // false for port 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.SMTP_USER, // your email where you want to receive messages
    subject: '📩 Nova kontakt poruka',
    html: `<p><b>Ime:</b> ${name}</p>
           <p><b>Email:</b> ${email}</p>
           <p><b>Poruka:</b> ${message}</p>`,
  });

  return { success: true };
}
