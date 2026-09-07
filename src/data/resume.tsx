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
  avatarUrl: "/assets/images/profile-pic.png",
  resumeUrl: "https://drive.google.com/file/d/1Tt7F5S81vlFHbEF3v3MEU_HmjH_EOf30/view?usp=drive_link",
  skills: [
    {
      category: "Languages",
      items: [
        { name: "TypeScript", icon: "/assets/icons/skill_ts.svg" },
        { name: "JavaScript", icon: "/assets/icons/skill_js.svg" },
        { name: "Java", icon: "/assets/icons/skill_java.svg" },
        { name: "PHP", icon: "/assets/icons/skill_php.svg" },
        { name: "Python", icon: "/assets/icons/skill_py.svg" },
        { name: "Go", icon: "/assets/icons/skill_go.svg" },
        { name: "C/C++", icon: "/assets/icons/skill_cpp.svg" },
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "React.js", icon: "/assets/icons/skill_react.svg" },
        { name: "Next.js", icon: "/assets/icons/skill_nextjs.svg" },
        { name: "Redux Toolkit", icon: "/assets/icons/skill_redux.svg" },
        { name: "TanStack Query", icon: "/assets/icons/simpleicon_reactquery.svg" },
        { name: "HTML5", icon: "/assets/icons/skill_html.svg" },
        { name: "TailwindCSS", icon: "/assets/icons/skill_tailwind.svg" },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Express.js", icon: "/assets/icons/skill_express.svg" },
        { name: "Nest.js", icon: "/assets/icons/skill_nestjs.svg" },
        { name: "Spring Boot & Microservices", icon: "/assets/icons/skill_spring.svg" },
        { name: "FastAPI", icon: "/assets/icons/skill_fastapi.svg" },
        { name: "JWT", icon: "/assets/icons/simpleicon_jsonwebtokens.svg" },
        { name: "WebSocket", icon: "/assets/icons/simpleicon_socketdotio.svg" },
        { name: "WebRTC", icon: "/assets/icons/simpleicon_webrtc.svg" },
        { name: "GraphQL", icon: "/assets/icons/skill_graphql.svg" },
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", icon: "/assets/icons/skill_postgres.svg" },
        { name: "MongoDB", icon: "/assets/icons/skill_mongodb.svg" },
        { name: "MySQL", icon: "/assets/icons/skill_mysql.svg" },
        { name: "DynamoDB", icon: "/assets/icons/skill_dynamodb.svg" },
        { name: "Redis", icon: "/assets/icons/skill_redis.svg" },
      ]
    },
    {
      category: "Cloud & Infra",
      items: [
        { name: "Docker", icon: "/assets/icons/skill_docker.svg" },
        { name: "RabbitMQ", icon: "/assets/icons/skill_rabbitmq.svg" },
        { name: "Kafka", icon: "/assets/icons/skill_kafka.svg" },
        { name: "EC2", icon: "/assets/icons/skill_ec2.svg" },
        { name: "S3", icon: "/assets/icons/skill_s3.svg" },
        { name: "IAM", icon: "/assets/icons/skill_iam.svg" },
        { name: "Lambda", icon: "/assets/icons/skill_lambda.svg" },
        { name: "ECS", icon: "/assets/icons/skill_ecs.svg" },
        { name: "SQS", icon: "/assets/icons/skill_sqs.svg" },
        { name: "ECR", icon: "/assets/icons/skill_ecr.svg" },
        { name: "API Gateway", icon: "/assets/icons/skill_apigateway.svg" },
        { name: "CloudWatch", icon: "/assets/icons/skill_cloudwatch.svg" },
      ]
    },
    {
      category: "GenAI",
      items: [
        { name: "LangChain", icon: "/assets/icons/skill_langchain.svg" },
        { name: "LangGraph", icon: "/assets/icons/skill_langgraph.svg" },
        { name: "Gemini", icon: "/assets/icons/simpleicon_googlegemini.svg" },
        { name: "Groq", icon: "/assets/icons/skill_groq.svg" },
        { name: "Vercel AI", icon: "/assets/icons/skill_vercel.svg" },
        { name: "RAG", icon: "/assets/icons/skill_rag.svg" },
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
      logoUrl: "/assets/images/techwithjoshi.svg",
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
      logoUrl: "/assets/images/techsolace.jpg",
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
      logoUrl: "/assets/images/nazrasoft.png",
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
      logoUrl: "/assets/images/kist.jpeg",
      start: "Aug 2022",
      end: "Jun 2026",
      location: "Bhubaneswar, Odisha",
      badges: ["7.66/10"],
      description: "Completed Bachelor of Technology in Computer Science and Engineering focused on software development, data structures, algorithms, and modern programming technologies.",
    }
  ],
  projects: [
    // Client Projects
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
      image: "/assets/images/flinzo.png",
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
      image: "/assets/images/pravesh-ecom.png",
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
      image: "/assets/images/engtuwa.png",
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
      image: "/assets/images/ram-pharmacy.png",
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
      image: "/assets/images/qryzen.png",
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
      image: "/assets/images/cibil-gst.png",
      video: "",
    },
    {
      title: "One Purpose",
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
      image: "/assets/images/one-purpos.png",
      video: "",
    },
    // Personal Projects
    {
      title: "TubeX",
      href: "https://tubex.asharaf.tech",
      dates: "Mar 2024 - Feb 2025",
      active: true,
      type: "personal",
      description: "A complete video platform built for smooth streaming and community. It automatically adjusts video quality to match your internet speed, eliminating buffering. Videos come with automatic English subtitles for better accessibility, while instant notifications, personal profiles, and a comment section keep users connected. Backed by secure accounts, it creates a welcoming space where creators share their work and viewers enjoy uninterrupted playback.",
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
      image: "/assets/images/tubex.png",
      video: "",
    },
    {
      title: "FightIQ",
      href: "https://github.com/md-asharaf/FightIQ",
      dates: "Aug 2026 - Present",
      active: true,
      type: "personal",
      description: "An interactive Generative AI platform built for UFC and MMA fans. Users can dive into deep conversations about MMA history, fighter stats, and complex rulebooks through an intelligent Chat Interface, or test their knowledge using a dynamic Quiz Generation Engine that creates tailored quizzes with real-time AI evaluations.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "pgvector",
        "Gemini",
        "Ragas"
      ],
      links: [
        {
          type: "Website",
          href: "https://fightiq-delta.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/md-asharaf/fightiq",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/assets/images/fightiq.png",
      video: "",
    },
    {
      title: "GameCenter",
      href: "https://n765v09mbd.execute-api.ap-south-1.amazonaws.com/swagger-ui/index.html",
      dates: "Aug 2026",
      active: true,
      type: "personal",
      description: "A comprehensive backend system that provides capabilities for creating and managing interactive quizzes, questions, and projects. It includes a dashboard, an admin interface, secure authentication, and advanced file management (folders and uploads) with the ability to process bulk data from CSV and Excel files.",
      technologies: [
        "Spring Boot",
        "MySQL",
        "AWS Lambda",
        "AWS API Gateway",
        "AWS S3",
        "Flyway",
        "JWT"
      ],
      links: [
        {
          type: "Docs",
          href: "https://n765v09mbd.execute-api.ap-south-1.amazonaws.com/swagger-ui/index.html",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/md-asharaf/gamecenter-backend",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/assets/images/gamecenter.png",
      video: "",
    },
    {
      title: "Inkognito",
      href: "https://inkoggnito.vercel.app",
      dates: "Jul 2024 - Aug 2024",
      active: true,
      type: "personal",
      description: "An anonymous chat platform where users communicate through unique usernames, supported by an AI-powered assistant that generates creative message suggestions.",
      technologies: ["Next.js", "TailwindCSS", "NextAuth", "MongoDB", "Gemini AI"],
      links: [
        {
          type: "Website",
          href: "https://inkoggnito.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/md-asharaf/inkognito",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/images/inkognito.png",
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
      image: "/assets/images/breathe-esg.png",
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
      image: "/assets/images/restaurant-booking.png",
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
        "/assets/images/infosys.jpg",
      mlh: "/assets/images/mlh-trust-badge-2019-white.svg",
      links: [{
        title: "Source",
        href: "https://github.com/md-asharaf/effective-carnival",
        icon: <Icons.globe className="size-3" />,
      }],
    }
  ],
} as const;
