import { tool } from "ai";
import { z } from "zod";

export const getSports = tool({
  description:
    "This tool shares highlights about my fitness routine and reading habits, no sports pics here!",
  parameters: z.object({}),
  execute: async () => {
    return `I’m all about the gym grind—daily workouts that build discipline and strength.  
I love diving into powerful books like *The 48 Laws of Power* and *The Law of Attraction* to sharpen my mindset.  
No sports for me, just growth, grit, and knowledge every day.`;
  },
});
