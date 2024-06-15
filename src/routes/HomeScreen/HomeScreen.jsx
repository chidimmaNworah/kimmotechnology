import React from 'react';
import './HomeScreen.scss';
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
} from '../../container';

const HomeScreen = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default HomeScreen;
