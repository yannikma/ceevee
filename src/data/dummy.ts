export const cvData = {
  personal: {
    name: "John Doe",
    role: "Software Engineer & DevOps Specialist",
    bio: "Passionate about building scalable web applications and robust infrastructure. With over 8 years of experience in full-stack development and cloud engineering, I bridge the gap between development and operations to deliver seamless digital experiences.",
    email: "john@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    location: "Berlin, Germany",
  },
  experience: [
    {
      id: 1,
      role: "Lead Platform Engineer",
      company: "TechNova Solutions",
      duration: "Jan 2022 - Present",
      description: "Spearheaded the migration of legacy monoliths to a microservices architecture. Implemented fully automated CI/CD pipelines using GitHub Actions and Kubernetes, reducing deployment time by 60%. Mentored a team of 5 junior engineers.",
      skills: ["Kubernetes", "Docker", "AWS", "Go", "Terraform"]
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Innovate AI",
      duration: "Mar 2019 - Dec 2021",
      description: "Built and maintained multiple client-facing training dashboards. Integrated complex machine learning models into real-time web applications using React and Python REST APIs.",
      skills: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL"]
    },
    {
      id: 3,
      role: "Frontend Developer",
      company: "Creative Studio",
      duration: "Jun 2016 - Feb 2019",
      description: "Developed interactive, highly performant marketing websites and internal tools. Worked closely with UI/UX designers to implement pixel-perfect, responsive interfaces.",
      skills: ["JavaScript", "React", "CSS", "HTML", "Figma"]
    }
  ],
  skills: [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "FastAPI", "Go", "PostgreSQL", "Redis", "MongoDB"] },
    { category: "DevOps & Cloud", items: ["Docker", "Kubernetes", "AWS", "Terraform", "GitHub Actions", "Linux"] },
    { category: "Tools", items: ["Git", "Jest", "Cypress", "Figma", "Webpack", "Vite"] }
  ],
  projects: [
    {
      id: 1,
      title: "Ceevee Platform",
      description: "A visually stunning, open-source personal CV application built with Next.js, Framer Motion, and Tailwind CSS. Showcases both frontend design capabilities and DevOps automated deployment practices.",
      link: "https://github.com/johndoe/ceevee",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Docker"]
    },
    {
      id: 2,
      title: "KubeDeployer",
      description: "A lightweight CLI tool written in Go to simplify Kubernetes deployments for small teams. Adopted by over 500 developers worldwide.",
      link: "https://github.com/johndoe/kubedeployer",
      tech: ["Go", "Kubernetes API", "CLI"]
    }
  ]
};
