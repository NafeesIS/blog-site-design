"use client";

import Logo from "@/images/logo/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import Container from "../ui/Container";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RxHamburgerMenu } from "react-icons/rx";
import { ContactUs } from "./ContactUs";
import { FaPaperPlane } from "react-icons/fa"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About", path: "/t" },
    { name: "Services", path: "/" },
    { name: "What’s new?", path: "" },
  ];
  const navItemsAll = [
    { name: "About", path: "/" },
    { name: "Services", path: "/" },
    { name: "What’s new?", path: "/" },
    { name: "Community", path: "/" },
    { name: "blog", path: "/" },
  ];

  return (
    <Container className="py-[22px]">
      <div className="flex items-center justify-between gap-x-6">
        {/* large device navbar and nav item */}
        <nav className="hidden gap-x-3 text-xs lg:flex lg:gap-x-6 lg:text-base">
          {navItems?.map((item) => (
            <Link key={item.path} href={item.path}>
              {item.name}
            </Link>
          ))}
        </nav>
        <Link href="/" className="flex items-center pl-3 gap-x-1.5 lg:gap-x-2">
          <Image src={Logo} alt="Logo" />
        </Link>
        {/* small device navbar and nav item */}

        <div className="block lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-transparent border-none">
                <RxHamburgerMenu className="text-black" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-2 w-56">
              <DropdownMenuLabel>About</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Services</DropdownMenuItem>
                <DropdownMenuItem>What’s new?</DropdownMenuItem>
                <DropdownMenuItem>Community</DropdownMenuItem>
                <DropdownMenuItem>Blog</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Contact Us</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="lg:inline-flex items-center justify-center gap-5 hidden">
          <Link href="/">Community</Link>
          <Link href="/">Blog</Link>
          <ContactUs button="Contact Us">
            <div>
              <div className="bg-[#2C2347] py-6 px-5">
                <h6 className=" text-2xl text-white font-semibold">
                  Contact Us
                </h6>
              </div>
              <form className="bg-[#FFFFFF] opacity-70 mt-10 lg:mt-0 w-full p-5 md:p-10 secondary-color">
                <div className="flex flex-col md:flex-row w-full justify-between">
                  <div className="mb-5">
                    <label>
                      <span className="font-semibold lg:text-lg">Name</span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="bg-[#111A28] border placeholder:font-semibold border-gray-500 p-3 rounded-lg w-full"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label>
                      <span className="font-semibold lg:text-lg">Email</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      className="bg-[#111A28] border placeholder:font-semibold border-gray-500 p-3 rounded-lg w-full"
                      required
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label>
                    <span className="font-semibold lg:text-lg">Subject</span>
                  </label>
                  <input
                    name="subject"
                    type="email"
                    placeholder="Subject"
                    className="bg-[#111A28] border placeholder:font-semibold border-gray-500 p-3 rounded-lg w-full"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label>
                    <span className="font-semibold lg:text-lg">Message</span>
                  </label>
                  <textarea
                    name="message"
                    type="text"
                    placeholder="Your Name"
                    className="bg-[#111A28] border placeholder:font-semibold border-gray-500 p-3 rounded-lg w-full h-28 resize-none"
                  />
                </div>
                <button
                  className="my-btn inline-flex items-center gap-3 uppercase"
                  type="submit"
                >
                  <FaPaperPlane /> Send
                </button>
              </form>
            </div>
          </ContactUs>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
