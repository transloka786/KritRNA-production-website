import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createTransporter } from '@/lib/email';
import { CONTACT_CONFIG } from '@/lib/config';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  topic: z.string().min(1, 'Topic is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, topic, message } = contactSchema.parse(body);

    const transporter = createTransporter();

    await transporter.sendMail({
      from: CONTACT_CONFIG.from,
      to: CONTACT_CONFIG.email,
      subject: `[KritRNA Contact] ${topic}: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Topic:</strong> ${topic}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, error: error.errors[0].message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { ok: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
}