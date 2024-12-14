'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuthStore } from '@/zustand/AuthStore'
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import toast from 'react-hot-toast'
import { redirect } from 'next/navigation'


export const SignupForm = () => {
  const [tab,setTab] = useState(true);
  const [selectedRole, setSelectedRole] = useState('');
  const {uprofile,signup,user,error,isLoading} = useAuthStore();
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const handleClick = async(e) => {
   // e.preventDefault();
  //  await uprofile(selectedRole,user.userID);
   // toast.success("User was 100% created");
    redirect('/welcome');
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.password == formData.confirmPassword ) 
       { 
        const username =  formData.lastName+formData.firstName ;
    const { confirmPassword,lastName,firstName, ...formDataWithoutConfirmPassword } = formData;
        await signup(formData.email,formData.password,username,selectedRole);
       toast.success("User was 50% created")
        setTab(!tab);
} 
        else{
        return alert("password not eq")

    }
   


  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
            <div className="flex justify-end  absolute top-2 h-9 right-4 p-8  left-4 gap-4 ">
        <Link 
            href="/sign-in" 
          >
            <Button variant="link" className="text-xl  text-dark-2  ">Sign in</Button>
            
          </Link>
        </div>
            {tab ?   <div className="w-full max-w-[500px] space-y-6">
      

        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label 
                htmlFor="firstName" 
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                First Name
              </label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Anis"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label 
                htmlFor="lastName" 
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Last Name
              </label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Rasoul"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label 
              htmlFor="email" 
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label 
              htmlFor="password" 
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
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

          <div className="space-y-2">
            <label 
              htmlFor="confirmPassword" 
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Confirm Password
            </label>
            <div className="relative">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Eye className="h-4 w-4 text-muted-foreground" />
                )}
                <span className="sr-only">
                  {showConfirmPassword ? "Hide password" : "Show password"}
                </span>
              </Button>
            </div>
          </div>    

          {isLoading ?  <Button disabled className="w-full bg-black text-white hover:bg-black/90">
      <Loader2 className="animate-spin" />
      Please wait
    </Button>: <Button type="submit" className="w-full bg-black text-white hover:bg-black/90"> Sign up  </Button>}
        </form>
        {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}

        <p className="text-center text-sm text-muted-foreground">
          By clicking sign up, you agree to our{' '}
          <Link href="/terms" className="underline hover:text-primary">
            Terms of Service
          </Link>
          {' '}and{' '}
          <Link href="/privacy" className="underline hover:text-primary">
            Privacy Policy
          </Link>
        </p>
      </div> :  <>
      <div className="w-full max-w-md mx-auto p-6 space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Select Your Role</h1>
        <p className="text-sm text-muted-foreground">
          Pick the role that aligns with your goals and start connecting with businesses today.
        </p>
      </div>
              <form onSubmit={handleSubmit} className="space-y-4">

      <div className="space-y-4">
        <Select onValueChange={setSelectedRole}>
          <SelectTrigger>
            <SelectValue placeholder="Empty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="problem-poster">Problem Poster</SelectItem>
            <SelectItem value="solution-provider">Solution Provider</SelectItem>
          </SelectContent>
        </Select>

        <Button 
          className="w-full" 
          disabled={!selectedRole}
          onClick={handleClick}
        >
          Continue
        </Button>
      </div>
      </form>
    </div>
      
      </>}   

     
    </div>
  )
}

