"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, Download, CheckCircle } from 'lucide-react';
import { buttonHover } from '@/lib/animations';
import { FadeIn, SlideIn } from '@/components/ui/motion';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none dark:opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0tNCAwaC0ydi00aDJ2NHptLTQgMGgtMnYtNGgydjR6bS00IDBoLTJ2LTRoMnY0em0tNCAwaC0ydi00aDJ2NHptLTQgMGgtMnYtNGgydjR6TTYgMzRINHYtNGgydjR6bTQtMTJoLTJ2NGgydi00em00IDBoLTJ2NGgydi00em00IDBoLTJ2NGgydi00em00IDBoLTJ2NGgydi00em00IDBoLTJ2NGgydi00em00IDBoLTJ2NGgydi00em00IDBoLTJ2NGgydi00eiIvPjwvZz48L2c+PC9zdmc+')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjE1Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0tNCAwaC0ydi00aDJ2NHptLTQgMGgtMnYtNGgydjR6bS00IDBoLTJ2LTRoMnY0em0tNCAwaC0ydi00aDJ2NHptLTQgMGgtMnYtNGgydjR6TTYgMzRINHYtNGgydjR6bTQtMTJoLTJ2NGgydi00em00IDBoLTJ2NGgydi00em00IDBoLTJ2NGgydi00em00IDBoLTJ2NGgydi00em00IDBoLTJ2NGgydi00em00IDBoLTJ2NGgydi00em00IDBoLTJ2NGgydi00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <SlideIn direction="up" className="mb-4">
              <h1 className="heading-large text-gray-900 dark:text-white mb-4">
                <span className="text-primary">Easy Payments</span> for 
                <br />
                Everything Digital
              </h1>
            </SlideIn>

            <SlideIn direction="up" delay={0.1} className="mb-6">
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0">
                Pay bills, buy airtime, data subscriptions, TV subscriptions and more with Wrashpay. Your one-stop solution for all digital payments in Nigeria.
              </p>
            </SlideIn>

            <SlideIn direction="up" delay={0.2} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="#download"
                  whileHover={buttonHover}
                  className="btn-primary py-3 px-6 flex items-center justify-center space-x-2"
                >
                  <Download size={20} />
                  <span>Download App</span>
                </motion.a>
                <motion.a
                  href="#learn-more"
                  whileHover={buttonHover}
                  className="btn-outline py-3 px-6 flex items-center justify-center space-x-2 dark:text-white border-gray-700 dark:border-gray-600"
                >
                  <span>Learn More</span>
                  <ChevronRight size={20} />
                </motion.a>
              </div>
            </SlideIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6">
                {['Fast & Secure', 'Best Rates', '24/7 Support'].map((text) => (
                  <div key={text} className="flex items-center space-x-2">
                    <CheckCircle size={20} className="text-primary" />
                    <span className="text-gray-700 dark:text-gray-300">{text}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column - App Mockup */}
          <div className="relative">
            <FadeIn delay={0.2}>
              <motion.div
                className="relative h-[500px] w-full max-w-[300px] mx-auto"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Main Phone Mockup */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className="w-[220px] h-[450px] bg-white dark:bg-gray-800 rounded-[36px] shadow-2xl overflow-hidden border-8 border-gray-800 dark:border-gray-700">
                    <Image
                      src="/Select.png"
                      alt="Wrashpay App Screenshot"
                      width={280}
                      height={580}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Background Elements */}
                <div className="absolute -top-8 -left-16 w-48 h-48 bg-primary/10 dark:bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-16 -right-8 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-2xl animate-[pulse_4s_ease-in-out_infinite]"></div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
