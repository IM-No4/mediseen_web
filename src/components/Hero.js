import React from 'react';
import { FaDownload, FaPlay, FaUserMd, FaHeart, FaShieldAlt, FaClock, FaCheckCircle, FaStar } from 'react-icons/fa';
import medicooLogo from '../assets/icons/medicoo.png';

const Hero = () => {
  const scrollToDownload = () => {
    const downloadSection = document.getElementById('download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 md:pt-20 px-2 md:px-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 healthcare-pattern-dense opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-16 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-16 right-16 w-16 h-16 bg-accent-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary-100 rounded-full opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-success-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-accent-100 rounded-full opacity-15 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container-custom px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 space-y-6">
            {/* Trust Badge */}
            {/* <div className="inline-flex items-center space-x-2 bg-success-50 border border-success-200 text-success-700 px-4 py-2 rounded-full text-sm font-semibold animate-fade-in">
              <FaShieldAlt className="text-success-600" />
              <span>Trusted by 100,000+ Patients Nationwide</span>
            </div> */}
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 leading-tight animate-fade-in-up">
                Your Health,{' '}
                <span className="gradient-text">Our Priority</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl animate-fade-in-up">
                Experience world-class healthcare at your fingertips. From medicine delivery to expert consultations, 
                we bring comprehensive medical services to your doorstep with care, compassion, and convenience.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg animate-fade-in-up">
              <div className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-soft">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <FaShieldAlt className="text-primary-600 text-lg" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Licensed Pharmacies</div>
                  <div className="text-xs text-gray-500">100% Authentic</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-soft">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <FaUserMd className="text-primary-600 text-lg" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Expert Doctors</div>
                  <div className="text-xs text-gray-500">Qualified Specialists</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-soft">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <FaClock className="text-primary-600 text-lg" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">24/7 Care</div>
                  <div className="text-xs text-gray-500">Always Available</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              {/* <button 
                onClick={scrollToDownload}
                className="btn-primary flex items-center justify-center space-x-3 hover:scale-105 transition-transform duration-300"
              >
                <FaDownload className="text-lg" />
                <span>Download App</span>
              </button> */}
              {/* <button className="btn-secondary flex items-center justify-center space-x-3">
                <FaPlay className="text-lg" />
                <span>Watch Demo</span>
              </button> */}
            </div>

            {/* Social Proof */}
            {/* <div className="flex items-center space-x-6 animate-fade-in-up">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-6 h-6 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">50K+</span> happy patients
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <FaStar key={i} className="text-warning-400 text-sm" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 font-semibold">4.9/5</span>
              </div>
            </div> */}
          </div>

          {/* App Mockup */}
          <div className="order-1 lg:order-2 relative animate-fade-in-up">
            <div className="relative">
              {/* Main Phone Mockup */}
              <div className="relative mx-auto w-72 h-[500px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* App Screen */}
                  <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-600 relative">
                    {/* Header */}
                    <div className="absolute top-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-md flex items-center justify-between px-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                          <img src={medicooLogo} alt="Medicoo Logo" className="w-6 h-6 p-1" />
                        </div>
                        <span className="text-white font-semibold text-sm">Medicoo</span>
                      </div>
                      <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="pt-20 px-4 space-y-4">
                      {/* Welcome Card */}
                      <div className="bg-white/20 backdrop-blur-md rounded-xl p-4">
                        <h3 className="text-white font-semibold text-base mb-1">Welcome back!</h3>
                        <p className="text-white/80 text-xs">How can we help you today?</p>
                      </div>
                      
                      {/* Service Cards */}
                      <div className="space-y-3">
                        {[
                          { icon: FaUserMd, title: "Doctor Consultation", color: "from-blue-500 to-blue-600" },
                          { icon: FaHeart, title: "Medicine Delivery", color: "from-green-500 to-green-600" },
                          { icon: FaShieldAlt, title: "Lab Tests", color: "from-purple-500 to-purple-600" }
                        ].map((service, index) => (
                          <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-3 flex items-center space-x-3">
                            <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                              <service.icon className="text-white text-sm" />
                            </div>
                            <span className="text-white font-medium text-sm">{service.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center shadow-glow animate-bounce-slow">
                <FaCheckCircle className="text-white text-lg" />
              </div>
              <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-success-500 rounded-full flex items-center justify-center shadow-glow animate-bounce-slow">
                <FaStar className="text-white text-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 