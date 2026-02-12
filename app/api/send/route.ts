import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    if (!process.env.RESEND_API_KEY) {
        return NextResponse.json({ error: 'RESEND_API_KEY is not set' }, { status: 500 });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const { name, email, phone, project, message } = await request.json();

        const { data, error } = await resend.emails.send({
            from: 'Elite Epoxy Floors <onboarding@resend.dev>',
            to: ['coreyfmiller@gmail.com'],
            subject: `New Estimate Request: ${project} from ${name}`,
            html: `
        <h2>New Estimate Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project Type:</strong> ${project}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
