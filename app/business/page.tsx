import Image from 'next/image';
import { BUSINESS_SOLUTIONS } from '@/lib/constants';
import {
  Landmark,
  Receipt,
  Building2,
  Code2,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';


export default function Business() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-primary/90 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-large mb-6">Enterprise Solutions for Your Business</h1>
              <p className="text-white/80 text-lg mb-8 max-w-lg">
                Transform your business operations with Wrashpay's comprehensive suite of payment solutions designed for enterprises of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary bg-white text-primary">
                  Contact Sales
                </a>
                <a href="#solutions" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                  Explore Solutions
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Business team meeting"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900" id="solutions">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-medium text-gray-900 mb-4">Our Business Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive payment solutions tailored to meet the unique needs of your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BUSINESS_SOLUTIONS.map((solution) => (
              <div key={solution.title} className="bg-white rounded-lg p-8 shadow-sm">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  {/* We'll use a placeholder icon since we don't have the actual component here */}
                  <div className="text-primary text-2xl">
  {solution.icon === 'landmark' && <Landmark className="w-6 h-6" />}
  {solution.icon === 'receipt' && <Receipt className="w-6 h-6" />}
  {solution.icon === 'building' && <Building2 className="w-6 h-6" />}
  {solution.icon === 'code' && <Code2 className="w-6 h-6" />}
</div>

                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-gray-700">Feature 1</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-gray-700">Feature 2</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-gray-700">Feature 3</span>
                  </li>
                </ul>
                <a href="#contact" className="btn-primary inline-block">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-medium text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how businesses like yours have transformed their operations with Wrashpay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 relative">
                <Image 
                  src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Case Study 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Retail Chain Expansion</h3>
                <p className="text-gray-600 mb-4">
                  How a growing retail chain integrated Wrashpay to streamline payments across 50+ locations.
                </p>
                <a href="#" className="text-primary font-medium hover:underline">
                  Read Case Study
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 relative">
                <Image 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Case Study 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">School Fee Collection</h3>
                <p className="text-gray-600 mb-4">
                  How a network of schools simplified fee collection and reduced administrative overhead.
                </p>
                <a href="#" className="text-primary font-medium hover:underline">
                  Read Case Study
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 relative">
                <Image 
                  src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Case Study 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">E-commerce Integration</h3>
                <p className="text-gray-600 mb-4">
                  How an e-commerce platform integrated Wrashpay API to offer seamless payment options.
                </p>
                <a href="#" className="text-primary font-medium hover:underline">
                  Read Case Study
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900" id="contact">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-medium text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Our team of business experts is ready to help you find the perfect solution for your business needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+234 800 WRASHPAY</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">business@wrashpay.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">123 Victoria Island, Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Contact Our Sales Team</h3>
                <form>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}