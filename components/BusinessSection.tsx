"use client";

import Image from 'next/image';
import { BUSINESS_SOLUTIONS } from '@/lib/constants';
import { motion } from 'framer-motion';
import { Building, CheckCircle, ArrowRight } from 'lucide-react';
import { buttonHover } from '@/lib/animations';
import { SlideIn, FadeIn } from '@/components/ui/motion';

const BusinessSection = () => {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900" id="business">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Image */}
          <FadeIn className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Business team using Wrashpay"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              
              {/* Stats Card */}
              <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-64">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Building className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl text-gray-900 dark:text-white">500+</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Business Partners</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column - Text Content */}
          <div className="order-1 lg:order-2">
            <SlideIn direction="up" className="mb-3">
              <h2 className="heading-medium text-gray-900 dark:text-white">Business Solutions</h2>
            </SlideIn>
            <SlideIn direction="up" delay={0.1} className="mb-8">
              <p className="text-gray-600 dark:text-gray-400">
                Empower your business with our robust payment solutions. Streamline your operations, 
                reduce costs, and enhance efficiency with Wrashpay Business.
              </p>
            </SlideIn>

            {/* Business Solutions List */}
            <div className="space-y-6 mb-8">
              {BUSINESS_SOLUTIONS.slice(0, 3).map((solution, index) => (
                <SlideIn 
                  key={solution.title} 
                  direction="right" 
                  delay={0.1 * (index + 1)}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Building className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{solution.description}</p>
                  </div>
                </SlideIn>
              ))}
            </div>

            {/* Benefits */}
            <FadeIn delay={0.4} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm mb-6">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                Why choose Wrashpay Business?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-primary flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">Reduced operational costs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-primary flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">Enhanced efficiency</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-primary flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">Detailed analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-primary flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">24/7 dedicated support</span>
                </div>
              </div>
            </FadeIn>

            {/* CTA Button */}
            <FadeIn delay={0.5}>
              <motion.a
                href="/business"
                whileHover={buttonHover}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Explore Business Solutions</span>
                <ArrowRight size={18} />
              </motion.a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
