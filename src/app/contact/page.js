"use client";
import Heroz from "@/components/Heroz";
import Layout from "@/components/Layout";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConntactTry from "@/components/ConntactTry";
import Map from "./_components/Map";
import Image from "next/image";

function Contact() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;

  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setSubmitting(true);

  // send email
  //   const response = await fetch("/api/contact-us", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   });

  //   const { success, error } = await response.json();

  //   if (success) {
  //     toast.success("Email sent successfully");
  //   } else if (error) {
  //     console.error(error);
  //     toast.error("unable to sent email");
  //   }

  //   setSubmitting(false);
  // };

  // new emaijs

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_l6pkkam", "template_stpplth", form.current, {
        publicKey: "Eo9uSp3q7FYq9TxKF",
      })
      .then(
        () => {
          toast.success("Email sent successfully");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Layout>
      <div className="pt-20">
        <Heroz text={"Contact Us"} />

        <div className="h-full py-8 my-8 w-full flex justify-center items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            // onSubmit={handleSubmit}
            className="h-full w-4/5 md:w-2/4 p-8 rounded-lg border border-red-500"
          >
            <p className="font-bold text-xl text-center py-2">Contact Us</p>
            <div className="flex flex-col mt-6 gap-4">
              <div className="grid grid-cols-4 gap-4">
                <p className="font-bold text-sm col-span-1">Name</p>
                <input
                  type="text"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-300 py-2 px-4 rounded-lg w-full outline-none border-none col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <p className="font-bold text-sm col-span-1">Email</p>
                <input
                  type="text"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-300 py-2 px-4 rounded-lg w-full outline-none border-none col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <p className="font-bold text-sm col-span-1">Message</p>
                <textarea
                  type="text"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="bg-gray-300 py-2 px-4  w-full outline-none border-none col-span-3"
                ></textarea>
              </div>
              <div className="flex items-end">
                <div className="border py-[px] border-red-900">
                  <button
                    onClick={sendEmail}
                    type="submit"
                    className={`text-sm py-2 relative px-4  bg-transparent text-gray-900 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red-950 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100`}
                  >
                    Send
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center py-10">
          <h1 className="text-2xl  font-semibold uppercase">
            Where You can find us
          </h1>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.304294302354!2d31.08864977361718!3d-17.824364683139194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931bb255ddd6075%3A0x39ffae6e040af2f5!2s313%20A5%2C%20Harare!5e0!3m2!1sen!2szw!4v1716977176645!5m2!1sen!2szw"
            width="800"
            height="600"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full h-96 mt-10 object-cover px-10"
          ></iframe>
          {/* <Map /> */}
        </div>
      </div>
      {/* <ConntactTry /> */}
    </Layout>
  );
}

export default Contact;
