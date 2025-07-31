'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

// If you want to import Presentation component elsewhere, do it there:
// import Presentation from '../presentation';

export default function Profile() {
  const [imgError, setImgError] = useState(false);

  const profile = {
    name: 'Dev Zahir',
    age: '28 years old',
    location: 'Los Angeles, California',
    description:
      "Hey 👋\nI'm Dev Zahir. I'm a fullstack developer who builds custom websites, bots, and backend systems. I work with Python, PHP, Go, and JavaScript — and I'm passionate about tech, automation, and building tools that actually solve problems.",
    src: '/devzahir2.png',
    fallbackSrc: 'https://images.unsplash.com/photo-1610',
    tags: [
      'AI',
      'Full-Stack Developer',
      'Los Angeles',
      'Athlete',
      'Startup Hustler',
      'Musician',
      'Tech Enthusiast',
      'Family Man',
      'Rapid Learner',
    ],
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const paragraphAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
  };

  return (
    <div className="mx-auto w-full max-w-5xl py-6 font-sans">
      {/* Banner Image with overlay */}
      <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden rounded-xl shadow-lg mb-8">
        <Image
          src={imgError ? profile.fallbackSrc : profile.src}
          alt="Banner image of Dev Zahir"
          fill
          className="object-cover object-center"
          onError={() => setImgError(true)}
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-2 text-sm md:text-lg max-w-2xl whitespace-pre-line"
          >
            {profile.description}
          </motion.p>
          <p className="mt-3 text-xs md:text-sm opacity-75">
            {profile.age} • {profile.location}
          </p>
        </div>
      </div>

      {/* Profile Details Grid */}
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Image Section */}
        <div className="relative mx-auto aspect-square w-full max-w-sm rounded-xl border shadow bg-white overflow-hidden">
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="h-full w-full relative"
          >
            <Image
              src={imgError ? profile.fallbackSrc : profile.src}
              alt={profile.name}
              fill
              className="object-contain"
              onError={() => setImgError(true)}
              priority
            />
          </motion.div>
        </div>

        {/* Text Content Section */}
        <div className="flex flex-col space-y-4">
          <motion.div initial="hidden" animate="visible" variants={textVariants}>
            <h1 className="from-foreground to-muted-foreground bg-gradient-to-r bg-clip-text text-xl font-semibold text-transparent md:text-3xl">
              {profile.name}
            </h1>
            <div className="mt-1 flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
              <p className="text-muted-foreground">{profile.age}</p>
              <div className="bg-border hidden h-1.5 w-1.5 rounded-full md:block" />
              <p className="text-muted-foreground">{profile.location}</p>
            </div>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={paragraphAnimation}
            className="text-foreground mt-6 leading-relaxed whitespace-pre-line"
          >
            {profile.description}
          </motion.p>

          {/* Tags / Keywords */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 flex flex-wrap gap-2"
          >
            {profile.tags.map((tag) => (
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
