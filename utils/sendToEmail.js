import nodemailer from 'nodemailer'

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Wrap in an async IIFE so we can use await.

export async function sendToEmail(jBody){
    console.log("sending to email...")
    console.log(process.env.EMAIL_USER)
    console.log("passs is" + process.env.EMAIL_PASS)
      const info = await transporter.sendMail({
    from: 'Faisal Almail website',
    to: "faisalyounis90@gmail.com",
    subject: "Contact form entry",
    text: "Hello world?", // plain‑text body
    html: `"<b>Hello world?</b>"
    ${jBody.name} has filled the form,
    their emails is ${jBody.email},
    and their message is:
    ${jBody.message}
    `, // HTML body
  });

  console.log("Message sent:", info.messageId);
}








/* (async () => {
  const info = await transporter.sendMail({
    from: '"Maddison Foooch" <maddison53@ethereal.email>',
    to: "bar@example.com, baz@example.com",
    subject: "Hello ✔",
    text: "Hello world?", // plain‑text body
    html: "<b>Hello world?</b>", // HTML body
  });

  console.log("Message sent:", info.messageId);
})(); */