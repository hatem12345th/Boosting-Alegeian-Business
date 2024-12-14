import { AIProblemSolver } from '@/components/ai-problem-solver';
import { FilterSidebar } from '@/components/filer-sidebar'
import LoadingSpinner from '@/components/Loader';
import { ProblemCard } from '@/components/problem-card';
import { StatesDemo } from '@/components/StatesDemo'




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



const Home = () => {

 


  return (
    <main className="w-full flex flex-col md:flex-row mt-6 gap-4">
    {/* Sidebar Section */}
    <div className="w-full md:w-[500px]">
      <FilterSidebar />
    </div>
  
    {/* Main Content Section */}
    <div className="w-full">
      <AIProblemSolver />
      <h1 className="font-semibold text-dark-2 text-xl py-6">
        Discover Solutions
      </h1>
      {data?.map((item, index) => (
        <ProblemCard
          key={index} // Added a key for React lists
          title={item.title}
          description={item.description}
          priceRange={item.priceRange}
          company={item.company}
          postedTime={item.postedTime}
        />
      ))}
    </div>
  
    {/* States Section */}
    <div className="w-full md:w-[350px] md:justify-end mr-10">
      <StatesDemo />
    </div>
  </main>
  
  )
}

export default Home