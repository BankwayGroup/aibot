import { tool } from "ai";
import { z } from "zod";

export const getPackages = tool({
  description:
    "Shares details about my service tiers and pricing. Use when users ask about pricing, packages, services, or plans.",
  parameters: z.object({}),
  execute: async () => {
    return `
Here’s the deal — I offer **three smart packages** tailored for whatever you're building — whether it's a sleek website or a powerful bot:

---

### 🌱 Starter Website or Bot — **$80**

A clean, modern 1-page site **or** a basic bot with just the right essentials.  
Includes:  
• E-commerce setup  
• Speed optimization  
• Payment integration  
• Social media icons  
• Plugin/extension setup  
• Hosting support  
• Opt-in form + autoresponder  

🕒 Delivery: **3 days**  
🔁 Revisions: **2**

---

### 🚀 Multi-Page Website or Bot — **$165**

A fully responsive 5-page website **or** a more dynamic bot with added features.  
Perfect if you want more flexibility and functionality.  
Includes:  
• Up to 5 custom pages  
• E-commerce for **20 products**  
• 3 plugins/extensions  
• Functionality enhancements  
• Payment processing  
• Hosting setup  
• Opt-in forms  
• Speed boost + social branding  

🕒 Delivery: **5 days**  
🔁 Revisions: **3**

---

### 💼 E-Commerce Website or Advanced Bot — **$425**

The full package. A powerhouse 10-page site **or** an advanced AI-driven bot with backend logic.  
Includes:  
• E-commerce for **50 products**  
• Backend integration  
• 5 plugins/extensions  
• Autoresponders + email flows  
• Hosting + speed optimization  
• Social media integration  
• Full content management  

🕒 Delivery: **10 days**  
🔁 Revisions: **5**

---

🔥 Ready to start? Just pick your vibe, and we’ll make it real. Which one feels right to you?
    `.trim();
  },
});
