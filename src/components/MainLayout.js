import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import Features from './Features';
import DownloadApp from './DownloadApp';
import Testimonials from './Testimonials';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <DownloadApp />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default MainLayout; 