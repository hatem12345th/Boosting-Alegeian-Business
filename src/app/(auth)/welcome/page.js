import Image from "next/image"
import Logoicons from "../../../../public/White 1.svg"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Welcome = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center  ">
    <div className="Bg hidden md:block w-1/2 h-screen bg-cover">
       <div className=" w-full h-screen bg-ring-80 flex flex-col justify-around items-center"  >
         <div className=" items-center justify-center  p-4 " >
           <Image
           priority
           src={Logoicons}
           height={64}
           width={400}
           alt="Follow us on Twitter"
         />           </div>
         <h1 className="text-white font-normal px-10 text-xl w-[90%] py-10 leading-7   ">
           "Build Connections, Solve Problems, Grow Together.Discover tailored solutions for your business challenges and forge   meaningful partnerships today!"

         </h1>

       </div>



     </div>

     <div className="sm:w-1/2   flex flex-col">

     <div className="w-full max-w-md mx-auto p-6 space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">You&apos;re All Set!</h1>
        <p className="text-sm text-muted-foreground">
          You&apos;re ready to begin! Let&apos;s unlock new opportunities and grow your business.
        </p>
      </div>

        <Link href={"/"}>
        
        <Button 
        className="w-full bg-black hover:bg-black/90" 
      >
        Get Started
      </Button>
         </Link>
     
    </div>


     </div>














   </main>
  )
}

export default Welcome