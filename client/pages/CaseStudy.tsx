import { ArrowLeft, Calendar, TrendingUp, Target, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate, useParams } from "react-router-dom";

export default function CaseStudy() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Case Study Content */}
      <article className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/portfolio')}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>

          <div className="text-center mb-16">
            <Badge className="mb-4">Case Study Preview</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Detailed Case Studies Coming Soon
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're building comprehensive case study pages that will showcase our detailed methodology, 
              implementation process, and measurable results for each project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">What's Coming:</h2>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <span>Detailed project timelines and milestones</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <span>Before and after comparisons with visuals</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <span>Client testimonials and feedback</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <span>Detailed metrics and performance data</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <span>Implementation strategies and methodologies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-secondary/10 to-secondary/5">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">Featured Metrics:</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <TrendingUp className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="text-3xl font-bold text-secondary mb-1">+300%</div>
                    <div className="text-sm text-muted-foreground">Average Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Target className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="text-3xl font-bold text-secondary mb-1">95%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="text-3xl font-bold text-secondary mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Calendar className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="text-3xl font-bold text-secondary mb-1">6mo</div>
                    <div className="text-sm text-muted-foreground">Avg Timeline</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Interested in Our Work?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us to learn more about our methodology and how we can help your business achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/portfolio')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                View All Projects
              </Button>
              <Button variant="outline" onClick={() => navigate('/contact')}>
                <ExternalLink className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
