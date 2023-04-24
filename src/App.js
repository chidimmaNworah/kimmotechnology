import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import TagManager from 'react-gtm-module';
import { AllProjects, HomeScreen } from './routes';
import { Navbar } from './components';

const App = () => {
  useEffect(() => {
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

    const tagManagerArgs = {
      gtmId,
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />

          <div>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
            </Routes>
            <Routes>
              <Route path="/portfolio/allprojects" element={<AllProjects />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
