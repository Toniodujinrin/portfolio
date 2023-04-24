import React, { useState } from "react";
import { motion } from "framer-motion";

import axios from "axios";
import { toast } from "react-toastify";

const Find = () => {
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");
  const [email, setEmail] = useState("");

  const sendMail = async () => {
    if (sender.length > 0 && email.length > 0 && message.length > 0) {
      const payload = { message: message, sender: sender, email: email };
      try {
        const status = await axios.post(
          "https://portfoliobackend-ne8b.onrender.com/message",
          payload
        );
        if (status.status === 200) {
          toast.success("Message Sent", {
            theme: "dark",
          });
          console.log(status);
        } else {
          toast.error("Could not send message", {
            theme: "dark",
          });
        }
      } catch (error) {
        console.log(error);
        toast.error("Could not send message", {
          theme: "dark",
        });
      }
    } else {
      toast.error("Please comlete all fields", {
        theme: "dark",
      });
    }
  };
  return (
    <div id="contact" className="flex lg:p-8 p-8  flex-col">
      <h1
        data-aos="fade-up"
        className=" mb-[30px] lg:w-[60%] w-full flex flex-row space-x-2 items-center  border-b border-b-aquamarine  text-olive text-[24px] "
      >
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity }}
          src="../../logo.svg"
          alt=""
        />
        <p>Lets Talk</p>
      </h1>
      <main className="flex lg:flex-row flex-col items-center lg:justify-between">
        <div className="lg:w-[50%] lg:p-4 w-full  ">
          <textarea
            placeholder="Send me a message"
            name=""
            id=""
            value={message}
            onChange={(e) => {
              setMessage(e.currentTarget.value);
            }}
            draggable={false}
            style={{ resize: "none", height: "200px" }}
            className="lg:w-[90%] w-full p-2 h-[20px] text-white bg-black rounded-[15px] outline-none border-aquamarine border focus:outline-none "
          ></textarea>
          <input
            type="text"
            value={sender}
            onChange={(e) => {
              setSender(e.currentTarget.value);
            }}
            className="w-[90%] h-[40px] p-2  bg-black  text-white   focus:outline-none border-b border-b-aquamarine"
            placeholder="Full Name"
          />
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
            className="w-[90%] h-[40px] p-2  bg-black text-white mb-4  focus:outline-none border-b border-b-aquamarine"
            placeholder="Email"
          />
          <button
            onClick={() => {
              sendMail();
            }}
            className="h-[40px] w-[100px] text-aquamarine border  border-aquamarine"
          >
            Send
          </button>
        </div>

        <div className="lg:flex hidden  lg:w-[50%] w-full p-4 lg:p-0 flex-col justify-center items-center">
          <img
            className="w-[400px] h-[400px]"
            src="../../letsTalk.svg"
            alt=""
          />
          {/*<div className="w-full h-[500px] flex-col items-center space-y-[100px] justify-center ">
            <div className="flex flex-row lg:justify-center justify-between  lg:space-x-[200px]">
              <motion.img
                animate={{ y: [10, 0, 10] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="h-[50px] cursor-pointer w-[50px]"
                src="../../phone.svg"
                alt=""
              />{" "}
              <motion.img
                animate={{ y: [10, 0, 10] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="h-[50px] cursor-pointer w-[50px]"
                src="../../github.svg"
                alt=""
              />
            </div>
            {/* <div className="w-full flex items-center justify-center">
              <motion.img
                animate={
                  {
                    //   scale: [1, 1.5, 1],
                  }
                }
                transition={{ repeat: Infinity, duration: 3 }}
                className="h-[70px]  w-[70px]"
                src="../../location.svg"
                alt=""
              />
            </div>

            <div className="flex flex-row lg:justify-center justify-between  lg:space-x-[200px]">
              <motion.img
                animate={{ y: [10, 0, 10] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="h-[70px] cursor-pointer w-[70px]"
                src="../../linkedin.svg"
                alt=""
              />{" "}
              <motion.img
                animate={{ y: [10, 0, 10] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="h-[50px] cursor-pointer w-[50px]"
                src="../../github.svg"
                alt=""
              />
            </div>
          </div>*/}
        </div>
      </main>
    </div>
  );
};

export default Find;
