
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Hero } from "@/components/ui/hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CallToAction } from "@/components/ui/call-to-action";
import { Check, Calendar, Wrench, FileText, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const RoofMaintenance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="Roof Maintenance Programs" 
          subtitle="Extend the life of your roof and prevent costly repairs with our professional maintenance services."
          image="https://images.unsplash.com/photo-1622993853581-99a7a4352405?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
        />

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading 
                  title="Proactive Roof Maintenance"
                  subtitle="Protect your investment with regular professional care"
                />
                <p className="text-gray-600 mb-6">
                  Regular roof maintenance is the most cost-effective way to extend your roof's lifespan and prevent expensive emergency repairs. At Roof Masters Edmonton, we offer comprehensive maintenance programs designed to identify and address minor issues before they become major problems.
                </p>
                <p className="text-gray-600 mb-6">
                  Our professional maintenance services help preserve your roof's integrity, improve energy efficiency, and ensure your warranty remains valid, all while saving you money in the long run.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-accent-orange mr-3" />
                    <span className="text-gray-700">Extends roof lifespan by up to 50%</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-accent-orange mr-3" />
                    <span className="text-gray-700">Prevents costly emergency repairs</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-accent-orange mr-3" />
                    <span className="text-gray-700">Maintains manufacturer warranty requirements</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-accent-orange mr-3" />
                    <span className="text-gray-700">Improves energy efficiency</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1541790493660-407fd4889fe7?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Roof Maintenance" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-md max-w-xs">
                  <p className="text-lg font-semibold mb-2">Did you know?</p>
                  <p className="text-gray-600">Regular maintenance can double the life expectancy of your roof.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Our Maintenance Process"
              subtitle="A systematic approach to keep your roof in optimal condition"
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-accent-orange/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-accent-orange" />
                </div>
                <h3 className="text-xl font-bold mb-3">1. Scheduled Inspection</h3>
                <p className="text-gray-600">
                  Regular professional roof inspections at intervals recommended for your specific roofing system.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-accent-orange/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-accent-orange" />
                </div>
                <h3 className="text-xl font-bold mb-3">2. Detailed Assessment</h3>
                <p className="text-gray-600">
                  Comprehensive evaluation of all roof components and identification of potential issues.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-accent-orange/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-accent-orange" />
                </div>
                <h3 className="text-xl font-bold mb-3">3. Preventative Maintenance</h3>
                <p className="text-gray-600">
                  Prompt repairs of minor issues and regular maintenance tasks to prevent future problems.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-accent-orange/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-8 w-8 text-accent-orange" />
                </div>
                <h3 className="text-xl font-bold mb-3">4. Documentation</h3>
                <p className="text-gray-600">
                  Detailed reports and recommendations to maintain warranty coverage and plan for future needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Our Maintenance Services"
              subtitle="Comprehensive care to keep your roof performing at its best"
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-3">Residential Roof Maintenance</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <span className="inline-block bg-accent-orange h-2 w-2 rounded-full mr-2"></span>
                      Visual Inspection
                    </h4>
                    <p className="text-gray-600 ml-4">
                      Thorough examination of all roof components, including shingles, flashing, vents, and chimneys.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <span className="inline-block bg-accent-orange h-2 w-2 rounded-full mr-2"></span>
                      Debris Removal
                    </h4>
                    <p className="text-gray-600 ml-4">
                      Clearing of leaves, branches, and other debris that can trap moisture and damage roofing materials.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <span className="inline-block bg-accent-orange h-2 w-2 rounded-full mr-2"></span>
                      Gutter Cleaning
                    </h4>
                    <p className="text-gray-600 ml-4">
                      Removal of debris from gutters and downspouts to ensure proper drainage and prevent water damage.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <span className="inline-block bg-accent-orange h-2 w-2 rounded-full mr-2"></span>
                      Minor Repairs
                    </h4>
                    <p className="text-gray-600 ml-4">
                      Addressing small issues like loose or damaged shingles, minor flashing problems, and sealant deterioration.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <span className="inline-block bg-accent-orange h-2 w-2 rounded-full mr-2"></span>
                      Moss & Algae Treatment
                    </h4>
                    <p className="text-gray-600 ml-4">
                      Application of treatments to remove and prevent the growth of moss, algae, and other organic materials.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link to="/contact" className="inline-block bg-accent-orange hover:bg-accent-orangeDark text-white font-medium py-2 px-6 rounded-md transition-colors">
                    Request Residential Maintenance
                  </Link>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-3">Commercial Roof Maintenance</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <span className="inline-block bg-accent-orange h-2 w-2 rounded-full mr-2"></span>
                      Comprehensive Inspection
                    </h4>
                    <p className="text-gray-600 ml-4">
                      Detailed assessment of membrane condition, seams, penetrations, drainage systems, and mechanical attachments.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <span className="inline-block bg-accent-orange h-2 w-2 rounded-full mr-2"></span>
                      Drainage System Maintenance
                    </h4>
                    <p className="text-gray-600 ml-4">
                      Clearing of drains, scuppers, and downspouts to prevent water ponding and structural damage.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <span className="inline-block bg-accent-orange h-2 w-2 rounded-full mr-2"></span>
                      Seam and Penetration Sealing
                    </h4>
                    <p className="text-gray-600 ml-4">
                      Inspection and repair of seams and penetrations to maintain water-tight integrity of the roofing system.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <span className="inline-block bg-accent-orange h-2 w-2 rounded-full mr-2"></span>
                      Preventative Repairs
                    </h4>
                    <p className="text-gray-600 ml-4">
                      Addressing minor issues before they develop into major problems requiring costly repairs.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <span className="inline-block bg-accent-orange h-2 w-2 rounded-full mr-2"></span>
                      Detailed Documentation
                    </h4>
                    <p className="text-gray-600 ml-4">
                      Comprehensive reports with photos, recommendations, and maintenance history for warranty and planning purposes.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link to="/contact" className="inline-block bg-accent-orange hover:bg-accent-orangeDark text-white font-medium py-2 px-6 rounded-md transition-colors">
                    Request Commercial Maintenance
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Our Maintenance Programs"
              subtitle="Customized plans to meet your specific needs and budget"
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-roofing-800 text-white py-4 px-6">
                  <h3 className="text-xl font-bold">Basic Plan</h3>
                  <p className="text-sm mt-1">Ideal for newer roofs</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                      <span className="text-gray-600">Annual comprehensive inspection</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                      <span className="text-gray-600">Debris removal</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                      <span className="text-gray-600">Basic gutter cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                      <span className="text-gray-600">Inspection report with photos</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                      <span className="text-gray-600">10% discount on any needed repairs</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <Link to="/contact" className="inline-block bg-accent-orange hover:bg-accent-orangeDark text-white font-medium py-2 px-6 rounded-md transition-colors w-full">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                <div className="absolute top-0 right-0 bg-accent-orange text-white py-1 px-4 text-sm font-medium">
                  Popular
                </div>
                <div className="bg-roofing-800 text-white py-4 px-6">
                  <h3 className="text-xl font-bold">Standard Plan</h3>
                  <p className="text-sm mt-1">Comprehensive protection</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                      <span className="text-gray-600">Semi-annual inspections (spring & fall)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                      <span className="text-gray-600">Debris removal and gutter cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                      <span className="text-gray-600">Minor repairs included (up to $500 value)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                      <span className="text-gray-600">Detailed inspection reports</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                      <span className="text-gray-600">15% discount on additional repairs</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                      <span className="text-gray-600">Priority scheduling for service</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <Link to="/contact" className="inline-block bg-accent-orange hover:bg-accent-orangeDark text-white font-medium py-2 px-6 rounded-md transition-colors w-full">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-roofing-800 text-white py-4 px-6">
                  <h3 className="text-xl font-bold">Premium Plan</h3>
                  <p className="text-sm mt-1">Complete peace of mind</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                      <span className="text-gray-600">Quarterly inspections</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                      <span className="text-gray-600">Complete debris and gutter maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                      <span className="text-gray-600">Extended repairs included (up to $1,000 value)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                      <span className="text-gray-600">Moss/algae treatment as needed</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                      <span className="text-gray-600">20% discount on additional repairs</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                      <span className="text-gray-600">Emergency service priority</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                      <span className="text-gray-600">Annual attic inspection</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <Link to="/contact" className="inline-block bg-accent-orange hover:bg-accent-orangeDark text-white font-medium py-2 px-6 rounded-md transition-colors w-full">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-center text-gray-500 mt-8">
              *All plans can be customized to meet your specific needs. Contact us for details.
            </p>
          </div>
        </section>

        <CallToAction 
          title="Protect Your Roofing Investment"
          subtitle="Contact us today to schedule a maintenance inspection or discuss our maintenance plans."
          buttonText="Schedule Maintenance"
          buttonLink="/contact"
        />
      </main>

      <Footer />
    </div>
  );
};

export default RoofMaintenance;
