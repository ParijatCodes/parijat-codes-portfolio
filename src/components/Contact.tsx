
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon."
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title animate-fade-in">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-10">
          <div className="md:col-span-5 space-y-6 animate-fade-in">
            <p className="text-gray-700">
              I'm always interested in new opportunities, collaborations, and conversations.
              Feel free to reach out if you have any questions or just want to say hello!
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center space-x-3 hover:-translate-y-1 transition-transform duration-300">
                <Mail className="text-navy" size={20} />
                <span className="text-gray-700">parijatkundu123@gmail.com</span>
              </div>
              
              <div className="flex items-center space-x-3 hover:-translate-y-1 transition-transform duration-300">
                <MapPin className="text-navy" size={20} />
                <span className="text-gray-700">Ranaghat-I, West Bengal, India</span>
              </div>
              
              <div className="flex items-center space-x-3 hover:-translate-y-1 transition-transform duration-300">
                <Linkedin className="text-navy" size={20} />
                <a href="https://www.linkedin.com/in/parijat-kundu010" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-navy transition-colors">
                  linkedin.com/in/parijat-kundu010
                </a>
              </div>
              
              <div className="flex items-center space-x-3 hover:-translate-y-1 transition-transform duration-300">
                <Github className="text-navy" size={20} />
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-navy transition-colors">https://github.com/ParijatCodes</a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7 animate-fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2 transition-all duration-300 hover:scale-[1.02]">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="w-full" />
                </div>
                
                <div className="space-y-2 transition-all duration-300 hover:scale-[1.02]">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required className="w-full" />
                </div>
              </div>
              
              <div className="space-y-2 transition-all duration-300 hover:scale-[1.02]">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can I help you?" required className="w-full" />
              </div>
              
              <div className="space-y-2 transition-all duration-300 hover:scale-[1.02]">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Write your message here..." required className="w-full min-h-[150px]" />
              </div>
              
              <Button type="submit" className="bg-navy hover:bg-navy-dark text-white w-full sm:w-auto transform transition-transform hover:scale-105 active:scale-95" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
}
