import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      university: "University of North Texas",
      location: "Denton, Texas",
      period: "Aug 2022 – May 2024",
      description: "GPA: 3.8/4.0. Focused on Advanced Software Engineering, Cloud Computing, and Artificial Intelligence.",
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      university: "Jawaharlal Nehru Technological University",
      location: "Hyderabad, India",
      period: "May 2017 – Aug 2021",
      description: "Foundational coursework in Data Structures, Algorithms, and Core Computer Science principles.",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass p-8 rounded-2xl hover:glow transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                  < GraduationCap className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-poppins text-foreground mb-2">{edu.degree}</h3>
                  <p className="text-lg text-primary font-semibold mb-2">{edu.university}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin size={16} />
                <span>{edu.location}</span>
              </div>

              <div className="text-sm text-muted-foreground mb-4">{edu.period}</div>

              <p className="text-sm text-muted-foreground">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

