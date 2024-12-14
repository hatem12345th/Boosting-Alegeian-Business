"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bookmark, LogOut, Settings } from 'lucide-react'
import { usePathname } from "next/navigation";
import { navbarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";

import { Bell, Mail, Search, UserCircle } from "lucide-react";

const name = "Problem Poster"
const email = "m@example.como"
const initial = "P";


export const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <nav className="w-full px-6 sm:px-10 lg:px-32 h-16  bg-white items-center flex">
      <div className="flex justify-between items-center w-full">
        {/* Logo Section */}
        <Image
          src={"/Main.png"}
          width={172.38}
          height={40}
          className="w-32 sm:w-[172.38px] h-auto"
          alt="Logo"
        />

        {/* Navigation Links */}
        <ul className="hidden lg:flex gap-8">
          {navbarLinks.map((item, index) => (
            <Link
              href={`${item.route}`}
              key={index}
              className={`mt-1 text-sm ${
                pathname === item.route
                  ? "text-black font-black"
                  : "text-[#71717A]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </ul>

        {/* Buttons and Search */}
        <div className="hidden sm:flex items-center gap-4">
          <Button variant="outline" size="icon" className="text-black">
            <Mail className="h-6 w-6 sm:h-8 sm:w-8" />
            <span className="sr-only">Open messages</span>
          </Button>
          <Button variant="outline" size="icon"  className={`mt-1 text-sm ${
                pathname === "/notification"
                  ? "text-white bg-black font-black"
                  : "text-black"
              }`}>
            <Link href={"/notification"} >
            <Bell className="h-6 w-6 sm:h-8 sm:w-8" />
            <span className="sr-only">Open notifications</span>
            </Link>
           
          </Button> 
          <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar>
          <AvatarFallback className="bg-gray-100 text-gray-900">
            {initial}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="px-2 py-1.5 space-y-1">
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-muted-foreground">{email}</p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => {}} className="gap-2 cursor-pointer">

          <Bookmark className="w-4 h-4" />
          <span>Saves</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {}} className="gap-2 cursor-pointer">
        <Link href={"/settings"} className="flex gap-2" >
          <Settings className="w-4 h-4" />
          <span>Settings</span>
          </Link>

        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          onClick={() => {localStorage.removeItem("user")}} 
          className="gap-2 cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50"
        >
          <LogOut className="w-4 h-4" />
          <span >Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

          
          <form className="hidden md:flex items-center">
            <Input
              type="text"
              placeholder="Search"
              className="w-40 md:w-60 lg:w-80"
            />
          </form>
        </div>

        {/* Mobile Menu Button (if needed) */}
        <div className="flex lg:hidden">
          {/* Add a menu toggle icon here for mobile */}
          <Button variant="ghost" className="text-black">
            <Search className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};