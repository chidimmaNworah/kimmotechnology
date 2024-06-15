import React from 'react';
import {motion} from 'framer-motion'
import './Certification.scss';
import {images} from '../../constants'

const Certification = () => {
    const certifications = [
        {
            name: "Building a website with nodejs and expressjs",
            platform: "Linkedin Learning",
            description: "Master the fundamentals of building dynamic websites using Node.js and Express.js, including server-side development and routing.",
            img: images.cert1,
        },
        {
            name: "CSS essential training",
            platform: "Linkedin Learning",
            description: "Gain comprehensive knowledge of CSS to create visually appealing and responsive web designs, mastering layout techniques, styling, and best practices.",
            img: images.cert2,
        },
        {
            name: "Developing for web performance",
            platform: "Linkedin Learning",
            description: "Learn essential techniques to optimize web performance, improving load times and user experience by mastering key principles of efficient web development.",
            img: images.cert3,
        },
        {
            name: "Gulp.js: Web Project Workflow",
            platform: "Linkedin Learning",
            description: "Master the Gulp.js toolkit to automate and enhance your web development workflow, streamlining tasks like minification, compilation, and browser reloading for efficient project management.",
            img: images.cert4,
        },
        {
            name: "HTML essesntial training",
            platform: "Linkedin Learning",
            description: "Gain foundational knowledge of HTML, the backbone of web development, and learn to structure and create robust, accessible web pages.",
            img: images.cert5,
        },
        {
            name: "JavaScript: Ajax and Fetch",
            platform: "Linkedin Learning",
            description: "Master the use of JavaScript for asynchronous web requests with AJAX and Fetch, enabling dynamic and responsive web applications.",
            img: images.cert6,
        },
        {
            name: "JavaScript essential training",
            platform: "Linkedin Learning",
            description: "Gain a comprehensive understanding of JavaScript, the core language of the web, to build interactive and dynamic web applications.",
            img: images.cert7,
        },
        {
            name: "JavaScript Prototypes",
            platform: "Linkedin Learning",
            description: "Learn how to effectively use JavaScript prototypes to create more efficient and maintainable code through inheritance and object-oriented programming.",
            img: images.cert8,
        },
        {
            name: "JavaScript Scope",
            platform: "Linkedin Learning",
            description: "Understand the intricacies of JavaScript scope, including global, local, and block scope, to write cleaner and more predictable code.",
            img: images.cert9,
        },
        {
            name: "Learning app building with vanilla javaScript",
            platform: "Linkedin Learning",
            description: "Learn to build dynamic web applications from scratch using pure JavaScript, mastering essential concepts like DOM manipulation, event handling, and asynchronous programming.",
            img: images.cert10,
        },
        {
            name: "Learning ECMAScript 6+ (ES6+)",
            platform: "Linkedin Learning",
            description: "Master modern JavaScript syntax and features introduced in ECMAScript 6 and beyond, including arrow functions, classes, destructuring, and async/await, enhancing your ability to write cleaner and more efficient code.",
            img: images.cert11,
        },
        {
            name: "Learning the JavaScript Language",
            platform: "Linkedin Learning",
            description: "Comprehensive training in JavaScript fundamentals, covering variables, functions, control flow, and object-oriented programming concepts, empowering you to build dynamic and interactive web applications.",
            img: images.cert12,
        },
        
    ]
  return (
    <div className="certification">
      <div className="certification__profiles">
          {certifications.map((certification, index) => (
            <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 0.9}}
            transition={{duration: 0.5, type: 'tween'}}
            className="certification__profile-item"
            key={index}
            >
              <img src={certification.img} alt={certification.name} />
              <h2 className="bold-text" style={{marginTop: 20}}>{certification.name}</h2>
              <p className=''>{certification.platform}</p>
              <p className="p-text" style={{marginTop: 10}}>{certification.description}</p>
            </motion.div>
          ))}
        </div>
    </div>
  );
};

export default Certification;
