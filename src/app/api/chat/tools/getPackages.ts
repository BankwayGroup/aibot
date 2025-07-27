// src/app/api/chat/tools/getPackages.ts
import { tool } from "ai";
import { z } from "zod";

// Import the data from your packageData file
import { packages, buyLink } from '@/components/ui/chat/packageData';

export const getPackages = tool({
  description: "Returns structured package data.",
  parameters: z.object({}),
  execute: async () => {
    return {
      packages,
      buyLink,
    };
  },
});
