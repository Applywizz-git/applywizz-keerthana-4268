import { motion } from "framer-motion";
import { Cloud, Code, Database, GitBranch, GitCommit, Lock, Settings, Zap, ZoomInIcon } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Scripting",
      icon: Code,
      skills: ["JavaScript (ES6+)", "TypeScript", "Java", "Python", "PHP", "Apex"],
    },
    {
      title: "Frontend Development",
      icon: Zap,
      skills: ["React.js", "Vue.js", "Angular", "Next.js", "Redux", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
    },
    {
      title: "Backend Development",
      icon: Settings,
      skills: ["Node.js", "Express.js", "Spring Boot", "FastAPI", "RESTful APIs", "GraphQL", "WebSockets"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS (Lambda, EC2, EKS, S3)", "Azure (AKS, App Services)", "Docker", "Kubernetes", "CI/CD Pipelines", "GitHub Actions", "Terraform"],
    },
    {
      title: "Databases & Data Management",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis", "Oracle PL/SQL", "NoSQL"],
    },
    {
      title: "Testing & Quality",
      icon: Lock,
      skills: ["JUnit", "Mockito", "Jest", "Cypress", "Playwright", "Selenium", "Datadog", "Prometheus"],
    },
    {
      title: "Tools & Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Azure DevOps", "VS Code", "Jenkins", "Postman", "Bitbucket"],
    },
    {
      title: "Web Technologies",
      icon: GitCommit,
      skills: ["MERN Stack", "MEAN Stack", "Responsive Design", "Authentication", "Authorization", "Event-Driven Workflows"],
    },
    {
      title: "Methodologies",
      icon: ZoomInIcon,
      skills: ["Agile/Scrum", "SDLC", "Test-Driven Development", "Code Review", "Production Support"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass p-6 rounded-2xl hover:glow-accent transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-poppins text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (i * 0.05) }}
                    className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground 
                             rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

