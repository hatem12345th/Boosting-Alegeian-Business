"use client"

import { usePathname } from 'next/navigation'
import { navbarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

import { Input } from './ui/input'
import { Button } from "@/components/ui/button"

import { Bell, Mail, Search, UserCircle } from 'lucide-react'

export const Navbar = () => {
  const pathname = usePathname()
  
  return (
  <nav className='w-full h-16 bg-white items-center  flex'>
      <div className='px-4 flex gap-16 justify-center items-center' >
          <Image 
          src={"/Main.png"} 
          width={172.38}
          height={40}
/>
    <ul className='gap-8 w-80 px-20  transition-all duration-200 flex items-center'>
        {navbarLinks.map((item,index) => (
          <Link 
            href={`${item.route}`}
            key={index}
            className={`mt-1 text-sm ${pathname === item.route ? " text-black font-black  " :"text-[#71717A] "}`}
          >
            {item.label}
          </Link>
        ) )}
    </ul>
        
   
      </div>
      <div className="mx-auto justify-between flex items-center gap-4">
          <form className="hidden md:block px-80 flex-1 md:flex-none">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-[500px] pl-8 bg-white"
              />
            </div>
          </form>
          <Button
            variant="outline"
            size="icon"
            className="text-black "
          >
            <Mail className="h-10 w-10" />
            <span className="sr-only">Open messages</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="text-black"
          >
            <Bell className="h-10 w-10" />
            <span className="sr-only">Open notifications</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="text-black"
          >
            <UserCircle className="h-10 w-10" />
            <span className="sr-only">Open user menu</span>
          </Button>
        </div> 
    
    
    
    
    
    
    
    
    
    
</nav>
  )
}
