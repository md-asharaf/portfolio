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
    "Backend-focused Software Engineer with production experience architecting scalable web platforms and APIs. I specialize in the Node.js and Spring Boot ecosystems, with a strong background in complex database design, real-time messaging, and secure financial workflows. My recent work involves delivering high-traffic client systems end-to-end, optimizing server performance, and standardizing containerized cloud deployments.",
  avatarUrl: "https://ik.imagekit.io/yzxrxw4ib5/profile_2QzwM9QJt?updatedAt=1753862646104",
  resumeUrl: "https://drive.google.com/file/d/1Tt7F5S81vlFHbEF3v3MEU_HmjH_EOf30/view?usp=drive_link",
  skills: [
    {
      category: "Languages",
      items: [
        { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
        { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
        { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
        { name: "PHP", icon: "https://skillicons.dev/icons?i=php" },
        { name: "Go", icon: "https://skillicons.dev/icons?i=go" },
        { name: "Python", icon: "https://skillicons.dev/icons?i=py" },
        { name: "C/C++", icon: "https://skillicons.dev/icons?i=cpp" },
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "React.js", icon: "https://skillicons.dev/icons?i=react" },
        { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
        { name: "Redux Toolkit", icon: "https://skillicons.dev/icons?i=redux" },
        { name: "TanStack Query", icon: "https://cdn.simpleicons.org/reactquery/FF4154" },
        { name: "HTML5", icon: "https://skillicons.dev/icons?i=html" },
        { name: "TailwindCSS", icon: "https://skillicons.dev/icons?i=tailwind" },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Express.js", icon: "https://skillicons.dev/icons?i=express" },
        { name: "Nest.js", icon: "https://skillicons.dev/icons?i=nestjs" },
        { name: "Spring Boot & Microservices", icon: "https://skillicons.dev/icons?i=spring" },
        { name: "JWT", icon: "https://cdn.simpleicons.org/jsonwebtokens/808080" },
        { name: "WebSocket", icon: "https://cdn.simpleicons.org/socketdotio/808080" },
        { name: "WebRTC", icon: "https://cdn.simpleicons.org/webrtc/808080" },
        { name: "GraphQL", icon: "https://skillicons.dev/icons?i=graphql" },
        { name: "REST APIs", icon: "https://cdn.simpleicons.org/fastapi/009688" },
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
        { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
        { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
        { name: "Redis", icon: "https://skillicons.dev/icons?i=redis" },
      ]
    },
    {
      category: "Cloud & Infra",
      items: [
        { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" },
        { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
        { name: "RabbitMQ", icon: "https://skillicons.dev/icons?i=rabbitmq" },
        { name: "Kafka", icon: "https://skillicons.dev/icons?i=kafka" },
      ]
    }
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
      badges: ["intern"],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "https://ik.imagekit.io/yzxrxw4ib5/techwithjoshi.jpg",
      start: "Oct 2025",
      end: "Mar 2026",
      description:
        "Delivered 6+ production-ready web platforms across social media, fintech, e-commerce, and CRM domains. Engineered real-time features such as live streaming and instant messaging. Designed highly scalable database architectures to handle complex institutional data.",
    },
    {
      company: "Techsolace",
      href: "https://techsolace.in",
      badges: ["intern"],
      location: "Remote",
      title: "Backend Developer",
      logoUrl: "https://ik.imagekit.io/yzxrxw4ib5/techsolace.jpg?updatedAt=1753858721765",
      start: "Jun 2025",
      end: "Sep 2025",
      description:
        "Contributed to the development of backend services in Go and Node.js for client-facing applications alongside senior engineers. Assisted in optimizing database queries and indexes, which contributed to a 20% reduction in API response times.",
    },
    {
      company: "Nazra Software Solutions",
      badges: ["intern"],
      href: "https://www.nazrasoftware.com",
      location: "Remote",
      title: "Full Stack Developer",
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
      end: "Jun 2026",
      location: "Bhubaneswar, Odisha",
      badges: ["GPA: 7.66"],
      description: "Completed Bachelor of Technology in Computer Science and Engineering focused on software development, data structures, algorithms, and modern programming technologies.",
    }
  ],
  projects: [
    {
      title: "Flinzo",
      href: "https://flinzo.org",
      dates: "Oct 2025 - March 2026",
      active: true,
      type: "client",
      description:
        "A scalable live-streaming web application featuring real-time video, interactive AR face filters, live chat, and seamless payment integrations. Architected with a robust backend to smoothly handle high-concurrency real-time interactions and automated AI content moderation.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Express.js",
        "MongoDB",
        "Redis",
        "Cloudinary",
        "WebSocket",
        "WebRTC",
        "RabbitMQ",
        "Agora",
        "Banuba",
        "Razorpay",
        "Paypal",
        "TensorFlow.js"
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
      type: "client",
      description: "An e-commerce platform built to streamline online retail. It provides a smooth, intuitive shopping and checkout experience for customers, paired with a powerful administrative dashboard for the business owner to effortlessly manage inventory, process orders, and track sales performance.",
      technologies: ["React.js", "Next.js", "TailwindCSS", "Express.js", "MongoDB", "Redis", "Cloudinary", "Google Translate API"],
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
      dates: "Dec 2026 - March 2026",
      active: true,
      type: "client",
      description: "A comprehensive digital campus platform for Engineering College Tuwa. It features an engaging public gateway for prospective students to explore academic programs and campus life, seamlessly integrated with a powerful administrative dashboard that streamlines daily institutional operations, announcements, and information management.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Nest.js",
        "PostgreSQL",
        "Prisma",
        "Resend",
        "ImageKit"
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
      dates: "Dec 2025 - Mar 2026",
      active: true,
      type: "client",
      description: "A comprehensive digital campus platform designed specifically for Ram Pharmacy Medical College. It provides prospective students with an engaging gateway to explore academic programs and campus life, while giving administrators a powerful, code-free dashboard to effortlessly manage website content, faculty profiles, and institutional announcements.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Express.js",
        "MongoDB",
        "Prisma",
        "Cloudinary"
      ],
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
      dates: "Dec 2025 - Feb 2026",
      active: true,
      type: "client",
      description: "A collaborative platform for creating, managing, and tracking intelligent QR codes. It enables teams to organize digital assets—from business cards to marketing campaigns—and uses real-time analytics to transform physical interactions into measurable digital connections.",
      technologies: ["React.js", "Express.js", "MongoDB", "MySQL", "PDFkit", "TinyMCE", "Redis", "PayU"],
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
      type: "client",
      description: "A comprehensive credit assessment platform designed to empower individuals and businesses to navigate their financial health with confidence by intelligently synthesizing complex data—such as banking records and tax filings—into clear, actionable credit profiles, the system transforms overwhelming financial information into intuitive insights.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Express.js",
        "MongoDB",
        "Redis",
        "Resend",
        "Sandbox API",
        "2FA Authentication",
        "Cloudflare Turnstile",
        "Razorpay"
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
      type: "personal",
      description: "A complete video platform built to provide a smooth watching experience and bring people together. It automatically adjusts video quality to match your internet speed, so you never have to deal with annoying loading screens. Beyond great streaming, the platform makes videos easier to enjoy with automatic English subtitles. It also keeps users connected with instant notifications, personal profiles, and a fun comment section. Backed by safe and secure accounts, it creates a welcoming space where creators can easily share their work and viewers can enjoy videos without any interruptions.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Express.js",
        "MongoDB",
        "AWS S3",
        "AWS ECS",
        "AWS Lambda",
        "AWS SQS",
        "Kafka",
        "FFmpeg",
        "Whisper AI",
        "WebSocket"
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
      title: "BreatheESG",
      href: "https://breatheesg.asharaf.tech",
      dates: "Jun 2026",
      active: true,
      type: "personal",
      description:
        "An enterprise carbon emissions management platform for sustainability analysts. It ingests raw data from energy bills, fuel records, and travel logs — automatically normalising units, categorising emissions into GHG Scopes 1–3, and calculating CO₂ equivalents. Every change is captured in an immutable audit trail with record locking, making the data fully auditable for regulatory sign-off.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Django",
        "SQLite",
        "CSV Parser"
      ],
      links: [
        {
          type: "Website",
          href: "https://breatheesg.asharaf.tech",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/md-asharaf/breatheesg",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://ik.imagekit.io/yzxrxw4ib5/swappy-20260804_022057.png",
      video: "",
    },
    {
      title: "Impact Leader",
      href: "https://leader.techwithjoshi.in/api-docs",
      dates: "Nov 2025 - Mar 2026",
      active: true,
      type: "client",
      description: "A beautifully designed digital hub that empowers individuals to drive positive change. It provides organizers with a simple, welcoming space to share inspiring stories, guide discussions, and distribute resources.",
      technologies: ["Next.js", "TailwindCSS", "Express.js", "MongoDB", "Redis", "AWS S3", "WebSocket", "Google Calendar API", "Gmail API", "Google OAuth"],
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
      type: "personal",
      description: "A seamless reservation platform that connects guests with their favorite restaurants. It allows customers to effortlessly book their preferred time slots online, while empowering restaurant owners to efficiently manage their dining spaces. The secure system automatically prevents double-bookings and minimizes wait times, ensuring a smooth and reliable experience for both guests and staff.",
      technologies: ["Nest.js", "PostgreSQL", "Prisma", "Resend", "Passport OAuth"],
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
      dates: "Jul 2024 - Aug 2024",
      active: true,
      type: "personal",
      description: "An anonymous chat platform where users communicate through unique usernames, supported by an AI-powered assistant that generates creative message suggestions.",
      technologies: ["Next.js", "TailwindCSS", "NextAuth", "MongoDB", "Gemini AI"],
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
      title: "Infosys Global Hackathon 2025",
      dates: "Jul 11th - 12th, 2025",
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
