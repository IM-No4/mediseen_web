import React from 'react';
import { FaShieldAlt, FaClock, FaUserMd, FaTruck, FaStar, FaHeart, FaCheck, FaArrowRight, FaMobile, FaTablet, FaLaptop, FaHeadset, FaCertificate, FaGlobe } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "100% Authentic Medicines",
      description: "All medicines are sourced directly from authorized distributors and verified pharmacies with quality assurance.",
      color: "from-primary-500 to-primary-600",
      bgColor: "bg-primary-50",
      highlights: ["FDA Approved", "Quality Verified", "Genuine Products", "Safe & Secure"]
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Lightning Fast Delivery",
      description: "Get medicines delivered under 30 minutes in your city with real-time tracking and status updates.",
      color: "from-accent-500 to-accent-600",
      bgColor: "bg-accent-50",
      highlights: ["2-Hour Delivery", "Real-time Tracking", "Express Service", "City-wide Coverage"]
    },
    {
      icon: <FaUserMd className="text-2xl" />,
      title: "Expert Medical Professionals",
      description: "Consult with qualified and experienced doctors from top hospitals and medical institutions.",
      color: "from-success-500 to-success-600",
      bgColor: "bg-success-50",
      highlights: ["Expert Doctors", "Video Consultation", "Instant Prescriptions", "24/7 Available"]
    },
    {
      icon: <FaTruck className="text-2xl" />,
      title: "Doorstep Healthcare Services",
      description: "All healthcare services delivered right to your doorstep for maximum convenience and comfort.",
      color: "from-secondary-500 to-secondary-600",
      bgColor: "bg-secondary-50",
      highlights: ["Home Sample Collection", "Medicine Delivery", "Homecare Services", "Equipment Rental"]
    }
  ];

  const benefits = [
    {
      title: "No Waiting Queues",
      description: "Skip long hospital queues and get instant access to healthcare services"
    },
    {
      title: "Expert Verification",
      description: "All prescriptions verified by qualified medical professionals"
    },
    {
      title: "Secure Payments",
      description: "Multiple secure payment options with complete transaction safety"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your healthcare needs"
    },
    {
      title: "Health Records",
      description: "Digital health records management for easy access and tracking"
    },
    {
      title: "Smart Reminders",
      description: "Automated medicine reminders to ensure you never miss a dose"
    },
    {
      title: "Family Care",
      description: "Complete family health tracking and management in one place"
    },
    {
      title: "Emergency Care",
      description: "Quick emergency care coordination when you need it most"
    }
  ];

  const stats = [
    { number: "100K+", label: "Happy Patients", icon: <FaHeart className="text-xl" />, percentage: 95 },
    { number: "2000+", label: "Expert Doctors", icon: <FaUserMd className="text-xl" />, percentage: 88 },
    { number: "24/7", label: "Support Available", icon: <FaHeadset className="text-xl" />, percentage: 100 },
    { number: "2hrs", label: "Average Delivery", icon: <FaTruck className="text-xl" />, percentage: 92 }
  ];

  return (
    <section id="features" className="py-8 lg:py-12 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 healthcare-pattern opacity-10"></div>
      
      <div className="container-custom px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="badge-accent mb-3">
            <FaStar className="text-accent-600" />
            <span>Why Choose Medicoo</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-3">
            Features That <span className="gradient-text">Set Us Apart</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover the innovative features that make Medicoo the preferred choice for healthcare. 
            We combine technology with compassion to deliver exceptional healthcare experiences.
          </p>
        </div>

        {/* Features - Compact Grid Layout */}
        <div className="mb-10">
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-4 hover:shadow-medium transition-all duration-300 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon and Title Row */}
                    <div className="flex items-start space-x-3 mb-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-display font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Feature Highlights */}
                    <div className="grid grid-cols-2 gap-2">
                      {feature.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-success-100 rounded-full flex items-center justify-center">
                            <FaCheck className="text-success-600 text-xs" />
                          </div>
                          <span className="text-xs text-gray-700 font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section - Redesigned */}
        <div className="mb-10">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-3">
              Benefits That <span className="gradient-text">Matter</span>
            </h3>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Experience healthcare like never before with our comprehensive benefits designed to make your life easier and healthier.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-4 shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300 h-full">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-success-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaCheck className="text-success-600 text-sm" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display font-bold text-gray-900 text-sm mb-1 group-hover:text-primary-600 transition-colors duration-300">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics - Compact Progress Bar Style */}
        {/* <div className="text-center mb-10">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-6">
            Trusted by <span className="gradient-text">Millions</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="bg-white rounded-xl p-4 shadow-soft border border-gray-100">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-xl font-display font-bold text-primary-600 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium text-xs mb-2">{stat.label}</div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-accent-500 h-1.5 rounded-full transition-all duration-1000"
                      style={{ width: `${stat.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{stat.percentage}% satisfaction</div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Trust Indicators - Compact Horizontal Layout */}
        {/* <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-6">
            Why <span className="gradient-text">Trust Us</span>
          </h3>
          
          <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center">
                  <FaCertificate className="text-success-600 text-base" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 text-sm">Certified & Licensed</h4>
                  <p className="text-gray-600 text-xs">All services are fully certified and licensed by regulatory authorities</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <FaGlobe className="text-primary-600 text-base" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 text-sm">Nationwide Coverage</h4>
                  <p className="text-gray-600 text-xs">Available across all major cities and towns in the country</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                  <FaShieldAlt className="text-accent-600 text-base" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 text-sm">Secure & Private</h4>
                  <p className="text-gray-600 text-xs">Your health data is protected with enterprise-grade security</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Features; 