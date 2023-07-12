import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
    secure: true, 
    auth: {
      user: process.env.USER_MAILER, // generated ethereal user
      pass: process.env.PASS_MAILER, // generated ethereal password
    },
});

export const mailOption = {
    to: process.env.NEXT_PUBLIC_MAIL, 
    from: process.env.NEXT_PUBLIC_MAIL,
};