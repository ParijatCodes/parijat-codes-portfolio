
import { Card, CardContent } from "@/components/ui/card";
import { User, Briefcase, FileText, Code } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-10">
          <div className="md:col-span-6 space-y-4">
            <p className="text-gray-700">
              I am Parijat Kundu, an aspiring AI Engineer and a B.Tech student in Computer Science Engineering.
              I'm deeply passionate about leveraging data analysis and AI solutions to transform how industries
              operate and make decisions.
            </p>
            
            <p className="text-gray-700">
              With a strong foundation in business development and data science, I excel at identifying patterns,
              analyzing market trends, and developing strategic solutions that drive business growth.
            </p>
            
            <p className="text-gray-700">
              My journey has involved working at Excelerate as a Business Strategist and Outreach Consultant,
              where I've honed my skills in market research, user analysis, and strategic thinking.
            </p>
            
            <p className="text-gray-700">
              I'm constantly learning and growing, eager to apply my analytical skills and technical knowledge
              to solve complex problems and create impactful solutions.
            </p>
          </div>
          
          <div className="md:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <User className="h-10 w-10 text-navy mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Personal Info</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li><span className="font-medium">Name:</span> Parijat Kundu</li>
                    <li><span className="font-medium">Location:</span> Ranaghat-I, West Bengal</li>
                    <li><span className="font-medium">Email:</span> parijatkundu123@gmail.com</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Briefcase className="h-10 w-10 text-navy mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Work Focus</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>Business Development</li>
                    <li>Data Analysis</li>
                    <li>Market Research</li>
                    <li>AI Solutions</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Code className="h-10 w-10 text-navy mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Languages</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>English (Full Professional)</li>
                    <li>Hindi (Full Professional)</li>
                    <li>Bengali (Native)</li>
                    <li>Japanese (Limited Working)</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <FileText className="h-10 w-10 text-navy mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Education</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>B.Tech in Computer Science</li>
                    <li>Regent Education and Research Foundation</li>
                    <li>2024 - 2028 (Expected)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
