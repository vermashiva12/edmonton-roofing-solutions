
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Hero } from "@/components/ui/hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CallToAction } from "@/components/ui/call-to-action";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="About Roof Masters Edmonton" 
          subtitle="Learn more about Edmonton's trusted roofing company with over 15 years of experience."
          image="https://images.unsplash.com/photo-1593604572578-53ea028c3a5e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3"
        />

        {/* Our Story Section */}
        <section className="py-16 items-center">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <SectionHeading 
                  title="Our Story"
                  subtitle="Dedicated to excellence in roofing since 2008"
                  centered={true}
                />
                <p className="text-gray-600 mb-6">
                  Roof Masters was founded in 2008 with a simple mission: to provide Edmonton and surrounding areas with exceptional roofing services delivered with integrity, quality, and professionalism.
                </p>
                <p className="text-gray-600 mb-6">
                  What started as a small team of dedicated roofers has grown into one of Edmonton's most trusted roofing companies, serving thousands of residential and commercial clients throughout Alberta.
                </p>
                <p className="text-gray-600">
                  Our passion for quality craftmanship, attention to detail, and commitment to customer satisfaction has earned us a reputation as Edmonton's premier roofing company.
                </p>
              </div>
             
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Our Core Values"
              subtitle="The principles that guide everything we do"
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-roofing-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-roofing-800">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on materials or workmanship. Every project is completed to the highest standards.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-roofing-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-roofing-800">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Integrity</h3>
                <p className="text-gray-600">
                  We're honest and transparent in everything we do, from pricing to project timelines.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-roofing-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-roofing-800">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Customer Focus</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We listen to your needs and deliver solutions that exceed your expectations.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-roofing-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-roofing-800">4</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Safety</h3>
                <p className="text-gray-600">
                  We maintain strict safety standards to protect our team and your property throughout every project.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-roofing-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-roofing-800">5</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Community</h3>
                <p className="text-gray-600">
                  As a local Edmonton business, we're committed to supporting and giving back to our community.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-roofing-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-roofing-800">6</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We stay updated with the latest roofing technologies and techniques to provide you with the best solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Meet Our Leadership Team"
              subtitle="The experienced professionals leading Roof Masters Edmonton"
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Michael Anderson" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Michael Anderson</h3>
                  <p className="text-accent-orange mb-4">Founder & CEO</p>
                  <p className="text-gray-600">
                    With over 20 years of experience in the roofing industry, Michael founded Roof Masters with a vision to provide superior roofing services across Edmonton.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Sarah Johnson" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                  <p className="text-accent-orange mb-4">Operations Manager</p>
                  <p className="text-gray-600">
                    Sarah ensures that every project runs smoothly from start to finish, coordinating our expert teams and ensuring client satisfaction.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="David Martinez" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">David Martinez</h3>
                  <p className="text-accent-orange mb-4">Lead Roofing Specialist</p>
                  <p className="text-gray-600">
                    As our head technician, David brings 15 years of specialized experience and oversees quality control on all our roofing projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CallToAction 
          title="Ready to Work With Edmonton's Best Roofers?"
          subtitle="Contact our team today to discuss your roofing needs and get a free estimate."
          buttonText="Contact Us"
          buttonLink="/contact"
        />
      </main>

      <Footer />
    </div>
  );
};

export default About;
