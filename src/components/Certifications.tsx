import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { useState } from "react";

const Certifications = () => {
  const certifications = [
    {
      title: "Full-Stack Web Development with React",
      issuer: "Coursera",
      status: "Certified",
      description: "Comprehensive training in frontend development using React, hooks, and modern ecosystem.",
    },
    {
      title: "Meta Back-End Developer Professional Certificate",
      issuer: "Coursera",
      status: "Certified",
      description: "Expertise in backend development, databases, and APIs following Meta's standards.",
    },
    {
      title: "Power Platform Fundamentals",
      issuer: "Microsoft",
      status: "Certified",
      description: "Knowledge of Microsoft Power Platform, automated workflows, and data analysis.",
    },
    {
      title: "Cloud Computing Foundations",
      issuer: "Coursera",
      status: "Certified",
      description: "Core principles of cloud-native development, infrastructure, and deployment strategies.",
    },
    {
      title: "Learning REST APIs",
      issuer: "LinkedIn Learning",
      status: "Certified",
      description: "Deep dive into RESTful architecture, design patterns, and secure API implementation.",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const [isFlipped, setIsFlipped] = useState(false);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="perspective-1000"
                onMouseEnter={() => setIsFlipped(true)}
                onMouseLeave={() => setIsFlipped(false)}
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full h-64 preserve-3d"
                >
                  {/* Front */}
                  <div
                    className={`absolute inset-0 backface-hidden glass p-6 rounded-2xl flex flex-col items-center justify-center text-center ${isFlipped ? "opacity-0" : "opacity-100"
                      }`}
                  >
                    <Award className="w-16 h-16 text-primary mb-4" />
                    <h3 className="text-xl font-poppins text-foreground mb-2">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                    <div
                      className={`flex items-center gap-2 ${cert.status === "Certified" ? "text-accent" : "text-primary"
                        }`}
                    >
                      <CheckCircle size={18} />
                      <span className="text-sm font-medium">{cert.status}</span>
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className={`absolute inset-0 backface-hidden bg-primary/10 border border-primary/20 p-6 rounded-2xl flex items-center justify-center text-center rotate-y-180 ${isFlipped ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    <p className="text-sm text-foreground">{cert.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

