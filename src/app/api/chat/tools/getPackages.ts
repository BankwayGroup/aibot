'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button'; // optional if using shadcn/ui
import Link from 'next/link';

const packages = [
  {
    title: '🌱 Starter Website or Bot',
    price: '$80',
    description: 'A clean, modern 1-page site or a basic bot with just the right essentials.',
    features: [
      'E-commerce setup',
      'Speed optimization',
      'Payment integration',
      'Social media icons',
      'Plugin/extension setup',
      'Hosting support',
      'Opt-in form + autoresponder',
    ],
    delivery: '3 days',
    revisions: 2,
  },
  {
    title: '🚀 Multi-Page Website or Bot',
    price: '$165',
    description: 'A responsive 5-page site or dynamic bot with added functionality.',
    features: [
      'Up to 5 custom pages',
      'E-commerce for 20 products',
      '3 plugins/extensions',
      'Functionality enhancements',
      'Payment processing',
      'Hosting setup',
      'Opt-in forms',
      'Speed boost + social branding',
    ],
    delivery: '5 days',
    revisions: 3,
  },
  {
    title: '💼 E-Commerce Website or Advanced Bot',
    price: '$425',
    description: 'A 10-page powerhouse site or AI-driven bot with backend logic.',
    features: [
      'E-commerce for 50 products',
      'Backend integration',
      '5 plugins/extensions',
      'Autoresponders + email flows',
      'Hosting + speed optimization',
      'Social media integration',
      'Full content management',
    ],
    delivery: '10 days',
    revisions: 5,
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
          transition={{ delay: idx * 0.1 }}
          className="rounded-2xl border shadow-lg p-6 bg-white dark:bg-zinc-900 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-xl font-bold mb-2">{pkg.title}</h2>
            <p className="text-zinc-600 dark:text-zinc-300">{pkg.description}</p>
            <ul className="mt-4 text-sm text-zinc-700 dark:text-zinc-200 space-y-1 list-disc pl-5">
              {pkg.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <div className="text-lg font-semibold">{pkg.price}</div>
            <p className="text-sm text-zinc-500">🕒 {pkg.delivery} &nbsp;&bull;&nbsp; 🔁 {pkg.revisions} revisions</p>
            <Link href="https://www.fiverr.com/s/m5Vb1g8" target="_blank" rel="noopener noreferrer">
              <Button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold">
                Buy Now on Fiverr
              </Button>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
