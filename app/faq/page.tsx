"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { SlideIn } from '@/components/ui/motion';

const faqs = [
  {
    question: "What is Wrashpay?",
    answer: "Wrashpay is a digital payment platform that enables users to make various payments including airtime, data subscriptions, TV subscriptions, and utility bills in Nigeria."
  },
  {
    question: "How do I create a Wrashpay account?",
    answer: "Download the Wrashpay app from your device's app store, click on 'Sign Up', fill in your details, verify your email address, and you're ready to go!"
  },
  {
    question: "Is Wrashpay secure?",
    answer: "Yes, Wrashpay employs bank-grade security measures including encryption, two-factor authentication, and regular security audits to protect your transactions and personal information."
  },
  {
    question: "What payment methods are supported?",
    answer: "Wrashpay supports various payment methods including bank transfers, debit cards, and USSD payments."
  },
  {
    question: "What services can I pay for using Wrashpay?",
    answer: "You can pay for airtime, data bundles, TV subscriptions (DSTV, GOTV, Startimes), electricity bills, and more."
  },
  {
    question: "Are there transaction fees?",
    answer: "While most transactions are free, some services may incur minimal processing fees. These fees are always displayed before you confirm your transaction."
  },
  {
    question: "How long do transactions take to process?",
    answer: "Most transactions are processed instantly. However, some services might take up to 5-10 minutes depending on the service provider."
  },
  {
    question: "What do I do if a transaction fails?",
    answer: "If a transaction fails, the amount is automatically reversed to your account. If you don't see the reversal within 24 hours, please contact our support team."
  },
  {
    question: "Is there a transaction limit?",
    answer: "Yes, transaction limits vary based on your account level and verification status. You can increase your limits by completing additional verification steps."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach our customer support team through the in-app chat, email at support@wrashpay.com, or phone at +234 800 WRASHPAY."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-primary/90 text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="heading-large mb-6">Frequently Asked Questions</h1>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Find answers to common questions about Wrashpay's services and features.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <SlideIn 
                key={index} 
                direction="up" 
                delay={index * 0.1}
              >
                <motion.div
                  className="border border-border rounded-lg overflow-hidden bg-card"
                  initial={false}
                >
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="font-semibold text-foreground">{faq.question}</span>
                    {openIndex === index ? (
                      <Minus className="flex-shrink-0 text-primary" />
                    ) : (
                      <Plus className="flex-shrink-0 text-primary" />
                    )}
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="heading-medium text-foreground mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-8">
            Our support team is here to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:support@wrashpay.com" className="btn-primary">
              Email Support
            </a>
            <a href="tel:+2348000000000" className="btn-outline">
              Call Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}