
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Clock, Calendar, User, Book } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Evolution of UI/UX Design Trends in 2024",
      excerpt: "Explore the latest design trends shaping the digital landscape this year, from neumorphism to glassmorphism and beyond. Learn how these trends can be applied to your projects.",
      date: "April 2, 2024",
      category: "Design",
      readTime: "5 min read",
      author: "Mark Lewis",
      image: "/uiux.jpeg",
      tags: ["UI/UX", "Design Trends", "Web Design"]
    },
    {
      title: "Building Performant React Applications",
      excerpt: "Learn how to optimize your React applications for better performance. From code splitting to memoization techniques, discover ways to make your app lightning fast.",
      date: "March 15, 2024",
      category: "Development",
      readTime: "8 min read",
      author: "Mark Lewis",
      image: "/react.jpeg",
      tags: ["React", "Performance", "JavaScript"]
    },
    {
      title: "The Power of Design Systems in Product Development",
      excerpt: "How design systems can streamline your workflow and improve consistency across your products. Discover the benefits of building and maintaining a robust design system.",
      date: "February 28, 2024",
      category: "Design",
      readTime: "6 min read",
      author: "Mark Lewis",
      image: "/DesignSystem.jpeg",
      tags: ["Design Systems", "Product Design", "Consistency"]
    }
  ];

  return (
    <section id="blog" className="py-20 bg-secondary/10">
      <div className="container">
        <ScrollReveal>
          <SectionHeading 
            title="From My Blog"
            subtitle="Check out my latest articles and thoughts on design, development, and technology. 📝"
          />
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <article className="glass rounded-xl overflow-hidden hover-lift h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <Badge className="absolute top-3 right-3 bg-primary/80 hover:bg-primary text-white">
                    {post.category}
                  </Badge>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-muted-foreground/50"></div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                    <Link to="/blog" className="hover:underline underline-offset-4">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-muted-foreground mb-5 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 text-xs rounded-full bg-secondary/50 text-muted-foreground"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/30">
                    <div className="flex items-center gap-2">
                      <User size={14} className="text-primary" />
                      <span className="text-sm">{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="hover:text-primary flex items-center gap-1">
                      Read More
                      <ArrowRight size={14} />
                    </Button>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={400}>
          <div className="mt-14 text-center">
            <Button className="gap-2 px-6 py-6 group" asChild>
              <Link to="/blog">
                <span className="inline-flex items-center">
                  <Book size={16} className="mr-2" />
                  View All Articles
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">
              Explore my complete collection of articles on design, development, and technology
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BlogSection;
