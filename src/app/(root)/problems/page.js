import { AIProblemSolver } from '@/components/ai-problem-solver';
import { FilterSidebar } from '@/components/filer-sidebar';
import { ProblemCard } from '@/components/problem-card';
import { StatesDemo } from '@/components/StatesDemo';
import React from 'react';

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
  },
  {
    title: "Graphic Designer",
    description: "Create visual concepts to communicate ideas and branding.",
    priceRange: "$50,000 - $70,000",
    company: "DesignPro Studio",
    postedTime: "3 days ago",
    onViewDetails: () => console.log("Viewing details for Graphic Designer"),
    onContact: () => console.log("Contacting DesignPro Studio"),
  },
  {
    title: "Data Analyst",
    description: "Analyze data to identify trends and provide business insights.",
    priceRange: "$60,000 - $85,000",
    company: "DataWorks Co.",
    postedTime: "5 hours ago",
    onViewDetails: () => console.log("Viewing details for Data Analyst"),
    onContact: () => console.log("Contacting DataWorks Co."),
  },
  {
    title: "DevOps Engineer",
    description: "Build and maintain CI/CD pipelines for development workflows.",
    priceRange: "$80,000 - $110,000",
    company: "CloudOps Systems",
    postedTime: "4 days ago",
    onViewDetails: () => console.log("Viewing details for DevOps Engineer"),
    onContact: () => console.log("Contacting CloudOps Systems"),
  }
];

const Customer = () => {
  return (
    <main className="w-full flex flex-col items-center p-6 ">
      {/* Main Header */}
      <h1 className="font-semibold text-primary text-2xl py-4">Discover Solutions</h1>

      {/* Cards Container */}
      <div className="flex flex-wrap gap-6 justify-center">
        {data?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-card shadow-lg rounded-lg p-4 w-[300px] hover:shadow-xl transition-shadow duration-200"
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