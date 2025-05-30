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
        <FadeIn delay={0.2} className="mt-16">
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-xl p-8 text-white text-center">
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
