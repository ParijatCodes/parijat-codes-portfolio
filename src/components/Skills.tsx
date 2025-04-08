
import { Progress } from "@/components/ui/progress";

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

  return (
    <section id="skills" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-6 text-navy">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-navy">Languages</h3>
            <div className="space-y-3">
              {languages.map((language, index) => (
                <div key={index} className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">{language.name}</span>
                  <span className="text-gray-500">{language.level}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-navy">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="pb-2 border-b border-gray-200">
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
