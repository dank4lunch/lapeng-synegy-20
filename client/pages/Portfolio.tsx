import { ArrowRight, ExternalLink, Calendar, TrendingUp, Users, Target, Star, Filter, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  category: string;
  services: string[];
  duration: string;
  year: string;
  imageUrl?: string;
  featured?: boolean;
  metrics: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
}

// Mock portfolio data
const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Digital Transformation for Tech Startup",
    client: "InnovateTech Solutions",
    description: "Complete digital transformation including brand identity, web presence, and marketing automation for a growing tech startup.",
    challenge: "InnovateTech needed to establish a professional digital presence to attract investors and enterprise clients while scaling their operations efficiently.",
    solution: "We developed a comprehensive brand identity, built a modern website with lead generation capabilities, and implemented AI-powered marketing automation.",
    results: [
      "300% increase in qualified leads",
      "150% improvement in conversion rates",
      "50% reduction in manual marketing tasks",
      "Successfully secured Series A funding"
    ],
    category: "Digital Transformation",
    services: ["Brand Development", "Web Development", "Marketing Automation", "AI Solutions"],
    duration: "6 months",
    year: "2024",
    featured: true,
    metrics: [
      { label: "Lead Increase", value: "+300%", icon: <TrendingUp className="h-4 w-4" /> },
      { label: "Conversion Rate", value: "+150%", icon: <Target className="h-4 w-4" /> },
      { label: "Time Saved", value: "50%", icon: <Users className="h-4 w-4" /> }
    ]
  },
  {
    id: "2",
    title: "E-commerce Platform Redesign",
    client: "StyleHub Boutique",
    description: "Complete e-commerce platform redesign with improved UX/UI, inventory management, and social media integration.",
    challenge: "StyleHub's existing platform had poor user experience resulting in high cart abandonment rates and low customer retention.",
    solution: "We redesigned the entire user experience, integrated social commerce features, and implemented personalized product recommendations.",
    results: [
      "40% reduction in cart abandonment",
      "60% increase in repeat customers",
      "200% growth in social media sales",
      "35% improvement in average order value"
    ],
    category: "E-commerce",
    services: ["Web Development", "UX/UI Design", "Social Media Integration"],
    duration: "4 months",
    year: "2023",
    metrics: [
      { label: "Cart Abandonment", value: "-40%", icon: <TrendingUp className="h-4 w-4" /> },
      { label: "Repeat Customers", value: "+60%", icon: <Users className="h-4 w-4" /> },
      { label: "Social Sales", value: "+200%", icon: <Target className="h-4 w-4" /> }
    ]
  },
  {
    id: "3",
    title: "Virtual Assistant Implementation",
    client: "GrowthCorp Consulting",
    description: "Comprehensive virtual assistant program to streamline operations and improve client service delivery.",
    challenge: "GrowthCorp was struggling with administrative overhead that was preventing them from focusing on high-value client work.",
    solution: "We implemented our Synergy VA plan with dedicated support for client communications, project management, and administrative tasks.",
    results: [
      "70% reduction in administrative time",
      "25% increase in billable hours",
      "90% improvement in client response time",
      "50% growth in client satisfaction scores"
    ],
    category: "Virtual Assistant",
    services: ["Virtual Assistant", "Process Automation", "Client Management"],
    duration: "Ongoing",
    year: "2023",
    metrics: [
      { label: "Admin Time", value: "-70%", icon: <TrendingUp className="h-4 w-4" /> },
      { label: "Billable Hours", value: "+25%", icon: <Target className="h-4 w-4" /> },
      { label: "Response Time", value: "+90%", icon: <Users className="h-4 w-4" /> }
    ]
  },
  {
    id: "4",
    title: "Social Media Campaign for Non-Profit",
    client: "Community Impact Foundation",
    description: "Multi-platform social media campaign to increase awareness and donations for community programs.",
    challenge: "The foundation needed to reach younger demographics and increase engagement while maintaining their authentic community voice.",
    solution: "We created compelling storytelling content, implemented targeted advertising, and developed community engagement strategies.",
    results: [
      "400% increase in social media followers",
      "250% growth in online donations",
      "500% improvement in engagement rates",
      "Reached 100k+ people monthly"
    ],
    category: "Social Media Marketing",
    services: ["Social Media Management", "Content Creation", "Digital Advertising"],
    duration: "8 months",
    year: "2023",
    metrics: [
      { label: "Followers", value: "+400%", icon: <Users className="h-4 w-4" /> },
      { label: "Donations", value: "+250%", icon: <TrendingUp className="h-4 w-4" /> },
      { label: "Engagement", value: "+500%", icon: <Target className="h-4 w-4" /> }
    ]
  },
  {
    id: "5",
    title: "AI-Powered Customer Service",
    client: "ServicePro Industries",
    description: "Implementation of AI chatbot and automated customer service workflows to improve response times and customer satisfaction.",
    challenge: "ServicePro was experiencing long customer service wait times and repetitive inquiries that were overwhelming their support team.",
    solution: "We developed and implemented an AI chatbot with natural language processing and created automated workflows for common inquiries.",
    results: [
      "80% reduction in response time",
      "60% decrease in support tickets",
      "95% customer satisfaction rate",
      "24/7 customer support availability"
    ],
    category: "AI Solutions",
    services: ["AI Development", "Process Automation", "Customer Service"],
    duration: "5 months",
    year: "2023",
    metrics: [
      { label: "Response Time", value: "-80%", icon: <TrendingUp className="h-4 w-4" /> },
      { label: "Support Tickets", value: "-60%", icon: <Target className="h-4 w-4" /> },
      { label: "Satisfaction", value: "95%", icon: <Star className="h-4 w-4" /> }
    ]
  },
  {
    id: "6",
    title: "Brand Revitalization Project",
    client: "Heritage Manufacturing",
    description: "Complete brand refresh for a traditional manufacturing company transitioning to modern markets.",
    challenge: "Heritage Manufacturing had an outdated brand image that wasn't resonating with modern B2B buyers and younger decision-makers.",
    solution: "We conducted market research, developed a modern brand identity, and created a comprehensive brand guidelines system.",
    results: [
      "45% increase in brand recognition",
      "30% improvement in lead quality",
      "55% growth in website traffic",
      "20% increase in average deal size"
    ],
    category: "Brand Development",
    services: ["Brand Strategy", "Visual Identity", "Brand Guidelines"],
    duration: "3 months",
    year: "2024",
    metrics: [
      { label: "Brand Recognition", value: "+45%", icon: <TrendingUp className="h-4 w-4" /> },
      { label: "Lead Quality", value: "+30%", icon: <Target className="h-4 w-4" /> },
      { label: "Website Traffic", value: "+55%", icon: <Eye className="h-4 w-4" /> }
    ]
  }
];

