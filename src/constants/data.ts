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
  // Programming Languages
  { icon: FaJava, name: "Java" },
  { icon: FaPython, name: "Python" },
  { icon: BiLogoTypescript, name: "TypeScript" },
  { icon: FaNodeJs, name: "JavaScript" },

  // Frameworks & Libraries
  { icon: FaReact, name: "React" },
  { icon: RiNextjsLine, name: "Next.js" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiExpress, name: "Express.js" },
  { icon: BiLogoSpringBoot, name: "Spring Boot" },
  { icon: RiTailwindCssFill, name: "Tailwind CSS" },

  // Databases
  { icon: BiLogoMongodb, name: "MongoDB" },
  { icon: BiLogoPostgresql, name: "PostgreSQL" },
  { icon: SiRedis, name: "Redis" },

  // Cloud & Dev Tools
  { icon: FaAws, name: "AWS" },
  { icon: FaDocker, name: "Docker" },
  { icon: DiNginx, name: "Nginx" },
];


export const projects = [
  {
    title: "Pair-Dev",
    description:
      "Pair programming platform that allows developers to create rooms and live stream while coding together.",
    url: "https://github.com/techfreakSahil/pair-dev",
  },
  {
    title: "Intentional Living – Life Tracker",
    description:
      "A full-stack habit tracking platform built with Next.js and Supabase, supporting 100+ active users. Features scheduled reminders, admin dashboard, role-based access control, and Stripe-powered subscription monetization.",
    url: "https://www.intentionalliving.health",
  },
  {
    title: "NuTor Academy",
    description:
      "SEO-optimized high-performance landing page built with Next.js. Implemented structured metadata, responsive layouts, and integrated Google Search Console and Tag Manager for analytics and visibility.",
    url: "https://www.nutoracademy.in/",
  },
  {
    title: "GitHub Card",
    description:
      "Web app that generates a GitHub profile card and allows users to download it as a PDF.",
    url: "https://githubcard-generate.netlify.app/",
  },
  {
    title: "Memory Game",
    description:
      "Browser-based memory game built using MightyMeld for an online hackathon.",
    url: "https://creative-build-memory.netlify.app/",
  },
  {
    title: "GIF Generator",
    description:
      "Web app that generates random GIFs using the Giphy API.",
    url: "https://genuine-sunburst-ccaa06.netlify.app/",
  },
];

export const experiences = [
  {
    company: {
      name: "Third Generation Studios",
      icon: FaBriefcase,
    },
    role: {
      title: "Full Stack Developer",
      icon: FaUser,
    },
    description: {
      work: [
        "Redesigned the agency website to improve user retention and conversion, supporting a shift from design-led delivery to an MVP-first product development model.",
        "Engineered a structured client acquisition and onboarding pipeline, onboarding 4 clients with 90% retention by standardizing backend workflows.",
        "Implemented automated backend workflows for onboarding, including email orchestration and subscription logic, reducing manual operations and improving system reliability.",
        "Developed reusable backend templates and service scaffolding to accelerate project bootstrapping and collaborated with independent artists and singers to prototype a scalable creator monetization platform.",
      ],
      icon: FaFileAlt,
    },
    duration: {
      time: "May 2025 – Present",
      icon: FaCalendarAlt,
    },
  },
  {
    company: {
      name: "Reborn Consultants",
      icon: FaBriefcase,
    },
    role: {
      title: "Website Developer (Part Time)",
      icon: FaUser,
    },
    description: {
      work: [
        "Delivered web solutions for nonprofit and commercial clients including onemorebagoftrash.com, implementing structured content flows, SEO improvements, and optimized landing pages.",
        "Improved application performance across 4 client platforms by optimizing backend request handling, asset delivery, and caching strategies, reducing WooCommerce cart load time from 15s to under 3s.",
        "Designed and deployed wasatch-lab.com with secure PayPal payment processing, implementing order flow validation and responsive UI.",
      ],
      icon: FaFileAlt,
    },
    duration: {
      time: "Sept 2025 – Nov 2025",
      icon: FaCalendarAlt,
    },
  },
  {
    company: {
      name: "Alig Mentors – PsiGenie",
      icon: FaBriefcase,
    },
    role: {
      title: "Full Stack Developer Intern",
      icon: FaUser,
    },
    description: {
      work: [
        "Built a scalable content delivery platform combining static pages with a dynamic CMS-driven blog to improve maintainability.",
        "Implemented secure authentication and user management using Google and OTP-based login with Supabase.",
        "Developed a personalized user dashboard supporting role-based access and data-driven engagement.",
      ],
      icon: FaFileAlt,
    },
    duration: {
      time: "Sept 2024 – April 2025",
      icon: FaCalendarAlt,
    },
  },
  {
    company: {
      name: "PaperLoop",
      icon: FaBriefcase,
    },
    role: {
      title: "Full Stack Developer Intern (Part Time)",
      icon: FaUser,
    },
    description: {
      work: [
        "Led front-end implementation for marketing pages and research dashboards, ensuring consistent UI aligned with data flows.",
        "Implemented Stripe-based payment and membership workflows enabling secure monetization and access control.",
      ],
      icon: FaFileAlt,
    },
    duration: {
      time: "July 2024 – March 2025",
      icon: FaCalendarAlt,
    },
  },
];


export const my_details = {
  name: "Md Sahil Khan",
  location: "Kolkata, India",
  Freelancing: "Present",
  projects_done: "10+ projects done",
  email: "contactkhan@gmail.com",
  description: `👋 Hi, I’m Md Sahil Khan, a Full Stack Developer experienced in designing and implementing scalable applications, secure authentication systems, and performance-optimized platforms, with a growing interest in AI/ML-driven products.`,
  github_url: "https://github.com/techfreakSahil",
  resume_url:
    "https://drive.google.com/file/d/1rcqNdz4MkTL38eM9dSgPiIwfRt8SYp3v/view?usp=sharing",
  linkedin_url: "https://www.linkedin.com/in/md-sahil-khan-133490227/",
};
