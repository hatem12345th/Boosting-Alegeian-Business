'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"



export const VerifyEmail = () => {
  const [value, setValue] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value)
    // Handle verification submission
  }
  return (
      <div className="w-full max-w-md space-y-6">
        <div className="flex justify-end  absolute top-2 h-9 right-4 p-8  left-4 gap-4 ">
        <Link 
            href="/sign-in" 
          >
            <Button variant="link" className="text-xl  text-dark-2  ">Sign in</Button>
            
          </Link>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Verify Your Email Address
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter the OTP sent to your email address "user@example.com". If you don't see it, check your spam folder.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mx-auto">
          <div className="space-y-3">
            <label 
              htmlFor="otp" 
              className="text-xl w-full font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
               <InputOTP maxLength={6} 
                 value={value}
                        onChange={(value) => setValue(value)}
               >
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
   
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
    <span className='mt-5'> Email Verification </span>
              
            </label>
           
          </div>

          <Button type="submit" className="w-full bg-black text-white hover:bg-black/90">
            Verify
          </Button>
        </form>
      </div>
    
  )
}
