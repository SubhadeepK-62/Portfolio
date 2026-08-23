import portfolioImg from "../assets/projects/portfolio.png";
import intrinsicOceanImg from "../assets/projects/intrinsicocean.png";

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    image: portfolioImg,
    description:
      "Personal portfolio to showcase projects, skills, and experience.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/SubhadeepK-62/Portfolio",
    live: "https://subhadeep-dev.vercel.app/",
  },

  {
    id: 2,
    title: "IntrinsicOcean",
    image: intrinsicOceanImg,
    description:
      "AI-powered conversational interface for ARGO Ocean Data Discovery and Visualization using RAG and vector databases.",
    tech: ["React", "Flask", "PostgreSQL", "RAG"],
    github: "https://github.com/Mahir-o4/Team_Orchestra/tree/frontend",
    live: "",
  },
];