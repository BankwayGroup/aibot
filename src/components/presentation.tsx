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
    src: '/devzahir.png',
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
          alt={`Profile picture of ${profile.name}`}
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


  return (
    <section className="text-center space-y-4 px-4">
      <motion.img
        src={profile.src}
        onError={(e) => (e.currentTarget.src = profile.fallbackSrc)}
        alt={profile.name}
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover mx-auto shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <h1 className="text-xl font-semibold">{profile.name}</h1>
      <p className="text-sm text-muted-foreground">{profile.location}</p>
      <p className="whitespace-pre-line text-sm">{profile.description}</p>
    </section>
  );

  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Animation for the entire paragraph rather than word-by-word
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

  return (
       <div className="mx-auto w-full max-w-5xl py-6 font-sans">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Image section */}
        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <div className="relative h-full w-full overflow-hidden rounded-xl border shadow bg-white">
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="h-full w-full"
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
        </div>

        {/* Text content section */}
        <div className="flex flex-col space-y-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
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

          {/* Tags/Keywords */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 flex flex-wrap gap-2"
          >
            {['AI', 'Full-Stack Developer', 'Los Angeles', 'Athlete', 'Startup Hustler', 'Musician', 'Tech Enthusiast', 'Family Man', 'Rapid Learner']
.map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm"
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
