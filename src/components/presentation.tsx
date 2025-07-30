'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Presentation() {
  const [imgError, setImgError] = useState(false);

  const profile = {
    name: 'Dev Zahir',
    age: '28 years old',
    location: 'Los Angeles, California',
    description:
      "Hey 👋\nI'm Dev Zahir. I'm a fullstack developer who builds custom websites, bots, and backend systems. I work with Python, PHP, Go, and JavaScript — and I'm passionate about tech, automation, and building tools that actually solve problems.",
    src: '/devzahir.png',
    fallbackSrc: 'https://images.unsplash.com/photo-1610',
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const paragraphAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 0.2,
      },
    },
  };

  const tags = [
    'AI',
    'Full-Stack Developer',
    'Los Angeles',
    'Athlete',
    'Startup Hustler',
    'Musician',
    'Tech Enthusiast',
    'Family Man',
    'Rapid Learner',
  ];

  return (
    <div className="mx-auto w-full max-w-5xl py-8 px-4 font-sans">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Image Section */}
        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="relative h-full w-full overflow-hidden rounded-full border shadow bg-white"
          >
            <Image
              src={imgError ? profile.fallbackSrc : profile.src}
              alt={`Profile picture of ${profile.name}`}
              fill
              className="object-cover"
              onError={() => setImgError(true)}
              priority
            />
          </motion.div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-3xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-col items-center gap-2 md:flex-row md:justify-start text-sm text-muted-foreground"
          >
            <span>{profile.age}</span>
            <span className="hidden md:inline-block w-1.5 h-1.5 bg-border rounded-full" />
            <span>{profile.location}</span>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={paragraphAnimation}
            className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed text-sm"
          >
            {profile.description}
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 flex flex-wrap justify-center md:justify-start gap-2"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
