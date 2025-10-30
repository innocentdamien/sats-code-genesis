import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      title: "Why We're Bitcoin-Only",
      excerpt: "Exploring our commitment to Bitcoin and why we believe it's the only truly decentralized digital money.",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      category: "Philosophy",
    },
    {
      title: "The Power of Automated Dollar-Cost Averaging",
      excerpt: "Learn how DCA removes emotion from investing and builds wealth over time with Bitcoin.",
      date: "Jan 10, 2025",
      readTime: "7 min read",
      category: "Strategy",
    },
    {
      title: "Securing Your Sats: A Beginner's Guide",
      excerpt: "Everything you need to know about keeping your Bitcoin safe, from hardware wallets to best practices.",
      date: "Jan 5, 2025",
      readTime: "10 min read",
      category: "Security",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The SatsCode Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, guides, and thoughts on Bitcoin, sovereignty, and the future of money.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <Card 
              key={index}
              className="p-6 bg-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-border flex flex-col"
            >
              <div className="flex-1 space-y-4">
                <Badge className="bg-accent/10 text-accent border-accent/20">
                  {article.category}
                </Badge>
                
                <h3 className="text-2xl font-bold text-card-foreground leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                className="w-full mt-6 group"
              >
                Read More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
