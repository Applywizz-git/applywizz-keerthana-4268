import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectCloudNative from "@/assets/project-cloud-native.png";
import projectModernization from "@/assets/project-modernization.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Projects = () => {
  const projects = [
    {
      title: "Cloud-Native Full Stack Application Platform",
      description: "Built a full stack web application with React frontend and FastAPI backend.",
      secondLine: "Implemented secure RBAC using AWS Cognito for 200+ concurrent users.",
      impact: "Reduced manual processing, improved scalability using Docker & AWS Lambda.",
      tech: ["React.js", "FastAPI", "Python", "AWS Cognito", "Docker", "S3", "API Gateway"],
      image: projectCloudNative,
    },
    {
      title: "Enterprise Web Application Modernization",
      description: "Modernized legacy application by migrating to React.js and Spring Boot.",
      secondLine: "Optimized database queries and integrated structured data models.",
      impact: "↑ 18% data retrieval speed, accelerated feature delivery via GitHub Actions.",
      tech: ["React.js", "Spring Boot", "Java", "MySQL", "GitHub Actions", "CI/CD"],
      image: projectModernization,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="!pb-14"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="!w-full md:!w-[600px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl h-full hover:glow transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-xl mb-6 h-48 group/image">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <Code className="absolute bottom-4 right-4 w-12 h-12 text-primary drop-shadow-lg" />
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-poppins text-foreground mb-3">{project.title}</h3>

                {/* Two-line Description */}
                <div className="text-muted-foreground mb-4 space-y-1">
                  <p className="text-sm leading-relaxed">{project.description}</p>
                  <p className="text-sm leading-relaxed">{project.secondLine}</p>
                </div>

                {/* Impact Badge */}
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 mb-4">
                  <p className="text-sm font-semibold text-accent">{project.impact}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;

