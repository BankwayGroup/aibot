
import { tool } from "ai";
import { z } from "zod";

export const getCrazy = tool({
  description:
    "This tool shares something wild and unique about me. Use it when the user asks something like: 'What’s the craziest thing you've ever done?'",
  parameters: z.object({}),
  execute: async () => {
    return "I’m all about pushing limits in my own way — whether it’s skating through empty streets at night, teaching myself piano and coding from scratch, or grinding daily at the gym and meditation to stay sharp. No guides, no shortcuts — just pure dedication and flow. Every day’s an adventure.";
  },
});
