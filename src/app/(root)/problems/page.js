"use client"


import AddProblemForm from '@/components/add-problem-form';
import { Button } from '@/components/ui/button';
import {  CirclePlus, Grid3x3, LayoutGrid } from 'lucide-react';
import { useState } from 'react';

const data = [
  {
    title: "Machine Learning Engineer",
    description: "Design and implement machine learning models to solve real-world problems.",
    priceRange: "$95,000 - $130,000",
    company: "AI Labs",
    postedTime: "3 days ago",
    onViewDetails: () => console.log("Viewing details for Machine Learning Engineer"),
    onContact: () => console.log("Contacting AI Labs"),
  },
  {
    title: "Full Stack Developer",
    description: "Develop robust front-end and back-end systems for enterprise solutions.",
    priceRange: "$75,000 - $105,000",
    company: "WebWorks Inc.",
    postedTime: "2 days ago",
    onViewDetails: () => console.log("Viewing details for Full Stack Developer"),
    onContact: () => console.log("Contacting WebWorks Inc."),
  },
  {
    title: "Cybersecurity Specialist",
    description: "Implement security measures to protect data and systems from threats.",
    priceRange: "$85,000 - $120,000",
    company: "SecureTech",
    postedTime: "1 week ago",
    onViewDetails: () => console.log("Viewing details for Cybersecurity Specialist"),
    onContact: () => console.log("Contacting SecureTech"),
  },
  {
    title: "Marketing Manager",
    description: "Develop and execute marketing strategies to drive business growth.",
    priceRange: "$65,000 - $95,000",
    company: "MarketPro Agency",
    postedTime: "5 days ago",
    onViewDetails: () => console.log("Viewing details for Marketing Manager"),
    onContact: () => console.log("Contacting MarketPro Agency"),
  },
  {
    title: "UI/UX Designer",
    description: "Create user-friendly interfaces and enhance the overall user experience.",
    priceRange: "$60,000 - $85,000",
    company: "Design Innovations",
    postedTime: "2 hours ago",
    onViewDetails: () => console.log("Viewing details for UI/UX Designer"),
    onContact: () => console.log("Contacting Design Innovations"),
  },
  {
    title: "Network Administrator",
    description: "Manage and maintain company network systems and hardware.",
    priceRange: "$55,000 - $75,000",
    company: "NetSecure Solutions",
    postedTime: "4 days ago",
    onViewDetails: () => console.log("Viewing details for Network Administrator"),
    onContact: () => console.log("Contacting NetSecure Solutions"),
  },
  {
    title: "Content Strategist",
    description: "Develop and manage content strategies to improve brand presence.",
    priceRange: "$50,000 - $70,000",
    company: "Content Creators Co.",
    postedTime: "6 days ago",
    onViewDetails: () => console.log("Viewing details for Content Strategist"),
    onContact: () => console.log("Contacting Content Creators Co."),
  },
  {
    title: "Mobile App Developer",
    description: "Build native and cross-platform mobile applications.",
    priceRange: "$80,000 - $110,000",
    company: "AppBuilders",
    postedTime: "2 days ago",
    onViewDetails: () => console.log("Viewing details for Mobile App Developer"),
    onContact: () => console.log("Contacting AppBuilders"),
  },
  {
    title: "Data Scientist",
    description: "Utilize advanced analytics and machine learning to uncover insights.",
    priceRange: "$100,000 - $150,000",
    company: "Insight Data",
    postedTime: "1 day ago",
    onViewDetails: () => console.log("Viewing details for Data Scientist"),
    onContact: () => console.log("Contacting Insight Data"),
  },
  {
    title: "HR Specialist",
    description: "Handle recruitment and employee engagement initiatives.",
    priceRange: "$55,000 - $80,000",
    company: "PeopleFirst HR",
    postedTime: "3 days ago",
    onViewDetails: () => console.log("Viewing details for HR Specialist"),
    onContact: () => console.log("Contacting PeopleFirst HR"),
  },
  {
    title: "Cloud Architect",
    description: "Design scalable and secure cloud solutions for enterprise clients.",
    priceRange: "$110,000 - $150,000",
    company: "CloudPro",
    postedTime: "2 weeks ago",
    onViewDetails: () => console.log("Viewing details for Cloud Architect"),
    onContact: () => console.log("Contacting CloudPro"),
  },
  {
    title: "AI Researcher",
    description: "Conduct research to advance artificial intelligence technologies.",
    priceRange: "$120,000 - $180,000",
    company: "NeuralTech Labs",
    postedTime: "3 weeks ago",
    onViewDetails: () => console.log("Viewing details for AI Researcher"),
    onContact: () => console.log("Contacting NeuralTech Labs"),
  },
  {
    title: "Web Designer",
    description: "Create visually appealing and responsive websites.",
    priceRange: "$50,000 - $75,000",
    company: "Creative Web Agency",
    postedTime: "4 days ago",
    onViewDetails: () => console.log("Viewing details for Web Designer"),
    onContact: () => console.log("Contacting Creative Web Agency"),
  },
  {
    title: "System Administrator",
    description: "Manage IT systems and troubleshoot technical issues.",
    priceRange: "$60,000 - $85,000",
    company: "SysOps Inc.",
    postedTime: "5 hours ago",
    onViewDetails: () => console.log("Viewing details for System Administrator"),
    onContact: () => console.log("Contacting SysOps Inc."),
  },
  {
    title: "Project Manager",
    description: "Oversee project timelines and deliverables to ensure success.",
    priceRange: "$75,000 - $110,000",
    company: "PM Experts",
    postedTime: "1 week ago",
    onViewDetails: () => console.log("Viewing details for Project Manager"),
    onContact: () => console.log("Contacting PM Experts"),
  },
  {
    title: "Game Developer",
    description: "Design and develop interactive video games for multiple platforms.",
    priceRange: "$70,000 - $95,000",
    company: "GameWorld Studios",
    postedTime: "6 days ago",
    onViewDetails: () => console.log("Viewing details for Game Developer"),
    onContact: () => console.log("Contacting GameWorld Studios"),
  },
  {
    title: "SEO Specialist",
    description: "Optimize websites to improve search engine rankings.",
    priceRange: "$45,000 - $65,000",
    company: "SEO Gurus",
    postedTime: "2 days ago",
    onViewDetails: () => console.log("Viewing details for SEO Specialist"),
    onContact: () => console.log("Contacting SEO Gurus"),
  },
  {
    title: "Technical Writer",
    description: "Create clear and concise technical documentation.",
    priceRange: "$50,000 - $75,000",
    company: "DocuTech",
    postedTime: "4 days ago",
    onViewDetails: () => console.log("Viewing details for Technical Writer"),
    onContact: () => console.log("Contacting DocuTech"),
  },
  {
    title: "AI Engineer",
    description: "Develop and deploy AI systems to enhance automation.",
    priceRange: "$100,000 - $140,000",
    company: "FutureTech AI",
    postedTime: "5 days ago",
    onViewDetails: () => console.log("Viewing details for AI Engineer"),
    onContact: () => console.log("Contacting FutureTech AI"),
  },
  {
    title: "Social Media Manager",
    description: "Manage and grow brand presence across social media platforms.",
    priceRange: "$45,000 - $65,000",
    company: "SocialHub Agency",
    postedTime: "1 week ago",
    onViewDetails: () => console.log("Viewing details for Social Media Manager"),
    onContact: () => console.log("Contacting SocialHub Agency"),
  }
];


