import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'SmartChat AI Assistant',
    description:
      'Crafted a highly responsive AI chatbot leveraging OpenAI’s API to streamline routine user tasks like scheduling, FAQs, and reminders. Focused on delivering a smooth conversational UX by tightly integrating natural language understanding with backend workflows. Engineered robust error handling and optimized API usage to minimize latency and operational costs.',
    techStack: ['React', 'Node.js', 'Express', 'OpenAI API', 'MongoDB'],
    date: '2024',
  },
  {
    title: 'Discord Bot for Community Management',
    description:
      'Built a scalable, event-driven Discord bot automating moderation, dynamic role assignment, and personalized welcome messaging for a 500+ member community. Designed custom command handlers and integrated MongoDB for persistent user data, ensuring real-time responsiveness and high engagement while maintaining community health.',
    techStack: ['Node.js', 'Discord.js', 'MongoDB'],
    date: '2023',
  },
  {
    title: 'Flarum Forum Customization',
    description:
      'Customized and enhanced several Flarum forums across diverse industries. Improved user experience by creating bespoke themes, extending plugin functionalities, and optimizing community engagement metrics and performance. Collaborated closely with forum admins to deliver tailored solutions aligned with business goals.',
    techStack: ['PHP', 'Flarum', 'JavaScript', 'CSS'],
    date: '2023',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'Designed and developed a sleek personal portfolio site to showcase projects, technical skills, and professional experience. Leveraged Next.js and Tailwind CSS for fast, responsive performance and a modern, clean aesthetic optimized for desktop and mobile.',
    techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
    date: '2024',
  },
  {
    title: 'Shopify Store Setup & Customization',
    description:
      'Implemented end-to-end Shopify store setups for local businesses, including theme customization, product listing automation, and integration of marketing tools. Delivered streamlined ecommerce experiences focused on usability, speed, and conversion optimization.',
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    date: '2023',
  },
  {
    title: 'Telegram Bot for Event Notifications',
    description:
      'Developed a Telegram bot that manages scheduled notifications and reminders for events, enhancing attendee engagement and communication. Built with python-telegram-bot and deployed on Heroku for reliable uptime and scalability.',
    techStack: ['Python', 'python-telegram-bot', 'Heroku'],
    date: '2024',
  },
];



// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
// Main data export with updated content (no images as requested)
export const data = [
  {
    category: 'AI Project',
    title: 'SmartChat AI Assistant',
    src: '', // No image
    content: <ProjectContent project={{ title: 'SmartChat AI Assistant' }} />,
  },
  {
    category: 'Community Tools',
    title: 'Discord Bot for Community Management',
    src: '',
    content: <ProjectContent project={{ title: 'Discord Bot for Community Management' }} />,
  },
  {
    category: 'Forum Customization',
    title: 'Flarum Forum Customization',
    src: '',
    content: <ProjectContent project={{ title: 'Flarum Forum Customization' }} />,
  },
  {
    category: 'Portfolio',
    title: 'Personal Portfolio Website',
    src: '',
    content: <ProjectContent project={{ title: 'Personal Portfolio Website' }} />,
  },
  {
    category: 'E-commerce',
    title: 'Shopify Store Setup & Customization',
    src: '',
    content: <ProjectContent project={{ title: 'Shopify Store Setup & Customization' }} />,
  },
  {
    category: 'Automation',
    title: 'Telegram Bot for Event Notifications',
    src: '',
    content: <ProjectContent project={{ title: 'Telegram Bot for Event Notifications' }} />,
  },
];
