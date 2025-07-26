// src/app/api/chat/tools/getPackages.ts
import { tool } from "ai";
import { z } from "zod";

export const getPackages = tool({
  description: "Returns info about service packages.",
  parameters: z.object({}),
  execute: async () => {
    return `
Here's a quick look at my service packages — whether you're building a stunning website or a smart bot, there's something tailored for you:

---

### 🌱 Starter Website or Bot — **$80**

A simple, clean 1-page static website or a basic bot setup to get you going.

**Includes:**
- E-commerce functionality
- 1 beautifully designed page
- Content upload & management
- Speed optimization
- Social media icons
- Plugin/extension setup
- Payment processing integration
- Opt-in form + autoresponder
- Hosting setup support

🕒 **Delivery:** 3 days  
🔁 **Revisions:** 2

---

### 🤖 Multi-Page Website or Bot — **$165**

Perfect if you need a little more — like a full website with dynamic sections or a smarter bot.

**Includes:**
- Up to 5 custom pages
- Content upload & management
- E-commerce features for 20 products
- 3 plugins/extensions
- Functionality enhancements
- Payment processing integration
- Opt-in form & autoresponder
- Speed optimization
- Hosting setup assistance
- Social media branding

🕒 **Delivery:** 5 days  
🔁 **Revisions:** 3

---

### 💼 E-Commerce Website or Advanced Bot — **$425**

The full package: A feature-rich, professional-grade solution with backend integration.

**Includes:**
- Up to 10 custom pages
- E-commerce setup for 50 products
- Backend integration
- Content upload & management
- 5 plugins/extensions
- Payment processing integration
- Opt-in forms + autoresponder flows
- Speed optimization
- Hosting support
- Social media icons

🕒 **Delivery:** 10 days  
🔁 **Revisions:** 5

---

🔗 **Buy now:** [https://www.fiverr.com/s/m5Vb1g8](https://www.fiverr.com/s/m5Vb1g8)
    `.trim();
  },
});
