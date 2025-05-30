import Image from 'next/image';
import { FaLock, FaLightbulb, FaUsers, FaHandshake, FaSyncAlt, FaRocket, FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function About() {
  return (
    <div className="pt-24 bg-gray-900 text-gray-200">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-primary/90 py-16 md:py-24 text-white">
        <div className="container-custom text-center">
          <h1 className="heading-large mb-6">About Wrashpay</h1>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            We're on a mission to simplify digital payments in Nigeria and empower individuals and businesses with fast, secure, and reliable payment solutions.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-medium text-white mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Wrashpay was founded in 2021 with a simple vision: to make digital payments accessible to everyone in Nigeria. We observed the challenges people faced with existing payment solutions and set out to create a better alternative.
              </p>
              <p className="text-gray-300 mb-4">
                What started as a small team with big dreams has now grown into a trusted payment platform serving thousands of users across Nigeria. Our journey has been driven by a commitment to innovation, reliability, and customer satisfaction.
              </p>
              <p className="text-gray-300">
                Today, Wrashpay is more than just a payment app – it's a comprehensive solution for all digital payment needs, from airtime and data to utility bills and TV subscriptions.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Wrashpay team meeting"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-medium text-white mb-4">Our Core Values</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do at Wrashpay, from product development to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLock className="text-primary text-3xl" />,
                title: "Security",
                desc: "We prioritize the security of your transactions and personal information above all else, employing bank-grade security measures."
              },
              {
                icon: <FaLightbulb className="text-primary text-3xl" />,
                title: "Innovation",
                desc: "We constantly strive to improve our services, embracing new technologies to deliver the best payment experience."
              },
              {
                icon: <FaUsers className="text-primary text-3xl" />,
                title: "Customer-Centric",
                desc: "Our customers are at the heart of everything we do. We listen to your feedback and continuously improve to meet your needs."
              },
              {
                icon: <FaHandshake className="text-primary text-3xl" />,
                title: "Integrity",
                desc: "We operate with honesty and transparency in all our dealings with customers, partners, and stakeholders."
              },
              {
                icon: <FaSyncAlt className="text-primary text-3xl" />,
                title: "Reliability",
                desc: "We're committed to providing a reliable service that you can count on for all your payment needs, anytime."
              },
              {
                icon: <FaRocket className="text-primary text-3xl" />,
                title: "Accessibility",
                desc: "We believe in making digital payments accessible to everyone, regardless of technical expertise or location."
              }
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-gray-700 rounded-lg p-6 shadow-sm">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white text-center">{title}</h3>
                <p className="text-gray-300 text-center">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-medium text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The passionate individuals behind Wrashpay who work tirelessly to deliver the best payment experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Andrew Wreford",
                role: "CEO & Founder",
                img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                name: "Samson David",
                role: "CTO",
                img: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                name: "Michael Bello",
                role: "COO",
                img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                name: "Chioma Nwosu",
                role: "Head of Marketing",
                img: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
            ].map(({ name, role, img }) => (
              <div key={name} className="text-center">
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                  <Image 
                    src={img}
                    alt={name}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">{name}</h3>
                <p className="text-gray-300 mb-2">{role}</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <FaPhone className="text-xl" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <FaEnvelope className="text-xl" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <FaLinkedin className="text-xl" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
