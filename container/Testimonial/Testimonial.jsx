import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Testimonial.module.scss";

const testimonials = [
  {
    name: "Femrivied",
    text: "A huge thank you to our mentor for sharing their expertise and time with us. Your involvement helped make our training event a huge success and we couldn't have done without you",
    image:
      "https://res.cloudinary.com/kimmoramicky/image/upload/v1741569649/kimmotech/reviews/femrivied_vgpegv.jpg",
  },
  {
    name: "Green Thumb",
    text: "The rising international awareness on African delicacies - Eat-With-Africa Agenda would not have been possible without the Kimmotech team's consistent dedication to its digital vision",
    image:
      "https://res.cloudinary.com/kimmoramicky/image/upload/v1741379248/kimmotech/brands%20and%20partners/logo_urdtja.png",
  },
  {
    name: "Engr. Dimma Nworah — C.T.O",
    text: "Kimmotech finds a way to integrate both client and workers. We have proven to have a space for everyone when it comes to digital solutions. I am so proud of what it's building and kudos to the team",
    image:
      "https://res.cloudinary.com/kimmoramicky/image/upload/v1741571218/kimmotech/reviews/BeautyPlus_20240722212152200_save_eo5qn4.jpg",
  },
  {
    name: "Nails Republik",
    text: "I have observed the Kimmotech team, working vigorously to bring my product live and I must say I am proud to have been able to identify the kimmotech team to be good enough for the job",
    image:
      "https://res.cloudinary.com/kimmoramicky/image/upload/v1741571530/kimmotech/reviews/nails_republic_icon_jclblu.png",
  },
  {
    name: "Prince Tosin — ICT Administrator",
    text: "Kimmotech offers an amazing service! I have experienced it and I can only say, I love it! They collaborate on projects with potential, charge fairly and are prompt with deliverables",
    image:
      "https://res.cloudinary.com/kimmoramicky/image/upload/v1741572172/kimmotech/reviews/prine_fmor8x.jpg",
  },
];

const Testimonial = () => {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.label}>Testimonials</span>
          <h2 className={styles.title}>
            What Our <span className={styles.accent}>Clients</span> Say
          </h2>
        </div>

        <div className={styles.testimonialCard}>
          {/* Quote mark */}
          <div className={styles.quoteIcon}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path
                d="M9.135 5.015C5.785 6.915 3.5 10.13 3.5 13.875c0 2.88 1.905 4.625 3.985 4.625 2.015 0 3.515-1.56 3.515-3.515 0-1.89-1.37-3.32-3.125-3.515.24-2.145 1.82-4.34 4.085-5.52L9.135 5.015zm9.5 0c-3.35 1.9-5.635 5.115-5.635 8.86 0 2.88 1.905 4.625 3.985 4.625 2.015 0 3.515-1.56 3.515-3.515 0-1.89-1.37-3.32-3.125-3.515.24-2.145 1.82-4.34 4.085-5.52L18.635 5.015z"
                fill="currentColor"
              />
            </svg>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className={styles.quoteText}
            >
              <p>"{testimonials[active].text}"</p>
              <span className={styles.quoteName}>
                — {testimonials[active].name}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Avatars */}
        <div className={styles.avatars}>
          {testimonials.map((person, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`${styles.avatar} ${
                active === index ? styles.avatarActive : ""
              }`}
            >
              <img src={person.image} alt={person.name} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
