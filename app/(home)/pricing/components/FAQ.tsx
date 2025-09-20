"use client";

import { FC, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const faqData = [
  {
    question: "Are there any monthly fees or setup costs?",
    answer:
      "No. FumaPay has no setup fees, monthly fees, or hidden charges. You only pay a small percentage on transactions you successfully process.",
  },
  {
    question: "What qualifies as a 'domestic' transaction?",
    answer:
      "A transaction is considered domestic if the payment method (e.g., credit card) was issued in the same country where your business is legally registered.",
  },
  {
    question: "What is the fee for international currency conversion?",
    answer:
      "Our 1% international fee covers the transaction processing. If a currency conversion is required (e.g., you charge in USD but the customer pays in EUR), a standard 2% currency conversion fee is applied to the exchange rate.",
  },
  {
    question: "Do you offer volume discounts?",
    answer:
      "Yes, we offer custom-quoted pricing for businesses processing over $100,000 per month. Please contact our sales team to discuss a tailored rate.",
  },
];

const FAQ: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">
          Your Questions, Answered
        </h2>
        <div className="mt-12 max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-white/10">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center text-left py-6"
              >
                <span
                  className={clsx("text-lg font-medium", {
                    "text-green-300": openIndex === index,
                    "text-white": openIndex !== index,
                  })}
                >
                  {item.question}
                </span>
                <ChevronDown
                  className={clsx(
                    "h-6 w-6 text-gray-400 transition-transform",
                    { "transform rotate-180": openIndex === index },
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
