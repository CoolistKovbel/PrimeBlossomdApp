"use server";

import { WaitList } from "../models/WaitList";
import { sendMail } from "./mail";

export async function ContactEmail(
  prevState: string | object | undefined,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());
  const content = data.content as string;

  try {
    await sendMail({
      to: process.env.SMTP_EMAIL as string,
      name: data.email as string,
      subject: (data.subject as string) || "URGENT NOTICE",
      content: content.concat(` Message situated from ${data.email} `),
    });

    return {
      message: `${data.email} your message has been sent, if you cant wait... call`,
    };
  } catch (error) {
    console.log(error);
    return { message: "I am sorry but the request failed.... you got denied" };
  }
}

export async function JoinMailingList(userInfo: string) {
  try {
    console.log("trying to join mailing list");

    const newUserWaiting = new WaitList({
      email: userInfo,
    });

    await newUserWaiting.save();

    return {
      status: "success",
      payload: "You are now all set and will be notified in the future.",
    };
  } catch (error) {
    console.log("Error trying to join wait list for user", error);

    return {
      status: "error",
      payload: error,
    };
  }
}
