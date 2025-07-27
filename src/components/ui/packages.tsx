'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import React from 'react';

const packages = [
  {
    title: '🌱 Starter Website or Bot',
    price: '$80',
    features: [
      'E-commerce functionality',
      '1 beautifully designed page',
      'Content upload & management',
      'Speed optimization',
      'Social media icons',
      'Plugin/extension setup',
      'Payment processing integration',
      'Opt-in form + autoresponder',
      'Hosting setup support',
    ],
    delivery: '3 days',
    revisions: '2',
  },
  {
    title: '🤖 Multi-Page Website or Bot',
    price: '$165',
    features: [
      'Up to 5 custom pages',
      'Content upload & management',
      'E-commerce for 20 products',
      '3 plugins/extensions',
      'Functionality enhancements',
      'Payment integration',
      'Opt-in form & autoresponder',
      'Speed optimization',
      'Hosting setup assistance',
      'Social media branding',
    ],
    delivery: '5 days',
    revisions: '3',
  },
  {
    title: '💼 E-Commerce Website or Advanced Bot',
    price: '$425',
    features: [
      'Up to 10 custom pages',
      'E-commerce for 50 products',
      'Backend integration',
      'Content upload & management',
      '5 plugins/extensions',
      'Payment integration',
      'Opt-in + email flows',
      'Speed optimization',
      'Hosting support',
      'Social media icons',
    ],
    delivery: '10 days',
    revisions: '5',
  },
];

export default function PackageCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-10 max-w-7xl mx-auto">
      {packages.map((pkg, idx) => (
        <motion.div
          key={pkg.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.15 }}
          className="rounded-2xl border bg-white/40 p-6 backdrop-blur shadow-lg dark:bg-neutral-900/60"
        >
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {pkg.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{pkg.price}</p>
          </div>
          <ul className="mb-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
            {pkg.features.map((feature) => (
              <li key={feature}>• {feature}</li>
            ))}
          </ul>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>🕒 Delivery: {pkg.delivery}</span>
            <br />
            <span>🔁 Revisions: {pkg.revisions}</span>
          </div>
          <Button
            asChild
            className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white"
          >
            <a
              href="https://www.fiverr.com/s/m5Vb1g8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <ShoppingCart size={18} /> Buy Now
            </a>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
