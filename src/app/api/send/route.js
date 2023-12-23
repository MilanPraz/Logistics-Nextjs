import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req) {
  try {
    const reqBody = await req.json();
    console.log(reqBody);
    const { fullname, email, contact, subject, details } = reqBody;

    var transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "06e60d1b77e831",
        pass: process.env.MAIL_PASS,
      },
    });

    var mailOptions = {
      from: email,
      to: "nabinraut.nkr@gmail.com",
      subject: subject,
      phone: contact,
      email: email,
      html: `<h2>Excuse Me!! ${fullname}</h2>`,
      text: details,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return NextResponse.json({ msg: error });
      }
      console.log("Message sent: %s", info.messageId);
      return NextResponse.json("success");
    });

    return NextResponse.json({ msg: "hello" });
  } catch (err) {
    return NextResponse.json({ msg: err.message }, { status: 500 });
  }
}
