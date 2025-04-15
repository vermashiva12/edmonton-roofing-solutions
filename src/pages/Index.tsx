
import { Shield, Clock, Wrench, Award, Home, Building } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Hero } from "@/components/ui/hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureCard } from "@/components/ui/feature-card";
import { ServiceCard } from "@/components/ui/service-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { CallToAction } from "@/components/ui/call-to-action";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="Edmonton's Premier Roofing Company" 
          subtitle="Professional roofing services for residential and commercial properties across Edmonton and surrounding areas."
          image="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
          buttonText="Free Estimate"
          buttonLink="/contact"
        />

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Why Choose Roof Masters"
              subtitle="With over 15 years of experience serving Edmonton and surrounding areas, our team of certified professionals deliver exceptional roofing solutions."
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Shield className="h-12 w-12" />}
                title="Quality Guaranteed"
                description="We use only premium materials and provide industry-leading warranties on all our roofing services."
              />
              <FeatureCard 
                icon={<Clock className="h-12 w-12" />}
                title="Timely Service"
                description="Our efficient team ensures project completion within the agreed timeline without compromising quality."
              />
              <FeatureCard 
                icon={<Wrench className="h-12 w-12" />}
                title="Expert Craftmanship"
                description="Our certified and experienced team delivers exceptional workmanship on every project."
              />
              <FeatureCard 
                icon={<Award className="h-12 w-12" />}
                title="Licensed & Insured"
                description="We're fully licensed and insured for your peace of mind and protection."
              />
              <FeatureCard 
                icon={<Home className="h-12 w-12" />}
                title="Residential Specialists"
                description="From asphalt shingles to metal roofing, we offer comprehensive residential roofing solutions."
              />
              <FeatureCard 
                icon={<Building className="h-12 w-12" />}
                title="Commercial Experts"
                description="We deliver durable, energy-efficient roofing systems for businesses of all sizes."
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Our Roofing Services"
              subtitle="We offer comprehensive roofing solutions tailored to your specific needs."
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ServiceCard 
                image="https://images.unsplash.com/photo-1632759145351-1d592919dfd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                title="Residential Roofing"
                description="Quality roofing solutions for homeowners looking for durability, aesthetic appeal, and value."
                link="/services/residential-roofing"
              />
              <ServiceCard 
                image="https://images.unsplash.com/photo-1501501753674-3cc5ea1bc1ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                title="Commercial Roofing"
                description="Specialized roofing services for businesses, industrial buildings, and commercial properties."
                link="/services/commercial-roofing"
              />
              <ServiceCard 
                image="https://images.unsplash.com/photo-1625702576162-7aaaeccef756?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3"
                title="Roof Repairs"
                description="Fast, effective repair services to fix leaks, damage, and restore your roof's integrity."
                link="/services/roof-repairs"
              />
              <ServiceCard 
                image="https://images.unsplash.com/photo-1622993853581-99a7a4352405?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                title="Roof Maintenance"
                description="Preventative care programs to extend your roof's lifespan and avoid costly repairs."
                link="/services/roof-maintenance"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="What Our Clients Say"
              subtitle="Don't just take our word for it. See what our satisfied customers have to say about our roofing services."
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard 
                name="John Doe"
                location="Edmonton, AB"
                testimonial="Roof Masters did an outstanding job replacing our old shingle roof. The team was professional, efficient, and left our property spotless. Highly recommend!"
                rating={5}
              />
              <TestimonialCard 
                name="Sarah Johnson"
                location="St. Albert, AB"
                testimonial="We had a leak during a heavy rainstorm and Roof Masters responded immediately. They identified the issue quickly and fixed it at a reasonable price. Great service!"
                rating={5}
              />
              <TestimonialCard 
                name="Michael Wilson"
                location="Sherwood Park, AB"
                testimonial="The team at Roof Masters installed a new metal roof on our commercial building. The quality of work was exceptional and they completed the project ahead of schedule."
                rating={4}
              />
            </div>
          </div>
        </section>

        <CallToAction 
          title="Ready to Transform Your Roof?"
          subtitle="Contact us today for a free inspection and estimate on your roofing project."
          buttonText="Get Free Estimate"
          buttonLink="/contact"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
