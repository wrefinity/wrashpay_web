"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { SlideIn } from '@/components/ui/motion';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import ReviewForm from './ReviewForm';

interface Review {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
  timestamp: any;
}

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const q = query(
      collection(db, 'reviews'),
      orderBy('timestamp', 'desc'),
      limit(5)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newReviews = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Review[];
      setReviews(newReviews);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        if (!isPaused && reviews.length > 0) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }
      }, 5000);
    };
    
    startAutoPlay();
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused, reviews.length]);
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };
  
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };
  
  const pauseAutoPlay = () => setIsPaused(true);
  const resumeAutoPlay = () => setIsPaused(false);
  
  return (
    <section 
      className="section-padding bg-background"
      id="testimonials"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <SlideIn direction="up" className="mb-3">
            <h2 className="heading-medium text-foreground">What Our Customers Say</h2>
          </SlideIn>
          <SlideIn direction="up" delay={0.1}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what people who use Wrashpay have to say.
            </p>
          </SlideIn>
        </div>
        
        {/* Testimonial Carousel */}
        {reviews.length > 0 ? (
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div 
                    key={review.id} 
                    className="w-full flex-shrink-0 px-4 md:px-12"
                  >
                    <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm flex flex-col md:flex-row gap-8 items-center">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-background shadow-md mx-auto md:mx-0">
                        <Image 
                          src={review.avatar || 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600'} 
                          alt={review.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-primary mb-4">
                          <Quote size={32} />
                        </div>
                        <blockquote className="text-foreground text-lg italic mb-4">
                          {review.content}
                        </blockquote>
                        <div>
                          <h4 className="font-semibold text-foreground">{review.name}</h4>
                          <p className="text-muted-foreground">{review.role}</p>
                          <div className="flex mt-2">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between absolute top-1/2 left-0 right-0 -mt-6 px-4">
              <button 
                onClick={handlePrev}
                className="bg-background/80 backdrop-blur-sm text-primary p-2 rounded-full shadow hover:bg-background transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={handleNext}
                className="bg-background/80 backdrop-blur-sm text-primary p-2 rounded-full shadow hover:bg-background transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center text-muted-foreground">
            No reviews yet. Be the first to leave a review!
          </div>
        )}

        {/* Review Form Toggle Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="btn-primary"
          >
            {showReviewForm ? 'Hide Review Form' : 'Leave a Review'}
          </button>
        </div>

        {/* Review Form */}
        {showReviewForm && (
          <div className="mt-12">
            <ReviewForm />
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;