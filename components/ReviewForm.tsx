"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Star } from 'lucide-react';

interface ReviewFormData {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ReviewFormData>();

  const onSubmit = async (data: ReviewFormData) => {
    try {
      setIsSubmitting(true);
      await addDoc(collection(db, 'reviews'), {
        ...data,
        rating,
        timestamp: serverTimestamp(),
      });
      reset();
      setRating(0);
      alert('Thank you for your review!');
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Error submitting review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-card rounded-lg shadow-sm">
      <h3 className="text-2xl font-semibold mb-6 text-foreground">Leave a Review</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Your Name</label>
          <input
            {...register('name', { required: 'Name is required' })}
            className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Your Role</label>
          <input
            {...register('role', { required: 'Role is required' })}
            className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground"
            placeholder="Business Owner, Student, etc."
          />
          {errors.role && (
            <p className="text-destructive text-sm mt-1">{errors.role.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Rating</label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="text-2xl focus:outline-none"
              >
                <Star
                  className={`w-8 h-8 ${
                    star <= rating ? 'text-primary fill-primary' : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Your Review</label>
          <textarea
            {...register('content', { required: 'Review content is required' })}
            className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground"
            rows={4}
            placeholder="Share your experience with Wrashpay..."
          />
          {errors.content && (
            <p className="text-destructive text-sm mt-1">{errors.content.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Profile Picture URL</label>
          <input
            {...register('avatar')}
            className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground"
            placeholder="https://example.com/your-photo.jpg"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
}