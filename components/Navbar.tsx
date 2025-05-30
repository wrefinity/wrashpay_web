'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Download, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MAIN_NAVIGATION } from '@/lib/constants';
import { FadeIn } from './ui/motion';
import { motion, AnimatePresence } from 'framer-motion';
import { buttonHover } from '@/lib/animations';
import { useTheme } from 'next-themes';

const navbarVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

const iconRotate = {
  initial: { rotate: 0 },
  animate: { rotate: 360, transition: { duration: 0.5 } },
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  if (!mounted) {
    return null;
  }

  return (
    <motion.header
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm border-b',
        isScrolled
          ? 'bg-background/95 dark:bg-background/95 shadow-md border-border'
          : 'bg-transparent border-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo with scale animation on hover */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              animate={{ filter: theme === 'dark' ? 'brightness(0.85)' : 'brightness(1)' }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/logo (1).png"
                alt="Wrashpay Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {MAIN_NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-foreground hover:text-primary transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5',
                  'after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle and Download Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-accent transition-colors"
              key={theme}
              initial="initial"
              animate="animate"
              variants={iconRotate}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
            </motion.button>
            <motion.a
              href="#"
              whileHover={buttonHover}
              className="btn-primary flex items-center space-x-2"
            >
              <Download size={18} />
              <span>Download App</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button + Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-accent transition-colors"
              key={theme + '-mobile'}
              initial="initial"
              animate="animate"
              variants={iconRotate}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
            </motion.button>
            <button
              className="p-2 focus:outline-none text-foreground transition-transform duration-300"
              onClick={toggleMenu}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <FadeIn
            className="md:hidden bg-background border-t border-border py-4"
            duration={0.3}
          >
            <div className="container-custom">
              <nav className="flex flex-col space-y-4">
                {MAIN_NAVIGATION.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary py-2 transition-colors facebook-card"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <motion.a
                  href="#"
                  whileHover={buttonHover}
                  className="btn-primary flex items-center justify-center space-x-2 w-full mt-4"
                >
                  <Download size={18} />
                  <span>Download App</span>
                </motion.a>
              </nav>
            </div>
          </FadeIn>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
