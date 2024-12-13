"use client"

import {
   
    DialogContent,
   
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { Bookmark , Locate, MapPin, Share2 } from "lucide-react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import Image from "next/image";
import { ProblemCard } from "./problem-card";

const categories = [
  "Technology",
  "Education",
  "Health",
  "Business",
  "Entertainment"
];
const keyFeatures = [
  "Customizable dashboards for tracking sales.",
  "Integration with Gmail and QuickBooks.",
  "Automated task reminders for sales teams.",
  ]


  const data = [
    {
      title: "Software Engineer",
      description: "A scalable CRM system tailored to meet the needs of small businesses. Easily manage customer relationships, track sales, and enhance team productivity.",
      priceRange: "$70,000 - $100,000",
      company: "Tech Solutions Inc.",
      postedTime: "2 days ago",
      onViewDetails: () => console.log("Viewing details for Software Engineer"),
      onContact: () => console.log("Contacting Tech Solutions Inc."),
    },
    {
      title: "Product Manager",
      description: "Lead product development teams and define product strategy.",
      priceRange: "$90,000 - $120,000",
      company: "InnovateTech",
      postedTime: "1 week ago",
      onViewDetails: () => console.log("Viewing details for Product Manager"),
      onContact: () => console.log("Contacting InnovateTech"),
    },]

export const Details = ({
  title,
  description,
  priceRange,
  company,
  postedTime,
 
}) => {
    const [tab,setTab] = useState(false)

 
 
    return (
    <div>

<DialogContent className="min-w-full w-full h-[800px] bg-light-1">
        <DialogHeader>
          <DialogTitle>Solution Details</DialogTitle>
        </DialogHeader>
        <div className="flex  gap-4  mx-auto ">
            <div className="w-[1358px] h-[660px] flex flex-col rounded-xl border p-6  bg-white">
                    <nav className="w-full max-h-9 items-center justify-between flex gap-8 ">
                            <h1 className="text-xl font-semibold flex items-center gap-8"> Custom CRM for Small Businesses
                            <Badge variant="destructive" className="w-36 items-center flex justify-center h-4" >Pending Acceptence</Badge>

                            </h1>
                            <p className="flex gap-4"> 
                            <Button  >Contact now</Button>
                            <Button variant="outline" size="icon" className="text-muted-foreground " onClick={() => setTab(!tab)}>
              {tab ? <FaBookmark color="black" /> :<Bookmark />}    

              </Button>                            <Button variant="outline" >  <Share2 /> </Button>

                            </p>    
                           
                        
                         </nav>
                 
                    <main className="flex gap-4 items-center">
                        <Image 
                        src={"https://github.com/shadcn.png"}
                        width={100}
                        height={100}
                        className="rounded-full"

                        />
                  <div className="">
                <span className="flex items-center justify-start  gap-4">    <p className="text-gray-500"> TechGrow Solutions</p>  <p className="bg-dark-2 w-2 h-2 rounded-full"> </p>  <h3  className="flex gap-2"> <MapPin /> Fisdis, Batna, Algeria</h3>   </span>
                      <ul className="flex gap-2 mt-1">
                      {categories.map((item,index) => (
                          <li>
                              <Badge variant="outline"> {item} </Badge>
                          </li>
                      ))}
                      </ul>
                      
                  </div>

                    </main>
                        <hr className="mt-4 " />


                      <h1 className="font-medium text-xl py-6 leading-3 text-dark-2">Solution discription</h1>
             <p className="font-normal text-lg leading-7 text-[#71717A] ">Our small business requires a customized CRM system to help us manage customer relationships, track sales activities, 
              and analyze performance data. The system must be user-friendly, scalable, and integrate with existing tools like email and accounting software. 
              Key features include contact management, sales pipeline tracking, and reporting dashboards.</p>

              <h1 className="font-medium text-xl  py-6 leading-3 text-dark-2">Key Features</h1>
                        <ul className="px-4">
                          {keyFeatures.map((item,index) => ( 
                            <li className="text-[#71717A]  font-normal text-lg list-disc 	">
                              {item}
                            </li>

                          ))}

                        </ul>
                        <h1 className="font-medium text-xl  py-6 leading-3 text-dark-2">Price Range</h1>

                        <p className="font-normal text-lg leading-7 text-[#71717A] "> DZD 120,000 - DZD 150,000. </p>
                        <h1 className="font-medium text-xl  py-6 leading-3 text-dark-2">Proposed Timeline</h1>
                        <p className="font-normal text-lg leading-7 text-[#71717A] ">                         2 months.
                        </p>



            </div>

            <div className="w-96   h-[660px] rounded-xl border p-6 bg-white">

            {data?.map((item, index) => (
        <ProblemCard
          key={index} // Added a key for React lists
          title={item.title}
          description={item.description}
          priceRange={item.priceRange}
          company={item.company}
          postedTime={item.postedTime}
          onViewDetails={false}
        />
      ))}
            </div>

      
       </div>
      </DialogContent>
             
    </div>
  )
}