const Customer = () => {
  const [tab,setTab] = useState(false);
  const [open,setOpen] = useState(false);
 
 
  return (
    <main className="w-full flex flex-col items-center p-6 ">
      {/* Main Header */}
      <h1 className="font-semibold w-full px-36 text-primary text-2xl py-4 flex justify-between  "  
       > 
        Problems 
        <span className='flex gap-1'>
        {!tab ? ( <Button variant="outline"  onClick={() => setTab(!tab)}>    <Grid3x3 />  </Button>) :( <Button  onClick={() => setTab(!tab)}>      <Grid3x3 />  </Button> ) }  
        {tab ? ( <Button variant="outline" onClick={() => setTab(!tab)} >    <LayoutGrid />  </Button>) :( <Button onClick={() => setTab(!tab)} >    <LayoutGrid /> </Button> ) } 
        <Button className="" onClick={() => {setOpen(!open)}} >  <CirclePlus /> New Problem </Button>
      <AddProblemForm  open={open} onOpenChange={setOpen} />
        </span>


     

      </h1>
     
      {/* Cards Container */}
      <div className="flex flex-wrap gap-6 justify-center">
        {data?.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col bg-card shadow-lg rounded-lg p-4 ${tab ? "w-[800px]":"w-[600px]" }  hover:shadow-xl transition-shadow duration-200`}
          >
            <h2 className="font-semibold text-lg mb-2 text-card-foreground">{item.title}</h2>
            <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
            <p className=" font-medium mb-2">{item.priceRange}</p>
            <p className="text-muted-foreground text-xs mb-4">Posted by {item.company} - {item.postedTime}</p>
            <div className="flex justify-between">
              <button
               
                className="px-4 py-2 bg-primary text-primary-foreground text-sm rounded hover:bg-primary-hover"
              >
                View Details
              </button>
              <button
           
                className="px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded hover:bg-secondary-hover"
              >
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Customer;
