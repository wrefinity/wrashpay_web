import { FaLock, FaLightbulb, FaUsers, FaHandshake, FaSyncAlt, FaRocket } from 'react-icons/fa';
import { IconType } from "react-icons";

export const SITE_NAME = 'Wrashpay';


export const MAIN_NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Business', href: '/business' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'faqs', href: '/faq' }
];

export const SERVICES = [
  {
    title: 'Data Subscription',
    description: 'Purchase data bundles for all networks at the best rates.',
    icon: 'signal',
  },
  {
    title: 'Airtime Recharge',
    description: 'Recharge airtime for yourself and loved ones instantly.',
    icon: 'phone',
  },
  {
    title: 'TV Subscription',
    description: 'Pay for DSTV, GOTV, and Startimes subscriptions seamlessly.',
    icon: 'tv',
  },
  {
    title: 'Electricity Bills',
    description: 'Pay your electricity bills with ease and get instant value.',
    icon: 'zap',
  },
];
export const PARTNERS = [
  {
    name: 'MTN',
    logo: '/mtn.png',
  },
  {
    name: 'Airtel',
    logo: '/airtel.jpeg',
  },
  {
    name: 'Glo',
    logo: '/glo.jpeg',
  },
  {
    name: '9mobile',
    logo: '/9mobile.png',
  },
  {
    name: 'DSTV',
    logo: '/dstv.jpeg',
  },
  {
    name: 'GOTV',
    logo: '/gotv.png',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Adeola Johnson',
    role: 'Business Owner',
    content: 'Wrashpay has revolutionized how I manage payments for my small business. The app is fast, reliable, and secure!',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Emeka Obi',
    role: 'Student',
    content: 'As a student, I need to manage my expenses carefully. Wrashpay makes it so easy to buy data and pay for subscriptions at the best rates.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Fatima Bello',
    role: 'Professional',
    content: 'I\'ve tried many payment apps, but Wrashpay stands out with its user-friendly interface and quick transaction processing.',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'David Adeyemi',
    role: 'IT Consultant',
    content: 'The security features on Wrashpay are impressive. I feel confident making transactions knowing my data is protected.',
    avatar: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const BUSINESS_SOLUTIONS = [
  {
    title: 'Payment Collections',
    description: 'Streamline your business payments with our comprehensive collection solutions.',
    icon: 'landmark',
  },
  {
    title: 'Bill Payments',
    description: 'Pay your business utility bills on time with automated reminders.',
    icon: 'receipt',
  },
  {
    title: 'Corporate Subscriptions',
    description: 'Manage data and TV subscriptions for your entire organization.',
    icon: 'building',
  },
  {
    title: 'API Integration',
    description: 'Integrate our payment solutions directly into your business systems.',
    icon: 'code',
  },
];

interface AboutItem {
  icon: IconType;
  title: string;
  desc: string;
}

export const AboutData: AboutItem[] = [
  {
    icon: FaLock,
    title: "Security",
    desc: "We prioritize the security of your transactions and personal information above all else, employing bank-grade security measures."
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    desc: "We constantly strive to improve our services, embracing new technologies to deliver the best payment experience."
  },
  {
    icon: FaUsers,
    title: "Customer-Centric",
    desc: "Our customers are at the heart of everything we do. We listen to your feedback and continuously improve to meet your needs."
  },
  {
    icon: FaHandshake,
    title: "Integrity",
    desc: "We operate with honesty and transparency in all our dealings with customers, partners, and stakeholders."
  },
  {
    icon: FaSyncAlt,
    title: "Reliability",
    desc: "We're committed to providing a reliable service that you can count on for all your payment needs, anytime."
  },
  {
    icon: FaRocket,
    title: "Accessibility",
    desc: "We believe in making digital payments accessible to everyone, regardless of technical expertise or location."
  }
];

export const BLOG_POSTS = [
  {
    title: 'The Future of Digital Payments in Nigeria',
    excerpt: 'Explore how digital payment solutions are transforming Nigeria\'s financial landscape.',
    date: 'June 15, 2023',
    image: 'https://images.pexels.com/photos/7654125/pexels-photo-7654125.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'future-of-digital-payments',
  },
  {
    title: 'How to Save Money on Data Subscriptions',
    excerpt: 'Tips and tricks to get the most out of your data bundles and save money.',
    date: 'May 28, 2023',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'save-money-on-data',
  },
  {
    title: 'Business Growth Through Digital Solutions',
    excerpt: 'Learn how digital payment solutions can help your business grow and thrive.',
    date: 'April 10, 2023',
    image: 'https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'business-growth-digital-solutions',
  },
];