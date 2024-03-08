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
  } from '@/components/ui/dropdown-menu';
  import { RxHamburgerMenu } from 'react-icons/rx';

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
            
                   <div className='block lg:hidden'>
                   <DropdownMenu>
                     <DropdownMenuTrigger asChild>
                       <Button variant='outline' className='bg-transparent border-none'>
                         <RxHamburgerMenu className='text-black' />
                       </Button>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent className='mr-2 w-56'>
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
                        <Button className="rounded-none">Contact Us</Button>
                    </div>
                   
             
            </div>
        </Container>
    );
};

export default Navbar;
