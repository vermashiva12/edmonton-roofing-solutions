
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Hero } from "@/components/ui/hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/ui/contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="Contact Roof Masters" 
          subtitle="Reach out to us for all your roofing needs in Edmonton and surrounding areas."
          image="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
        />

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <SectionHeading 
                  title="Get In Touch"
                  subtitle="We're here to answer any questions you have about our services."
                />
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-accent-orange p-3 rounded-full text-white mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Our Office</h3>
                      <p className="text-gray-600">
                       Unit 204 5207 4Ave<br />
                         SW Edmonton, AB T6X 2Y2
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-accent-orange p-3 rounded-full text-white mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-gray-600">
                        Main: (780) 729-4400
                      
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-accent-orange p-3 rounded-full text-white mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">
                       roofmasters02@gmail.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-accent-orange p-3 rounded-full text-white mr-4">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed<br />
                        <span className="text-accent-orange font-medium">Emergency Service Available 24/7</span>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Service Area</h3>
                  <p className="text-gray-600 mb-4">
                    We proudly serve Edmonton and surrounding areas including:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center">
                      <span className="text-accent-orange mr-2">•</span>
                      <span>Edmonton</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-accent-orange mr-2">•</span>
                      <span>St. Albert</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-accent-orange mr-2">•</span>
                      <span>Sherwood Park</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-accent-orange mr-2">•</span>
                      <span>Spruce Grove</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-accent-orange mr-2">•</span>
                      <span>Stony Plain</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-accent-orange mr-2">•</span>
                      <span>Fort Saskatchewan</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-accent-orange mr-2">•</span>
                      <span>Leduc</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-accent-orange mr-2">•</span>
                      <span>Beaumont</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-6">Request a Free Estimate</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Find Us"
              subtitle="Visit our office in Edmonton"
              centered={true}
            />
            
            <div className="mt-8 h-96 rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76228.53775621657!2d-113.5728!3d53.5461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224580deff23%3A0x411fa00c4af6155d!2sEdmonton%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sus!4v1681513252274!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
