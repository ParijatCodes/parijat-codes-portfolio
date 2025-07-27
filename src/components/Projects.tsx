import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Projects() {
  const projects = [
    {
      title: "AI Data Analysis Platform",
      description: "A comprehensive platform for automated data analysis using machine learning algorithms. Features real-time data processing, visualization dashboards, and predictive analytics.",
      image: "/lovable-uploads/de9f3fe3-a5b0-4b9c-8400-ab17c4274210.png",
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
      githubUrl: "https://github.com/parijat",
      liveUrl: "https://ai-platform.demo.com",
      category: "AI/ML"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript. Features smooth animations, dark/light theme toggle, and optimized performance.",
      image: "/lovable-uploads/36ad4c6d-8087-48e8-be0f-407a82eb82f3.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/parijat/portfolio",
      liveUrl: "https://parijat-codes-portfolio.lovable.app/",
      category: "Web Development"
    },
    {
      title: "Business Strategy Analytics",
      description: "Analytics dashboard for tracking business KPIs and generating strategic insights. Built during internship at Excelerate for platform optimization.",
      image: "/lovable-uploads/de9f3fe3-a5b0-4b9c-8400-ab17c4274210.png",
      technologies: ["React", "D3.js", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/parijat",
      liveUrl: "https://business-analytics.demo.com",
      category: "Business Intelligence"
    },
    {
      title: "Client Outreach System",
      description: "CRM system for managing client relationships and tracking outreach activities. Developed for Grant Thornton's Forensic Advisory Services project.",
      image: "/lovable-uploads/36ad4c6d-8087-48e8-be0f-407a82eb82f3.jpg",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
      githubUrl: "https://github.com/parijat",
      liveUrl: "https://crm-demo.com",
      category: "CRM"
    }
  ];

  const categories = ["All", "AI/ML", "Web Development", "Business Intelligence", "CRM"];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in AI, web development, and business analytics
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 reveal" style={{ animationDelay: '200ms' }}>
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              className="btn-animated"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="project-card reveal" style={{ animationDelay: `${300 + index * 150}ms` }}>
              <CardHeader className="pb-4">
                <div className="aspect-video rounded-lg overflow-hidden mb-4 img-hover-effect">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl gradient-text">{project.title}</CardTitle>
                  <Badge variant="secondary" className="chip">
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pb-4">
                <CardDescription className="text-base leading-relaxed mb-4">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="pt-4 flex gap-4">
                <Button 
                  variant="default" 
                  size="sm" 
                  className="btn-glow flex-1"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="btn-animated flex-1"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Source
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 reveal" style={{ animationDelay: '800ms' }}>
          <p className="text-lg text-muted-foreground mb-6">
            Interested in collaborating on a project?
          </p>
          <Button size="lg" className="btn-glow" asChild>
            <a href="#contact">
              Let's Work Together
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}