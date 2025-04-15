
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Hero } from "@/components/ui/hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CallToAction } from "@/components/ui/call-to-action";
import { Check, Factory, Building2, Building, Warehouse, School, Store } from "lucide-react";
import { Link } from "react-router-dom";

const CommercialRoofing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="Commercial Roofing Solutions" 
          subtitle="Reliable, durable roofing systems for businesses and commercial properties across Edmonton."
          image="https://images.unsplash.com/photo-1501501753674-3cc5ea1bc1ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
        />

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading 
                  title="Commercial Roofing Services"
                  subtitle="Protect your business investment with expert commercial roofing solutions"
                />
                <p className="text-gray-600 mb-6">
                  At Roof Masters Edmonton, we understand that commercial roofing projects come with unique challenges and requirements. Our team specializes in providing durable, energy-efficient roofing systems that minimize disruption to your business operations.
                </p>
                <p className="text-gray-600 mb-6">
                  From small retail outlets to large industrial complexes, we have the expertise, equipment, and resources to handle commercial roofing projects of any size and complexity.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-accent-orange mr-3" />
                    <span className="text-gray-700">Customized solutions for your specific building</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-accent-orange mr-3" />
                    <span className="text-gray-700">Energy-efficient systems to reduce overhead costs</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-accent-orange mr-3" />
                    <span className="text-gray-700">Minimal disruption to your business operations</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-accent-orange mr-3" />
                    <span className="text-gray-700">Comprehensive warranties and maintenance plans</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1565246074568-6a65f9ae3493?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Commercial Roofing" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-md max-w-xs">
                  <p className="text-lg font-semibold mb-2">Commercial Emergency?</p>
                  <p className="text-gray-600">Our rapid response team is available 24/7 at (780) 987-6543</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Industries We Serve"
              subtitle="We provide commercial roofing solutions across a wide range of industries and building types"
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-accent-orange mb-4">
                  <Building className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">Office Buildings</h3>
                <p className="text-gray-600">
                  Keep your office space protected with durable, low-maintenance roofing systems that enhance energy efficiency.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-accent-orange mb-4">
                  <Warehouse className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">Warehouses & Industrial</h3>
                <p className="text-gray-600">
                  Specialized solutions for large industrial buildings that can withstand heavy equipment and provide optimal protection.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-accent-orange mb-4">
                  <Store className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">Retail & Restaurants</h3>
                <p className="text-gray-600">
                  Keep your customers comfortable with reliable roofing systems that prevent leaks and maintain your brand image.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-accent-orange mb-4">
                  <School className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">Schools & Institutions</h3>
                <p className="text-gray-600">
                  Safe, durable roofing solutions for educational and institutional buildings with minimal disruption.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-accent-orange mb-4">
                  <Building2 className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">Multi-Family Housing</h3>
                <p className="text-gray-600">
                  Comprehensive roofing solutions for apartment buildings, condos, and other multi-family properties.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-accent-orange mb-4">
                  <Factory className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">Manufacturing Facilities</h3>
                <p className="text-gray-600">
                  Heavy-duty roofing systems designed to withstand industrial conditions while providing energy efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Commercial Roofing Systems"
              subtitle="We offer a variety of commercial roofing systems to meet your specific requirements"
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1584617724672-b42483c734c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="TPO Roofing" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">TPO Roofing</h3>
                  <p className="text-gray-600 mb-4">
                    Thermoplastic Polyolefin (TPO) membranes offer excellent energy efficiency and durability.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Energy efficient white reflective surface</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">20-30 year lifespan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Heat-welded seams for superior strength</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1613469324490-7fa01c1f7757?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="EPDM Roofing" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">EPDM Roofing</h3>
                  <p className="text-gray-600 mb-4">
                    Ethylene Propylene Diene Monomer rubber membrane known for its exceptional durability and weather resistance.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">25-30+ year lifespan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Excellent resistance to UV, ozone, and temperature fluctuations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Low maintenance requirements</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Modified Bitumen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Modified Bitumen</h3>
                  <p className="text-gray-600 mb-4">
                    Asphalt-based system reinforced with fiberglass or polyester for enhanced strength and flexibility.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">15-20 year lifespan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Multi-ply redundancy for leak protection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Good for cold weather installation</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1622993853581-99a7a4352405?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Metal Roofing" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Metal Roofing</h3>
                  <p className="text-gray-600 mb-4">
                    Durable, long-lasting option ideal for commercial buildings looking for sustainability and low maintenance.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">30-50+ year lifespan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Energy efficient and recyclable</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Low maintenance requirements</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Spray Polyurethane Foam" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Spray Polyurethane Foam (SPF)</h3>
                  <p className="text-gray-600 mb-4">
                    Seamless, highly insulating roofing system with excellent energy efficiency properties.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">20-30 year lifespan with proper maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Superior insulation properties</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Seamless application eliminates leaks</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1621610807624-9834e3498cca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Green Roofing" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Green Roofing</h3>
                  <p className="text-gray-600 mb-4">
                    Sustainable living roof systems that provide environmental benefits and enhanced insulation.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">40+ year lifespan for underlying membrane</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Excellent insulation and stormwater management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-orange mr-2">•</span>
                      <span className="text-gray-600">Reduces urban heat island effect</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Our Commercial Services"
              subtitle="Comprehensive commercial roofing solutions for businesses across Edmonton"
              centered={true}
            />
            
            <div className="mt-12 space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">New Commercial Roof Installation</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <p className="text-gray-600 mb-6">
                      Whether you're constructing a new building or planning a complete roof replacement, our expert team provides professional installation services using high-quality materials and industry-leading techniques.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                        <span className="text-gray-600">Detailed assessment and planning</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                        <span className="text-gray-600">Custom solutions based on your building's specific needs</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                        <span className="text-gray-600">Energy-efficient options to reduce operational costs</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                        <span className="text-gray-600">Minimal disruption to your business operations</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                        <span className="text-gray-600">Comprehensive warranties and ongoing support</span>
                      </li>
                    </ul>
                    <Link to="/contact" className="inline-block mt-6 text-accent-orange hover:text-accent-orangeDark font-semibold">
                      Request a Commercial Quote &rarr;
                    </Link>
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                      alt="Commercial Roof Installation" 
                      className="rounded-lg shadow-md w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Commercial Roof Maintenance</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1586768035046-8b7cbc7c75e8?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3" 
                      alt="Commercial Roof Maintenance" 
                      className="rounded-lg shadow-md w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-600 mb-6">
                      Extend the life of your commercial roof and prevent costly repairs with our regular maintenance programs. Our proactive approach helps identify and address issues before they develop into serious problems.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                        <span className="text-gray-600">Scheduled inspection programs</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                        <span className="text-gray-600">Cleaning and debris removal</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                        <span className="text-gray-600">Minor repairs and preventative maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                        <span className="text-gray-600">Detailed documentation and reports</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                        <span className="text-gray-600">Customizable maintenance programs to fit your budget</span>
                      </li>
                    </ul>
                    <Link to="/contact" className="inline-block mt-6 text-accent-orange hover:text-accent-orangeDark font-semibold">
                      Learn About Our Maintenance Programs &rarr;
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Commercial Roof Repairs</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <p className="text-gray-600 mb-6">
                      When your commercial roof develops leaks, damage, or other issues, our experienced repair team responds quickly to minimize disruption to your business and prevent further damage to your property.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                        <span className="text-gray-600">Fast response times</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                        <span className="text-gray-600">Accurate diagnosis of roofing issues</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                        <span className="text-gray-600">Effective repair solutions for all commercial roofing types</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                        <span className="text-gray-600">Emergency leak containment services</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-accent-orange mr-3 shrink-0" />
                        <span className="text-gray-600">Documentation for insurance purposes</span>
                      </li>
                    </ul>
                    <Link to="/contact" className="inline-block mt-6 text-accent-orange hover:text-accent-orangeDark font-semibold">
                      Request Emergency Service &rarr;
                    </Link>
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1625702576162-7aaaeccef756?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3" 
                      alt="Commercial Roof Repairs" 
                      className="rounded-lg shadow-md w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CallToAction 
          title="Protect Your Commercial Property"
          subtitle="Contact our commercial roofing specialists today for a consultation and free estimate."
          buttonText="Request Commercial Estimate"
          buttonLink="/contact"
        />
      </main>

      <Footer />
    </div>
  );
};

export default CommercialRoofing;
