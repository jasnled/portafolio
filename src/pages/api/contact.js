// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { transporter, mailOption } from "@/config/nodemailer";

export default async function handler(req, res) {
  
  const data = req.body;
  const message =`${(data.firstName || data.lastName)? data.firstName+" "+data.lastName: ""}
  ${data.company}
  ${data.email}
  ${data.message}
  `;
  async function main() {
    await transporter.sendMail({
      ...mailOption,
      subject: `Contact of ${data.company}`, // Subject line
      text: message, // plain text body
      html: `<b>${message}</b>`, // html body
    });
  };
  

  if(req.method === "POST"){

    try{
      await main();
      return res.status(200).json({ message:"success" });
    }catch(e){
      console.log(e);
      return res.status(400).json({ message: e.message })
    };

  };
  return res.status(400).json({message: "Bad request"});
}

  
 
