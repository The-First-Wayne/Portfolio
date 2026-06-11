import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const { name, email, message } = req.body

    const { data, error } = await resend.emails.send({
      // The onboarding domain can only send to the registered email address.
      from: 'Portfolio Contact <onboarding@resend.dev>', 
      to: ['anishvis007@gmail.com'],
      subject: `New Project Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    if (error) {
      return res.status(400).json(error)
    }

    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
