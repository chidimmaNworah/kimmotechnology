import React, { useState } from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import axios from "axios";
import { motion } from "framer-motion";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/users/messages`,
        { name, email, message }
      );
      setIsFormSubmitted(true);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left: Info */}
          <div className={styles.info}>
            <span className={styles.label}>Contact</span>
            <h2 className={styles.title}>
              Let's Build Something
              <br />
              <span className={styles.accent}>Together</span>
            </h2>
            <p className={styles.desc}>
              Have a project in mind? Drop us a message and we'll get back to
              you within 24 hours.
            </p>

            <div className={styles.contactCards}>
              <a
                href="mailto:chidimmanworah12@gmail.com"
                className={styles.contactCard}
              >
                <div className={styles.contactIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span>chidimmanworah12@gmail.com</span>
              </a>
              <a href="tel:+2349070361277" className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span>+234 907 036 1277</span>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className={styles.formWrapper}>
            {!isFormSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={styles.form}
              >
                <div className={styles.formRow}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={name}
                    onChange={handleChangeInput}
                    className={styles.input}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={email}
                    onChange={handleChangeInput}
                    className={styles.input}
                  />
                </div>
                <textarea
                  placeholder="Tell us about your project..."
                  value={message}
                  name="message"
                  onChange={handleChangeInput}
                  className={styles.textarea}
                  rows={5}
                />
                <button
                  type="button"
                  onClick={handleSubmit}
                  className={styles.submitBtn}
                  disabled={loading}
                >
                  {!loading ? "Send Message" : "Sending..."}
                </button>
              </motion.div>
            ) : (
              <div className={styles.successMsg}>
                <div className={styles.successIcon}>✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-use">Terms of Use</Link>
            <Link href="/cookies-policy">Cookies Policy</Link>
          </div>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Kimmotech. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
