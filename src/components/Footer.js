import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaApple, FaGooglePlay, FaHeart, FaShieldAlt, FaClock, FaDownload } from 'react-icons/fa';
import logo from '../assets/icons/nameLogo.png';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 healthcare-pattern opacity-5"></div>
      
      <div className="container-custom px-4 relative z-10">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Company Info */}
            <div className="md:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src={logo} alt="Medicoo Logo" className="w-16 h-10 lg:w-20 lg:h-12" />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                Your trusted healthcare partner. We're committed to making healthcare accessible, affordable, 
                and convenient for everyone with compassion and care.
              </p>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-success-100 rounded-full flex items-center justify-center">
                    <FaShieldAlt className="text-success-600 text-xs" />
                  </div>
                  <span className="text-xs text-gray-300">Secure & Trusted</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <FaClock className="text-primary-600 text-xs" />
                  </div>
                  <span className="text-xs text-gray-300">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-accent-100 rounded-full flex items-center justify-center">
                    <FaHeart className="text-accent-600 text-xs" />
                  </div>
                  <span className="text-xs text-gray-300">Compassionate Care</span>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="flex space-x-2 lg:space-x-3">
                <a href="https://www.facebook.com/share/16xtDUuofT/?mibextid=wwXIfr" target="_blank" className="w-7 h-7 lg:w-8 lg:h-8 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all duration-300">
                  <FaFacebook className="text-white text-xs lg:text-sm" />
                </a>
                <a href="https://x.com/MedicooOfficial" target="_blank" className="w-7 h-7 lg:w-8 lg:h-8 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all duration-300">
                  <FaTwitter className="text-white text-xs lg:text-sm" />
                </a>
                <a href="https://www.instagram.com/medicoo_official" target="_blank" className="w-7 h-7 lg:w-8 lg:h-8 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all duration-300">
                  <FaInstagram className="text-white text-xs lg:text-sm" />
                </a>
                <a href="https://www.linkedin.com/company/medicoo-official" target="_blank" className="w-7 h-7 lg:w-8 lg:h-8 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all duration-300">
                  <FaLinkedin className="text-white text-xs lg:text-sm" />
                </a>
                <a href="https://www.youtube.com/@medicoo-official" target="_blank" className="w-7 h-7 lg:w-8 lg:h-8 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all duration-300">
                  <FaYoutube className="text-white text-xs lg:text-sm" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-base font-display font-bold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Medicine Delivery</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Doctor Consultations</a></li>
                {/* <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Pathology Labs</a></li> */}
                {/* <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Hospital Appointments</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Ambulance Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Homecare Services</a></li> */}
              </ul>
            </div>

            {/* For Partners */}
            <div>
              <h3 className="text-base font-display font-bold mb-4">For Partners</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-primary-400 font-semibold mb-2 text-sm">Pharmacy Partners</h4>
                  <ul className="space-y-1">
                    <li><a href="https://partners.medicoo.in/registration" className="text-gray-300 hover:text-white transition-colors duration-300 text-xs">Partner With Us</a></li>
                    {/* <li><a href="https://play.google.com/store/apps/details?id=com.medicoo.storepartner" className="text-gray-300 hover:text-white transition-colors duration-300 text-xs">App For You</a></li> */}
                  </ul>
                </div>
                {/* <div>
                  <h4 className="text-primary-400 font-semibold mb-2 text-sm">Delivery Partners</h4>
                  <ul className="space-y-1">
                    <li><a href="https://deliverypartner.medicoo.in" className="text-gray-300 hover:text-white transition-colors duration-300 text-xs">Partner With Us</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-xs">App For You</a></li>
                  </ul>
                </div> */}
              </div>
            </div>

            {/* Contact & App Download - Merged Section */}
            <div>
              <h3 className="text-base font-display font-bold mb-4">Contact & Download</h3>
              
              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FaPhone className="text-primary-600 text-xs" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">+91 79052 75048</div>
                    <div className="text-gray-400 text-xs">24/7 Support</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-primary-600 text-xs" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">support@medicoo.in</div>
                    <div className="text-gray-400 text-xs">Get Help Anytime</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-primary-600 text-xs" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">New Delhi, Delhi</div>
                    <div className="text-gray-400 text-xs">India</div>
                  </div>
                </div>
              </div>

              {/* App Download Section */}
              {/* <div>
                <h4 className="text-primary-400 font-semibold mb-3 text-sm">Download Our App</h4>
                <div className="space-y-2">
                  <button className="w-full flex items-center justify-center space-x-2 bg-black text-white px-3 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
                    <FaApple className="text-sm lg:text-base" />
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-xs">App Store</div>
                    </div>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 bg-black text-white px-3 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
                    <FaGooglePlay className="text-sm lg:text-base" />
                    <div className="text-left">
                      <div className="text-xs">Get it on</div>
                      <div className="text-xs">Google Play</div>
                    </div>
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-gray-400 text-xs flex flex-col md:flex-row justify-center md:justify-start gap-2 text-center md:text-left">
              <div className="mb-2 md:mb-0">
                © {new Date().getFullYear()} Medicoo. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <a href="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                <span className="hidden md:inline">|</span>
                <a href="/terms-of-service" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-xs">
              <FaHeart className="text-primary-500" />
              <span>Made with care for your health</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;