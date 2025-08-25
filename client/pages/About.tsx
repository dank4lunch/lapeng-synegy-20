import { ArrowRight, Users, Zap, Target, Shield, Star, Quote, Award, Calendar, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleViewServices = () => {
    navigate('/services');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-8 bg-primary/10 text-primary border-primary/20 px-6 py-3 text-lg font-medium">
              🏢 About Us
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8">
              Bridging
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Creativity & Technology
              </span>
              Since Day One
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              We're a modern solutions-driven company that empowers businesses in the digital era through integrated marketing strategies and innovative technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Lapeng Synegy was founded with a clear vision: to empower businesses in the digital era by combining creativity, strategic marketing, and innovative tech solutions. We recognized that today's businesses need more than just visibility — they need connection, growth, and sustainability.
                </p>
                <p>
                  Our founders, with their complementary expertise in marketing, technology, and brand development, came together to create an integrated approach that delivers measurable results. We believe that the best solutions come from bridging the gap between creative excellence and technological innovation.
                </p>
                <p>
                  Today, we serve startups, SMEs, NGOs, and corporates, helping them build their identity, engage with their audience, and transform digitally. Every project we deliver and every partnership we build is guided by our core values of innovation, excellence, collaboration, and integrity.
                </p>
              </div>
              <Button 
                onClick={handleViewServices}
                className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <TrendingUp className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Growth-Focused</h3>
                  <p className="text-muted-foreground">Every solution designed for measurable business growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our Directors
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry experts who combine strategic thinking with innovative vision to drive exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="text-center p-12 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-primary/5">
              <div className="w-40 h-40 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-4xl">TM</span>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-3">Thabang Makhema</h3>
              <p className="text-primary font-bold mb-6 text-xl">Co-Founder & Director</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg mb-8">
                <p>
                  Expert in management, marketing, and emerging technologies. With formal qualifications in 
                  Management Marketing, AI Foundations, and Sunbird Ed, Thabang combines strategic thinking 
                  with an innovative mindset.
                </p>
                <p>
                  His expertise lies in leveraging technology and data to drive impactful marketing solutions 
                  that help clients achieve sustainable growth and competitive advantage.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">Management Marketing</Badge>
                <Badge variant="secondary">AI Foundations</Badge>
                <Badge variant="secondary">Sunbird Ed</Badge>
                <Badge variant="secondary">Strategic Leadership</Badge>
              </div>
            </Card>

            <Card className="text-center p-12 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-secondary/5">
              <div className="w-40 h-40 bg-gradient-to-br from-secondary to-primary rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-4xl">TS</span>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-3">Tshiamo Sookane</h3>
              <p className="text-secondary font-bold mb-6 text-xl">Co-Founder & Director</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg mb-8">
                <p>
                  Brand Development, Marketing, and Media Specialist with strong experience in crafting 
                  compelling brand stories and campaigns. Tshiamo has a sharp eye for creativity and strategy.
                </p>
                <p>
                  His approach ensures that brands under Lapeng Synegy's guidance stand out in the market 
                  and create authentic connections with their target audiences.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">Brand Development</Badge>
                <Badge variant="secondary">Marketing Strategy</Badge>
                <Badge variant="secondary">Media Production</Badge>
                <Badge variant="secondary">Creative Direction</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision we make and every solution we deliver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-primary/5">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Embracing creativity and cutting-edge technology to deliver solutions that keep you ahead of the curve
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-secondary/5">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Delivering high-quality, impactful solutions that exceed expectations and drive real results
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-accent/5">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Collaboration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building strong partnerships with clients through open communication and shared success
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-success/5">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-gradient-to-br from-success/20 to-success/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Integrity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Upholding honesty, transparency, and professionalism in every interaction and project
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="p-12 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-primary/5">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl text-foreground">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To deliver creative, technology-driven solutions that empower brands to connect, grow, and thrive in the digital era. 
                  We are committed to helping businesses achieve their goals through integrated marketing strategies and innovative tech solutions 
                  that deliver measurable results.
                </p>
              </CardContent>
            </Card>

            <Card className="p-12 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-secondary/5">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl text-foreground">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become a trusted leader in integrated media, marketing, and tech solutions across South Africa and beyond. 
                  We envision a future where every business, regardless of size, has access to world-class creative and technological 
                  solutions that drive sustainable growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Journey in Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl font-bold text-primary mb-3">50+</div>
              <p className="text-lg text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl font-bold text-secondary mb-3">100+</div>
              <p className="text-lg text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl font-bold text-accent mb-3">24/7</div>
              <p className="text-lg text-muted-foreground">Support Available</p>
            </div>
            <div className="text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl font-bold text-success mb-3">100%</div>
              <p className="text-lg text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/15 via-secondary/10 to-primary/15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Join the growing number of businesses that trust Lapeng Synegy to bridge the gap between creativity and technology
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
            >
              Start Your Journey
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleViewServices}
              className="px-12 py-6 text-xl border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
