
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

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

  // State for animations
  const [isVisible, setIsVisible] = useState(false);
  
  // Intersection Observer to trigger animations when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });
    
    const section = document.getElementById('education');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="education" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title animate-fade-in">Education</h2>
        
        <div className="mt-10 grid grid-cols-1 gap-6">
          {educations.map((edu, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
              style={{ transitionDelay: `${index * 200}ms`, transitionDuration: '800ms' }}
            >
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="md:col-span-4 bg-navy p-6 text-white flex flex-col justify-center transform transition-transform duration-500 hover:scale-[1.02]">
                    <h3 className="font-bold text-xl mb-2">{edu.degree}</h3>
                    <p className="text-white/70">{edu.period}</p>
                    {edu.location && <p className="text-white/70 mt-1">{edu.location}</p>}
                  </div>
                  <div className="md:col-span-8 p-6 transform transition-all duration-500 hover:bg-gray-50">
                    <h4 className="font-semibold text-lg mb-3">{edu.institution}</h4>
                    <p className="text-gray-700">
                      Currently pursuing a Bachelor's degree in Computer Science Engineering, focusing on building a strong foundation in programming, data structures, algorithms, and AI technologies.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Computer Science", "Data Structures", "Algorithms", "AI", "Machine Learning"].map((skill, i) => (
                        <span key={i} className="chip transform transition-all duration-300 hover:scale-110 hover:bg-navy hover:text-white cursor-default">{skill}</span>
                      ))}
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
