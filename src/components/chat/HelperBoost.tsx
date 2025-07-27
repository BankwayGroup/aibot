import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';
import {
  BriefcaseBusiness,
  BriefcaseIcon,
  ShoppingCart,   // <-- Add this here
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CircleEllipsis,
  CodeIcon,
  GraduationCapIcon,
  Laugh,
  Layers,
  MailIcon,
  PartyPopper,
  Sparkles,
  UserRoundSearch,
  UserSearch,
} from 'lucide-react';
import { useState } from 'react';
import { Drawer } from 'vaul';

interface HelperBoostProps {
  submitQuery?: (query: string) => void;
  setInput?: (value: string) => void;
}

const questions = {
  Me: [
    "Who are you?",
    "What inspired your journey into tech?",
    "What motivates your work?",
    "How did you first get into programming?",
    "Did you come from a traditional background?",
    "What’s your core philosophy as a developer?",
    "What keeps you going when things get hard?",
    "Who do you look up to professionally?",
    "What’s one lesson you’ve learned the hard way?",
    "What’s something unique about your story?",
    "What kind of work excites you the most?",
    "What was your first coding language?",
    "How do you approach continuous learning?",
    "What’s a recent tech trend you find exciting?",
    "How do you balance work and personal life?",
    "What motivates you beyond money?",
    "What’s your biggest professional achievement?",
    "What’s a challenge you overcame recently?",
    "How do you handle burnout or frustration?",
    "What advice would you give to your younger self?"
  ],
  Projects: [
    "What projects are you most proud of?",
    "Can you walk me through a favorite project?",
    "What tech stack did you use and why?",
    "How did you solve the biggest challenge?",
    "What role did you play in the team?",
    "Was it a solo or collaborative project?",
    "Can I see a live demo?",
    "What lessons did you learn from the project?",
    "Did you face any major bugs or setbacks?",
    "How did you test and deploy it?",
    "What project had the most impact on you?",
    "Have you contributed to open-source projects?",
    "Which project pushed your skills the most?",
    "Have you worked on client projects? Any success stories?",
    "What project management methods did you use?",
    "Have you integrated APIs or third-party services?",
    "What’s your favorite project you built for fun?",
    "What was your role in your team’s last project?",
    "Have you done any automation or tooling projects?",
    "What’s your approach when a project scope changes?"
  ],
  Skills: [
    "What are your strongest technical skills?",
    "What non-technical skills set you apart?",
    "What programming languages do you use?",
    "Do you use TypeScript?",
    "How do you debug code?",
    "What’s your preferred code editor setup?",
    "Are you familiar with containerization tools like Docker?",
    "How do you manage team-based version control?",
    "Do you use CI/CD pipelines?",
    "How do you structure your projects?",
    "What design tools or systems do you use?",
    "How do you stay current with industry trends?",
    "What frameworks and libraries do you prefer?",
    "How do you ensure code quality and testing?",
    "What tools do you use for collaboration?",
    "Are you familiar with cloud platforms (AWS, GCP, Azure)?",
    "What’s your experience with databases?",
    "Do you write unit, integration, or e2e tests?",
    "Have you worked with microservices or serverless?",
    "What’s your approach to security in code?"
  ],
  Fun: [
    "Mac or PC?",
    "What’s your favorite programming meme?",
    "What do you do outside of tech?",
    "Do you collect anything?",
    "What’s your weirdest productivity habit?",
    "What’s your coding soundtrack?",
    "What’s your favorite keyboard shortcut?",
    "Dark mode or light mode?",
    "What game do you play when taking a break?",
    "If you weren’t in tech, what would you be doing?",
    "What’s the weirdest bug you’ve ever encountered?",
    "Do you use emojis in commit messages?",
    "What was your first computer?",
    "Do you prefer tabs or spaces?",
    "What’s your dream side project?",
    "Have you ever built something silly for fun?",
    "What’s your favorite tech conference or event?",
    "Do you enjoy hackathons or coding challenges?",
    "What’s the nerdiest thing you love?",
    "What’s your go-to coffee or snack while coding?"
  ],
  Contact: [
    "How can I get in touch with you?",
    "What’s your availability like?",
    "Do you work with international clients?",
    "Are you open to contract work?",
    "Do you sign NDAs?",
    "How quickly can you start a new project?",
    "What’s the best way to collaborate with you?",
    "What time zone do you work in?",
    "Do you prefer email, chat, or calls?",
    "Are you open to remote work?",
    "What’s your response time on messages?",
    "Do you offer retainers or long-term support?",
    "How do you handle client feedback?",
    "What are your typical working hours?",
    "Do you work with agencies or directly with clients?"
  ],
  Packages: [
    "What services do you offer?",
    "Do you have pricing tiers?",
    "What’s your revision policy?",
    "Do you offer custom projects?",
    "How long does each package take?",
    "Do you offer support post-delivery?",
    "Do you offer consultations or strategy calls?",
    "Can packages be combined or customized?",
    "Do you provide estimates before starting?",
    "What’s included in your maintenance packages?",
    "Do you handle hosting and deployment?",
    "Are there discounts for repeat clients?",
    "What’s your cancellation policy?",
    "How do you handle project scope changes?",
    "What payment methods do you accept?"
  ]
};

