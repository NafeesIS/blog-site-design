"use client";

import Logo from "@/images/logo/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import Container from "../ui/Container";
import { Button } from "../ui/button";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "What’s new?", path: "whats-new" },
    ];

    return (
        <Container className="py-[22px]">
            <div className="flex items-center justify-between gap-x-6">
                {/* large device navbar and nav item */}
                <nav className="hidden gap-x-3 text-xs md:flex lg:gap-x-6 lg:text-base">
                    {navItems?.map((item) => (
                        <Link key={item.path} href={item.path}>
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <Link href="/" className="flex items-center gap-x-1.5 lg:gap-x-2">
                    <Image src={Logo} alt="Logo" />
                </Link>
                {/* small device navbar and nav item */}
                {isMenuOpen && (
                    <div className="nav-container w-fulls absolute left-0 top-20 z-10 transition-all">
                        <div className="rounded border border-secondary bg-bgSecondary p-4">
                            {/* Mobile Nav Items Section */}
                            <nav className="flex flex-col gap-y-2.5 text-sm">
                                {navItems?.map((item) => (
                                    <Link key={item.path} href={item.path}>
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>
                )}
                <div>
                    <div className="inline-flex items-center justify-center gap-5">
                        <Link href="/">Community</Link>
                        <Link href="/">Blog</Link>
                        <Button className="rounded-none">Contact Us</Button>
                    </div>
                    <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-4 md:hidden">
                        {/* dropdown for mobile devices */}
                        <span>{isMenuOpen === true ? <HiXMark className="h-6 w-6 cursor-pointer" /> : <HiBars3BottomRight className="h-6 w-6 cursor-pointer" />}</span>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;
