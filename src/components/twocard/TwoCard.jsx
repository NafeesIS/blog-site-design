import React from "react";
import Container from "../ui/Container";
import { Button } from "../ui/button";
import Image from "next/image";
import banner from "@/images/banner/banner.png";
import robot from "@/images/banner/robot.jpg";
const TwoCard = () => {
  return (
    <Container className="md:mx-[75px] mx-4 my-10">
      <div className="flex md:flex-row flex-col justify-between gap-16">
        <div className="justify-start items-start gap-[30px] h-[500px] md:h-[652px] inline-flex">
          <div className="max-w-[850px] flex-col justify-start items-start inline-flex">
            <Image
              className="h-[200px] md:h-[400px]"
              src={banner}
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
        <div className=" ">
          <Image
            className="h-[200px] md:w-[300px] md:h-[652px] relative"
            src={robot}
            alt="banner"
          />
          <div className="bg-white absolute">
            <p> Do you need any creative service for your business?</p>
            <div className="">
              <Button size="sm" variant="outline" className="rounded-none">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TwoCard;
