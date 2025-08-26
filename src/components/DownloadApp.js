import React from 'react';
import { FaApple, FaGooglePlay, FaQrcode, FaDownload, FaStar, FaUsers, FaClock, FaShieldAlt, FaHeart, FaMobile, FaTablet, FaLaptop, FaCheckCircle } from 'react-icons/fa';
import medicooLogo from '../assets/icons/medicoo.png';

const DownloadApp = () => {
  const appFeatures = [
    {
      icon: <FaDownload className="text-2xl" />,
      title: "Easy Download",
      description: "Available on iOS and Android",
      color: "from-primary-500 to-primary-600"
    },
    // {
    //   icon: <FaStar className="text-2xl" />,
    //   title: "4.9/5 Rating",
    //   description: "Trusted by millions of users worldwide",
    //   color: "from-accent-500 to-accent-600"
    // },
    // {
    //   icon: <FaUsers className="text-2xl" />,
    //   title: "100K+ Downloads",
    //   description: "Growing community of satisfied users",
    //   color: "from-success-500 to-success-600"
    // },
    {
      icon: <FaClock className="text-2xl" />,
      title: "24/7 Support",
      description: "Round the clock healthcare support",
      color: "from-secondary-500 to-secondary-600"
    },
    {
      icon: <FaHeart className="text-2xl" />,
      title: "100% Authentic Medicines",
      description: "Sourced from authorized pharmacies",
      color: "from-success-500 to-success-600"
    }
  ];

  const downloadStats = [
    { number: "1M+", label: "App Downloads", icon: <FaDownload className="text-2xl" /> },
    { number: "4.9★", label: "User Rating", icon: <FaStar className="text-2xl" /> },
    { number: "100K+", label: "Active Users", icon: <FaUsers className="text-2xl" /> },
    { number: "24/7", label: "Support Available", icon: <FaClock className="text-2xl" /> }
  ];

  const appBenefits = [
    "Prescription upload & verification",
    "Real-time medicine tracking",
    "Video consultations with doctors",
    "Health records management",
    "Medicine reminders & alerts",
    "Family health tracking",
    "Emergency care coordination",
    "Secure payment options"
  ];

  const platforms = [
    { icon: <FaMobile className="text-3xl" />, name: "Mobile App", desc: "iOS & Android", color: "from-primary-500 to-primary-600" },
    { icon: <FaTablet className="text-3xl" />, name: "Tablet", desc: "iPad & Android", color: "from-accent-500 to-accent-600" },
    { icon: <FaLaptop className="text-3xl" />, name: "Web Platform", desc: "Desktop & Laptop", color: "from-success-500 to-success-600" }
  ];

  return (
    <section id="download" className="py-8 lg:py-12 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 healthcare-pattern-dense opacity-20"></div>
      
      <div className="container-custom px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge-primary mb-6 animate-fade-in">
            <FaDownload className="text-primary-600" />
            <span>Download Our App</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-3 animate-fade-in-up">
            Get <span className="gradient-text">Medicoo</span> on Your Device
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Experience comprehensive healthcare at your fingertips. Download our mobile app to access medicine delivery, 
            doctor consultations, lab tests, and more with just a few taps.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-6">
                Why Choose Our <span className="gradient-text">Mobile App</span>
              </h3>
              <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Our mobile app is designed to provide you with seamless healthcare experiences. 
                From booking appointments to tracking medicine delivery, everything is just a tap away.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-medium">
                  <FaApple className="text-xl" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm">App Store</div>
                  </div>
                </button>
                <button className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-medium">
                  <FaGooglePlay className="text-xl" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm">Google Play</div>
                  </div>
                </button>
              </div>
              
              {/* QR Code */}
              {/* <div className="flex items-center justify-center space-x-3 p-3 bg-white rounded-xl shadow-soft">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <FaQrcode className="text-gray-600 text-lg" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Scan QR Code</div>
                  <div className="text-xs text-gray-600">To download the app</div>
                </div>
              </div> */}
            </div>
          </div>
          <div>   
            {/* App Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {appFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-white rounded-xl shadow-soft">
                  <div className={`w-10 h-10 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white shadow-medium`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* App Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-4">
              App <span className="gradient-text">Features</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover all the powerful features that make our app the preferred choice for healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {appBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 bg-white rounded-xl shadow-soft animate-fade-in-up" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                <div className="w-5 h-5 bg-success-100 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="text-success-600 text-xs" />
                </div>
                <span className="text-gray-700 font-medium text-xs">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        {/* <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-6">
            Trusted by <span className="gradient-text">Millions</span>
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {downloadStats.map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                <div className="healthcare-card p-4 text-center">
                  <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-lg font-display font-bold text-primary-600 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium text-xs">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default DownloadApp; 