import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate, useParams } from "react-router-dom";

export default function BlogPost() {
  const navigate = useNavigate();
  const { id } = useParams();

  // This would typically fetch the blog post data based on the ID
  // For now, we'll show a placeholder
  
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Article Content */}
      <article className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/blog')}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>

          <div className="text-center mb-12">
            <Badge className="mb-4">Article Preview</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Individual Blog Post Coming Soon
            </h1>
            <div className="flex items-center justify-center space-x-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Lapeng Synegy</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Coming Soon</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-muted/30 rounded-2xl p-12 text-center">
              <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-6" />
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Individual Blog Posts Coming Soon
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We're working on creating detailed, individual blog post pages with rich content, 
                social sharing, related articles, and more interactive features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => navigate('/blog')}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
                <Button variant="outline" onClick={() => navigate('/contact')}>
                  <Share2 className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
