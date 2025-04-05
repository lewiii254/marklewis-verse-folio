
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample blog post data (in a real app, this would come from an API or CMS)
const blogPosts = [
  {
    id: 1,
    title: 'The Evolution of UI/UX Design Trends in 2024',
    excerpt: 'Explore the latest design trends shaping the digital landscape this year, from neumorphism to glassmorphism and beyond.',
    date: 'April 2, 2024',
    category: 'Design',
    readTime: '5 min read',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    title: 'Building Performant React Applications',
    excerpt: 'Learn how to optimize your React applications for better performance, from code splitting to memoization techniques.',
    date: 'March 15, 2024',
    category: 'Development',
    readTime: '8 min read',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    title: 'The Power of Design Systems in Product Development',
    excerpt: 'How design systems can streamline your workflow, improve consistency, and enhance collaboration between designers and developers.',
    date: 'February 28, 2024',
    category: 'Design',
    readTime: '6 min read',
    image: '/placeholder.svg'
  },
  {
    id: 4,
    title: 'From Concept to Launch: My Latest Project Journey',
    excerpt: 'A behind-the-scenes look at the process of building a modern web application from initial concept to final deployment.',
    date: 'February 10, 2024',
    category: 'Case Study',
    readTime: '10 min read',
    image: '/placeholder.svg'
  }
];

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-32">
        <div className="container mb-8">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ChevronLeft size={16} />
              Back to Home
            </Button>
          </Link>
        </div>
        
        <section className="py-8">
          <div className="container">
            <ScrollReveal>
              <SectionHeading 
                title="My Blog"
                subtitle="Thoughts, tutorials, and insights about design, development, and the tech industry."
              />
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {blogPosts.map((post, index) => (
                <ScrollReveal 
                  key={post.id} 
                  delay={index * 100}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                >
                  <article className="glass rounded-xl overflow-hidden hover-lift h-full flex flex-col">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-primary">{post.category}</span>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                      <div className="flex justify-between items-center mt-auto">
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                        <Button variant="ghost" size="sm" className="hover:text-primary">
                          Read More
                        </Button>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
