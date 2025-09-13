import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">Get in touch for your free quote and consultation</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
            
            <form className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-primary font-semibold">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="fullName" 
                  type="text" 
                  className="mt-2 border-gray-300 focus:border-primary" 
                  required 
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-primary font-semibold">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="email" 
                  type="email" 
                  className="mt-2 border-gray-300 focus:border-primary" 
                  required 
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-primary font-semibold">
                  Phone <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  className="mt-2 border-gray-300 focus:border-primary" 
                  required 
                />
              </div>

              <div>
                <Label htmlFor="service" className="text-primary font-semibold">
                  Service Needed
                </Label>
                <Select>
                  <SelectTrigger className="mt-2 border-gray-300 focus:border-primary">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kitchen">Kitchen Remodeling</SelectItem>
                    <SelectItem value="bathroom">Bathroom Renovation</SelectItem>
                    <SelectItem value="addition">Home Additions</SelectItem>
                    <SelectItem value="commercial">Commercial Buildouts</SelectItem>
                    <SelectItem value="demolition">Demolition</SelectItem>
                    <SelectItem value="site">Site Development</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-primary font-semibold">
                  Message
                </Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project..." 
                  className="mt-2 border-gray-300 focus:border-primary h-32" 
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 text-lg rounded-full"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-primary text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-200">(774) 329-4239</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-gray-300 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-200">jorgiellc@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Service Area</h3>
                  <p className="text-gray-200">
                    Providence, Warwick, Cranston,<br />
                    Newport & surrounding areas
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-gray-300 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                  <div className="text-gray-200 space-y-1">
                    <p>Mon-Fri: 7AM-6PM</p>
                    <p>Sat: 8AM-4PM</p>
                    <p>Sun: Emergency only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;