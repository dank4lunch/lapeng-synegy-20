import { CheckCircle, ArrowRight, Star, Users, Clock, Headphones, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handlePlanInquiry = (planName: string) => {
    window.open(`mailto:info@lapengsynegy.com?subject=${planName} Plan Inquiry&body=Hi, I'm interested in the ${planName} plan. Please provide more details about this package.`, '_blank');
  };

  const handleCustomQuote = () => {
    window.open('mailto:info@lapengsynegy.com?subject=Custom Quote Request&body=Hi, I need a custom solution for my business. Please contact me to discuss my requirements.', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-8 bg-primary/10 text-primary border-primary/20 px-6 py-3 text-lg font-medium">
              💰 Pricing Plans
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8">
              Virtual Assistant
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Subscription Plans
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Professional support tailored to your business needs with flexible subscription options that grow with you
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Focus Plan */}
            <Card className="relative border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 bg-gradient-to-br from-white to-muted/20">
              <CardHeader className="pb-8">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-2xl text-foreground">Focus</CardTitle>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardDescription className="text-lg mb-6">For solopreneurs & first-time VA users</CardDescription>
                <div className="text-5xl font-bold text-foreground mb-2">
                  R1,850<span className="text-xl text-muted-foreground font-normal">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">Perfect for getting started</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">10 hours/month VA support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">Inbox & calendar management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">Basic data entry & research</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">1x weekly progress update</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">Email support</span>
                </div>
                <Button 
                  className="w-full mt-8 hover:bg-primary hover:text-white transition-all duration-300" 
                  variant="outline"
                  onClick={() => handlePlanInquiry('Focus')}
                >
                  Choose Focus
                </Button>
              </CardContent>
            </Card>

            {/* Momentum Plan */}
            <Card className="relative border-2 hover:border-secondary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 bg-gradient-to-br from-white to-secondary/5">
              <CardHeader className="pb-8">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-2xl text-foreground">Momentum</CardTitle>
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <CardDescription className="text-lg mb-6">For growing businesses</CardDescription>
                <div className="text-5xl font-bold text-foreground mb-2">
                  R3,700<span className="text-xl text-muted-foreground font-normal">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">Most popular choice</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">20 hours/month VA support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">Everything in Focus +</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">Social media scheduling (2 platforms)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">Client follow-ups & CRM updates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">Priority response (within 24h)</span>
                </div>
                <Button 
                  className="w-full mt-8 bg-secondary hover:bg-secondary/90 transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={() => handlePlanInquiry('Momentum')}
                >
                  Choose Momentum
                </Button>
              </CardContent>
            </Card>

            {/* Synergy Plan */}
            <Card className="relative border-2 border-primary bg-gradient-to-br from-primary/10 to-primary/5 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold shadow-lg">
                  ⭐ Most Popular
                </Badge>
              </div>
              <CardHeader className="pb-8 pt-8">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-2xl text-foreground">Synergy</CardTitle>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/20 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardDescription className="text-lg mb-6">For busy professionals & teams</CardDescription>
                <div className="text-5xl font-bold text-foreground mb-2">
                  R7,400<span className="text-xl text-muted-foreground font-normal">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">Best value for money</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">40 hours/month VA support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">Everything in Momentum +</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">Meeting notes & report preparation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">E-commerce/admin support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">End-of-month analytics report</span>
                </div>
                <Button 
                  className="w-full mt-8 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={() => handlePlanInquiry('Synergy')}
                >
                  Choose Synergy
                </Button>
              </CardContent>
            </Card>

            {/* Executive Partner Plan */}
            <Card className="relative border-2 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 bg-gradient-to-br from-white to-accent/5">
              <CardHeader className="pb-8">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-2xl text-foreground">Executive Partner</CardTitle>
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center">
                    <Headphones className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <CardDescription className="text-lg mb-6">For established businesses</CardDescription>
                <div className="text-5xl font-bold text-foreground mb-2">
                  R12,000<span className="text-xl text-muted-foreground font-normal">+/month</span>
                </div>
                <p className="text-sm text-muted-foreground">Enterprise solution</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">60+ hours/month (custom)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">Dedicated VA (trained to your processes)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">Full workflow integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">Project support (events, launches)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">Bi-weekly strategy check-ins</span>
                </div>
                <Button 
                  className="w-full mt-8 bg-accent hover:bg-accent/90 transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={() => handlePlanInquiry('Executive Partner')}
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-8">
              ✅ Flexible subscription • ✅ Cancel or upgrade anytime • ✅ Secure & professional task handling
            </p>
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
            Choose your plan and start experiencing professional virtual assistant support that scales with your business
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
            >
              Start Free Consultation
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => window.open('mailto:info@lapengsynegy.com', '_blank')}
              className="px-12 py-6 text-xl border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <Mail className="mr-3 h-6 w-6" />
              Ask Questions
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
