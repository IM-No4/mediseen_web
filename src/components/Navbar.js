import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaHeart, FaShieldAlt } from 'react-icons/fa';
import logo from '../assets/icons/nameLogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'glass-effect shadow-medium' : 'bg-transparent'
    }`}>
      <div className="container-custom px-2 md:px-0">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Medicoo Logo" className="w-20 h-12" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            {/* <a href="#download" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group">
              Download App
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </a> */}
            <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Trust Indicators & Contact */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Trust Badge */}
            <div className="flex items-center space-x-2 bg-success-50 border border-success-200 text-success-700 px-4 py-2 rounded-full text-sm font-semibold">
              <FaShieldAlt className="text-success-600" />
              <span>Licensed & Secure</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 bg-white rounded-xl shadow-soft flex items-center justify-center text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-4 focus:ring-primary-500/20 transition-all duration-300"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden glass-effect shadow-large rounded-2xl mt-4 p-6 animate-fade-in">
            <div className="flex flex-col space-y-6">
              {/* Trust Badge Mobile */}
              <div className="flex items-center space-x-2 bg-success-50 border border-success-200 text-success-700 px-4 py-3 rounded-xl text-sm font-semibold">
                <FaShieldAlt className="text-success-600" />
                <span>Licensed & Secure Healthcare Platform</span>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 py-2 border-b border-gray-100">
                  Home
                </a>
                <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 py-2 border-b border-gray-100">
                  Services
                </a>
                <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 py-2 border-b border-gray-100">
                  Features
                </a>
                {/* <a href="#download" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 py-2 border-b border-gray-100">
                  Download App
                </a> */}
                <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 py-2">
                  Contact
                </a>
              </div>

              {/* Contact Info Mobile */}
              <div className="pt-4 border-t border-gray-200 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                    <FaPhone className="text-primary-600" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold">+91 79052 75048</div>
                    <div className="text-gray-500 text-sm">24/7 Healthcare Support</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                    <FaEnvelope className="text-primary-600" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold">support@medicoo.com</div>
                    <div className="text-gray-500 text-sm">Get Help Anytime</div>
                  </div>
                </div>
              </div>

              {/* CTA Button Mobile */}
              {/* <button className="btn-primary w-full mt-4">
                Download App Now
              </button> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 