
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-xl mb-2">Parijat Kundu</h3>
            <p className="text-white/70">Aspiring AI Engineer | Data Analysis</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="mailto:parijatkundu123@gmail.com" 
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/parijat-kundu010" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/70 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; {currentYear} Parijat Kundu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
