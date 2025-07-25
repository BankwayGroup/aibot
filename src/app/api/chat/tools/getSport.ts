import { tool } from "ai";
import { z } from "zod";

export const getSports = tool({
  description:
    "This tool shares highlights about my fitness routine and reading habits.",
  parameters: z.object({}),
  execute: async () => {
    return `I’m committed to daily gym workouts that build discipline and strength.  
I’m passionate about reading powerful books like *The 48 Laws of Power* and *The Law of Attraction* to level up my mindset.  
Constant growth and focus keep me moving forward every day.`;
  },
});
