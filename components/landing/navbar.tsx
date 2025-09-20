"use client";

import { useState, useEffect, FC } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Rocket } from "lucide-react";
import clsx from "clsx";

const NAV_LINKS = [
  { title: "Features", href: "#features" },
  { title: "Pricing", href: "/pricing" },
  { title: "Docs", href: "/docs/core" },
];

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        { "bg-black/50 backdrop-blur-sm shadow-lg": hasScrolled || isOpen },
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Rocket className="h-8 w-8 text-green-400" />
            <span className="text-2xl font-bold text-white">PayMdir</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.title}
                className="text-gray-300 hover:text-green-400 font-medium transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://dashboard.paymdir.com/auth/login"
              target="_blank"
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              Log In
            </Link>
            <Link
              href="https://dashboard.paymdir.com/auth/signup"
              target="_blank"
              className="bg-green-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-md"
            >
              Sign Up
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              <div className="pt-4 pb-3 border-t border-gray-700 space-y-2 px-2">
                <Link
                  href="/login"
                  className="block text-center w-full px-4 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700"
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="block text-center w-full bg-green-500 px-4 py-2 rounded-full text-base font-semibold text-white hover:bg-green-600"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
