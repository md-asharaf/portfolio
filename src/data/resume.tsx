import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Md Asharaf",
  initials: "MA",
  url: "https://asharaf.me",
  location: "Jhanjharpur, Bihar",
  locationLink: "https://www.google.com/maps/place/Jhanjharpur",
  description:
    "Backend-focused Software Engineer. I love building scalable systems and solving complex problems.",
  summary:
    "Backend-focused Software Engineer with production experience architecting scalable web platforms and APIs. I specialize in the Node.js ecosystem, TypeScript, and Go, with a strong background in complex database design, real-time messaging, and secure financial workflows. My recent work involves delivering high-traffic client systems end-to-end, optimizing server performance, and standardizing containerized cloud deployments.",
  avatarUrl: "https://ik.imagekit.io/yzxrxw4ib5/profile_2QzwM9QJt?updatedAt=1753862646104",
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "Nest.js",
    "Express.js",
    "GraphQL",
    "Kafka",
    "Redis",
    "Postgres",
    "MongoDB",
    "Docker",
    "Typescript",
    "Python",
    "Java",
    "C++",
    "Go",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "mdasharaf.dev@gmail.com",
    tel: "+916202377537",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/md-asharaf",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/md-asharaf/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Discord: {
        name: "Discord",
        url: "https://discord.com/users/791172205609746433",
        icon: Icons.discord,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/_md_asharaf",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:mdasharaf.dev@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Techwithjoshi Pvt Ltd",
      href: "https://techwithjoshi.com",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "https://ik.imagekit.io/yzxrxw4ib5/techwithjoshi.jpg",
      start: "Oct 2025",
      end: "March 2026",
      description:
        "Delivered 6+ production-ready web platforms across social media, fintech, e-commerce, and CRM domains. Engineered real-time features such as live streaming and instant messaging. Designed highly scalable database architectures to handle complex institutional data.",
    },
    {
      company: "Techsolace",
      href: "https://techsolace.in",
      badges: ["intern"],
      location: "Remote",
      title: "Backend Developer Intern",
      logoUrl: "https://ik.imagekit.io/yzxrxw4ib5/techsolace.jpg?updatedAt=1753858721765",
      start: "June 2025",
      end: "Sep 2025",
      description:
        "Contributed to the development of backend services in Go and Node.js for client-facing applications alongside senior engineers. Assisted in optimizing database queries and indexes, which contributed to a 20% reduction in API response times.",
    },
    {
      company: "Nazra Software Solutions",
      badges: ["intern"],
      href: "https://www.nazrasoftware.com",
      location: "Remote",
      title: "Full-Stack Developer Intern",
      logoUrl: "https://ik.imagekit.io/yzxrxw4ib5/nazrasoft.png?updatedAt=1753858703718",
      start: "Oct 2024",
      end: "Mar 2025",
      description:
        "Collaborated with the engineering team to implement frontend and backend features using React.js and Node.js. Participated actively in daily stand-ups, code reviews, and the integration of third-party APIs into existing platforms.",
    }
  ],
  education: [
    {
      school: "Konark Institute of Science and Technology",
      href: "https://kist.ac.in/",
      degree: "B.Tech in Computer Science and Engineering",
      logoUrl: "https://ik.imagekit.io/yzxrxw4ib5/kist.jpeg?updatedAt=1753858736541",
      start: "Aug 2022",
      end: "present",
      location: "Bhubaneswar, Odisha",
      description: "Pursuing Bachelor of Technology in Computer Science and Engineering with focus on software development, data structures, algorithms, and modern programming technologies.",
    }
  ],
  projects: [
    {
      title: "Flinzo",
      href: "https://flinzo.org",
      dates: "Oct 2025 - March 2026",
      active: true,
      description:
        "Built a comprehensive social networking platform featuring a massive virtual economy with user wallets, gifting, loyalty rewards, and referrals. Engineered robust live video streaming functionality and AI-driven moderation.",
      technologies: [
        "Node.js",
        "MongoDB",
        "Redis",
        "WebSockets",
        "RabbitMQ",
        "Docker",
        "TensorFlow.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://flinzo.org",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Engtuwa - College CMS",
      href: "https://engtuwa.org",
      dates: "Jan 2026 - March 2026",
      active: true,
      description:
        "Built an end-to-end CMS bridging 36 diverse institutional operations including academics, facility management, and alumni networking with a complex relational database.",
      technologies: [
        "NestJS",
        "PostgreSQL",
        "Prisma",
        "JWT",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://engtuwa.org",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Credit Reporting Platform",
      href: "https://cibiltwj.vercel.app",
      dates: "Jan 2026 - March 2026",
      active: true,
      description:
        "Optimized the foundational server architecture to maximize hardware utilization, ensuring 99.9% uptime and auto-recovery from failures. Built automated subscription billing workflows and Two-Factor Authentication.",
      technologies: [
        "Node.js",
        "TypeScript",
        "MongoDB",
        "Redis",
        "Razorpay",
      ],
      links: [
        {
          type: "Website",
          href: "https://cibiltwj.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "TubeX",
      href: "https://tubex.asharaf.me",
      dates: "Mar 2024 - Feb 2025",
      active: true,
      description:
        "Engineered a large-scale video sharing platform guaranteeing smooth adaptive streaming quality directly influenced by user bandwidth constraints, with automated media processing pipelines.",
      technologies: [
        "React",
        "Express",
        "MongoDB",
        "AWS",
        "Kafka",
        "FFmpeg",
      ],
      links: [
        {
          type: "Website",
          href: "https://tubex.asharaf.me",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/md-asharaf/tubeX",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://ik.imagekit.io/yzxrxw4ib5/2025-07-30-131021_hyprshot.png?updatedAt=1753861312344",
      video: "",
    },
    {
      title: "QRFY",
      href: "https://qryzen.com",
      dates: "2025 - 2026",
      active: true,
      description: "A comprehensive QR code SaaS platform featuring dual database architecture (MySQL and MongoDB) to manage complex analytics and high-volume code generation.",
      technologies: ["Node.js", "Express", "MongoDB", "MySQL", "Redis", "PayU"],
      links: [
        {
          type: "Website",
          href: "https://qryzen.com",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: "",
    },
    {
      title: "Pravesh Ecom",
      href: "https://praveshtrade.in",
      dates: "Oct 2025 - Dec 2025",
      active: true,
      description: "A full e-commerce platform with 18 backend modules covering product catalog, shopping cart, order management, brand navigation, and admin analytics.",
      technologies: ["Express.js", "Next.js", "MongoDB", "Redis", "Cloudinary"],
      links: [
        {
          type: "Website",
          href: "https://praveshtrade.in",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: "",
    },
    {
      title: "Impact Leader",
      href: "https://leader.techwithjoshi.in",
      dates: "2025 - 2026",
      active: true,
      description: "A professional networking platform built with a robust backend to handle real-time interactions, data storage, and scalable architecture.",
      technologies: ["Node.js", "Express", "MongoDB", "Redis", "AWS S3", "Socket.IO"],
      links: [
        {
          type: "Website",
          href: "https://leader.techwithjoshi.in",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: "",
    },
    {
      title: "Restaurant Table Booking System",
      href: "https://restaurant-table-booking-jq1q.onrender.com/api/docs",
      dates: "Apr 2024",
      active: false,
      description: "A RESTful backend system for restaurant table reservations with role-based access control, JWT authentication, and multi-device session management.",
      technologies: ["Nest.js", "PostgreSQL", "Prisma", "Passport", "JWT"],
      links: [
        {
          type: "Website",
          href: "https://restaurant-table-booking-jq1q.onrender.com/api/docs",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/md-asharaf/nestjs-restaurant-table-booking",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://ik.imagekit.io/yzxrxw4ib5/2025-07-30-132146_hyprshot.png?updatedAt=1753861940113",
      video: "",
    },
    {
      title: "Ram Pharmacy",
      href: "https://rampharmacy.vercel.app",
      dates: "2025 - 2026",
      active: true,
      description: "An e-commerce system specifically tailored for pharmaceutical operations, featuring automated rate limiting, secure payments, and modern authentication.",
      technologies: ["Bun", "TypeScript", "Express", "MongoDB", "Resend", "Cloudinary"],
      links: [
        {
          type: "Website",
          href: "https://rampharmacy.vercel.app",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: "",
    },
    {
      title: "Mystery Message",
      href: "https://next-mystery-message.vercel.app",
      dates: "July 2024 - Aug 2024",
      active: true,
      description: "An anonymous messaging platform where users can send and receive messages through unique usernames. Features AI-powered message suggestions and secure authentication.",
      technologies: ["Next.js", "NextAuth", "MongoDB", "Gemini AI", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://next-mystery-message.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/md-asharaf/next-mystery-message",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://ik.imagekit.io/yzxrxw4ib5/2025-07-30-130948_hyprshot.png?updatedAt=1753861311382",
      video: "",
    }
  ],
  hackathons: [
    {
      title: "Infosys Global Hackathon",
      dates: "November 11th - 12th, 2024",
      location: "Bhubaneswar, Odisha",
      description:
        "Developed a web application promoting rural tourism in India by connecting local artisans with tourists. The app allows users to book tours, buy local handicrafts, and learn about the culture and traditions of rural India.",
      image:
        "https://ik.imagekit.io/yzxrxw4ib5/infosys.jpg?updatedAt=1754232388884",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [{
        title: "Source",
        href: "https://github.com/md-asharaf/effective-carnival",
        icon: <Icons.globe className="size-3" />,
      }],
    }
  ],
} as const;
