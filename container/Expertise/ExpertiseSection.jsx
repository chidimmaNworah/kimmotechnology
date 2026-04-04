import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiLayout,
  FiSmartphone,
  FiDatabase,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";

const expertiseItems = [
  {
    icon: FiLayout,
    title: "UI/UX Design",
    description:
      "Crafting intuitive interfaces with meticulous attention to user experience, visual hierarchy, and brand identity.",
    tools: ["Figma", "Adobe XD", "Framer"],
    color: "#22D3EE",
  },
  {
    icon: FiCode,
    title: "Web Development",
    description:
      "Building performant, scalable web applications with modern frameworks and clean, maintainable code.",
    tools: ["React", "Next.js", "Node.js"],
    color: "#8B5CF6",
  },
  {
    icon: FiSmartphone,
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile apps that deliver native-quality experiences on iOS and Android.",
    tools: ["React Native", "Flutter", "Swift"],
    color: "#F59E0B",
  },
  {
    icon: FiDatabase,
    title: "Backend & APIs",
    description:
      "Designing robust server architectures, RESTful APIs, and database systems built for reliability and scale.",
    tools: ["Python", "FastAPI", "PostgreSQL"],
    color: "#10B981",
  },
  {
    icon: FiShield,
    title: "DevOps & Cloud",
    description:
      "Streamlining deployment pipelines, infrastructure management, and ensuring 99.9% uptime for your products.",
    tools: ["Docker", "AWS", "CI/CD"],
    color: "#EF4444",
  },
  {
    icon: FiTrendingUp,
    title: "SEO & Analytics",
    description:
      "Driving organic growth through technical SEO, performance optimization, and data-driven decision making.",
    tools: ["Google Analytics", "Search Console", "Lighthouse"],
    color: "#EC4899",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Expertise = () => {
  return (
    <section
      id="expertise"
      className="relative py-24 px-4 bg-surface overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-violet-accent/8 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <a
            href="#expertise"
            className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-violet-accent bg-violet-500/8 border border-violet-500/15 px-3.5 py-1 rounded-full mb-4 font-body no-underline hover:bg-violet-500/15 transition-colors cursor-pointer"
          >
            What We Do
          </a>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-txt-primary tracking-tight mb-3">
            Our Core{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-txt-secondary text-sm md:text-base max-w-xl mx-auto font-body">
            We bring together design precision and engineering excellence to
            deliver digital products that stand out.
          </p>
        </div>

        {/* Expertise grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {expertiseItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative bg-card border border-border-subtle rounded-2xl p-6 hover:border-violet-500/25 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 30% 0%, ${item.color}08 0%, transparent 60%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${item.color}12`,
                      border: `1px solid ${item.color}20`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-txt-primary mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-txt-secondary text-sm leading-relaxed mb-4 font-body">
                    {item.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-surface border border-border-subtle text-txt-muted tracking-wide uppercase"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
