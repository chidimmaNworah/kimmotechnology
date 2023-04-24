import React, { useState } from 'react';
import './Navbar.scss';
// import Logo from '../../assets/Kimmotech_Logo.png'
import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/">
          <img src={images.kimmotechLogo} alt="" />
        </a>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`/#${item}`}>{item}</a>
          </li>
        ))}
        <li className="app__flex p-text">
          <div />
          <a
            href="https://www.kimmotech.blog/"
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
        </li>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <div>
            {/* <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            > */}
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li className="app__flex p-text">
                <a
                  href="https://www.kimmotech.blog/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blog
                </a>
              </li>
            </ul>
            {/* </motion.div> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
