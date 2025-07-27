import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Blog() {
  const blogPosts = [
    {
      title: "The Future of AI in Business Strategy",
      excerpt: "Exploring how artificial intelligence is transforming strategic decision-making in modern businesses and what it means for the future of work.",
      date: "2024-12-15",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "/lovable-uploads/de9f3fe3-a5b0-4b9c-8400-ab17c4274210.png",
      slug: "future-ai-business-strategy"
    },
    {
      title: "Data Analysis Best Practices",
      excerpt: "A comprehensive guide to effective data analysis techniques, from data collection to visualization and actionable insights.",
      date: "2024-12-10",
      readTime: "8 min read",
      category: "Data Science",
      image: "/lovable-uploads/36ad4c6d-8087-48e8-be0f-407a82eb82f3.jpg",
      slug: "data-analysis-best-practices"
    },
    {
      title: "Building Responsive Web Applications",
      excerpt: "Modern approaches to creating web applications that work seamlessly across all devices and screen sizes.",
      date: "2024-12-05",
      readTime: "6 min read",
      category: "Web Development",
      image: "/lovable-uploads/de9f3fe3-a5b0-4b9c-8400-ab17c4274210.png",
      slug: "responsive-web-applications"
    },
    {
      title: "Market Research in the Digital Age",
      excerpt: "How digital tools and AI are revolutionizing market research methodologies and improving business intelligence.",
      date: "2024-11-28",
      readTime: "7 min read",
      category: "Business Intelligence",
      image: "/lovable-uploads/36ad4c6d-8087-48e8-be0f-407a82eb82f3.jpg",
      slug: "market-research-digital-age"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">Latest Blog Posts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights on technology, business strategy, and data science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={post.slug} className="project-card reveal" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader className="pb-4">
                <div className="aspect-video rounded-lg overflow-hidden mb-4 img-hover-effect">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="chip">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl hover:text-primary transition-colors duration-300">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pb-4">
                <CardDescription className="text-base leading-relaxed mb-4">
                  {post.excerpt}
                </CardDescription>
                
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto font-medium text-primary hover:text-accent group"
                  asChild
                >
                  <a href={`/blog/${post.slug}`}>
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center reveal" style={{ animationDelay: '600ms' }}>
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to get notified about new blog posts and insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              />
              <Button className="btn-glow">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 reveal" style={{ animationDelay: '800ms' }}>
          <Button variant="outline" size="lg" className="btn-animated" asChild>
            <a href="/blog">
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}