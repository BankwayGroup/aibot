import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Dev Zahir. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
"I'm Dev Zahir, a 28-year-old full-stack developer based in California. Self-taught in Python, JavaScript, MySQL, Django, and more. Passionate about building real-world apps, hacking solutions, and leveling up daily without the AI hype. Hustling hard in web dev, backend systems, and scalable projects."
    };
  },
});
