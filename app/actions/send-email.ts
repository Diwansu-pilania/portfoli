"use server"

import { createTransport } from "nodemailer"

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: "unidentifiedhacker07@gmail.com",
    // You need to use an app password if you have 2FA enabled
    // Generate one at https://myaccount.google.com/apppasswords
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function sendEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Validate the input
    if (!name || !email || !message) {
      return {
        success: false,
        message: "Please fill in all fields",
      }
    }

    // Send email
    await transporter.sendMail({
      from: email,
      to: "unidentifiedhacker07@gmail.com",
      subject: `New Contact Form Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
<h2>New Contact Form Message</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    })

    return {
      success: true,
      message: "Message sent successfully!",
    }
  } catch (error) {
    console.error("Failed to send email:", error)
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    }
  }
}

