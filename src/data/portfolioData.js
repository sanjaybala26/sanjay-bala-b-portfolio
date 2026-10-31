// ============================================================
// portfolioData.js
// Controls all text, media links, and structured data across the portfolio.
// ============================================================

export const personalInfo = {
  name: "Sanjay Bala B",
  firstName: "Sanjay Bala B",
  brandName: "Sanjay Bala B", // shown in the preloader, navbar and footer
  title: "Java Full Stack Developer",
  location: "Bengaluru, India",
  phone: "9597755520",
  emails: {
    primary: "sanjaybala046@gmail.com",
    secondary: "",
  },
  summary: "I’m a Computer Science and Design student who builds practical full-stack applications using Java, Spring Boot, React, and MySQL.",
  resumeUrl: "/Sanjay Bala B Resume.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/sanjaybala26",
  linkedin: "https://www.linkedin.com/in/sanjay-bala-00b5a3235",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Sanjay Bala B",
  titleHighlight: "Java Full Stack Developer",
  subtitle: "Computer Science & Design student crafting robust, scalable web applications with Java, Spring Boot, React, and modern cloud technologies.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:sanjaybala046@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Sanjay Bala B Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML) — keep it YOUR OWN trusted text.
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Sanjay Bala B</span>, a Computer Science and Design student and Java Full Stack Developer based in Bengaluru, India. I specialize in engineering responsive frontends with React and architecting robust, scalable backends using Java, Spring Boot, and MySQL, currently sharpening my skills through the placement training program at TAP Academy. Passionate about problem-solving and user-centric design, I love building reliable software products that deliver real campus and business impact.`,
  techStack: ["Java", "Spring Boot", "React", "MySQL", "AWS"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A disciplined, four-step approach to engineering reliable full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Analyzing system requirements, user needs, and domain logic to define a clear architectural roadmap.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting intuitive user flows, responsive UI layouts, and normalized database schemas.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Writing clean, modular React frontend components and high-performance Spring Boot REST APIs.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Configuring cloud environments on AWS, conducting automated tests, and shipping production-ready builds.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Java" }, { name: "SQL" }],
    },
    {
      title: "Backend & Frameworks",
      skills: [{ name: "Java (Spring Boot)" }, { name: "Spring 5" }],
    },
    {
      title: "Frontend & UI/UX",
      skills: [
        { name: "React.js" },
        { name: "HTML5 & CSS3" },
        { name: "Responsive UI Design" },
        { name: "User-Centric Design" },
      ],
    },
    {
      title: "Databases & Cloud",
      skills: [{ name: "MySQL" }, { name: "AWS (EC2, S3)" }],
    },
  ],
};

export const leadershipList = [];

export const internshipsList = [];

export const softSkillsList = [
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Cooperating effectively across teams to align development goals and deliver reliable solutions.",
  },
  {
    name: "Analytical Thinking",
    icon: "📈",
    desc: "Deconstructing complex problem statements into structured, efficient algorithms.",
  },
  {
    name: "Adaptability",
    icon: "⚡",
    desc: "Quickly mastering new tools, architectural patterns, and project requirements.",
  },
  {
    name: "Time Management",
    icon: "⏱️",
    desc: "Structuring sprints and tasks to ensure consistent, on-schedule project milestones.",
  },
];

export const projects = [
  {
    id: "direct-deal",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Direct Deal — College Marketplace Platform",
    description:
      "A campus-exclusive marketplace enabling verified students to safely buy, sell, and auction products with real-time chat and student discount management.",
    techTags: ["React.js", "Java", "Spring Boot", "MySQL"],
    links: { github: "https://github.com/sanjaybala26/direct-deal", demo: "" },
    isFlagship: true,
  },
  {
    id: "makemysite",
    number: "02",
    badge: null,
    title: "Makemysite — AI-Powered Voice Web Builder",
    description:
      "An AI-powered web platform that generates complete web pages from multilingual voice prompts with live multi-format code conversion.",
    techTags: ["React.js", "Python", "NLP", "AI"],
    links: { github: "https://github.com/sanjaybala26/makemysite", demo: "" },
    isFlagship: false,
  },
  {
    id: "ai-test-automation",
    number: "03",
    badge: null,
    title: "AI-Driven Test Automation Framework",
    description:
      "An automated end-to-end testing suite built with Selenium WebDriver and NLP featuring self-healing test logic for dynamic UI changes.",
    techTags: ["Java", "Selenium", "NLP", "Test Automation"],
    links: { github: "https://github.com/sanjaybala26/ai-test-automation", demo: "" },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/sanjay-bala-00b5a3235",
};

export const education = {
  degree: "B.E. Computer Science And Design",
  institution: "Sri Krishna College Of Engineering And Technology",
  cgpa: "2022 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Java Full Stack Developer",
    "Java · Spring Boot · React · MySQL",
    "Building scalable, user-centric web applications",
  ],
  credential: "B.E. Computer Science And Design",
  copyright: `© ${new Date().getFullYear()} Sanjay Bala B | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
