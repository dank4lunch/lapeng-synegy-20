import { ArrowRight, Calendar, Clock, User, Tag, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  imageUrl?: string;
  featured?: boolean;
}

// Mock blog data
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of AI in Small Business Marketing",
    excerpt: "Discover how artificial intelligence is revolutionizing marketing strategies for small and medium businesses, making advanced tools accessible to everyone.",
    content: "Full article content here...",
    author: "Thabang Makhema",
    publishDate: "2024-01-15",
    readTime: "5 min read",
    category: "AI & Technology",
    tags: ["AI", "Marketing", "Small Business", "Automation"],
    featured: true
  },
  {
    id: "2",
    title: "Building a Strong Brand Identity in the Digital Age",
    excerpt: "Learn the essential elements of creating a memorable brand that resonates with your audience and stands out in today's competitive digital landscape.",
    content: "Full article content here...",
    author: "Tshiamo Sookane",
    publishDate: "2024-01-10",
    readTime: "7 min read",
    category: "Branding",
    tags: ["Branding", "Design", "Digital Marketing", "Strategy"]
  },
  {
    id: "3",
    title: "5 Social Media Trends to Watch in 2024",
    excerpt: "Stay ahead of the curve with these emerging social media trends that will shape how businesses connect with their audiences this year.",
    content: "Full article content here...",
    author: "Tshiamo Sookane",
    publishDate: "2024-01-08",
    readTime: "4 min read",
    category: "Social Media",
    tags: ["Social Media", "Trends", "Marketing", "2024"]
  },
  {
    id: "4",
    title: "Web Development Best Practices for 2024",
    excerpt: "Explore the latest web development trends, from performance optimization to user experience design, that will define modern websites.",
    content: "Full article content here...",
    author: "Thabang Makhema",
    publishDate: "2024-01-05",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["Web Development", "UX/UI", "Performance", "Best Practices"]
  },
  {
    id: "5",
    title: "Virtual Assistants: The Secret to Scaling Your Business",
    excerpt: "Learn how virtual assistants can help entrepreneurs and small business owners focus on growth while handling administrative tasks efficiently.",
    content: "Full article content here...",
    author: "Lapeng Synegy Team",
    publishDate: "2024-01-02",
    readTime: "6 min read",
    category: "Business Growth",
    tags: ["Virtual Assistant", "Business Growth", "Productivity", "Outsourcing"]
  },
  {
    id: "6",
    title: "Digital Transformation for Traditional Businesses",
    excerpt: "A comprehensive guide to help traditional businesses navigate the digital transformation process successfully and stay competitive.",
    content: "Full article content here...",
    author: "Thabang Makhema",
    publishDate: "2023-12-28",
    readTime: "10 min read",
    category: "Digital Transformation",
    tags: ["Digital Transformation", "Technology", "Business Strategy", "Innovation"]
  }
];

const categories = [...new Set(blogPosts.map(post => post.category))];

export default function Blog() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handleReadMore = (postId: string) => {
    // In a real app, this would navigate to the individual blog post
    navigate(`/blog/${postId}`);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-8 bg-primary/10 text-primary border-primary/20 px-6 py-3 text-lg font-medium">
              📝 Our Blog
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8">
              Insights &
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Industry Knowledge
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Stay updated with the latest trends in marketing, technology, and business growth strategies
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "All" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("All")}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && searchQuery === "" && selectedCategory === "All" && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="slideUp">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-primary/20">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-12 flex items-center">
                    <div>
                      <Badge className="mb-4 bg-primary text-primary-foreground">Featured Article</Badge>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {featuredPost.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center space-x-6 mb-6 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(featuredPost.publishDate)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      <Button 
                        onClick={() => handleReadMore(featuredPost.id)}
                        className="bg-primary hover:bg-primary/90"
                      >
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-secondary/5 to-primary/5 p-12 flex items-center justify-center">
                    <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Tag className="h-8 w-8 text-primary" />
                        </div>
                        <p className="text-primary font-semibold">{featuredPost.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <Search className="h-16 w-16 mx-auto text-muted-foreground mb-4 opacity-50" />
              <h3 className="text-2xl font-bold text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <AnimatedSection key={post.id} animation="slideUp" delay={index * 100}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(post.publishDate)}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleReadMore(post.id)}
                        className="group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <Card className="text-center p-12 bg-gradient-to-br from-primary/10 to-secondary/10">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Stay Updated with Our Latest Insights
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get the latest articles on marketing, technology, and business growth delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