const categories = [...new Set(caseStudies.map(study => study.category))];

export default function Portfolio() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCaseStudies = useMemo(() => {
    return selectedCategory === "All" 
      ? caseStudies 
      : caseStudies.filter(study => study.category === selectedCategory);
  }, [selectedCategory]);

  const featuredStudy = caseStudies.find(study => study.featured);

  const handleViewCase = (caseId: string) => {
    // In a real app, this would navigate to individual case study
    navigate(`/portfolio/${caseId}`);
  };

  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-8 bg-primary/10 text-primary border-primary/20 px-6 py-3 text-lg font-medium">
              🏆 Our Portfolio
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8">
              Success Stories &
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Client Results
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Discover how we've helped businesses transform their digital presence and achieve remarkable growth
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-lg font-semibold text-foreground">Filter by Category:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "All" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("All")}
              >
                All Projects
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

      {/* Featured Case Study */}
      {featuredStudy && selectedCategory === "All" && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="slideUp">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-primary/20">
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-2 p-12">
                    <Badge className="mb-4 bg-primary text-primary-foreground">Featured Case Study</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {featuredStudy.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {featuredStudy.description}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {featuredStudy.metrics.map((metric, index) => (
                        <div key={index} className="text-center">
                          <div className="flex items-center justify-center mb-2">
                            {metric.icon}
                          </div>
                          <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                          <div className="text-sm text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredStudy.services.map((service) => (
                        <Badge key={service} variant="outline">
                          {service}
                        </Badge>
                      ))}
                    </div>

                    <Button 
                      onClick={() => handleViewCase(featuredStudy.id)}
                      className="bg-primary hover:bg-primary/90"
                    >
                      View Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-12 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                        <TrendingUp className="h-16 w-16 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Client: {featuredStudy.client}</h3>
                      <p className="text-muted-foreground mb-4">{featuredStudy.category}</p>
                      <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{featuredStudy.year}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Target className="h-4 w-4" />
                          <span>{featuredStudy.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.filter(study => !study.featured).map((study, index) => (
              <AnimatedSection key={study.id} animation="slideUp" delay={index * 100}>
                <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs">
                        {study.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{study.year}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {study.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground font-medium">
                      Client: {study.client}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {study.description}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {study.metrics.slice(0, 3).map((metric, index) => (
                        <div key={index} className="text-center">
                          <div className="text-lg font-bold text-primary">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {study.services.slice(0, 2).map((service) => (
                        <Badge key={service} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                      {study.services.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{study.services.length - 2} more
                        </Badge>
                      )}
                    </div>

                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleViewCase(study.id)}
                      className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                    >
                      View Case Study
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Proven Results Across Industries
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our integrated approach consistently delivers measurable outcomes for businesses of all sizes
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedSection animation="scaleIn" delay={0}>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="scaleIn" delay={200}>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">200%</div>
                <div className="text-muted-foreground">Average Growth</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="scaleIn" delay={400}>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">95%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="scaleIn" delay={600}>
              <div className="text-center">
                <div className="text-4xl font-bold text-success mb-2">15+</div>
                <div className="text-muted-foreground">Industries Served</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <Card className="text-center p-12 bg-gradient-to-br from-primary/10 to-secondary/10">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Create Your Success Story?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Let's discuss how we can help transform your business and achieve results like these
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={handleContact}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/services')}
                  className="px-8 py-4"
                >
                  View Our Services
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
