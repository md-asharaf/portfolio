import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Md Asharaf",
  initials: "MA",
  url: "https://asharaf.tech",
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
      href: "https://techwithjoshi.in",
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
        "A social media app where users can earn rewards, send virtual gifts, and manage a digital wallet. It includes live video broadcasting and automated safety filters to keep the community secure.",
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
      image: "https://ik.imagekit.io/yzxrxw4ib5/2026-05-27-112845_hyprshot.png",
      video: "",
    },
    {
      title: "Pravesh Ecom",
      href: "https://praveshtrade.in",
      dates: "Oct 2025 - Dec 2025",
      active: true,
      description: "A complete online storefront that handles everything from browsing products and shopping carts, to processing orders and giving store owners detailed sales reports.",
      technologies: ["Express.js", "Next.js", "MongoDB", "Redis", "Cloudinary"],
      links: [
        {
          type: "Website",
          href: "https://praveshtrade.in",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "https://ik.imagekit.io/yzxrxw4ib5/2026-07-31-150414_hyprshot.png",
      video: "",
    },
    {
      title: "Engtuwa - College CMS",
      href: "https://engtuwa.org",
      dates: "Jan 2026 - March 2026",
      active: true,
      description:
        "A comprehensive digital hub for colleges that manages daily operations like grading, facility booking, and student records, keeping staff and alumni connected in one place.",
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
      image: "https://ik.imagekit.io/yzxrxw4ib5/2026-05-27-112952_hyprshot.png",
      video: "",
    },
    {
      title: "Ram Pharmacy",
      href: "https://rampharmacy.vercel.app",
      dates: "2025 - 2026",
      active: true,
      description: "A specialized management system for medical colleges. It includes an easy-to-use tool that lets administrators create and update web pages without needing to write any code.",
      technologies: ["Bun", "TypeScript", "Express", "MongoDB", "Resend", "Cloudinary"],
      links: [
        {
          type: "Website",
          href: "https://rampharmacy.vercel.app",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "https://ik.imagekit.io/yzxrxw4ib5/2026-05-27-113041_hyprshot.png",
      video: "",
    },
    {
      title: "QRyzen",
      href: "https://qryzen.com",
      dates: "2025 - 2026",
      active: true,
      description: "A platform that helps businesses instantly create large batches of QR codes. It tracks every scan and provides detailed insights to help users understand their audience.",
      technologies: ["Node.js", "Express", "MongoDB", "MySQL", "Redis", "PayU"],
      links: [
        {
          type: "Website",
          href: "https://qryzen.com",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "https://ik.imagekit.io/yzxrxw4ib5/2026-07-31-150240_hyprshot.png",
      video: "",
    },
    {
      title: "Credit Reporting Platform",
      href: "https://cibilgst.vercel.app",
      dates: "Jan 2026 - March 2026",
      active: true,
      description:
        "A secure financial portal for accessing credit reports. It features safe login methods, automatic subscription billing, and is designed to be available 24/7 without interruptions.",
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
          href: "https://cibilgst.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://ik.imagekit.io/yzxrxw4ib5/2026-05-27-113449_hyprshot.png",
      video: "",
    },
    {
      title: "TubeX",
      href: "https://tubex.asharaf.tech",
      dates: "Mar 2024 - Feb 2025",
      active: true,
      description:
        "A video-sharing website that automatically adjusts video quality based on a viewer's internet speed, ensuring videos play smoothly without buffering.",
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
          href: "https://tubex.asharaf.tech",
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
      title: "Impact Leader",
      href: "https://leader.techwithjoshi.in/api-docs",
      dates: "2025 - 2026",
      active: true,
      description: "A professional networking platform where users can connect, share ideas, and chat instantly, built to stay fast and responsive as the user base grows.",
      technologies: ["Node.js", "Express", "MongoDB", "Redis", "AWS S3", "Socket.IO"],
      links: [
        {
          type: "Website",
          href: "https://leader.techwithjoshi.in/api-docs",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "https://ik.imagekit.io/yzxrxw4ib5/2026-07-31-152515_hyprshot.png",
      video: "",
    },
    {
      title: "Restaurant Table Booking System",
      href: "https://restaurant-table-booking-jq1q.onrender.com/api/docs",
      dates: "Apr 2024",
      active: false,
      description: "An online reservation system that allows customers to book restaurant tables from their phones or computers, while securely managing user accounts.",
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
      title: "Mystery Message",
      href: "https://next-mystery-message.vercel.app",
      dates: "July 2024 - Aug 2024",
      active: true,
      description: "A messaging platform where people can chat anonymously through unique usernames, featuring a smart AI assistant that suggests creative replies.",
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
