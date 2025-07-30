import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description: 'This tool shows my contact information.',
  parameters: z.object({}),
  execute: async () => {
    return (
      `📬 You can contact me directly via Telegram:\n` +
      `👉 <a href="https://t.me/devzahirbot">@DevZahirBot</a>\n\n` +
      `💳 Instant bookings & payments are accepted via:\n` +
      `• Stripe (Debit/Credit Card)\n` +
      `• Bitcoin (BTC)\n` +
      `• Litecoin (LTC)\n` +
      `• Ethereum (ETH)\n\n` +
      `📅 Use Telegram to book a service or request a quote instantly. I'm happy to assist you!`
    );
  },
});
