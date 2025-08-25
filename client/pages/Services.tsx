import { CheckCircle, ArrowRight, TrendingUp, Brain, Smartphone, Globe, Users, Zap, Target, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleViewPricing = () => {
    navigate('/pricing');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-8 bg-primary/10 text-primary border-primary/20 px-6 py-3 text-lg font-medium">
              🚀 Our Services
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8">
              Comprehensive Solutions for
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              We blend creative media strategies with smart technology to ensure you stand out and achieve measurable growth
            </p>
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
            >
              Start Your Project
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Two main service areas that work together to transform your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Media & Marketing */}
            <Card className="border-2 hover:border-secondary/50 transition-all duration-500 group hover:shadow-2xl hover:-translate-y-3 bg-gradient-to-br from-white to-secondary/5">
              <CardHeader className="pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-secondary/30 group-hover:to-secondary/20 transition-all duration-300 group-hover:scale-110">
                  <TrendingUp className="h-10 w-10 text-secondary" />
                </div>
                <CardTitle className="text-4xl text-foreground mb-4">Media & Marketing Solutions</CardTitle>
                <CardDescription className="text-xl text-muted-foreground leading-relaxed">
                  Strategic marketing that builds brands and drives engagement through creative excellence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-4 py-2">
                    <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">Social Media Management & Marketing</h4>
                      <p className="text-muted-foreground">Complete social media strategy, content creation, and community management</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4 py-2">
                    <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">Brand Development & Positioning</h4>
                      <p className="text-muted-foreground">Strategic brand identity, messaging, and market positioning</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4 py-2">
                    <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">Creative Content Production</h4>
                      <p className="text-muted-foreground">Graphics, video, photography, and multimedia content creation</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4 py-2">
                    <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">Marketing Strategy & Campaign Execution</h4>
                      <p className="text-muted-foreground">Data-driven campaigns with measurable results and ROI tracking</p>
                    </div>
                  </li>
                </ul>
                <Button 
                  onClick={handleGetStarted}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white py-3 text-lg transition-all duration-300"
                >
                  Get Marketing Support
                </Button>
              </CardContent>
            </Card>

            {/* Technology Solutions */}
            <Card className="border-2 hover:border-primary/50 transition-all duration-500 group hover:shadow-2xl hover:-translate-y-3 bg-gradient-to-br from-white to-primary/5">
              <CardHeader className="pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
                  <Brain className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-4xl text-foreground mb-4">Technology Solutions</CardTitle>
                <CardDescription className="text-xl text-muted-foreground leading-relaxed">
                  Innovative tech solutions that drive digital transformation and operational efficiency
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-4 py-2">
                    <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">Web & Mobile Application Development</h4>
                      <p className="text-muted-foreground">Custom websites, web apps, and mobile applications</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4 py-2">
                    <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">AI-driven Solutions & Automations</h4>
                      <p className="text-muted-foreground">Smart automation, chatbots, and AI-powered business tools</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4 py-2">
                    <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">IT Support & Consulting</h4>
                      <p className="text-muted-foreground">Ongoing technical support and strategic IT consulting</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4 py-2">
                    <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">Digital Transformation Strategies</h4>
                      <p className="text-muted-foreground">Complete digital overhaul and process optimization</p>
                    </div>
                  </li>
                </ul>
                <Button 
                  onClick={handleGetStarted}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg transition-all duration-300"
                >
                  Get Tech Solutions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Lapeng Synegy?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our unique approach combines the best of both worlds to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:-translate-y-3 transition-all duration-500">
              <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:from-primary/30 group-hover:to-primary/20 group-hover:scale-110 transition-all duration-300">
                <Target className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Measurable Results</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Data-driven strategies that deliver clear ROI and business growth with transparent reporting
              </p>
            </div>

            <div className="text-center group hover:-translate-y-3 transition-all duration-500">
              <div className="w-24 h-24 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:from-secondary/30 group-hover:to-secondary/20 group-hover:scale-110 transition-all duration-300">
                <Zap className="h-12 w-12 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Innovation First</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Cutting-edge solutions that keep you ahead of the competition with latest technologies
              </p>
            </div>

            <div className="text-center group hover:-translate-y-3 transition-all duration-500">
              <div className="w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:from-accent/30 group-hover:to-accent/20 group-hover:scale-110 transition-all duration-300">
                <Shield className="h-12 w-12 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Trusted Partnership</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Long-term relationships built on excellence, integrity, and consistent delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery every time
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Discovery</h3>
              <p className="text-muted-foreground">Understanding your business goals, challenges, and requirements</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Strategy</h3>
              <p className="text-muted-foreground">Developing a customized approach tailored to your specific needs</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Execution</h3>
              <p className="text-muted-foreground">Implementing solutions with regular updates and transparent communication</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Optimize</h3>
              <p className="text-muted-foreground">Continuous improvement and optimization based on performance data</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/15 via-secondary/10 to-primary/15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Let's discuss your project and discover how our integrated approach can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
            >
              Start Your Project
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleViewPricing}
              className="px-12 py-6 text-xl border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
            >
              View Pricing Plans
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
