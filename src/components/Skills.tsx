
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number;
  }[];
}

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Professional Skills",
      skills: [
        { name: "Business Development", level: 90 },
        { name: "Lead Generation", level: 85 },
        { name: "Client Prospecting", level: 80 },
        { name: "Market Research", level: 85 },
        { name: "User Analysis", level: 75 },
      ]
    },
    {
      title: "Technical Skills",
      skills: [
        { name: "Data Science & Analytics", level: 80 },
        { name: "Data Management", level: 75 },
        { name: "Strategic Thinking", level: 85 },
        { name: "Analytical Thinking", level: 90 },
        { name: "Presentation Development", level: 80 },
      ]
    }
  ];
  
  const languages = [
    { name: "English", level: "Full Professional" },
    { name: "Hindi", level: "Full Professional" },
    { name: "Bengali", level: "Native or Bilingual" },
    { name: "Japanese", level: "Limited Working" }
  ];
  
  const certifications = [
    "Data Science & Analytics",
    "Certificate of Participation in Big Bull: The Trading Challenge of Backwaters 2025: IIM Kozhikode's Flagship Management Festival",
    "Data Management"
  ];

  // State for animating progress bars
  const [showProgress, setShowProgress] = useState(false);

  // Intersection Observer to trigger animations when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setShowProgress(true);
      }
    }, { threshold: 0.2 });
    
    const section = document.getElementById('skills');
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
    <section id="skills" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title animate-fade-in">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <h3 className="text-xl font-semibold mb-6 text-navy">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="transform transition-all duration-300 hover:scale-105">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={showProgress ? skill.level : 0} 
                      className="h-2 transition-all duration-1000 ease-out"
                      style={{ transitionDelay: `${skillIndex * 100}ms` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h3 className="text-xl font-semibold mb-6 text-navy">Languages</h3>
            <div className="space-y-3">
              {languages.map((language, index) => (
                <div 
                  key={index} 
                  className="flex justify-between pb-2 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-300 p-2 rounded-md transform hover:-translate-y-1 hover:shadow-sm"
                  style={{ animationDelay: `${index * 100 + 500}ms` }}
                >
                  <span className="font-medium text-gray-700">{language.name}</span>
                  <span className="text-gray-500">{language.level}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "600ms" }}>
            <h3 className="text-xl font-semibold mb-6 text-navy">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="pb-2 border-b border-gray-200 hover:bg-gray-50 transition-all duration-300 p-2 rounded-md transform hover:-translate-y-1 hover:shadow-sm"
                  style={{ animationDelay: `${index * 100 + 700}ms` }}
                >
                  <span className="font-medium text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
