import Image from "next/image";
import React from "react";
import mobile from "@/images/banner/mobile.jpg";
import { FaPaperPlane } from "react-icons/fa"
import { ContactUs } from "../shared/ContactUs";
const Overview = () => {
  return (
    <div className="relative my-24 mx-4 md:mx-[75px]">
      <Image
        className="h-[576px] object-cover w-full"
        src={mobile}
        alt="chef-service"
      />
      <div className="bg-white text-white bg-opacity-35 absolute top-28 bottom-28 left-28 right-28 flex flex-col justify-center items-center p-4">
        <h3 className="text-xl lg:text-4xl tex mb-4 tracking-wide uppercase">
          Creative team, intuitive solution
        </h3>
        <p className="text-center text-sm lg:text-base mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione <br /> dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil <br /> iusto ducimus incidunt quibusdam nemo.
        </p>
        <ContactUs button='Lets Talk'>
        <div>
         <div className="bg-[#2C2347] py-6 px-5">
         <h6 className=" text-2xl text-white font-semibold">Contact Us</h6>
         </div>
        <form  className='bg-[#FFFFFF] opacity-70 mt-10 lg:mt-0 w-full p-5 md:p-10 secondary-color' >
               <div className="flex flex-col md:flex-row w-full justify-between">
               <div className="mb-5">
                    <label>
                        <span className="font-semibold lg:text-lg">Name</span>
                    </label>
                    <input name="name" type="text" placeholder="Your Name" className="bg-[#111A28] border placeholder:font-semibold border-gray-500 p-3 rounded-lg w-full" required />
                </div>
                <div className="mb-5">
                    <label>
                        <span className="font-semibold lg:text-lg">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="Your Email" className="bg-[#111A28] border placeholder:font-semibold border-gray-500 p-3 rounded-lg w-full" required />
                </div>
               </div>
                <div className="mb-5">
                    <label>
                        <span className="font-semibold lg:text-lg">Subject</span>
                    </label>
                    <input name="subject" type="email" placeholder="Subject" className="bg-[#111A28] border placeholder:font-semibold border-gray-500 p-3 rounded-lg w-full" required />
                </div>
                <div className="mb-5">
                    <label>
                        <span className="font-semibold lg:text-lg">Message</span>
                    </label>
                    <textarea name="message" type="text" placeholder="Your Name" className="bg-[#111A28] border placeholder:font-semibold border-gray-500 p-3 rounded-lg w-full h-28 resize-none" />
                </div>
                <button className='my-btn bg-[#2C2347] px-4 py-2 text-white inline-flex items-center gap-3 uppercase' type="submit"><FaPaperPlane /> Send</button>
            </form>
        </div>
        </ContactUs>
      </div>
    </div>
  );
};

export default Overview;
