import { CheckCircle, ArrowRight, Users, Zap, Target, Shield, Smartphone, Globe, Brain, TrendingUp, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Index() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    scrollToSection('contact');
  };

  const handleViewWork = () => {
    scrollToSection('services');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-5xl mx-auto">
            <Badge className="mb-8 bg-primary/10 text-primary border-primary/20 px-6 py-3 text-lg font-medium">
              Media • Marketing • Technology
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
              Bridge the gap between
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"> creativity </span>
              and
              <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent"> technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Lapeng Synegy empowers businesses through integrated marketing strategies,
              engaging media content, and smart tech innovations that deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleGetStarted}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleViewWork}
                className="px-8 py-4 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 relative">
                Our Core Services
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-8">
              We blend creative media strategies with smart technology to ensure you stand out and achieve measurable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Media & Marketing */}
            <Card className="border-2 hover:border-secondary/50 transition-all duration-500 group hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-white to-muted/30">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-secondary/30 group-hover:to-secondary/20 transition-all duration-300 group-hover:scale-110">
                  <TrendingUp className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-3xl text-foreground mb-3">Media & Marketing Solutions</CardTitle>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  Strategic marketing that builds brands and drives engagement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-4 py-2">
                <CheckCircle className="h-6 w-6 text-success mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-lg">Social Media Management & Marketing</span>
              </li>
                  <li className="flex items-start space-x-4 py-2">
                <CheckCircle className="h-6 w-6 text-success mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-lg">Brand Development & Positioning</span>
              </li>
                  <li className="flex items-start space-x-4 py-2">
                <CheckCircle className="h-6 w-6 text-success mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-lg">Creative Content Production</span>
              </li>
                  <li className="flex items-start space-x-4 py-2">
                <CheckCircle className="h-6 w-6 text-success mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-lg">Marketing Strategy & Campaign Execution</span>
              </li>
                </ul>
              </CardContent>
            </Card>

            {/* Technology Solutions */}
            <Card className="border-2 hover:border-primary/50 transition-all duration-500 group hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-white to-muted/30">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl text-foreground mb-3">Technology Solutions</CardTitle>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  Innovative tech solutions that drive digital transformation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <span className="text-muted-foreground">Web & Mobile Application Development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <span className="text-muted-foreground">AI-driven Solutions & Automations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <span className="text-muted-foreground">IT Support & Consulting</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <span className="text-muted-foreground">Digital Transformation Strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Measurable Results</h3>
              <p className="text-muted-foreground">Data-driven strategies that deliver clear ROI and business growth</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Innovation First</h3>
              <p className="text-muted-foreground">Cutting-edge solutions that keep you ahead of the competition</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Trusted Partnership</h3>
              <p className="text-muted-foreground">Long-term relationships built on excellence and integrity</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Directors
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry experts who combine strategic thinking with innovative vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">TM</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Thabang Makhema</h3>
              <p className="text-primary font-semibold mb-4">Co-Founder & Director</p>
              <p className="text-muted-foreground leading-relaxed">
                Expert in management, marketing, and emerging technologies. With formal qualifications in 
                Management Marketing, AI Foundations, and Sunbird Ed, Thabang combines strategic thinking 
                with an innovative mindset to deliver impactful solutions.
              </p>
            </Card>

            <Card className="text-center p-8">
              <div className="w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">TS</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Tshiamo Sookane</h3>
              <p className="text-secondary font-semibold mb-4">Co-Founder & Director</p>
              <p className="text-muted-foreground leading-relaxed">
                Brand Development, Marketing, and Media Specialist with strong experience in crafting 
                compelling brand stories and campaigns. Tshiamo has a sharp eye for creativity and strategy, 
                ensuring brands stand out and resonate with their audiences.
              </p>
            </Card>
          </div>

          {/* Company Values */}
          <div className="mt-16 bg-muted/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">Embracing creativity and technology</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Excellence</h4>
                <p className="text-sm text-muted-foreground">Delivering high-quality solutions</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Collaboration</h4>
                <p className="text-sm text-muted-foreground">Building strong partnerships</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Integrity</h4>
                <p className="text-sm text-muted-foreground">Upholding honesty and professionalism</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Virtual Assistant Subscription Plans
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional support tailored to your business needs with flexible subscription options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Focus Plan */}
            <Card className="relative border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Focus</CardTitle>
                <CardDescription>For solopreneurs & first-time VA users</CardDescription>
                <div className="text-3xl font-bold text-foreground">
                  R1,850<span className="text-lg text-muted-foreground font-normal">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm text-muted-foreground">10 hours/month VA support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm text-muted-foreground">Inbox & calendar management</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm text-muted-foreground">Basic data entry & research</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm text-muted-foreground">1x weekly progress update</span>
                </div>
                <Button
                  className="w-full mt-6 hover:bg-primary hover:text-white transition-all duration-300"
                  variant="outline"
                  onClick={() => window.open('mailto:info@lapengsynegy.com?subject=Focus Plan Inquiry', '_blank')}
                >
                  Choose Focus
                </Button>
              </CardContent>
            </Card>

            {/* Momentum Plan */}
            <Card className="relative border-2 hover:border-secondary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Momentum</CardTitle>
                <CardDescription>For growing businesses</CardDescription>
                <div className="text-3xl font-bold text-foreground">
                  R3,700<span className="text-lg text-muted-foreground font-normal">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm text-muted-foreground">20 hours/month VA support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm text-muted-foreground">Everything in Focus +</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm text-muted-foreground">Social media scheduling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm text-muted-foreground">Priority response (24h)</span>
                </div>
                <Button
                  className="w-full mt-6 bg-secondary hover:bg-secondary/90 transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={() => window.open('mailto:info@lapengsynegy.com?subject=Momentum Plan Inquiry', '_blank')}
                >
                  Choose Momentum
                </Button>
              </CardContent>
            </Card>

            {/* Synegy Plan */}
            <Card className="relative border-2 border-primary bg-primary/5 hover:border-primary transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Synegy</CardTitle>
                <CardDescription>For busy professionals & teams</CardDescription>
                <div className="text-3xl font-bold text-foreground">
                  R7,400<span className="text-lg text-muted-foreground font-normal">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm text-muted-foreground">40 hours/month VA support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm text-muted-foreground">Everything in Momentum +</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm text-muted-foreground">Meeting notes & reports</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm text-muted-foreground">End-of-month analytics</span>
                </div>
                <Button
                  className="w-full mt-6 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={() => window.open('mailto:info@lapengsynegy.com?subject=Synegy Plan Inquiry', '_blank')}
                >
                  Choose Synegy
                </Button>
              </CardContent>
            </Card>

            {/* Executive Partner Plan */}
            <Card className="relative border-2 hover:border-accent/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Executive Partner</CardTitle>
                <CardDescription>For established businesses</CardDescription>
                <div className="text-3xl font-bold text-foreground">
                  R12,000<span className="text-lg text-muted-foreground font-normal">+/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm text-muted-foreground">60+ hours/month (custom)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm text-muted-foreground">Dedicated VA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm text-muted-foreground">Full workflow integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm text-muted-foreground">Bi-weekly strategy check-ins</span>
                </div>
                <Button
                  className="w-full mt-6 bg-accent hover:bg-accent/90 transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={() => window.open('mailto:info@lapengsynegy.com?subject=Executive Partner Plan Inquiry', '_blank')}
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Flexible subscription • Cancel or upgrade anytime • Secure & professional task handling
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's build something amazing together. Contact us today to discuss your project and discover 
            how we can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleGetStarted}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('mailto:info@lapengsynegy.com', '_blank')}
              className="px-8 py-4 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
