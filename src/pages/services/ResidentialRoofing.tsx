
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Hero } from "@/components/ui/hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CallToAction } from "@/components/ui/call-to-action";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const ResidentialRoofing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="Residential Roofing Services" 
          subtitle="Quality roofing solutions for homeowners in Edmonton and surrounding areas."
          image="https://images.unsplash.com/photo-1632759145351-1d592919dfd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
        />

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading 
                  title="Residential Roofing Services"
                  subtitle="Protect your biggest investment with a quality roof from Roof Masters Edmonton"
                />
                <p className="text-gray-600 mb-6">
                  Your home deserves the best protection possible. At Roof Masters Edmonton, we provide comprehensive residential roofing services using premium materials and expert craftsmanship to ensure your home stays safe and beautiful for years to come.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you need a complete roof replacement, a new installation for your dream home, or repairs to address damage, our team of skilled professionals delivers exceptional results that exceed your expectations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-accent-orange mr-3" />
                    <span className="text-gray-700">Premium materials with manufacturer warranties</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-accent-orange mr-3" />
                    <span className="text-gray-700">Expert installation by certified professionals</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-accent-orange mr-3" />
                    <span className="text-gray-700">Competitive pricing and flexible financing</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-accent-orange mr-3" />
                    <span className="text-gray-700">Industry-leading workmanship warranty</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1629774631753-88f827bf6447?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Residential Roofing" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-md max-w-xs">
                  <p className="text-lg font-semibold mb-2">Need Emergency Repairs?</p>
                  <p className="text-gray-600">Call our 24/7 emergency service at (780) 987-6543</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Our Residential Roofing Options"
              subtitle="We offer a variety of high-quality roofing materials to suit your home's style and your budget"
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1628524883753-b231f3cbeb95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Asphalt Shingles" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Asphalt Shingles</h3>
                  <p className="text-gray-600 mb-4">
                    Our most popular option, offering excellent value, durability, and a wide range of colors and styles.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">25-30 year lifespan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Cost-effective solution</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Wide variety of styles</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1601373879104-b4290a7663ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Metal Roofing" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Metal Roofing</h3>
                  <p className="text-gray-600 mb-4">
                    Durable, energy-efficient option that can last up to 50 years with minimal maintenance.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">40-50 year lifespan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Energy efficient</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Fire resistant</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1634634465661-26e627ff2261?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Cedar Shakes" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Cedar Shakes & Shingles</h3>
                  <p className="text-gray-600 mb-4">
                    Natural beauty and charm with excellent insulation properties for Edmonton's climate.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">30-40 year lifespan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Natural appearance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Superior insulation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1642091473233-5eed52107eba?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Composite Roofing" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Composite Roofing</h3>
                  <p className="text-gray-600 mb-4">
                    Modern engineered materials that can mimic the look of other roofing types with enhanced durability.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">30-50 year lifespan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Low maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Customizable designs</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1584617724672-b42483c734c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Flat Roofing" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Flat Roofing</h3>
                  <p className="text-gray-600 mb-4">
                    Modern solutions for flat or low-slope sections of residential properties.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">20-30 year lifespan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Space for rooftop uses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Modern appearance</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1621610807624-9834e3498cca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Eco-Friendly Options" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Eco-Friendly Options</h3>
                  <p className="text-gray-600 mb-4">
                    Sustainable roofing solutions including cool roofs and recycled materials.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Energy savings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Reduced carbon footprint</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Recyclable materials</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Our Residential Roofing Services"
              subtitle="Complete solutions for all your home roofing needs"
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent-orange"></div>
                <h3 className="text-xl font-bold mb-4">New Roof Installation</h3>
                <p className="text-gray-600 mb-6">
                  Whether you're building a new home or replacing an old roof, our expert team ensures proper installation using quality materials and best practices.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                    <span className="text-gray-600">Comprehensive consultation and assessment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                    <span className="text-gray-600">Expert installation by certified professionals</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                    <span className="text-gray-600">Premium materials with manufacturer warranties</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                    <span className="text-gray-600">Clean-up and final inspection</span>
                  </li>
                </ul>
                <Link to="/contact" className="text-accent-orange hover:text-accent-orangeDark font-semibold">
                  Request a Quote &rarr;
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent-orange"></div>
                <h3 className="text-xl font-bold mb-4">Roof Replacement</h3>
                <p className="text-gray-600 mb-6">
                  When repairs aren't enough, our roof replacement services provide a fresh start with modern materials and updated techniques.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                    <span className="text-gray-600">Thorough inspection of existing roof</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                    <span className="text-gray-600">Removal and disposal of old roofing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                    <span className="text-gray-600">Structural repairs as needed</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                    <span className="text-gray-600">Complete replacement with quality materials</span>
                  </li>
                </ul>
                <Link to="/contact" className="text-accent-orange hover:text-accent-orangeDark font-semibold">
                  Request a Quote &rarr;
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent-orange"></div>
                <h3 className="text-xl font-bold mb-4">Roof Repairs</h3>
                <p className="text-gray-600 mb-6">
                  Address leaks, damaged shingles, and other issues promptly to prevent more extensive damage to your home.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                    <span className="text-gray-600">Accurate diagnosis of roofing issues</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                    <span className="text-gray-600">Fast, effective repairs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                    <span className="text-gray-600">Matching materials for seamless appearance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                    <span className="text-gray-600">Prevention of future issues</span>
                  </li>
                </ul>
                <Link to="/contact" className="text-accent-orange hover:text-accent-orangeDark font-semibold">
                  Request a Quote &rarr;
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent-orange"></div>
                <h3 className="text-xl font-bold mb-4">Roof Maintenance</h3>
                <p className="text-gray-600 mb-6">
                  Regular maintenance extends your roof's lifespan and helps identify potential issues before they become costly problems.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                    <span className="text-gray-600">Scheduled inspection programs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                    <span className="text-gray-600">Gutter cleaning and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                    <span className="text-gray-600">Minor repairs and preventative care</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                    <span className="text-gray-600">Detailed condition reports</span>
                  </li>
                </ul>
                <Link to="/contact" className="text-accent-orange hover:text-accent-orangeDark font-semibold">
                  Request a Quote &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CallToAction 
          title="Ready For Your Residential Roofing Project?"
          subtitle="Contact us today for a free inspection and detailed quote for your home."
          buttonText="Get Free Estimate"
          buttonLink="/contact"
        />
      </main>

      <Footer />
    </div>
  );
};

export default ResidentialRoofing;
