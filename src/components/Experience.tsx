import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Utah Valley University",
      location: "Orem, Utah",
      role: "Full Stack Developer",
      period: "Jan 2025 – Present",
      highlights: [
        "Designed and delivered Vue.js frontends and FastAPI backend services (reduced turnaround time by 28%)",
        "Implemented RESTful APIs with Python and AWS Cognito (supporting 3,000+ users)",
        "Refactored legacy PHP applications (increased page load performance by 35%)",
        "Automated cloud infrastructure with AWS CDK, Docker, and GitHub Actions",
        "Optimized Oracle PL/SQL procedures (reduced batch execution time by 30%)",
        "Integrated AWS Lambda & API Gateway for asynchronous event-driven workflows",
      ],
    },
    {
      company: "University of North Texas",
      location: "Denton, Texas",
      role: "Application Engineering Assistant",
      period: "Aug 2023 – May 2024",
      highlights: [
        "Rebuilt legacy AngularJS applications into React.js + Tailwind interfaces (reduced defects by 32%)",
        "Developed backend services with Node.js, Spring Boot, and FastAPI",
        "Designed REST and GraphQL APIs achieving sub-second response times",
        "Integrated OpenAI APIs and Hugging Face models (reduced manual review by 25%)",
        "Deployed cloud-native services on AWS Lambda and Azure AKS",
        "Streamlined CI/CD pipelines using Azure DevOps and containerized testing",
      ],
    },
    {
      company: "Accenture Solutions Pvt. Ltd",
      location: "Hyderabad, India",
      role: "Enterprise Software Engineer",
      period: "Sep 2021 – Aug 2022",
      highlights: [
        "Developed enterprise-grade applications using Java, Spring Boot, and React.js (25+ modules)",
        "Engineered RESTful APIs for distributed services communication",
        "Restructured MySQL/NoSQL indexes (reduced API response by 0.35s)",
        "Implemented Spring Security-based authentication mechanisms",
        "Integrated Azure Blob Storage and Azure Databricks for analytics workflows",
        "Built comprehensive test coverage using JUnit and Mockito (reduced defects by 50%)",
      ],
    },
    {
      company: "Firstzen Solution Pvt. Ltd",
      location: "Hyderabad, India",
      role: "Software Engineer - Web Applications",
      period: "Feb 2021 – Aug 2021",
      highlights: [
        "Delivered e-commerce features using Java and React.js",
        "Optimized MySQL schemas and complex SQL queries (200ms faster execution)",
        "Developed RESTful backend services for transactional workflows",
        "Ensured cross-browser compatibility for structured React interfaces",
        "Authored Selenium-based automated test cases (reduced post-release issues by 30%)",
      ],
    },
    {
      company: "CME Group",
      location: "Bangalore, India",
      role: "Software Engineering Intern",
      period: "Aug 2020 – Jan 2021",
      highlights: [
        "Improved stability via unit and integration tests (JUnit/Mockito)",
        "Reduced bug backlog by 40% across core modules",
        "Validated backend business logic and API behavior",
        "Collaborated in Agile cycles for defect analysis and reproduction",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"
                } md:w-1/2`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-0 w-4 h-4 bg-primary rounded-full left-6 md:left-auto ${index % 2 === 0 ? "md:right-[-9px]" : "md:left-[-9px]"
                  }`}
              ></div>

              <div className="glass p-6 rounded-2xl ml-16 md:ml-0 hover:glow-accent transition-all duration-300">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <Briefcase size={20} />
                  <h3 className="text-xl font-poppins">{exp.company}</h3>
                </div>
                <p className="text-lg font-semibold text-foreground mb-2">{exp.role}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar size={16} />
                  <span>{exp.period} • {exp.location}</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

