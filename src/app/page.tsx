'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Typed from 'typed.js';
import {
  BriefcaseBusiness,
  Laugh,
  Layers,
  PartyPopper,
  UserRoundSearch,
  ArrowLeft,
  ArrowRight,
  ShoppingCart,   // <-- Add this here
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { GithubButton } from '@/components/ui/github-button';
import FluidCursor from '@/components/FluidCursor';
import WelcomeModal from '@/components/welcome-modal';

const questions = {
  Me: 'Who are you? I want to know more about you.',
  Projects: 'What are your projects? What are you working on right now?',
  Skills: 'What are your skills? Give me a list of your soft and hard skills.',
  Contact: 'How can I contact you?',
  Packages: 'What packages or services do you offer? What do they include?',
} as const;

const questionConfig = [
  { key: 'Me', color: '#329696', icon: Laugh },
  { key: 'Projects', color: '#3E9858', icon: BriefcaseBusiness },
  { key: 'Skills', color: '#856ED9', icon: Layers },
  { key: 'Contact', color: '#C19433', icon: UserRoundSearch },
  { key: 'Packages', color: '#22c55e', icon: ShoppingCart },
] as const;

export default function Home() {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const typedRef = useRef<HTMLSpanElement>(null);
  const router = useRouter();
  const [isDark, setIsDark] = useState(false);

  const goToChat = (query: string) => {
    router.push(`/chat?query=${encodeURIComponent(query)}`);
  };

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

    const typed = new Typed(typedRef.current, {
      strings: [
        'AI Developer',
        'Deploying at 3AM',
        'Fixing bugs I caused at 2AM',
        'Creating elegant chaos',
        'console.log("My life")',
        'Full-stack pain manager',
        'Git committing my soul',
        'Talk is cheap. Show me the code',
        'It works on my machine™',
        'Commit early, commit often.',
        'Eat. Sleep. Code. Repeat.',
        '99 little bugs in the code...',
        'Hello world, goodbye social life.',
        'Typing furiously ≠ productivity.',
        'sudo make me a sandwich',
        'rm -rf /* and chill',
        'Hacking is not a crime.',
        'while (!success) try();',
        'Think twice, code once.',
        'Your mind is the IDE.',
        'Keep calm and push to prod.',
      ],
      typeSpeed: isMobile ? 35 : 50,
      backSpeed: isMobile ? 20 : 30,
      backDelay: 1200,
      loop: true,
      showCursor: false,
      smartBackspace: true,
    });

    return () => typed.destroy();
  }, []);

  // Variants (if you want to use them later)
  const topElementVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8 },
    },
  };

  const bottomElementVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <>
      <div className="absolute top-6 right-8 z-20 flex items-center gap-2">
        <GithubButton
          animationDuration={1.5}
          label="Star"
          size="sm"
          repoUrl="https://github.com/devzahirx3/DevZahir"
        />
      </div>
<div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
  <span className="text-xl font-semibold text-gray-900 dark:text-white">Zahir</span>
  <a
    href="https://t.me/devzahirbot"
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-[#00bfff] transition duration-300 hover:text-[#33ccff]"
    style={{
      textShadow: '0 0 6px #00bfff',
    }}
  >
    Telegram
  </a>
</div>


      <div className="absolute top-6 left-6 z-20 flex flex-col items-start gap-2 sm:flex-row">
        <button
          onClick={() => (window.location.href = 'https://devzahir.com')}
          className="relative flex cursor-pointer items-center gap-2 rounded-full border bg-white/30 px-4 py-1.5 text-sm font-medium text-black shadow-md backdrop-blur-lg transition hover:bg-white/60 dark:border-white dark:text-white dark:hover:bg-neutral-800"
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </button>
        <button
          onClick={() => goToChat('Are you looking for an internship?')}
          className="relative flex cursor-pointer items-center gap-2 rounded-full border bg-white/30 px-4 py-1.5 text-sm font-medium text-black shadow-md backdrop-blur-lg transition hover:bg-white/60 dark:border-white dark:text-white dark:hover:bg-neutral-800"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Looking for a talent?
        </button>
      </div>

  <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-10 md:pb-20">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
          <div
            className="hidden bg-gradient-to-b from-neutral-500/10 to-neutral-500/0 bg-clip-text text-[10rem] leading-none font-black text-transparent select-none sm:block lg:text-[16rem]"
            style={{ marginBottom: '-2.5rem' }}
          >
            AI Zahir
          </div>
        </div>

        <motion.div
          className="z-1 mt-24 mb-8 flex flex-col items-center text-center md:mt-4 md:mb-12"
          variants={topElementVariants}
          initial="hidden"
          animate="visible"
        >
          <WelcomeModal />
          <h2 className="text-secondary-foreground mt-1 text-xl font-semibold md:text-2xl">
            Hey, I'm Dev Zahir 👋
          </h2>
<h1
  className="text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl text-center leading-tight"
  style={{ minHeight: '1.2em' }}
>
  <span
    ref={typedRef}
    className="inline-block min-w-[22ch] whitespace-nowrap"
  />
</h1>



        </motion.div>

        <motion.div
          variants={bottomElementVariants}
          initial="hidden"
          animate="visible"
          className="z-10 mt-4 flex w-full flex-col items-center justify-center md:px-0"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (input.trim()) goToChat(input.trim());
            }}
            className="relative w-full max-w-lg"
          >
            <div className="mx-auto flex items-center rounded-full border border-neutral-200 bg-white/30 py-2.5 pr-2 pl-6 backdrop-blur-lg transition-all hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything…"
                className="w-full border-none bg-transparent text-base text-neutral-800 placeholder:text-neutral-500 focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-500"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Submit question"
                className="flex items-center justify-center rounded-full bg-[#0171E3] p-2.5 text-white transition-colors hover:bg-blue-600 disabled:opacity-70 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </form>

          <div className="mt-4 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {questionConfig.map(({ key, color, icon: Icon }) => (
              <Button
                key={key}
                onClick={() => goToChat(questions[key])}
                variant="outline"
                className="border-border hover:bg-border/30 aspect-square w-full cursor-pointer rounded-2xl border bg-white/30 py-8 shadow-none backdrop-blur-lg active:scale-95 md:p-10"
              >
                <div className="flex h-full flex-col items-center justify-center gap-1 text-gray-700">
                  <Icon size={22} strokeWidth={2} color={color} />
                  <span className="text-xs font-medium sm:text-sm">{key}</span>
                </div>
              </Button>
            ))}
          </div>
        </motion.div>

        <FluidCursor />
      </div>

      <footer>
        <div className="w-full border-t border-neutral-300 py-6 text-center text-sm text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
          © 2025 Dev Zahir. All rights reserved.
        </div>
      </footer>
    </>
  );
}