const specialQuestions = [
  "Can I see your resume?",
  "Can I inquire about a custom project?",
  "Do you offer consultations?",
  "How do payments work?",
  "Can I request revisions?",
  "Can you build full-stack applications?",
  "What frontend frameworks do you use?",
  "Can I see examples of your code?",
  "Do you follow accessibility best practices?",
  "How do you handle deployment?",
  "What security practices do you follow?",
  "Do you offer SEO optimization?",
  "Do you maintain sites after launch?",
  "How do you handle client communication?",
  "Do you work solo or with collaborators?",
  "What kind of projects excite you the most?",
  "Where are you located?",
  "Are you open to full-time roles?"
];

const questionsByCategory = [
  {
    id: 'development',
    name: 'Development',
    icon: CodeIcon,
    questions: [
      'How do you write clean, maintainable code?',
      'What’s your experience with performance optimization?',
      'How do you manage state in complex apps?',
      'How do you test your applications?',
      'What’s your approach to accessibility?',
      'How do you approach code reviews?',
      'What’s your favorite frontend tool?',
      'Have you worked with APIs extensively?',
      'What deployment workflows have you used?',
      'How do you handle error tracking and logging?',
      'Do you use automated testing tools?',
      'What’s your experience with CI/CD?',
      'How do you handle cross-browser compatibility?',
      'Have you built mobile-first designs?',
      'What is your approach to documentation?'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    icon: BriefcaseIcon,
    questions: [
      'Why should someone hire you?',
      'What makes you reliable to work with?',
      'Have you led any dev teams?',
      'Do you have experience working with stakeholders?',
      'How do you document your work?',
      'What is your communication style?',
      'How do you handle deadlines?',
      'Have you worked asynchronously?',
      'What’s your ideal work environment?',
      'How do you handle conflicts in a team?',
      'What’s your approach to feedback?',
      'Do you mentor junior developers?'
    ]
  },
  {
    id: 'skills',
    name: 'Skills & Tools',
    icon: GraduationCapIcon,
    questions: [
      'What frameworks do you prefer and why?',
      'How do you choose the right tools for a project?',
      'What’s your approach to debugging?',
      'Are you familiar with agile development?',
      'What tools help with productivity?',
      'What do you use for database management?',
      'How do you handle API integrations?',
      'Have you worked with headless CMSs?',
      'Do you use design tokens or themes in projects?',
      'What’s your experience with container orchestration?',
      'Do you work with GraphQL or REST APIs?',
      'What editors or IDEs do you prefer?'
    ]
  },
  {
    id: 'fun',
    name: 'Fun',
    icon: PartyPopper,
    questions: [
      'What’s something most people don’t know about you?',
      'What’s the weirdest bug you’ve ever encountered?',
      'Do you use emojis in commit messages?',
      'What was your first computer?',
      'Do you prefer tabs or spaces?',
      'What’s your dream side project?',
      'Have you ever built something silly for fun?',
      'What’s your favorite programming joke?',
      'Do you attend any developer meetups or events?',
      'What’s your favorite coding snack?'
    ]
  },
  {
    id: 'contact',
    name: 'Contact & Future',
    icon: MailIcon,
    questions: [
      'Where can someone reach you?',
      'Are you open to collaborations?',
      'Do you offer ongoing support or retainers?',
      'Are you open to speaking opportunities?',
      'What’s your preferred communication method?',
      'Do you work on long-term contracts?',
      'What’s your response time to client inquiries?',
      'Do you travel for work?',
      'Are you interested in mentorship roles?'
    ]
  }
];

// Animated Chevron component
const AnimatedChevron = () => {
  return (
    <motion.div
      animate={{
        y: [0, -4, 0], // Subtle up and down motion
      }}
      transition={{
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
      }}
      className="text-primary mb-1.5"
    >
      <ChevronUp size={16} />
    </motion.div>
  );
};

export default function HelperBoost({
  submitQuery,
  setInput,
}: HelperBoostProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);

  const handleQuestionClick = (questionKey: string) => {
    if (submitQuery) {
      submitQuery(questions[questionKey as keyof typeof questions]);
    }
  };

  const handleDrawerQuestionClick = (question: string) => {
    if (submitQuery) {
      submitQuery(question);
    }
    setOpen(false);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <div className="w-full">
          {/* Toggle Button */}
          <div
            className={
              isVisible
                ? 'mb-2 flex justify-center'
                : 'mb-0 flex justify-center'
            }
          >
            <button
              onClick={toggleVisibility}
              className="flex items-center gap-1 px-3 py-1 text-xs text-gray-500 transition-colors hover:text-gray-700"
            >
              {isVisible ? (
                <>
                  <ChevronDown size={14} />
                  Hide quick questions
                </>
              ) : (
                <>
                  <ChevronUp size={14} />
                  Show quick questions
                </>
              )}
            </button>
          </div>

          {/* HelperBoost Content */}
          {isVisible && (
            <div className="w-full">
              <div
                className="flex w-full flex-wrap gap-1 md:gap-3"
                style={{ justifyContent: 'safe center' }}
              >
                {questionConfig.map(({ key, color, icon: Icon }) => (
                  <Button
                    key={key}
                    onClick={() => handleQuestionClick(key)}
                    variant="outline"
                    className="border-border hover:bg-border/30 h-auto min-w-[100px] flex-shrink-0 cursor-pointer rounded-xl border bg-white/80 px-4 py-3 shadow-none backdrop-blur-sm transition-none active:scale-95"
                  >
                    <div className="flex items-center gap-3 text-gray-700">
                      <Icon size={18} strokeWidth={2} color={color} />
                      <span className="text-sm font-medium">{key}</span>
                    </div>
                  </Button>
                ))}

                {/* Need Inspiration Button */}
                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Drawer.Trigger className="group relative flex flex-shrink-0 items-center justify-center">
                        <motion.div
                          className="hover:bg-border/30 flex h-auto cursor-pointer items-center space-x-1 rounded-xl border border-neutral-200 bg-white/80 px-4 py-3 text-sm backdrop-blur-sm transition-all duration-200 dark:border-neutral-800 dark:bg-neutral-900"
                          whileHover={{ scale: 1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center gap-3 text-gray-700">
                            <CircleEllipsis
                              className="h-[20px] w-[18px]"
                              //style={{ color: '#3B82F6' }}
                              strokeWidth={2}
                            />
                            {/*<span className="text-sm font-medium">More</span>*/}
                          </div>
                        </motion.div>
                      </Drawer.Trigger>
                    </TooltipTrigger>
                    <TooltipContent>
                      <AnimatedChevron />
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Content */}
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-100 bg-black/60 backdrop-blur-xs" />
          <Drawer.Content className="fixed right-0 bottom-0 left-0 z-100 mt-24 flex h-[80%] flex-col rounded-t-[10px] bg-gray-100 outline-none lg:h-[60%]">
            <div className="flex-1 overflow-y-auto rounded-t-[10px] bg-white p-4">
              <div className="mx-auto max-w-md space-y-4">
                <div
                  aria-hidden
                  className="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-gray-300"
                />
                <div className="mx-auto w-full max-w-md">
                  <div className="space-y-8 pb-16">
                    {questionsByCategory.map((category) => (
                      <CategorySection
                        key={category.id}
                        name={category.name}
                        Icon={category.icon}
                        questions={category.questions}
                        onQuestionClick={handleDrawerQuestionClick}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}

// Component for each category section
interface CategorySectionProps {
  name: string;
  Icon: React.ElementType;
  questions: string[];
  onQuestionClick: (question: string) => void;
}

function CategorySection({
  name,
  Icon,
  questions,
  onQuestionClick,
}: CategorySectionProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2.5 px-1">
        <Icon className="h-5 w-5" />
        <Drawer.Title className="text-[22px] font-medium text-gray-900">
          {name}
        </Drawer.Title>
      </div>

      <Separator className="my-4" />

      <div className="space-y-3">
        {questions.map((question, index) => (
          <QuestionItem
            key={index}
            question={question}
            onClick={() => onQuestionClick(question)}
            isSpecial={specialQuestions.includes(question)}
          />
        ))}
      </div>
    </div>
  );
}

// Component for each question item with animated chevron
interface QuestionItemProps {
  question: string;
  onClick: () => void;
  isSpecial: boolean;
}

function QuestionItem({ question, onClick, isSpecial }: QuestionItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={cn(
        'flex w-full items-center justify-between rounded-[10px]',
        'text-md px-6 py-4 text-left font-normal',
        'transition-all',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
        isSpecial ? 'bg-black' : 'bg-[#F7F8F9]'
      )}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        backgroundColor: isSpecial ? undefined : '#F0F0F2',
      }}
      whileTap={{
        scale: 0.98,
        backgroundColor: isSpecial ? undefined : '#E8E8EA',
      }}
    >
      <div className="flex items-center">
        {isSpecial && <Sparkles className="mr-2 h-4 w-4 text-white" />}
        <span className={isSpecial ? 'font-medium text-white' : ''}>
          {question}
        </span>
      </div>
      <motion.div
        animate={{ x: isHovered ? 4 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
      >
        <ChevronRight
          className={cn(
            'h-5 w-5 shrink-0',
            isSpecial ? 'text-white' : 'text-primary'
          )}
        />
      </motion.div>
    </motion.button>
  );
}
