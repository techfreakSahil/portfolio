import { FaAws, FaDocker, FaReact } from "react-icons/fa";
import { FaBriefcase, FaCalendarAlt, FaFileAlt, FaUser } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGolang, FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import {
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoSpringBoot,
  BiLogoTypescript,
} from "react-icons/bi";
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { SiRedis, SiReactquery } from "react-icons/si";
import { DiNginx } from "react-icons/di";
export const skills = [
  {
    icon: FaReact,
    name: "React",
  },
  {
    icon: RiNextjsLine,
    name: "Next",
  },
  {
    icon: RiTailwindCssFill,
    name: "Tailwind CSS",
  },
  {
    icon: FaNodeJs,
    name: "Node",
  },
  {
    icon: SiExpress,
    name: "Express",
  },
  { icon: SiReactquery, name: "React Query" },

  {
    icon: BiLogoTypescript,
    name: "Typescript",
  },
  {
    icon: FaJava,
    name: "Java",
  },
  {
    icon: BiLogoSpringBoot,
    name: "Spring Boot",
  },

  {
    icon: FaPython,
    name: "Python",
  },
  {
    icon: FaGolang,
    name: "Golang",
  },
  {
    icon: BiLogoMongodb,
    name: "MongoDB",
  },
  {
    icon: BiLogoPostgresql,
    name: "SQL",
  },
  {
    icon: SiRedis,
    name: "Redis",
  },
  {
    icon: FaDocker,
    name: "Docker",
  },
  {
    icon: DiNginx,
    name: "Nginx",
  },
  {
    icon: FaAws,
    name: "AWS",
  },
];

export const projects = [
  {
    title: "Pair-Dev",
    description:
      "Pair programming platform for developers to live stream together by creating rooms.",
    url: "https://github.com/techfreakSahil/pair-dev",
  },
  {
    title: "Eye-Spye",
    description:
      "A web app to detect and track objects in a web cam efficiently.",
    url: "https://eye-spye.netlify.app/",
  },
  {
    title: "GitHub Card",
    description:
      "A web app to generate GitHub card for your profile and download it as pdf.",
    url: "https://githubcard-generate.netlify.app/",
  },
  {
    title: "Memory Game",
    description:
      "A web app to build a game using MightyMeld for a online Hackathon.",
    url: "https://creative-build-memory.netlify.app/",
  },
  {
    title: "GIF Generator",
    description: "A web app to generate random GIFs using Giphy API.",
    url: "https://genuine-sunburst-ccaa06.netlify.app/",
  },
];

export const ongoing_projects = [
  {
    title: "web-compiler",
    description: "A web app to compile and run code in multiple languages.",
  },
  {
    title: "customer-tracking-system",
    description:
      "A web app to track customers and their orders for a small business.",
  },
  {
    title: "prompt-pallete",
    description:
      "A web app to generate prompts for users basis on the interface created by the user specification.",
  },
];

export const experiences = [
  {
    company: {
      name: "PsiGenei (Freelance)",
      icon: FaBriefcase,
    },
    role: {
      title: "Full Stack Developer",
      icon: FaUser,
    },
    description: {
      work: [
        "Developed a marketing page and dashboard for Psigenei to enable course purchases and improve user experience.",
        "Implemented OTP authentication and integrated a secure payment gateway for seamless transactions.",
        "Leveraged AI models to predict relevant courses, enhancing personalized recommendations and user engagement.",
      ],
      icon: FaFileAlt,
    },
    duration: {
      time: "Sept 2024 - Present",
      icon: FaCalendarAlt,
    },
  },
  {
    company: {
      name: "SuperPaper",
      icon: FaBriefcase,
    },
    role: {
      title: "Full Stack Developer Intern",
      icon: FaUser,
    },
    description: {
      work: [
        "Led full-stack development for a SaaS product in an Agile environment, taking it from concept to deployment.",
        "Built a CI/CD pipeline and robust authentication system using Supabase for secure and reliable deployments.",
        "Designed and launched a marketing page integrated with Stripe, achieving high conversion rates and quality assurance.",
      ],
      icon: FaFileAlt,
    },
    duration: {
      time: "July 2024 - Present",
      icon: FaCalendarAlt,
    },
  },
];

export const my_details = {
  name: "Md Sahil Khan",
  location: "Aligarh, India",
  internship: "Present",
  projects_done: "10+ projects done",
  email: "contactkhan@gmail.com",
  description: `👋 Hi, I'm Md Sahil Khan and skilled Full Stack Developer. With
  experience in web development and exploring AI/ML, I am equipped to
  create innovative and cutting-edge applications for the modern world`,
  github_url: "https://github.com/techfreakSahil",
  resume_url:
    "https://drive.google.com/file/d/1hW362VXuszepcfFV84FxH_RYMfPtlKl9/view?usp=drivesdk",
  linkedin_url: "https://www.linkedin.com/in/md-sahil-khan-133490227/",
};
