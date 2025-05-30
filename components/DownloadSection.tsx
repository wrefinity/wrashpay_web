"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SlideIn, FadeIn } from '@/components/ui/motion';
import { buttonHover } from '@/lib/animations';

const DownloadSection = () => {
  return (
    <section 
      className="section-padding bg-gradient-to-r from-gray-900 to-primary/90 text-white"
      id="download"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <SlideIn direction="up" className="mb-3">
              <h2 className="heading-medium">Download Wrashpay Today</h2>
            </SlideIn>
            <SlideIn direction="up" delay={0.1} className="mb-8">
              <p className="text-white/80 max-w-lg">
                Experience the convenience of digital payments on your mobile device. 
                Download the Wrashpay app and start making payments with ease.
              </p>
            </SlideIn>

            {/* App Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <SlideIn direction="up" delay={0.2} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">User-Friendly</h3>
                <p className="text-white/70 text-sm">
                  Simple, intuitive interface for seamless user experience.
                </p>
              </SlideIn>
              <SlideIn direction="up" delay={0.3} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Fast & Secure</h3>
                <p className="text-white/70 text-sm">
                  Quick transactions with bank-grade security for your peace of mind.
                </p>
              </SlideIn>
              <SlideIn direction="up" delay={0.4} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Best Rates</h3>
                <p className="text-white/70 text-sm">
                  Get the most competitive rates for all your digital payments.
                </p>
              </SlideIn>
              <SlideIn direction="up" delay={0.5} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
                <p className="text-white/70 text-sm">
                  Our customer support team is always available to assist you.
                </p>
              </SlideIn>
            </div>

            {/* Download Buttons */}
            <FadeIn delay={0.6} className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#"
                whileHover={buttonHover}
                className="bg-white text-primary flex items-center justify-center space-x-3 px-6 py-3 rounded-lg shadow-lg"
              >
                <span className="text-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </span>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </motion.a>
              <motion.a
                href="#"
                whileHover={buttonHover}
                className="bg-white text-primary flex items-center justify-center space-x-3 px-6 py-3 rounded-lg shadow-lg"
              >
                <span className="text-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-apple"><path d="M12 20.94c1.5 0 2.75-.47 3.76-1.42 1-.94 1.65-2.32 1.96-4.12.3-1.8.07-3.51-.67-5.13-.74-1.62-2-3.04-3.76-4.27-1.76 1.23-3.03 2.65-3.76 4.27-.74 1.62-.97 3.33-.67 5.13.3 1.8.95 3.18 1.96 4.12 1 .95 2.26 1.42 3.76 1.42z"></path><path d="M19 10.42c1.5 0 2.75-.47 3.76-1.42 1-.94 1.65-2.32 1.96-4.12.3-1.8.07-3.51-.67-5.13-.74-1.62-2-3.04-3.76-4.27-1.76 1.23-3.03 2.65-3.76 4.27-.74 1.62-.97 3.33-.67 5.13.3 1.8.95 3.18 1.96 4.12 1 .95 2.26 1.42 3.76 1.42z"></path><path d="M5 10.42c1.5 0 2.75-.47 3.76-1.42 1-.94 1.65-2.32 1.96-4.12.3-1.8.07-3.51-.67-5.13-.74-1.62-2-3.04-3.76-4.27-1.76 1.23-3.03 2.65-3.76 4.27-.74 1.62-.97 3.33-.67 5.13.3 1.8.95 3.18 1.96 4.12 1 .95 2.26 1.42 3.76 1.42z"></path></svg>
                </span>
                <div>
                  <div className="text-xs">DOWNLOAD ON THE</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </motion.a>
            </FadeIn>
          </div>

          {/* Right Column - App Mockups */}
          <FadeIn delay={0.2}>
            <div className="relative h-[500px]">
              {/* Phone Mockups */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
                <div className="relative">
                  {/* Main Phone */}
                  <div className="w-[220px] h-[450px] bg-white rounded-[36px] shadow-2xl overflow-hidden border-8 border-gray-800">
                    <Image
                      src="https://images.pexels.com/photos/8369650/pexels-photo-8369650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Wrashpay App Screenshot"
                      width={280}
                      height={580}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Secondary Phone - Left */}
                  <div className="absolute -left-24 top-20 w-[180px] h-[370px] bg-white rounded-[30px] shadow-xl overflow-hidden border-8 border-gray-800 opacity-75 rotate-[-15deg]">
                    <Image
                      src="https://images.pexels.com/photos/8370722/pexels-photo-8370722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Wrashpay App Screenshot"
                      width={280}
                      height={580}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Secondary Phone - Right */}
                  <div className="absolute -right-24 top-20 w-[180px] h-[370px] bg-white rounded-[30px] shadow-xl overflow-hidden border-8 border-gray-800 opacity-75 rotate-[15deg]">
                    <Image
                      src="https://images.pexels.com/photos/8370784/pexels-photo-8370784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Wrashpay App Screenshot"
                      width={280}
                      height={580}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Background Elements */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-[400px] h-[100px] bg-black/30 filter blur-xl rounded-full"></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;