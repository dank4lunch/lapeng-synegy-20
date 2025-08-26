import { ArrowRight, Play, Star, Users, Zap, Target, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxBackground from "@/components/ParallaxBackground";

export default function Index() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleViewServices = () => {
    navigate('/services');
  };

  const handleViewPricing = () => {
    navigate('/pricing');
  };

  const scrollToStats = () => {
    const element = document.getElementById('stats');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-primary/10 to-transparent"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-pulse delay-500"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <Badge className="mb-8 bg-primary/10 text-primary border-primary/20 px-8 py-4 text-xl font-medium animate-fade-in">
              🚀 Media • Marketing • Technology
            </Badge>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground mb-8 leading-tight">
              Bridge the gap between
              <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                creativity
              </span>
              <span className="text-4xl md:text-6xl lg:text-7xl">and</span>
              <span className="block bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent animate-gradient">
                technology
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Transform your business with <span className="text-primary font-semibold">integrated marketing strategies</span>, 
              <span className="text-secondary font-semibold"> cutting-edge technology</span>, and 
              <span className="text-accent font-semibold"> measurable results</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="lg" 
                onClick={handleGetStarted}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
              >
                Start Your Transformation
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleViewServices}
                className="px-12 py-6 text-xl border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
              >
                <Play className="mr-3 h-6 w-6" />
                Explore Our Services
              </Button>
            </div>

            {/* Scroll indicator */}
            <button 
              onClick={scrollToStats}
              className="mx-auto block text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce"
            >
              <ChevronDown className="h-8 w-8" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-24 bg-muted/20 relative">
        <ParallaxBackground speed={0.3} className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
        </ParallaxBackground>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="scaleIn" delay={0}>
              <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-primary/5">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-4xl font-bold text-foreground mb-3">100%</h3>
                  <p className="text-xl text-muted-foreground">Measurable Results</p>
                  <p className="text-sm text-muted-foreground mt-2">Data-driven strategies that deliver clear ROI</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="scaleIn" delay={200}>
              <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-secondary/5">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-10 w-10 text-secondary" />
                  </div>
                  <h3 className="text-4xl font-bold text-foreground mb-3">24/7</h3>
                  <p className="text-xl text-muted-foreground">Innovation First</p>
                  <p className="text-sm text-muted-foreground mt-2">Cutting-edge solutions that keep you ahead</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="scaleIn" delay={400}>
              <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-accent/5">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-4xl font-bold text-foreground mb-3">50+</h3>
                  <p className="text-xl text-muted-foreground">Trusted Partners</p>
                  <p className="text-sm text-muted-foreground mt-2">Long-term relationships built on excellence</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                What We Do Best
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We combine creative excellence with technological innovation to deliver solutions that drive real business growth
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <AnimatedSection animation="slideLeft" delay={200}>
              <div className="group">
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">M</span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">Media & Marketing</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Strategic marketing campaigns, brand development, and creative content that builds authentic connections with your audience.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Social Media Management</li>
                    <li>✓ Brand Development</li>
                    <li>✓ Content Creation</li>
                    <li>✓ Campaign Strategy</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" delay={400}>
              <div className="group">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">T</span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">Technology Solutions</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Innovative tech solutions, AI automation, and digital transformation strategies that streamline your operations.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Web & Mobile Development</li>
                    <li>✓ AI Solutions & Automation</li>
                    <li>✓ Digital Transformation</li>
                    <li>✓ IT Support & Consulting</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              onClick={handleViewServices}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-12 py-6 text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
            >
              Explore All Services
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Client Success Stories
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <AnimatedSection key={i} animation="slideUp" delay={i * 200}>
                <Card className="p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-muted/30">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg text-muted-foreground mb-6 italic">
                      "Lapeng Synegy transformed our digital presence completely. Their integrated approach to marketing and technology delivered results beyond our expectations."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">C{i}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Client {i}</p>
                        <p className="text-sm text-muted-foreground">CEO, Company {i}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/15 via-secondary/10 to-primary/15 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Join successful businesses who trust Lapeng Synegy to bridge the gap between creativity and technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
            >
              Start Your Project Today
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleViewPricing}
              className="px-12 py-6 text-xl border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
            >
              View Our Plans
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
