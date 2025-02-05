import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Shirt, 
  Timer, 
  Truck,
  Phone, 
  Mail, 
  MapPin,
  ExternalLink
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Your Clothes Deserve The Best Care
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Professional laundry service with free pickup and delivery. Save time and get your clothes fresh and clean.
            </p>
            <Button size="lg" className="gap-2" asChild>
              <a href="https://example.com/refer" target="_blank" rel="noopener noreferrer">
                Get Started
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Shirt className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Wash & Fold</h3>
                <p className="text-muted-foreground">
                  Professional washing, drying, and folding of your everyday clothes
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Timer className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">24hr Service</h3>
                <p className="text-muted-foreground">
                  Quick turnaround time with same-day service available
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Truck className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
                <p className="text-muted-foreground">
                  Convenient pickup and delivery to your doorstep
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">contact@freshclean.com</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-muted-foreground">123 Clean Street, Laundry City, ST 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-background">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2024 Fresh & Clean Laundry Service. All rights reserved.
        </div>
      </footer>
    </div>
  );
}