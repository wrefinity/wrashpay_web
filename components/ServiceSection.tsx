"use client";

import { SERVICES } from '@/lib/constants';
import { motion } from 'framer-motion';
import { 
  Signal, 
  Phone, 
  Tv, 
  Zap,
  ChevronRight 
} from 'lucide-react';
import { staggerContainer, fadeIn, buttonHover } from '@/lib/animations';
import { SlideIn, FadeIn } from '@/components/ui/motion';
import CountUp from 'react-countup';
import { Download, Building } from 'lucide-react';


const iconMap = {
  'signal': Signal,
  'phone': Phone,
  'tv': Tv,
  'zap': Zap,
};

const ServiceSection = () => {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900" id="services">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <SlideIn direction="up" className="mb-3">
            <h2 className="heading-medium text-gray-900 dark:text-white">Our Services</h2>
          </SlideIn>
          <SlideIn direction="up" delay={0.1}>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer a wide range of digital payment services to make your life easier.
              Fast, secure, and affordable.
            </p>
          </SlideIn>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.title}
                variants={fadeIn}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4 bg-primary/10 dark:bg-primary/20 w-14 h-14 rounded-lg flex items-center justify-center">
                  <IconComponent className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                <motion.a
                  href="#"
                  whileHover={buttonHover}
                  className="inline-flex items-center text-primary hover:underline"
                >
                  <span>Learn more</span>
                  <ChevronRight size={16} className="ml-1" />
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>

      {/* CTA Banner */}
<FadeIn delay={0.2} className="mt-16 relative">
  <div className="bg-gradient-to-r from-primary to-primary/90 rounded-xl p-8 text-white text-center relative overflow-hidden">

    {/* Left Stat: App Downloads */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="absolute top-4 left-6 bg-white dark:bg-gray-800 text-primary dark:text-primary rounded-lg shadow-md px-4 py-3 w-48 flex items-center space-x-3"
    >
      <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full">
        <Download size={20} />
      </div>
      <div>
        <p className="text-xs text-gray-600 dark:text-gray-300">App Downloads</p>
        <h4 className="text-lg font-bold">
          <CountUp end={10000} duration={2} separator="," />+
        </h4>
      </div>
    </motion.div>

    {/* Right Stat: Business Partners */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="absolute top-4 right-6 bg-white dark:bg-gray-800 text-primary dark:text-primary rounded-lg shadow-md px-4 py-3 w-48 flex items-center space-x-3 justify-end text-right"
    >
      <div>
        <p className="text-xs text-gray-600 dark:text-gray-300">Business Partners</p>
        <h4 className="text-lg font-bold">
          <CountUp end={500} duration={2} />+
        </h4>
      </div>
      <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full">
        <Building size={20} />
      </div>
    </motion.div>

    {/* CTA Content */}
    <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
    <p className="max-w-2xl mx-auto mb-6">
      Download the Wrashpay app now and experience the convenience of digital payments.
    </p>
    <motion.a
      href="#download"
      whileHover={buttonHover}
      className="inline-block bg-white text-primary font-medium rounded-md px-6 py-3"
    >
      Download Now
    </motion.a>
  </div>
</FadeIn>



      </div>
    </section>
  );
};

export default ServiceSection;
