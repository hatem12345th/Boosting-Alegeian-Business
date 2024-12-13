import Image from "next/image"
import Logoicons from "../../../../public/White 1.svg"


import LoginForm from "@/components/LoginForm"


const SignIn = () => {
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

        <LoginForm />



      </div>














    </main>
  )
}

export default SignIn