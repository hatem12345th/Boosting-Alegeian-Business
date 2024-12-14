import { AIProblemSolver } from '@/components/ai-problem-solver';
import { FilterSidebar } from '@/components/filer-sidebar'
import LoadingSpinner from '@/components/Loader';
import { ProblemCard } from '@/components/problem-card';
import { StatesDemo } from '@/components/StatesDemo'




const data = [
  {
    "id": 1,
    "company_name": "Forward Networks",
    "headline": "Network automation software for a stronger, more reliable network. realize network assurance",
    "tags": [
      "Actively Hiring",
      "Highly rated",
      "Growing fast",
      "Recently funded",
      "Same investor as Airbnb",
      "Work / Life Balance",
      "Strong Leadership"
    ],
    "website": "http://www.forwardnetworks.com/",
    "employees": "11-50",
    "about": "The software used to manage networks hasn’t kept up with the dramatic expansion of networks themselves. The Forward Networks solution is designed to help network teams eliminate network outages and reduce time to remediate errors. Its platform enables engineers and operators to visualize and search complex networks, debug configuration problems, verify network-wide policy implementations, and predict network behavior prior to deploying changes. Forward Networks builds a software replica of an entire network to analyze its behavior. Using the network copy, the software traces, indexes, and stores the collected data, monitoring things like end-to-end behavior, verification of the network’s forwarding behavior and security posture, and close monitoring of configuration changes.",
    "locations": ["Palo Alto"],
    "industries": [
      "Enterprise Software",
      "Information Technology",
      "Networking",
      "Software",
      "Computers"
    ],
    "jobs": {
      "Engineering": 7,
      "Founder": 2,
      "Investor": 1,
      "Marketing": 1,
      "Other Engineering": 6,
      "Product": 1,
      "Sales": 13
    }
  },
  {
    "id": 2,
    "company_name": "Wise",
    "headline": "We're on a mission to bring transparency to finance. Affordable and clear",
    "tags": [
      "Actively Hiring",
      "Highly rated",
      "Recently funded",
      "Same investor as Apple",
      "Work / Life Balance",
      "Strong Leadership"
    ],
    "website": "https://wise.com",
    "employees": "1001-5000",
    "about": "Current banking systems don’t let us send, spend or receive money across borders easily. Or quickly. Or cheaply. So we’re building a new one. We won’t stop until everyone can send, spend and receive money wherever they are, in any currency. But we can’t do it alone. We’re growing incredibly fast and there’s still lots to get done. Visit wise.jobs to join us.",
    "locations": [
      "New York City",
      "Singapore",
      "London",
      "Tampa",
      "Budapest",
      "Tallinn",
      "Cherkasy"
    ],
    "industries": [
      "Financial Services",
      "Consumers",
      "Payments",
      "Peer-to-Peer",
      "Finance",
      "P2P Money Transfer",
      "Fin Tech"
    ],
    "jobs": {
      "Designer": 13,
      "Engineering": 103,
      "Founder": 117,
      "Investor": 188,
      "Management": 1,
      "Marketing": 32,
      "Product": 25,
      "Sales": 25
    }
  },
  {
    "id": 3,
    "company_name": "Benchling",
    "headline": "Informatics platform to accelerate, measure, and forecast R&D from discovery through bioprocessing",
    "tags": [
      "Actively Hiring",
      "Highly rated",
      "Growing fast",
      "Same investor as Airbnb",
      "Work / Life Balance",
      "Strong Leadership"
    ],
    "website": "http://www.benchling.com",
    "employees": "201-500",
    "about": "Benchling makes life science research faster and more collaborative. Biotechnology has the potential to solve humanity’s most pressing challenges, such as disease, renewable energy, clean water, and hunger. The brightest minds are working on these problems but they are equipped with archaic tools. We aspire to fix this and increase the rate of scientific output with a platform for researchers to design and run experiments, analyze data, and share results.",
    "locations": ["Boston", "San Francisco"],
    "industries": [
      "Biotechnology",
      "Life Sciences",
      "Enterprise Software",
      "Healthcare",
      "Synthetic Biology",
      "Bioinformatics",
      "Software",
      "Cloud Data Services",
      "Renewable Energies"
    ],
    "jobs": {
      "Designer": 1,
      "Engineering": 13,
      "Founder": 7,
      "Investor": 10,
      "Marketing": 2,
      "Product": 1,
      "Sales": 17
    }
  },
  {
    "id": 4,
    "company_name": "Tulip Interfaces",
    "headline": "The Leader in Frontline Operations",
    "tags": [
      "Actively Hiring",
      "Highly rated",
      "Growing fast",
      "Same investor as Uber",
      "Work / Life Balance",
      "Strong Leadership"
    ],
    "website": "https://tulip.co",
    "employees": "51-200",
    "about": "Tulip, the Frontline Operations Platform, is empowering the world’s leading manufacturers to improve the productivity of their teams, the quality of their output, and the efficiency of their operations. With Tulip’s no-code platform, manufacturers can empower those closest to operations to digitally transform their facilities and gain real-time visibility into the people, machines and processes involved in production--all in a matter of days. Manufacturers of all sizes, across industries including consumer electronics, aerospace and defense, contract manufacturing, automotive, apparel, medical devices and more, have implemented Tulip’s intuitive platform to solve some of the most pressing challenges in manufacturing: error-proofing processes with guided workflows, integrating industrial IoT (IIoT) technologies with legacy factory machines, and capturing and analyzing real-time production floor data. A spinoff out of MIT, the company is headquartered in Somerville, MA, with offices in the UK and Germany. It has been recognized as a MES Challenger on the Gartner Magic Quadrant, Frost and Sullivan Entrepreneurial Company of the year and a World Economic Forum Technology Pioneer. You can learn more and get started for free at Tulip.co.",
    "locations": ["Boston", "Munich", "Budapest", "Somerville"],
    "industries": [
      "Enterprise Software",
      "Manufacturing",
      "Analytics",
      "Business Productivity",
      "Productivity Software",
      "Internet of Things",
      "Web Development",
      "Enterprise Application"
    ],
    "jobs": {
      "Engineering": 13,
      "Founder": 16,
      "Investor": 2,
      "Marketing": 3,
      "Other Engineering": 1,
      "Product": 2,
      "Sales": 15
    }
  },
  {
    "id": 5,
    "company_name": "Astranis",
    "headline": "Building next-generation internet satellites to get the world online",
    "tags": [
      "Actively Hiring",
      "Highly rated",
      "Growing fast",
      "Same investor as Airbnb",
      "Work / Life Balance",
      "Strong Leadership"
    ],
    "website": "http://www.astranis.com/",
    "employees": "51-200",
    "about": "Four billion people do not have access to the internet. Astranis is going to change that. We are building the next generation of smaller, lower-cost telecommunications satellites to bring the world online.",
    "locations": ["San Francisco"],
    "industries": ["Internet", "Telecommunications", "Aerospace"],
    "jobs": {
      "Engineering": 9,
      "Founder": 3,
      "Investor": 21,
      "Marketing": 6,
      "Other Engineering": 24,
      "Product": 9
    }
  },
  {
    "id": 6,
    "company_name": "Smartcar",
    "headline": "The car API for developers",
    "tags": [
      "Actively Hiring",
      "Highly rated",
      "Growing fast",
      "Same investor as Airbnb",
      "Work / Life Balance",
      "Strong Leadership"
    ],
    "website": "https://smartcar.com",
    "employees": "11-50",
    "about": "Founded in 2015, Smartcar is the leading developer platform for mobility businesses. We’ve raised $24 million in Series B financing led by Energize Ventures with follow-on participation from Andreessen Horowitz (a16z) and New Enterprise Associates (NEA). From auto insurance to fleet management, businesses of all kinds use our APIs to verify vehicle mileage, issue digital car keys, manage EV charging, and track fleets. To name a few, the peer-to-peer car sharing marketplace Turo, the auto insurance provider Marshmallow, and the electric utility Green Mountain Energy use our platform to build and scale their mobility services. By making it easy to connect to their customers’ vehicles, Smartcar allows these companies to focus on what’s important: building the future of mobility.",
    "locations": ["California", "Texas", "New York"],
    "industries": [
      "Automotive",
      "Developer APIs",
      "Apps",
      "Software",
      "Mobility"
    ],
    "jobs": {
      "Designer": 1,
      "Engineering": 5,
      "Founder": 2,
      "Investor": 1,
      "Marketing": 3,
      "Product": 1,
      "Sales": 6
    }
  },
  {
    "id": 7,
    "company_name": "Dataiku",
    "headline": "Everyday AI, Extraordinary People",
    "tags": [
      "Actively Hiring",
      "Highly rated",
      "Recently funded",
      "Same investor as Groupon",
      "Work / Life Balance",
      "Strong Leadership"
    ],
    "website": "http://www.dataiku.com/",
    "employees": "1001-5000",
    "about": "Dataiku is the platform for Everyday AI, systemizing the use of data for exceptional business results. By making the use of data and AI an everyday behavior, Dataiku unlocks the creativity within individual employees to power collective success at companies of all sizes and across all industries. Don’t get us wrong: we are a tech company building software. Our culture is even pretty geeky! But our driving force is and will always remain people, starting with ours. We consider our employees to be our most precious asset, and we are committed to ensuring that each of them gets the most rewarding, enjoyable, and memorable work experience with us. Headquartered in New York City, Dataiku was founded in Paris in 2013 and achieved unicorn status in 2019. Now, more than 800 employees work across the globe in our offices and remotely. Backed by a renowned set of investors and partners including CapitalG, Tiger Global, and Serena, we’ve set out to build the future of AI. Let’s do it together!",
    "locations": [
      "Denver",
      "Dubai",
      "New York City",
      "Singapore",
      "London",
      "Amsterdam",
      "Paris",
      "New York",
      "Sydney"
    ],
    "industries": [
      "Enterprise Software",
      "Analytics",
      "Machine Learning",
      "Big Data",
      "Artificial Intelligence",
      "Data Integration",
      "Predictive Analytics"
    ],
    "jobs": {
      "Designer": 2,
      "Engineering": 48,
      "Founder": 15,
      "Investor": 11,
      "Marketing": 2,
      "Other Engineering": 4,
      "Product": 1,
      "Sales": 90
    }
  },
  {
    "id": 8,
    "company_name": "Ro",
    "headline": "We are Ro, a mission-driven healthcare technology company",
    "tags": [
      "Actively Hiring",
      "Highly rated",
      "Growing fast",
      "Same investor as Snapchat",
      "Work / Life Balance",
      "Strong Leadership"
    ],
    "website": "https://www.ro.co/",
    "employees": "51-200",
    "about": "Ro puts you in control of your health. We’re patients, just like you, building technology to make healthcare accessible, affordable, and maybe even enjoyable. Today, we enable you to connect with a doctor and get treatment when and where you need it. Tomorrow, we aspire to be your first call for all your healthcare needs.",
    "locations": ["New York City", "New York"],
    "industries": ["Healthcare", "Fitness", "Corporate Wellness"],
    "jobs": {
      "Designer": 2,
      "Engineering": 5,
      "Founder": 5,
      "Investor": 11,
      "Marketing": 5,
      "Product": 5
    }
  },
  {
    "id": 9,
    "company_name": "DataGrail",
    "headline": "We believe in a world where people can be in control of their privacy and identity",
    "tags": [
      "Actively Hiring",
      "Highly rated",
      "Recently funded",
      "Same investor as Warby Parker",
      "Work / Life Balance",
      "Strong Leadership"
    ],
    "website": "http://datagrail.io",
    "employees": "51-200",
    "about": "We're developing the privacy platform modern brands rely on to build customer trust and transparency. We untangle the complexity of data privacy and help brands build privacy programs that work, giving them an easy-to-use platform to automate and scale privacy, and stay compliant with regulations like GDPR, CCPA, and CPRA. With 900+ pre-built connections with popular apps and infrastructure, the DataGrail Integrations Network is the first of its kind to detect shadow IT that may contain personal data, ensuring the most accurate data discovery. DataGrail services millions of consumers, through companies like Overstock, Restoration Hardware, NETGEAR, and Outreach, and has 4.8/5 stars on G2. DataGrail is backed by leading VCs and strategic investors, including Felicis Ventures, Operator Collective, Okta Ventures, HubSpot Ventures, and DocuSign Ventures. Visit www.datagrail.io to learn more.",
    "locations": ["San Francisco"],
    "industries": [
      "Enterprise Software",
      "Sales and Marketing",
      "Security",
      "Big Data",
      "Privacy",
      "Legal",
      "Software Compliance",
      "Marketing Automation",
      "Marketing"
    ],
    "jobs": { "Designer": 1, "Engineering": 1, "Founder": 2, "Sales": 3 }
  },
  {
    "id": 10,
    "company_name": "Earnin",
    "headline": "We're fighting unfairness in the financial system. You worked today. Get paid today",
    "tags": [
      "Actively Hiring",
      "Highly rated",
      "Growing fast",
      "Same investor as Warby Parker",
      "Work / Life Balance",
      "Strong Leadership"
    ],
    "website": "https://www.earnin.com",
    "employees": "51-200",
    "about": "Earnin’s mission is simple: we are building a financial system that works for people. That means a system that serves people’s interests (not banks, corporations, or the very rich), powered by the best technology Silicon Valley has to offer. Launched in 2014, The Earnin app allows anyone with a job and a bank account to get paid the minute they leave work — right from their smartphone. There are no fees, no interest, no hidden costs. Instead, Earners support the service by tipping what they think is fair. Because we believe we’re all in this together — people, trying to create a better system. Earnin’s funding partners include Andreessen Horowitz, Matrix Partners, Ribbit Capital, Felicis Ventures, March Capital Partners, Trinity Ventures, Thrive Capital, and Camp One Ventures.",
    "locations": ["Palo Alto", "Loveland", "Henderson"],
    "industries": [
      "Financial Services",
      "E-Commerce",
      "Payments",
      "Mobile Payments",
      "Fin Tech"
    ],
    "jobs": {
      "Designer": 1,
      "Engineering": 29,
      "Founder": 5,
      "Investor": 3,
      "Marketing": 3,
      "Product": 2,
      "Sales": 2
    }
  },
  {
    "id": 11,
    "company_name": "Pantheon Platform",
    "headline": "Provides website tools, organization and hosting for businesses",
    "tags": [
      "Actively Hiring",
      "Highly rated",
      "Growing fast",
      "Same investor as Meta",
      "Work / Life Balance",
      "Strong Leadership"
    ],
    "website": "https://pantheon.io/",
    "employees": "51-200",
    "about": "We build best-in-class WordPress and Drupal sites with agile workflows, scalable infrastructure, and a lightning-fast content delivery network. We run your sites on the fastest WebOps Platform on the planet. This includes our unrivaled speed, uptime, and scalability make our high-performance WebOps platform the best place to host WordPress and Drupal sites. We are the only hosting platform to include fully managed and free HTTPS certificates, automated backups, and one-click updates for all WebOps platform plans.",
    "locations": ["San Francisco"],
    "industries": [
      "Internet",
      "SaaS",
      "Enterprise Software",
      "Infrastructure",
      "Application Platforms",
      "Software",
      "Content",
      "Web Development",
      "Web CMS",
      "Cloud Infrastructure"
    ],
    "jobs": {
      "Engineering": 6,
      "Founder": 1,
      "Investor": 3,
      "Marketing": 1,
      "Product": 1,
      "Sales": 8
    }
  },
  {
    "id": 12,
    "company_name": "MadKudu",
    "headline": "The PLG platform of choice for B2B companies looking to turn product users into customers",
    "tags": [
      "Actively Hiring",
      "Highly rated",
      "Growing fast",
      "Recently funded",
      "Work / Life Balance",
      "Strong Leadership"
    ],
    "website": "http://www.madkudu.com",
    "employees": "11-50",
    "about": "MadKudu helps B2B revenue teams monetize their product-led engine without reliance on engineering or technical teams. With the prescriptive and actionable insights provided through the MadKudu platform, sales and marketers know who to engage with, when, why, and how. Learn more at .",
    "locations": ["Mountain View", "Paris"],
    "industries": [
      "SaaS",
      "B2B",
      "Lead Generation",
      "Developer APIs",
      "Sales Automation",
      "Customer Service",
      "Predictive Analytics",
      "Marketing Automation",
      "Customer Experience",
      "Loyalty"
    ],
    "jobs": { "Engineering": 3, "Founder": 1, "Investor": 1, "Sales": 4 }
  },
  {
    "id": 13,
    "company_name": "Common",
    "headline": "City living made better",
    "tags": [
      "Actively Hiring",
      "Highly rated",
      "Growing fast",
      "Same investor as Twitter",
      "Work / Life Balance",
      "Strong Leadership"
    ],
    "website": "https://www.common.com/",
    "employees": "51-200",
    "about": "Common is the nation’s leading residential brand and operating platform that designs, leases, and manages multifamily properties that appeal to today's renters. Through smart design and tech-enabled property management, Common delivers exceptional experiences to thousands of residents in coliving, microunit, and traditional apartments in cities from coast to coast. Founded in October 2015, we are the preferred choice for renters looking for a stress-free apartment from a trusted brand, and for real estate owners seeking reliable, above-market returns. We challenge ourselves every day not just to think about ways to make city living better, but to activate those ideas in meaningful ways. Our team is comprised of real estate professionals, designers, engineers, salespeople, marketers, member service representatives, and so much more. We work collaboratively, value self-startership, and embrace a “whatever it takes” mentality to ensure our work is done and done well. Common sits squarely at the intersection between technology and real estate, working every day to build quality residential solutions that bring positive change to the world’s rental housing crisis. It’s an exciting time to be part of Common’s team. With over 17,500 units signed and under development and over $110 million in global venture capital investment, Common is expanding it’s reliable, renter-first property operations to 26 cities across the world.",
    "locations": ["New York City"],
    "industries": [
      "Real Estate",
      "Communities",
      "Consulting",
      "Collaboration",
      "Property Management",
      "New Product Development"
    ],
    "jobs": { "Founder": 3, "Investor": 21 }
  },
  {
    "id": 14,
    "company_name": "Platform Science",
    "headline": "Delivering the best in-cab experience for drivers, giving them complete control of your technology",
    "tags": [
      "Actively Hiring",
      "Highly rated",
      "Growing fast",
      "Same investor as Flexport",
      "Work / Life Balance",
      "Strong Leadership"
    ],
    "website": "https://www.platformscience.com/",
    "employees": "51-200",
    "about": "Through the development of a first of its kind open platform, Platform Science provides the hardware and software that allows clients to fully capture, analyze and apply a wealth of data, dramatically increasing performance, compliance, time management and savings.",
    "locations": ["San Diego", "La Jolla"],
    "industries": [
      "SaaS",
      "Transportation",
      "Software",
      "Internet of Things",
      "Computers",
      "Logistics Software"
    ],
    "jobs": {
      "Engineering": 10,
      "Founder": 1,
      "Investor": 5,
      "Product": 3,
      "Sales": 5
    }
  },
  {
    "id": 15,
    "company_name": "Canary Technologies",
    "headline": "Easy, intuitive, and secure hotel solutions",
    "tags": [
      "Actively Hiring",
      "Highly rated",
      "Growing fast",
      "Recently funded",
      "Work / Life Balance",
      "Strong Leadership"
    ],
    "website": "https://www.canarytechnologies.com/",
    "employees": "11-50",
    "about": "Modernizing the hotel technology stack with cloud-based solutions to improve antiquated workflows. Canary’s founders have extensive experience in hospitality. Hospitality is at the core of our values, and we understand the nuances of what goes on behind the scenes at a property. We believe that the guest comes first, and solutions should enhance the guest experience.",
    "locations": ["San Francisco", "New York"],
    "industries": [
      "SaaS",
      "Enterprise Software",
      "Payments",
      "Hospitality",
      "Hotels",
      "Software"
    ],
    "jobs": {
      "Designer": 2,
      "Engineering": 3,
      "Founder": 6,
      "Marketing": 8,
      "Product": 3,
      "Sales": 12
    }
  },
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
          item={item}
          key={index} // Added a key for React lists
          title={item.headline}
          description={item.about}
          priceRange={item.priceRange}
          company={item.company_name}
          postedTime={item.postedTime}
          website={item.website}
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