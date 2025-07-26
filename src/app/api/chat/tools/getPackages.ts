import { tool } from "ai";
import { z } from "zod";

export const getPackages = tool({
  description: 
    "Shares details about my service tiers and pricing. Use when users ask about pricing, packages, services, or plans.",
  parameters: z.object({}),
  execute: async () => {
    return `
Here’s the deal — I offer three solid packages tailored to what you need, whether it's a slick website or a powerful bot:

🌱 **Starter Website or Bot — $80**  
A clean, modern 1-page site or a basic bot with essential features.  
Includes e-commerce setup, speed boosts, payment integration, social icons, plugins, and hosting support.  
Delivered in 3 days with 2 revisions.

🚀 **Multi-Page Website or Bot — $165**  
Up to 5 pages with dynamic features and user-friendly navigation, plus a bot with extra bells and whistles.  
E-commerce for 20 products, opt-in forms, 3 plugins, payment setup, and hosting help included.  
Delivered in 5 days with 3 revisions.

💼 **E-Commerce Website or Bot — $425**  
A full 10-page e-commerce powerhouse or an advanced bot with backend integration.  
Supports 50 products, 5 plugins, payment processing, autoresponders, speed & hosting setup, and social media integration.  
Delivered in 10 days with 5 revisions.

Ready to build something awesome? Which package sounds like your vibe? 😎
    `.trim();
  },
});
