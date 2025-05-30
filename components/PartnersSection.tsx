'use client';

import { useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { PARTNERS } from '@/lib/constants';
import { SlideIn } from './ui/motion';

const PartnersSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  // Motion value for drag offset
  const x = useMotionValue(0);

  // Width of one set of logos (approximate or you can measure)
  // This needs to match the total width of PARTNERS logos container
  // Adjust according to actual logo sizes and gaps
  const width = 180 * PARTNERS.length + 12 * (PARTNERS.length - 1); // min width + gap
  
  // When dragging, clamp x to avoid overdrag (optional)
  // You can also add inertia and constraints if desired

  return (
    <section className="section-padding bg-background" ref={containerRef}>
      <div className="container-custom">
        <SlideIn direction="up" className="text-center mb-8 sm:mb-12">
          <h2 className="heading-medium text-foreground mb-4">Our Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We work with leading companies to provide the best services to our customers.
          </p>
        </SlideIn>

        <div className="relative overflow-hidden py-8">
          <motion.div
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -width, right: 0 }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            onDragEnd={(event, info) => {
              // Optional: snap back or add inertia here if needed
            }}
            className="flex gap-6 sm:gap-8 md:gap-12 cursor-grab select-none"
            // Animate marquee when in view
            animate={isInView ? {
              x: [-width, 0],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'linear',
                  duration: 30,
                },
              },
            } : {}}
          >
            {/* Duplicate logos array twice for seamless wrap */}
            {[...PARTNERS, ...PARTNERS].map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                whileHover={{ scale: 1.05 }}
                className="min-w-[150px] sm:min-w-[180px] md:min-w-[200px] h-20 sm:h-24 rounded-lg p-4 flex items-center justify-center group transition-all duration-300 hover:shadow-lg
                  bg-card dark:bg-[hsl(var(--card))]"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="w-auto h-10 sm:h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
