import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Award, Briefcase, Code, Users } from "lucide-react";

const About = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Briefcase, label: "Years Experience", value: 4, suffix: "" },
    { icon: Code, label: "Projects Completed", value: 20, suffix: "+" },
    { icon: Users, label: "Platforms Optimized", value: 5, suffix: "+" },
    { icon: Award, label: "Certifications", value: 5, suffix: "" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Full Stack Developer with around <span className="text-primary font-semibold">4 years</span> of professional experience
              delivering end-to-end web applications across frontend, backend, and cloud environments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Strong expertise in <span className="text-primary font-semibold">MERN and MEAN stacks</span>,
              building scalable user interfaces with React, Vue.js, and Angular, and developing backend
              services using Node.js, Spring Boot, and FastAPI.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Proven experience in designing REST and GraphQL APIs, implementing secure authentication
              (AWS Cognito), and optimizing SQL/NoSQL databases to support high-traffic applications
              with measurable performance outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass p-6 rounded-2xl text-center hover:glow transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-poppins text-foreground mb-1">
                  {inView && (
                    <>
                      <CountUp end={stat.value} duration={2} />
                      {stat.suffix}
                    </>
                  )}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

