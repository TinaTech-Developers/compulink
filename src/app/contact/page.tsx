import React from "react";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhoneFlip } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

function Contact() {
  return (
    <div className="py-36">
      <div className="flex items-center justify-center w-full h-full ">
        <Image
          src={
            "https://thumbs.dreamstime.com/b/contact-us-banner-template-ribbon-label-sign-177643619.jpg"
          }
          alt="Contact Us"
          height={500}
          width={500}
          className=""
        />
        <h1 className="absolute  ">
          <Link href={"/contact"}>
            <Image
              src={
                "https://i.pinimg.com/originals/20/b6/86/20b6860e2f5560e6fae086a51051bdbc.gif"
              }
              alt="Contact"
              height={100}
              width={100}
              className="rounded-full"
            />
          </Link>
        </h1>
      </div>

      <div className="bg-[#202A44] py-10">
        <h1 className="text-center text-orange-900 font-semibold text-2xl py-8">
          Get in touch with us !
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div>
            <div className="flex items-center justify-center py-3 ">
              <BsPhoneFlip size="3rem" color="#E65100" />
            </div>
            <h3 className="text-center text-orange-900 pb-3 text-xl font-bold uppercase">
              phone
            </h3>
            <p className="text-white text-center p-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              necessitatibus cum quae cumque voluptatibus voluptates sed quis
              veritatis eius. Facilis eum sed illo animi quia dolorum quam ea?
              Ratione, incidunt?
            </p>
          </div>
          <div className="text-center p-4 divide-x-2 divide-orange-900">
            <div></div>
            <div className="flex items-center justify-center py-3 ">
              <AiOutlineMail size="3rem" color="#E65100" />
            </div>
            <h3 className="text-center text-orange-900 pb-3 text-xl font-bold uppercase">
              Email
            </h3>
            <p className="text-white text-center px-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              necessitatibus cum quae cumque voluptatibus voluptates sed quis
              veritatis eius. Facilis eum sed illo animi quia dolorum quam ea?
              Ratione, incidunt?
            </p>
          </div>
          <div className="text-center p-4 divide-x-2 divide-orange-900">
            <div></div>
            <div className="flex items-center justify-center py-3 ">
              <MdLocationPin size="3rem" color="#E65100" />
            </div>
            <h3 className="text-center text-orange-900 pb-3 text-xl font-bold uppercase">
              Address
            </h3>
            <p className="text-white text-center px-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              necessitatibus cum quae cumque voluptatibus voluptates sed quis
              veritatis eius. Facilis eum sed illo animi quia dolorum quam ea?
              Ratione, incidunt?
            </p>
          </div>
        </div>
      </div>
      <div className="h-full py-8 my-8 w-full flex justify-center items-center">
        <div className="h-full w-2/3 md:w-2/4 p-8 rounded-lg flex items-center justify-center bg-orange-200">
          <div className="flex flex-col mt-6 gap-4">
            <label className="text-3xl font-mono font-bold uppercase">
              Contact Us
            </label>
            <div className="grid grid-cols-4 gap-4">
              <label>Full Name</label>
              <input
                className="py-2 col-span-3 rounded-lg bg-gray-300"
                type="text"
                name="name"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <label>Email</label>
              <input
                className="py-2 col-span-3 rounded-lg bg-gray-300"
                type="email"
                name="email"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <label>Message</label>
              <textarea
                rows={5}
                className="bg-gray-300 py-2 px-4  w-full outline-none border-none col-span-3 rounded-lg"
              ></textarea>
            </div>
            <button className="flex justify-end ">
              <h1 className="bg-orange-100 py-2 px-4 rounded-lg hover:text-white hover:bg-blue-600">
                Send
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
