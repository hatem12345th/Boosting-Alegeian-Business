"use client";

import { usePathname } from "next/navigation";
import { navbarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";

import { Bell, Mail, Search, UserCircle } from "lucide-react";

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
          <Button variant="outline" size="icon" className="text-black">
            <Bell className="h-6 w-6 sm:h-8 sm:w-8" />
            <span className="sr-only">Open notifications</span>
          </Button>
          <Button variant="outline" size="icon" className="text-black">
            <UserCircle className="h-6 w-6 sm:h-8 sm:w-8" />
            <span className="sr-only">Open user menu</span>
          </Button>
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