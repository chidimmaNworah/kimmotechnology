import React, { useState } from 'react';
import './Navbar.scss';
// import Logo from '../../assets/Kimmotech_Logo.png'
import { images } from '../../constants';
import { HiMenuAlt4, HiX, HiOutlineChevronDown, HiOutlineChevronUp  } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [visible, setVisible] = useState(false);

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
            href="https://blog.kimmotech.net"
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
        </li>
        <li className="app__flex p-text" onClick={() => setVisible(!visible)}>
          <div />
          <div>
          <p>PAGES <span>{visible ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}</span></p>
          {
              visible && (
                <span>
                  <a href='/portfolio/certifications' rel='noreferrer' target='_blank'>
                    Certifications 
                    </a>
                  <a href='/portfolio/allprojects' rel='noreferrer' target='_blank'>
                    All Projects
                    </a>
                </span>
              
                )
            }
            </div>
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
              <li className="app__flex p-text pages_dropdown" onClick={() => setVisible(!visible)}>
                  Pages <span>{visible ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}</span>
                  
              </li>
              {
              visible && (
              <ul className="visible_pages">
                <li>
                  <a href='/portfolio/certifications' rel='noreferrer' target='_blank'>
                    Certifications 
                    </a>
                </li>
                <li>
                  <a href='/portfolio/allprojects' rel='noreferrer' target='_blank'>
                    All Projects
                    </a>
                </li>
              </ul>
                )
            }
            </ul>
            
            {/* </motion.div> */}
          </div>
          
        )}
      </div>
      
    </nav>
  );
};

export default Navbar;
