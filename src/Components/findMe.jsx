import React, { useState } from "react";
import { motion } from "framer-motion";

import axios from "axios";
import { toast } from "react-toastify";

const Find = () => {
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");
  const [email, setEmail] = useState("");
  const [loading,setLoading]= useState(false)
  const sendMail = async () => {
    if (sender.length > 0 && email.length > 0 && message.length > 0) {
      const payload = { message: message, sender: sender, email: email };
      try {
        setLoading(true)
        const status = await axios.post(
          "https://portfolio-backend-gilt-nu.vercel.app/message",
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
      finally{
        setLoading(false)
      }
    } else {
      toast.error("Please comlete all fields", {
        theme: "dark",
      });
    }
  };
  return (
    <div id="contact" className="flex lg:p-8 p-8 mt-[50px]  flex-col">
      <h1
        data-aos="fade-up"
        className=" mb-[30px]  w-full flex flex-row space-x-2 items-center justify-center     text-olive text-[36px] "
      >
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity }}
          src="../../logo.svg"
          alt=""
        />
        <p>Lets Talk</p>
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity }}
          src="../../logo.svg"
          alt=""
        />
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
            className="lg:w-[90%] w-full p-3 h-[20px] text-white bg-appGray  outline-none border-aquamarine border focus:outline-none "
          ></textarea>
          <input
            type="text"
            value={sender}
            onChange={(e) => {
              setSender(e.currentTarget.value);
            }}
            className="w-[90%] h-[40px] p-2  bg-appGray text-white   focus:outline-none border-b border-b-aquamarine"
            placeholder="Full Name"
          />
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
            className="w-[90%] h-[40px] p-2  bg-appGray text-white mb-4  focus:outline-none border-b border-b-aquamarine"
            placeholder="Email"
          />
          <button
          disabled={loading}
            onClick={() => {
              sendMail();
            }}
            className="h-[40px] w-[100px] flex items-center justify-center text-aquamarine border  border-aquamarine"
          >
            {
              loading?
            
            <div id="loading">
               
            </div>
            :
           <p>Send</p>
          }
          </button>
        </div>

        <div className="lg:flex hidden  lg:w-[50%] w-full p-4 lg:p-0 flex-col justify-center items-center">
          <img
            className="w-[400px] h-[400px]"
            src="../../letsTalk.svg"
            alt=""
          />
         
        </div>
      </main>
    </div>
  );
};

export default Find;
