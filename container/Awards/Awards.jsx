import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiStar, FiCheckCircle } from "react-icons/fi";
import { HiOutlineAcademicCap } from "react-icons/hi";

const awards = [
  {
    icon: HiOutlineAcademicCap,
    title: "Advanced Web Development With Next.js",
    issuer: "Udemy",
    year: "2022",
    color: "#22D3EE",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Complete Adobe Photoshop and Illustrator Course",
    issuer: "Envato Tuts+",
    year: "2024",
    color: "#8B5CF6",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "AWS Cloud Practitioner",
    issuer: "Edureka",
    year: "2023",
    color: "#F59E0B",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Machine Learning Advanced Certification",
    issuer: "John Khron Masterclass",
    year: "2023",
    color: "#10B981",
  },
  {
    icon: FiAward,
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    year: "2021",
    color: "#EC4899",
  },
  {
    icon: FiAward,
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2021",
    color: "#22D3EE",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Flutter & Dart — The Complete Guide",
    issuer: "Udemy",
    year: "2024",
    color: "#3B82F6",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Python for Data Science & Machine Learning",
    issuer: "Coursera",
    year: "2023",
    color: "#F59E0B",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Awards = () => {
  return (
    <section
      id="awards"
      className="relative py-24 px-4 bg-deep overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-gradient-radial from-amber-accent/8 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Header & description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#awards"
              className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-amber-accent bg-amber-500/8 border border-amber-500/15 px-3.5 py-1 rounded-full mb-4 font-body no-underline hover:bg-amber-500/15 transition-colors cursor-pointer"
            >
              Recognition
            </a>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-txt-primary tracking-tight mb-4">
              Awards &{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="text-txt-secondary text-sm md:text-base max-w-md font-body leading-relaxed">
              Backed by industry-recognized certifications and a commitment to
              staying at the forefront of technology and design.
            </p>

            {/* Stats row */}
            <div className="flex gap-8 mt-8">
              <div>
                <p className="font-display text-2xl font-bold text-txt-primary">
                  10+
                </p>
                <p className="text-xs text-txt-muted uppercase tracking-wider font-body">
                  Certifications
                </p>
              </div>
              <div className="w-px bg-border-subtle" />
              <div>
                <p className="font-display text-2xl font-bold text-txt-primary">
                  50+
                </p>
                <p className="text-xs text-txt-muted uppercase tracking-wider font-body">
                  Projects Delivered
                </p>
              </div>
              <div className="w-px bg-border-subtle" />
              <div>
                <p className="font-display text-2xl font-bold text-txt-primary">
                  6+
                </p>
                <p className="text-xs text-txt-muted uppercase tracking-wider font-body">
                  Years Experience
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Awards list */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4 max-h-[340px] overflow-y-auto pr-2 awards-scroll"
          >
            {awards.map((award, index) => {
              const Icon = award.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group flex items-center gap-4 bg-card border border-border-subtle rounded-xl p-4 hover:border-amber-500/20 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
                >
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${award.color}12`,
                      border: `1px solid ${award.color}20`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: award.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-sm font-bold text-txt-primary truncate">
                      {award.title}
                    </h3>
                    <p className="text-xs text-txt-muted font-body">
                      {award.issuer}
                    </p>
                  </div>
                  <span className="flex-shrink-0 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border-subtle text-txt-muted">
                    {award.year}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
