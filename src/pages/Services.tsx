
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Hero } from "@/components/ui/hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { CallToAction } from "@/components/ui/call-to-action";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="Our Roofing Services" 
          subtitle="Comprehensive roofing solutions for residential and commercial properties across Edmonton."
          image="https://images.unsplash.com/photo-1582142839970-2b9e04b60f65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
        />

        {/* Main Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="What We Offer"
              subtitle="At Roof Masters Edmonton, we provide a comprehensive range of roofing services tailored to meet your specific needs."
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <ServiceCard 
                image="https://images.unsplash.com/photo-1632759145351-1d592919dfd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                title="Residential Roofing"
                description="From asphalt shingles to metal roofs, we provide high-quality installation, replacement, and repair services for homes across Edmonton."
                link="/services/residential-roofing"
              />
              <ServiceCard 
                image="https://images.unsplash.com/photo-1501501753674-3cc5ea1bc1ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                title="Commercial Roofing"
                description="Specialized roofing solutions for commercial buildings, including flat roofs, TPO, EPDM, and modified bitumen systems."
                link="/services/commercial-roofing"
              />
              <ServiceCard 
                image="https://images.unsplash.com/photo-1625702576162-7aaaeccef756?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3"
                title="Roof Repairs"
                description="Fast, effective repair services to fix leaks, storm damage, and restore your roof's integrity and performance."
                link="/services/roof-repairs"
              />
              <ServiceCard 
                image="https://images.unsplash.com/photo-1622993853581-99a7a4352405?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                title="Roof Maintenance"
                description="Preventative maintenance programs to extend your roof's lifespan, prevent issues, and save on costly repairs."
                link="/services/roof-maintenance"
              />
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Specialized Services"
              subtitle="Beyond our core offerings, we provide specialized roofing services to meet unique requirements."
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-roofing-900">Emergency Roof Repairs</h3>
                <p className="text-gray-600 mb-4">
                  24/7 emergency repair services for storm damage, leaks, and other urgent roofing issues that can't wait.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span>Fast response times</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span>Temporary protective measures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span>Permanent repair solutions</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-roofing-900">Roof Inspections</h3>
                <p className="text-gray-600 mb-4">
                  Thorough inspections to assess your roof's condition, identify issues, and recommend appropriate solutions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span>Detailed assessment reports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span>Preventative maintenance recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span>Insurance inspection documentation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-roofing-900">Gutter Services</h3>
                <p className="text-gray-600 mb-4">
                  Installation, repair, and maintenance of gutters and downspouts to protect your property from water damage.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span>Seamless gutter installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span>Gutter guards and protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span>Cleaning and maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Our Process"
              subtitle="We follow a systematic approach to ensure the success of every roofing project."
              centered={true}
            />
            
            <div className="relative mt-20">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent-orange hidden md:block"></div>
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="md:text-right md:pr-12">
                  <div className="hidden md:block absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-accent-orange text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">1</div>
                  <h3 className="text-xl font-bold mb-4 flex md:justify-end items-center">
                    <span className="md:hidden bg-accent-orange text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</span>
                    <span>Initial Consultation</span>
                  </h3>
                  <p className="text-gray-600">
                    We meet with you to understand your roofing needs, inspect your property, and discuss potential solutions.
                  </p>
                </div>
                
                <div></div>
                
                <div></div>
                
                <div className="md:pl-12">
                  <div className="hidden md:block absolute top-1/4 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-accent-orange text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">2</div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="md:hidden bg-accent-orange text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</span>
                    <span>Detailed Proposal</span>
                  </h3>
                  <p className="text-gray-600">
                    We provide a comprehensive proposal outlining recommended solutions, materials, timeline, and transparent pricing.
                  </p>
                </div>
                
                <div className="md:text-right md:pr-12">
                  <div className="hidden md:block absolute top-2/4 right-0 transform translate-x-1/2 -translate-y-1/2 bg-accent-orange text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">3</div>
                  <h3 className="text-xl font-bold mb-4 flex md:justify-end items-center">
                    <span className="md:hidden bg-accent-orange text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</span>
                    <span>Project Execution</span>
                  </h3>
                  <p className="text-gray-600">
                    Our experienced team completes your roofing project with precision, adhering to the highest quality standards.
                  </p>
                </div>
                
                <div></div>
                
                <div></div>
                
                <div className="md:pl-12">
                  <div className="hidden md:block absolute top-3/4 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-accent-orange text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">4</div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="md:hidden bg-accent-orange text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</span>
                    <span>Final Inspection & Warranty</span>
                  </h3>
                  <p className="text-gray-600">
                    We conduct a thorough inspection to ensure everything meets our standards and provide you with warranty documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CallToAction 
          title="Ready to Get Started?"
          subtitle="Contact us today for a free consultation and estimate on your roofing project."
          buttonText="Request Free Estimate"
          buttonLink="/contact"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Services;
