'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import toast from 'react-hot-toast'
import { VerifyEmail } from './VerifyEmail'

const code = Math.floor(100000 + Math.random() * 900000);


export const ForgetPasswordForm = () => {
    const [isLoading,setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')

    const [tab,setTab] = useState(false)
    const handleSubmit =  (e) => {
        setIsLoading(true);
        try {
            e.preventDefault()
            fetch('http://localhost:4000/send-email', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  to: email,
                  code
                }),
              })
              .then(response => response.json())
              .then(data => console.log(data))
              .catch(error => console.log('Error:', error));
            
           
              toast.success("sended Succesfully")
        } catch (error) {
            toast.error(error.message);
    
        }finally{
            setIsLoading(false);
            setTab(true);
        }
     
   
   
   
    }
   



  return (
    <div className="flex min-h-screen flex-col relative items-center justify-center p-4">
    <div className="flex justify-end  absolute top-2 h-9 right-4 p-8  left-4 gap-4 ">
     <Link 
       href="/sign-in" 
     >
       <Button variant="link" className="text-xl  text-dark-2  ">Sign in</Button>
       
     </Link>
   </div>
   {tab  ? <VerifyEmail code={code} /> :<div className="w-full sm:max-w-[500px]  space-y-6">
  

  <div className="space-y-2 text-center">
    <h1 className="text-2xl font-semibold tracking-tight">
    Forgot Password  
       </h1>
    <p className="text-sm text-muted-foreground">
    Enter your email below to reset your password
    </p>
  </div>

  <form onSubmit={handleSubmit} className="space-y-4">
    <div className="space-y-2 relative">
      <label 
        htmlFor="email" 
        className="text-sm text-dark-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
          Change password
      </label>
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
                className="absolute right-0 top-2 h-full px-3 py-2 hover:bg-transparent"
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

   

    
    {isLoading ?  <Button disabled className="w-full bg-black text-white hover:bg-black/90">
<Loader2 className="animate-spin" />
Please wait
</Button>: <Button type="submit" className="w-full bg-black text-white hover:bg-black/90" 
> Verfiy-email  </Button>}
   
   
  </form>

  
</div> }
 
</div>


)
}
