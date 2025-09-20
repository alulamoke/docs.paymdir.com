"use client";

import { FC } from "react";
import Link from "next/link";
import { motion } from "motion/react";

const Hero: FC = () => (
  <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
    {/* <video
      src="/hero-video.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
    /> */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-gray-900 z-10" />
    <div className="relative z-20 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white text-shadow-lg mb-6"
      >
        The New Standard in Online Payments
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 text-shadow"
      >
        A powerful, developer-first platform designed to unify your payments
        stack and accelerate global growth.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex justify-center gap-4 flex-wrap"
      >
        <Link
          href="https://dashboard.paymdir.com/auth/signup"
          target="_blank"
          className="bg-green-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:bg-green-600 shadow-lg"
        >
          Get Started
        </Link>
      </motion.div>
    </div>
  </section>
);

export default Hero;
