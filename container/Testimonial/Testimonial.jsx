import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiX, FiUser } from "react-icons/fi";
import axios from "axios";
import styles from "./Testimonial.module.scss";

const DEFAULT_AVATAR = null; // We'll use an SVG icon fallback

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [active, setActive] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", text: "" });
  const [imageFile, setImageFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/testimonial/testimonials/`,
        );
        if (res.data?.length > 0) {
          setTestimonials(res.data);
        }
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      }
    };
    fetchTestimonials();
  }, []);

  const handleSubmitTestimonial = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.text.trim()) return;

    const data = new FormData();
    data.append("name", formData.name);
    data.append("text", formData.text);
    if (imageFile) data.append("file", imageFile);

    try {
      setSubmitting(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/testimonial/testimonials/`,
        data,
      );
      setTestimonials((prev) => [res.data, ...prev]);
      setFormData({ name: "", text: "" });
      setImageFile(null);
      setFormMessage("Thank you! Your testimonial has been submitted.");
      setTimeout(() => {
        setShowForm(false);
        setFormMessage("");
      }, 2000);
    } catch (err) {
      setFormMessage("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <a href="#testimonials" className={styles.label}>
            Testimonials
          </a>
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
              <p>&ldquo;{testimonials[active].text}&rdquo;</p>
              <span className={styles.quoteName}>
                &mdash; {testimonials[active].name}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Avatars */}
        <div className={styles.avatars}>
          {testimonials.map((person, index) => (
            <button
              key={person.id || index}
              onClick={() => setActive(index)}
              className={`${styles.avatar} ${
                active === index ? styles.avatarActive : ""
              }`}
            >
              {person.image ? (
                <img
                  src={person.image}
                  alt={person.name}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
              ) : null}
              <span
                className={styles.avatarFallback}
                style={{ display: person.image ? "none" : "flex" }}
              >
                <FiUser />
              </span>
            </button>
          ))}
        </div>

        {/* Add Testimonial Button */}
        <div className={styles.addTestimonialWrap}>
          <button
            onClick={() => setShowForm(!showForm)}
            className={styles.addTestimonialBtn}
          >
            <FiPlus
              className={`${styles.addIcon} ${showForm ? styles.addIconRotate : ""}`}
            />
            {showForm ? "Cancel" : "Add Your Testimonial"}
          </button>
        </div>

        {/* Testimonial Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={styles.formWrapper}
            >
              <form
                onSubmit={handleSubmitTestimonial}
                className={styles.testimonialForm}
              >
                <div className={styles.formGroup}>
                  <label>Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Jane Doe — CEO, Acme Inc."
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Your Testimonial</label>
                  <textarea
                    value={formData.text}
                    onChange={(e) =>
                      setFormData({ ...formData, text: e.target.value })
                    }
                    placeholder="Share your experience working with us..."
                    rows={4}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Your Photo (optional)</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files[0] || null)}
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className={styles.submitBtn}
                >
                  {submitting ? "Submitting..." : "Submit Testimonial"}
                </button>
                {formMessage && (
                  <p
                    className={`${styles.formMessage} ${
                      formMessage.includes("wrong")
                        ? styles.formError
                        : styles.formSuccess
                    }`}
                  >
                    {formMessage}
                  </p>
                )}
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonial;
