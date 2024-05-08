import { sendMail } from "./mail";


export async function ContactEmail(
    id: string,
    prevState: string | object | undefined,
    formData: FormData
  ) {
    try {
      const data = Object.fromEntries(formData.entries());
  

  
      const { to, name, subject, content } = data;
  
      await sendMail({
        to: process.env.SMTP_EMAIL as string,
        name: name as string, // get user name
        subject: subject as string,
        content: content as string,
      });
  
      return { message: "i am dead" };
    } catch (error) {
      console.log(error);
      return { message: "I am sorry but the request failed.... you got denied" };
    }
  }