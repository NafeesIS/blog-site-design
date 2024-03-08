import React from "react";
import Container from "../ui/Container";
import { Button } from "../ui/button";
import Image from "next/image";
import mobile from "@/images/banner/mobile.jpg";
import robot from "@/images/banner/robot.jpg";
import { ContactUs } from "../shared/ContactUs";
import { FaPaperPlane } from "react-icons/fa"
const TwoCard = () => {
  return (
    <Container className="md:mx-[75px] mx-4 my-10">
      <div className="flex lg:flex-row flex-col justify-between gap-4">
        <div className="justify-start items-start gap-[30px] h-[500px] md:h-[652px] inline-flex">
          <div className="max-w-[850px] flex-col justify-start items-start inline-flex">
            <Image
              className="h-[200px] md:h-[400px]"
              src={mobile}
              alt="banner"
            />
            <div className="block md:hidden">
              <div className="font-['DM Sans'] mt-2 text-sm flex gap-4 whitespace-nowrap">
                <p>Design & Creative</p>
                <p>10 June 2023</p>
              </div>
              <h3 className="font-['Lora'] my-3 text-xl">
                Lorem ipsum dolor sit amet consectetur
              </h3>
              <p className="font-['Lora'] mb-3 text-sm">
                Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
                consectetur elementum aenean fringilla amet blandit duis. Neque
                habitant odio donec adipiscing etiam lobortis volutpat est...
              </p>
              <Button size="sm" variant="outline" className="rounded-none">
                Read More
              </Button>
            </div>
            <div className="self-stretch hidden h-[39px] pt-[15px] bg-white flex-col justify-start items-start md:flex">
              <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                <div className="text-indigo-950 text-sm font-medium font-['DM Sans'] uppercase leading-normal">
                  Design & Creative
                </div>
                <div className="grow shrink basis-0 text-zinc-500 text-sm font-normal font-['DM Sans'] leading-normal">
                  10 June 2023
                </div>
              </div>
            </div>
            <div className="self-stretch pt-[15px] pb-[30px] bg-white flex-col justify-start items-start gap-5 hidden md:flex">
              <div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
                <div className="self-stretch text-indigo-950 text-[32px] font-medium font-['Lora'] leading-[42px]">
                  Lorem ipsum dolor sit amet consectetur
                </div>
                <div className="self-stretch text-zinc-500 text-lg font-normal font-['DM Sans'] leading-7">
                  Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam
                  consectetur elementum aenean fringilla amet blandit duis.
                  Neque habitant odio donec adipiscing etiam lobortis volutpat
                  est...
                </div>
              </div>
              <Button variant="outline" className="rounded-none">
                Read More
              </Button>
            </div>
          </div>
        </div>
        <div className="max-w-[350px] mx-auto md:w-[350px] md:h-[652px] mt-4 lg:mt-0">
          <Image
            className="h-[400px] relative md:w-[350px] md:h-[652px] "
            src={robot}
            alt="banner"
          />
          <div className="bg-white max-w-[300px] absolute bottom-0 p-4 m-4">
            <p className="text-xl font-semibold mb-2 font-['DM Sans'] "> Do you need any creative service for your business?</p>
            <div className="">
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
        </div>
      </div>
    </Container>
  );
};

export default TwoCard;
