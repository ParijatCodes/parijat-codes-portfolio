
import { Card, CardContent } from "@/components/ui/card";

interface Education {
  institution: string;
  degree: string;
  period: string;
  location?: string;
}

export function Education() {
  const educations: Education[] = [
    {
      institution: "Regent Education and Research Foundation Group of Institutions 263",
      degree: "Bachelor of Technology, Computer Science",
      period: "2024 - 2028",
      location: "West Bengal, India"
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Education</h2>
        
        <div className="mt-10 grid grid-cols-1 gap-6">
          {educations.map((edu, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="md:col-span-4 bg-navy p-6 text-white flex flex-col justify-center">
                    <h3 className="font-bold text-xl mb-2">{edu.degree}</h3>
                    <p className="text-white/70">{edu.period}</p>
                    {edu.location && <p className="text-white/70 mt-1">{edu.location}</p>}
                  </div>
                  <div className="md:col-span-8 p-6">
                    <h4 className="font-semibold text-lg mb-3">{edu.institution}</h4>
                    <p className="text-gray-700">
                      Currently pursuing a Bachelor's degree in Computer Science Engineering, focusing on building a strong foundation in programming, data structures, algorithms, and AI technologies.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="chip">Computer Science</span>
                      <span className="chip">Data Structures</span>
                      <span className="chip">Algorithms</span>
                      <span className="chip">AI</span>
                      <span className="chip">Machine Learning</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
