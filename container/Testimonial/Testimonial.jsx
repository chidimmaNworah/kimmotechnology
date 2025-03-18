import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { IoTriangleSharp } from "react-icons/io5";
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
    name: "Engr. Dimma Nworah - C.T.O",
    text: "Kimmotech finds a way to integrate both client and workers. We have proven to have a space for everyone when it comes to digital solutions. I am so proud of what its building and kudos to the team",
    image:
      "https://res.cloudinary.com/kimmoramicky/image/upload/v1741571218/kimmotech/reviews/BeautyPlus_20240722212152200_save_eo5qn4.jpg",
  },
  {
    name: "Nails Republik",
    text: "I have observed the Kimmotech team, working vigorously to bring my product live and I must say I am proud to have been able to identify the kimmotech team to be good enough for the job and applaud my desicion making",
    image:
      "https://res.cloudinary.com/kimmoramicky/image/upload/v1741571530/kimmotech/reviews/nails_republic_icon_jclblu.png",
  },
  {
    name: "Prince Tosin - ICT Administrator",
    text: "Kimmotech offers an amazing service! I have experienced it and I can only say, I love it! They collaborate on projects with potential, charges fairly and are propmt with deliverables. Keep up the good work Kimmotech",
    image:
      "https://res.cloudinary.com/kimmoramicky/image/upload/v1741572172/kimmotech/reviews/prine_fmor8x.jpg",
  },
];

const Testimonial = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(
    testimonials[0]
  );

  return (
    <div className={styles.app__testimonial}>
      <h2 className="bold-text">Reviews and Ratings</h2>
      <div
        className={`${styles.app__testimonial_container} flex flex-col items-center justify-center`}
      >
        <div className={`${styles.app__testimonial_items}`}>
          <p className="text-gray-100 text-lg">"{selectedTestimonial.text}"</p>
          <p className="mt-4 font-semibold text-gray-200">
            {selectedTestimonial.name}
          </p>
        </div>

        {/* Profile Images */}
        <div className={styles.app__testimonial_personImage}>
          {testimonials.map((person, index) => (
            <div key={index} className={styles.img}>
              <img
                src={person.image}
                alt={person.name}
                className={`${
                  selectedTestimonial.name === person.name
                    ? styles.borderblue
                    : styles.bordergray
                }`}
                onClick={() => setSelectedTestimonial(person)}
              />
              <div
                className={`${
                  selectedTestimonial.name === person.name
                    ? styles.speechBubble
                    : styles.speechBubble_hidden
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MotionWrap(Testimonial, "app__testimonial");
