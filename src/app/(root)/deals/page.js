"use client"

import Image from "next/image"

import { Button } from '@/components/ui/button';
import {  Grid3x3, LayoutGrid, Wallet } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

import { useState } from 'react';

const datas = [
  {
    title: "Software Engineer",
    description: "hr@techsolutions.com", // Changed description to email
    priceRange: "$70,000 - $100,000",
    company: "Tech Solutions Inc.",
    postedTime: "2 days ago",
    solution: {
      steps: ["Apply online", "Schedule an interview", "Complete technical assessment"],
      contact: "hr@techsolutions.com",
    },
    accepted: false, // Added accepted status
  },
  {
    title: "Product Manager",
    description: "careers@innovatetech.com", // Changed description to email
    priceRange: "$90,000 - $120,000",
    company: "InnovateTech",
    postedTime: "1 week ago",
    solution: {
      steps: ["Submit resume", "Attend initial screening", "Participate in leadership round"],
      contact: "careers@innovatetech.com",
    },
    accepted: true, // Added accepted status
  },
  {
    title: "Graphic Designer",
    description: "design@designprostudio.com", // Changed description to email
    priceRange: "$50,000 - $70,000",
    company: "DesignPro Studio",
    postedTime: "3 days ago",
    solution: {
      steps: ["Share portfolio", "Attend design interview", "Complete design task"],
      contact: "design@designprostudio.com",
    },
    accepted: false, // Added accepted status
  },
  {
    title: "Data Analyst",
    description: "dataworks-careers@dataworks.com", // Changed description to email
    priceRange: "$60,000 - $85,000",
    company: "DataWorks Co.",
    postedTime: "5 hours ago",
    solution: {
      steps: ["Submit application", "Complete data analysis challenge", "Attend final interview"],
      contact: "dataworks-careers@dataworks.com",
    },
    accepted: true, // Added accepted status
  },
  {
    title: "DevOps Engineer",
    description: "jobs@cloudops.com", // Changed description to email
    priceRange: "$80,000 - $110,000",
    company: "CloudOps Systems",
    postedTime: "4 days ago",
    solution: {
      steps: ["Upload resume", "Perform a system design test", "Discuss with DevOps team"],
      contact: "jobs@cloudops.com",
    },
    accepted: false, // Added accepted status
  },
];




const Deals = () => {
  const [tab,setTab] = useState(false);
  const [data,setData] = useState(datas);
  const handleAccept = (index) => {
    const updatedData = [...data];
    updatedData[index].accepted = true; // Set accepted to true
    setData(updatedData); // Update the state with the new data
  };
 
 
  return (
    <main className="w-full flex flex-col items-center p-6 ">
      {/* Main Header */}
      <h1 className="font-semibold w-full px-36 text-primary text-2xl py-4 flex justify-between  "  
       > 
        Problems 
        <span className='flex gap-1'>
        {!tab ? ( <Button variant="outline"  onClick={() => setTab(!tab)}>    <Grid3x3 />  </Button>) :( <Button  onClick={() => setTab(!tab)}>      <Grid3x3 />  </Button> ) }  
        {tab ? ( <Button variant="outline" onClick={() => setTab(!tab)} >    <LayoutGrid />  </Button>) :( <Button onClick={() => setTab(!tab)} >    <LayoutGrid /> </Button> ) } 
        </span>


     

      </h1>
     
      {/* Cards Container */}
      <div className="flex flex-wrap gap-6 justify-center">
  {data?.map((item, index) => (
    <Card className={` ${tab ? "max-w-xl ":"max-w-2xl"} w-full`} key={index}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8">
              <Image
                src={`${index %2 == 1 ?"/Avatar Image (1).png" :"/Avatar Image.png"}`}
                alt="Avatar"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium">{item.company}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </div>
          <Button
variant="secondary"            
            onClick={() => {}}
            className="text-sm"
          >
            View Details
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="space-y-2">
          <div>
            <span className="text-muted-foreground">Solution for: </span>
            <span className="font-medium">
              {/* Check if item.solution is a string */}
              {typeof item.solution === "string" ? item.solution : "No solution available"}
            </span>
          </div>
          <div>
            <span className="text-muted-foreground">Price Range: </span>
            <span>{item.priceRange}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-4 pt-0">
        <div className="text-sm text-muted-foreground">{item.timeAgo}</div>
       {item.accepted ? <> <Button className="w-full"> <Wallet /> Pay now</Button></>: <div className="flex gap-2 flex-1">
          <Button
            variant="destructive"
            className="flex-1"
            onClick={() => {}}
          >
            Decline
          </Button>
          <Button
            variant="default"
            className="flex-1 bg-green-600 hover:bg-green-700"
            onClick={() => handleAccept(index)}           >
            Accept
          </Button>
        </div> }
        
       
      </CardFooter>
    </Card>
  ))}
</div>

    </main>
  );
};

export default Deals;