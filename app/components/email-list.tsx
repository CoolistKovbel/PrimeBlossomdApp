"use client";

import { toast } from "react-toastify";
import { JoinMailingList } from "../lib/action";

const EmailList = () => {
  const handleJoinMail = async (e: any) => {
    e.preventDefault();

    try {
      console.log("joining mailing list ");

      const result = await JoinMailingList(e.target.emailUser.value);
      const form = e.target as HTMLFormElement

      if (result.status === "success") {
        console.log("noices");
        toast("you are now on the list");
        form.reset();
      }
    } catch (error) {
      console.log("error join mailling list", error);
    }
  };

  return (
    <div className="w-full p-4 flex items-center justify-center flex-col gap-5 bg-[#444]">
      <h2 className="text-4xl font-bold">Join Email list today</h2>
      <p className="text-2xl">
        Get notified when the next nft drop is to happen.
      </p>
      <form onSubmit={handleJoinMail} className="flex items-center gap-5">
        <label htmlFor="emailUser">
          <input
            type="email"
            id="emailUser"
            name="emailUser"
            placeholder="enter email"
            className="p-4 bg-[#555] rounded-lg"
          />
        </label>

        <button className="text-xl bg-[firebrick] hover:bg-[#232] p-4">
          submit
        </button>
      </form>
    </div>
  );
};

export default EmailList;
