import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import styles from "./Footer.module.scss";
import Link from "next/link";
import axios from "axios";

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
  console.log(process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/users/messages`,
        {
          name,
          email,
          message,
        }
      );
      setIsFormSubmitted(true);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.app__footer}>
      <h2 className="head-text">Take a coffee & chat with us</h2>
      <div className={styles.app__footer_cards}>
        <div className={styles.app__footer_card}>
          <img src="/assets/email.png" alt="email" />
          <a href="mailto:chidimmanworah12@gmail.com" className="p-text">
            chidimmanworah12@gmail.com
          </a>
        </div>
        <div className={styles.app__footer_card}>
          <img src="/assets/mobile.png" alt="phone" />
          <a href="tel:+234 907 036 1277" className="p-text">
            +234 907 036 1277
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className={`${styles.app__footer_form} app__flex`}>
          <div className="app__flex gap-4">
            <input
              className="p-text"
              type="text"
              placeholder="Your Username"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}

      <div className="flex justify-center items-center text-xs gap-10 mt-10">
        <Link href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
        <Link href="/terms-of-use" className="hover:underline">
          Terms of Use
        </Link>
        <Link href="/cookies-policy" className="hover:underline">
          Cookies Policy
        </Link>
      </div>
      <div className="copyright">
        <p className="p-text">@2019 KIMMOTECH</p>
        <p className="p-text">All rights reserved</p>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact");
