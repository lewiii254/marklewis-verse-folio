
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Evolution of UI/UX Design Trends in 2024",
      excerpt: "Explore the latest design trends shaping the digital landscape this year...",
      date: "April 2, 2024",
      category: "Design",
      image: "/uiux.jpeg"
    },
    {
      title: "Building Performant React Applications",
      excerpt: "Learn how to optimize your React applications for better performance...",
      date: "March 15, 2024",
      category: "Development",
      image: "/react.jpeg"
    },
    {
      title: "The Power of Design Systems in Product Development",
      excerpt: "How design systems can streamline your workflow and improve consistency...",
      date: "February 28, 2024",
      category: "Design",
      image: "/DesignSystem.jpeg"
    }
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container">
        <ScrollReveal>
          <SectionHeading 
            title="From My Blog🧾"
            subtitle="Check out my latest articles and thoughts on design, development, and technology. 📝"
          />
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <article className="glass rounded-xl overflow-hidden hover-lift h-full flex flex-col">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-primary">{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex justify-end">
                    <Button variant="ghost" size="sm" className="hover:text-primary">
                      Read More🧾
                    </Button>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={400}>
          <div className="mt-12 text-center">
            <Button className="gap-2" asChild>
              <Link to="/blog">
                Visit My Blog🧾
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BlogSection;
