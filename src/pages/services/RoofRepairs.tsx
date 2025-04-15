
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Hero } from "@/components/ui/hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CallToAction } from "@/components/ui/call-to-action";
import { Check, AlertTriangle, Cloud, Wind, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

const RoofRepairs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="Professional Roof Repairs" 
          subtitle="Fast, reliable roof repair services for residential and commercial properties in Edmonton."
          image="https://images.unsplash.com/photo-1625702576162-7aaaeccef756?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3"
        />

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading 
                  title="Expert Roof Repair Services"
                  subtitle="Prompt, effective solutions for all your roofing problems"
                />
                <p className="text-gray-600 mb-6">
                  Even the best roofs can develop problems over time due to weather exposure, aging materials, or improper installation. At Roof Masters Edmonton, we specialize in identifying and repairing all types of roof damage quickly and effectively.
                </p>
                <p className="text-gray-600 mb-6">
                  Our experienced team can handle everything from minor leaks to major storm damage, using quality materials and proven techniques to restore your roof's integrity and extend its lifespan.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-accent-orange mr-3" />
                    <span className="text-gray-700">24/7 emergency repair service</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-accent-orange mr-3" />
                    <span className="text-gray-700">Free roof inspection and assessment</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-accent-orange mr-3" />
                    <span className="text-gray-700">Accurate repair estimates</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-accent-orange mr-3" />
                    <span className="text-gray-700">Workmanship warranty on all repairs</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1599496612858-e7693de7f797?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Roof Repair" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent-orange text-white p-6 rounded-lg shadow-lg">
                  <p className="font-bold text-xl">Emergency Repairs</p>
                  <p>Available 24/7 at (780) 987-6543</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Common Roof Problems We Fix"
              subtitle="Identifying issues early can prevent costly damage to your home or business"
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-accent-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Droplets className="h-8 w-8 text-accent-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Roof Leaks</h3>
                <p className="text-gray-600 mb-4">
                  Water penetration can cause serious structural damage and mold growth. We pinpoint the source and provide effective solutions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span className="text-gray-600">Water stains on ceilings or walls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span className="text-gray-600">Dripping water during rainstorms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span className="text-gray-600">Damp insulation in attic</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-accent-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Wind className="h-8 w-8 text-accent-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Missing or Damaged Shingles</h3>
                <p className="text-gray-600 mb-4">
                  High winds and severe weather can damage or remove shingles, compromising your roof's protective barrier.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span className="text-gray-600">Visible bare spots on roof</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span className="text-gray-600">Finding shingles in your yard</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span className="text-gray-600">Curled or cracked shingles</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-accent-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Cloud className="h-8 w-8 text-accent-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Flashing Issues</h3>
                <p className="text-gray-600 mb-4">
                  Damaged or improperly installed flashing around chimneys, vents, and skylights is a common source of leaks.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span className="text-gray-600">Rusted or corroded flashing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span className="text-gray-600">Loose or missing flashing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span className="text-gray-600">Water stains around roof penetrations</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-accent-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <AlertTriangle className="h-8 w-8 text-accent-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Punctures and Holes</h3>
                <p className="text-gray-600 mb-4">
                  Impact damage from fallen branches, debris, or foot traffic can create openings for water to enter.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span className="text-gray-600">Visible holes in roofing material</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span className="text-gray-600">Light visible through roof in attic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span className="text-gray-600">Recent hailstorms or falling debris</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-accent-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-orange">
                    <rect width="18" height="12" x="3" y="4" rx="2" />
                    <line x1="2" x2="22" y1="20" y2="20" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Sagging Roof Deck</h3>
                <p className="text-gray-600 mb-4">
                  Water damage or structural issues can cause your roof deck to sag, requiring immediate attention.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span className="text-gray-600">Visible dips or waves in roofline</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span className="text-gray-600">Interior ceiling cracks or deformation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span className="text-gray-600">Doors or windows that stick</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-accent-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-orange">
                    <path d="m2 8 2 2-2 2 2 2-2 2" />
                    <path d="m22 8-2 2 2 2-2 2 2 2" />
                    <path d="M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Gutter Problems</h3>
                <p className="text-gray-600 mb-4">
                  Clogged, damaged, or improperly installed gutters can cause water to back up and damage your roof and foundation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span className="text-gray-600">Overflowing gutters during rain</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span className="text-gray-600">Sagging or detached gutters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-orange mr-2">•</span>
                    <span className="text-gray-600">Water pooling around foundation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1574607383476-f517f260d30b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Roof Inspection" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="order-1 lg:order-2">
                <SectionHeading 
                  title="Our Roof Repair Process"
                  subtitle="A systematic approach to resolving your roofing issues"
                />
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-accent-orange text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Thorough Inspection</h3>
                      <p className="text-gray-600">
                        Our certified technicians thoroughly examine your roof to identify all problems, from obvious damage to hidden issues that could cause future problems.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-accent-orange text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Detailed Assessment</h3>
                      <p className="text-gray-600">
                        We provide a comprehensive assessment of your roof's condition, explaining all identified issues and recommended repair options in clear terms.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-accent-orange text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Transparent Quotation</h3>
                      <p className="text-gray-600">
                        We provide a detailed, no-obligation quote outlining all costs involved in the repair work with no hidden charges or surprises.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-accent-orange text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
                        4
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Quality Repairs</h3>
                      <p className="text-gray-600">
                        Our skilled technicians perform all repairs using premium materials and proven techniques, ensuring your roof is restored to optimal condition.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-accent-orange text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
                        5
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Final Inspection</h3>
                      <p className="text-gray-600">
                        After completing repairs, we conduct a thorough final inspection to ensure all issues have been properly addressed and your roof is watertight.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Emergency Roof Repairs"
              subtitle="Immediate response when you need it most"
              centered={true}
            />
            
            <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-bold mb-4 text-roofing-900">24/7 Emergency Service</h3>
                  <p className="text-gray-600 mb-6">
                    Roof damage doesn't wait for convenient hours, and neither do we. Our emergency roof repair team is available 24 hours a day, 7 days a week to respond quickly to urgent situations.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">What Constitutes an Emergency?</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-accent-orange mr-2">•</span>
                          <span>Large leaks or water entering your home</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-orange mr-2">•</span>
                          <span>Storm damage exposing your home's interior</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-orange mr-2">•</span>
                          <span>Structural damage threatening roof integrity</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-orange mr-2">•</span>
                          <span>Tree or debris impact damage</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Our Emergency Response</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-accent-orange mr-2">•</span>
                          <span>Rapid on-site assessment</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-orange mr-2">•</span>
                          <span>Immediate protective measures</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-orange mr-2">•</span>
                          <span>Temporary repairs to prevent further damage</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-orange mr-2">•</span>
                          <span>Plan for permanent repairs</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-accent-orange/10 p-4 rounded-lg border-l-4 border-accent-orange">
                    <p className="font-semibold mb-2">To report an emergency roof problem:</p>
                    <p className="text-lg">Call our 24/7 emergency line: <span className="font-bold">(780) 987-6543</span></p>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1514173033902-576b88fa0512?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Emergency Roof Repair" 
                    className="rounded-lg shadow-md w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <CallToAction 
          title="Need Roof Repairs?"
          subtitle="Contact us today for a free inspection and quote on your roof repair needs."
          buttonText="Schedule Inspection"
          buttonLink="/contact"
        />
      </main>

      <Footer />
    </div>
  );
};

export default RoofRepairs;
