
export function Experience() {
  const experiences = [
    {
      title: "Outreach Consultant",
      company: "Excelerate",
      period: "March 2025 - Present (2 months)",
      description: "Currently participating in a virtual internship program as an Outreach Consultant with Excelerates, focusing on identifying potential clients for Grant Thornton's Forensic Advisory Services in China.",
      responsibilities: [
        "Conducting secondary research to identify target markets and potential clients within the Chinese market.",
        "Analyzing company information and industry trends to assess the need for forensic advisory services.",
        "Developing a shortlist of potential clients, including companies and law firms.",
        "Creating use case analyses and client retention strategies.",
        "Developing a final presentation showcasing client lists and use case analyses."
      ],
      skills: "Market research, business development, client relations, analytical thinking, presentation development"
    },
    {
      title: "Business Strategist",
      company: "Excelerate",
      period: "March 2025 - April 2025 (2 months)",
      description: "Business Strategy Intern at Excelerate, contributing to the evolution of the platform to meet the dynamic needs of learners.",
      responsibilities: [
        "Conducted comprehensive user analysis and market research to identify key trends for platform enhancement.",
        "Collaborated with cross-functional teams to synthesize research findings and develop strategic recommendations.",
        "Analyzed user behavior and preferences to identify opportunities for improving the overall learner experience.",
        "Contributed to the development of innovative strategies to meet the evolving needs of learners in a dynamic market."
      ],
      skills: "Business Consulting, Market Research, User Analysis, Strategic Thinking, Data Analysis, Collaboration"
    },
    {
      title: "Student",
      company: "Regent Education and Research Foundation Group of Institutions 263",
      period: "August 2024 - Present (9 months)",
      description: "Pursuing B.Tech in Computer Science Engineering.",
      responsibilities: []
    },
    {
      title: "Finance Manager",
      company: "Ashar Alo",
      period: "August 2023 - Present (1 year 9 months)",
      location: "Ranaghat-I, West Bengal, India",
      description: "Managing all the assets of this local money lending company. Accounting all the data weekly. Taking financial decisions on the basis of cash flow, assets and liabilities.",
      responsibilities: []
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="mt-10 space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="timeline-item">
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-navy">{experience.title}</h3>
                <p className="text-gray-600 font-medium">{experience.company}</p>
                <p className="text-gray-500 text-sm">{experience.period}</p>
                {experience.location && (
                  <p className="text-gray-500 text-sm italic">{experience.location}</p>
                )}
              </div>
              
              <p className="text-gray-700 my-3">{experience.description}</p>
              
              {experience.responsibilities.length > 0 && (
                <div className="mt-3">
                  <h4 className="text-md font-medium text-navy mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    {experience.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {experience.skills && (
                <div className="mt-3">
                  <h4 className="text-md font-medium text-navy mb-2">Skills:</h4>
                  <p className="text-gray-700">{experience.skills}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
