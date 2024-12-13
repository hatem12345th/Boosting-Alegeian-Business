'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuthStore } from '@/zustand/AuthStore'
import { Loader2 } from "lucide-react"
import { redirect } from 'next/navigation'
import toast from "react-hot-toast";


export default function LoginForm() {
  const {login,error,isLoading} = useAuthStore()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email,password);
    toast.success("Sign in verified successfully");
    redirect("/");
 
 
 
  }

  return (
    <div className="flex min-h-screen flex-col relative items-center justify-center p-4">
         <div className="flex justify-end  absolute top-2 h-9 right-4 p-8  left-4 gap-4 ">
          <Link 
            href="/sign-up" 
          >
            <Button variant="link" className="text-xl  text-dark-2  ">Sign up</Button>
            
          </Link>
        </div>
      <div className="w-full sm:max-w-[500px]  space-y-6">
       

        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back!
          </h1>
          <p className="text-sm text-muted-foreground">
            Log in to continue finding solutions and growing
            your business partnerships
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label 
              htmlFor="email" 
              className="text-sm text-dark-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label 
              htmlFor="password" 
              className="text-sm font-medium text-dark-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Eye className="h-4 w-4 text-muted-foreground" />
                )}
                <span className="sr-only">
                  {showPassword ? "Hide password" : "Show password"}
                </span>
              </Button>
            </div>
          </div>

          
          {isLoading ?  <Button disabled className="w-full bg-black text-white hover:bg-black/90">
      <Loader2 className="animate-spin" />
      Please wait
    </Button>: <Button type="submit" className="w-full bg-black text-white hover:bg-black/90"> Sign in  </Button>}
         
          {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
          <div className="text-center">
            <Link 
              href="/forgot-password" 
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Forgot Password?
            </Link>
          </div>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          By clicking sign in, you agree to our{' '}
          <Link href="/terms" className="underline hover:text-primary">
            Terms of Service
          </Link>
          {' '}and{' '}
          <Link href="/privacy" className="underline hover:text-primary">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  )
}

