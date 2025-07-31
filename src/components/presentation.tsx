'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

export function Presentation() {
  const [imgError, setImgError] = useState(false);

  // Personal information
  const profile = {
    name: 'Dev Zahir',
    age: '28 years old',
    location: 'Los Angeles, California',
    description:
      "Hey 👋\nI'm Dev Zahir. I'm a fullstack developer who builds custom websites, bots, and backend systems. I work with Python, PHP, Go, and JavaScript — and I'm passionate about tech, automation, and building tools that actually solve problems.",
    src: '/devzahir2.png',
    fallbackSrc: 'https://images.unsplash.com/photo-1610', // example fallback
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center gap-4 rounded-xl bg-muted/30 p-6 text-center shadow"
    >
      <div className="relative h-[180px] w-[180px] rounded-full bg-white shadow">
        <Image
          src={imgError ? profile.fallbackSrc : profile.src}
          alt={Profile picture of ${profile.name}}
          fill
          className="object-contain rounded-full"
          onError={() => setImgError(true)}
          priority
        />
      </div>

      <h2 className="text-xl font-semibold">{profile.name}</h2>
      <p className="text-muted-foreground text-sm">
        {profile.age} • {profile.location}
      </p>
      <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-800 dark:text-gray-300">
        {profile.description}
      </p>
    </motion.div>
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]">
        <Image
          src={profile.src}
          alt="Profile picture of Dev Zahir"
          fill
          style={{ objectFit: 'contain' }}
          className="rounded-full"
          priority
        />
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-center"
      >
        {profile.name}
      </motion.h1>
      <p className="text-center text-sm text-gray-600 whitespace-pre-line">
        {profile.description}
      </p>
    </div>
  );
