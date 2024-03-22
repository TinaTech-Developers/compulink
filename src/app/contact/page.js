"use client";
import Heroz from "@/components/Heroz";
import Layout from "@/components/Layout";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // send email
    const response = await fetch("/api/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const { success, error } = await response.json();

    if (success) {
      toast.success("Email sent successfully");
    } else if (error) {
      console.error(error);
      toast.error("unable to sent email");
    }

    setSubmitting(false);
  };

  return (
    <Layout>
      <div className="pt-20">
        <Heroz text={"Contact Us"} />

        <div className="h-full py-8 my-8 w-full flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="h-full w-4/5 md:w-2/4 p-8 rounded-lg border border-red-500"
          >
            <p className="font-bold text-xl text-center py-2">Contact Us</p>
            <div className="flex flex-col mt-6 gap-4">
              <div className="grid grid-cols-4 gap-4">
                <p className="font-bold text-sm col-span-1">Name</p>
                <input
                  type="text"
                  name="name"
                  // value={name}
                  onChange={handleInputChange}
                  className="bg-gray-300 py-2 px-4 rounded-lg w-full outline-none border-none col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <p className="font-bold text-sm col-span-1">Email</p>
                <input
                  type="text"
                  name="email"
                  // value={email}
                  onChange={handleInputChange}
                  className="bg-gray-300 py-2 px-4 rounded-lg w-full outline-none border-none col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <p className="font-bold text-sm col-span-1">Message</p>
                <textarea
                  type="text"
                  name="message"
                  // value={message}
                  onChange={handleInputChange}
                  rows={5}
                  className="bg-gray-300 py-2 px-4  w-full outline-none border-none col-span-3"
                ></textarea>
              </div>
              <div className="flex items-end">
                <div className="border py-[px] border-red-900">
                  <button
                    onClick={handleSubmit}
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
          <h1 className="text-2xl text-blue-600 font-semibold uppercase">
            We You Can Find Us
          </h1>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
