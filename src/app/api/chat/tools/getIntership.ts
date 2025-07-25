import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of internship I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my internship search or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s what I’m looking for 👇

- 📅 **Duration**: 6-month internship starting **September 2025**
- 🌍 **Location**: Preferably **Texas** or anywhere in the **United States**
- 🧑‍💻 **Focus**: Full-stack web development, backend systems, database design, and scalable apps
- 🛠️ **Stack**: Python, JavaScript, MySQL, Django, React/Next.js, Tailwind CSS, TypeScript — real-world tools I’m crushing daily
- 💼 **Visa**: Based in **Texas, USA** — no sponsorship needed
- ✅ **What I bring**: Solid experience building production-ready apps, strong database skills, debugging at 3AM, and winning hackathons like **ETH Oxford** & **Paris Blockchain Week**
- 🔥 I move fast, learn faster, and I’m HUNGRYYYYY for big challenges — no AI buzzwords, just real code and hustle

📬 **Contact me** via:
- Email: DevZahirLLC@gmail.com
- LinkedIn: [linkedin.com/in/dev-zahir](https://www.linkedin.com/in/dev-zahir/)
- GitHub: [github.com/devzahirx3](https://github.com/devzahirx3)

Let's build cool shit together ✌️
    `;
  },
});
