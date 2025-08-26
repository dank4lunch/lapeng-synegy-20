import { ArrowRight, Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Contact Form Submission - ${formData.service || 'General Inquiry'}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Service Interest: ${formData.service}

Message:
${formData.message}
    `;
    
    window.open(`mailto:info@lapengsynegy.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  };

  const handleDirectEmail = () => {
    window.open('mailto:info@lapengsynegy.com', '_blank');
  };

  const handlePhoneCall = () => {
    window.open('tel:+27123456789', '_blank');
  };

  const handleScheduleMeeting = () => {
    window.open('mailto:info@lapengsynegy.com?subject=Schedule a Meeting&body=Hi, I would like to schedule a meeting to discuss my project requirements. Please let me know your available times.', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-8 bg-primary/10 text-primary border-primary/20 px-6 py-3 text-lg font-medium">
              📞 Contact Us
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8">
              Let's Build Something
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Ready to transform your business? Get in touch with our team and let's discuss how we can help you achieve your goals
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-primary/5">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Email Us</h3>
                <p className="text-muted-foreground mb-6">
                  Send us an email and we'll get back to you within 24 hours
                </p>
                <p className="text-lg font-semibold text-primary mb-4">info@lapengsynegy.com</p>
                <Button 
                  onClick={handleDirectEmail}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-secondary/5">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Call Us</h3>
                <p className="text-muted-foreground mb-6">
                  Speak directly with our team for immediate assistance
                </p>
                <p className="text-lg font-semibold text-secondary mb-4">+27 12 345 6789</p>
                <Button 
                  onClick={handlePhoneCall}
                  className="bg-secondary hover:bg-secondary/90"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-accent/5">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Schedule Meeting</h3>
                <p className="text-muted-foreground mb-6">
                  Book a consultation to discuss your project in detail
                </p>
                <p className="text-lg font-semibold text-accent mb-4">Free Consultation</p>
                <Button 
                  onClick={handleScheduleMeeting}
                  className="bg-accent hover:bg-accent/90"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <Card className="p-12 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-muted/30">
              <CardHeader className="pb-8">
                <CardTitle className="text-3xl text-foreground mb-4">Send Us a Message</CardTitle>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm font-medium">Service Interest</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a service</option>
                        <option value="Virtual Assistant">Virtual Assistant</option>
                        <option value="Marketing & Media">Marketing & Media</option>
                        <option value="Technology Solutions">Technology Solutions</option>
                        <option value="Brand Development">Brand Development</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Consulting">Consulting</option>
                        <option value="Custom Project">Custom Project</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project, goals, and how we can help you..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We're here to help you succeed. Whether you need a virtual assistant, 
                  marketing support, or technology solutions, our team is ready to discuss 
                  your project and provide the perfect solution.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Location</h3>
                    <p className="text-muted-foreground">South Africa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM SAST</p>
                    <p className="text-muted-foreground">Saturday - Sunday: 9:00 AM - 4:00 PM SAST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                    <p className="text-muted-foreground">We typically respond within 24 hours</p>
                    <p className="text-muted-foreground">Urgent matters: Call us directly</p>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5 border-success/20">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Free Consultation</h3>
                    <p className="text-muted-foreground">
                      Get a free 30-minute consultation to discuss your project and explore how we can help you achieve your goals.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quick answers to common questions about our services and process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-4">How quickly can you start a project?</h3>
              <p className="text-muted-foreground">
                We can typically start within 1-2 weeks after our initial consultation and contract signing. 
                For urgent projects, we offer expedited onboarding.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-4">Do you work with international clients?</h3>
              <p className="text-muted-foreground">
                Yes! While we're based in South Africa, we work with clients globally. 
                We're experienced in working across different time zones and cultural contexts.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-4">What's included in the free consultation?</h3>
              <p className="text-muted-foreground">
                Our free consultation includes project assessment, solution recommendations, 
                timeline estimation, and a custom proposal tailored to your needs.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-4">Can I upgrade my VA plan later?</h3>
              <p className="text-muted-foreground">
                Absolutely! Our subscription plans are flexible. You can upgrade, downgrade, 
                or cancel anytime with 30 days notice.
              </p>
            </Card>
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
            Don't wait – take the first step towards transforming your business today
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              onClick={handleScheduleMeeting}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleDirectEmail}
              className="px-12 py-6 text-xl border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <MessageSquare className="mr-3 h-6 w-6" />
              Send Quick Message
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
