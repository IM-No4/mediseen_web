import React from 'react';
import { FaStar, FaQuoteLeft, FaUser, FaHeart, FaShieldAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Cardiologist",
      location: "Mumbai",
      rating: 5,
      text: "Mediseen has revolutionized healthcare delivery. The platform's commitment to quality and patient safety is exceptional. As a healthcare provider, I highly recommend their services.",
      avatar: "PS",
      verified: true
    },
    {
      name: "Rajesh Kumar",
      role: "Patient",
      location: "Delhi",
      rating: 5,
      text: "The app is incredibly user-friendly and the customer support is outstanding. I love how I can upload prescriptions and get authentic medicines delivered within hours.",
      avatar: "RK",
      verified: true
    },
    {
      name: "Dr. Meera Patel",
      role: "General Physician",
      location: "Bangalore",
      rating: 5,
      text: "As a doctor, I appreciate how Mediseen maintains strict quality standards. The prescription verification process is thorough and the platform ensures patient safety.",
      avatar: "MP",
      verified: true
    },
    {
      name: "Anita Desai",
      role: "Patient",
      location: "Chennai",
      rating: 5,
      text: "The online consultation feature is fantastic. I can consult with expert doctors from the comfort of my home. The app is intuitive and the video quality is excellent.",
      avatar: "AD",
      verified: true
    },
    {
      name: "Suresh Reddy",
      role: "Patient",
      location: "Hyderabad",
      rating: 5,
      text: "Fast delivery and 100% authentic medicines. The real-time tracking feature helps me know exactly when my medicines will arrive. Exceptional service quality!",
      avatar: "SR",
      verified: true
    },
    {
      name: "Kavita Singh",
      role: "Patient",
      location: "Pune",
      rating: 5,
      text: "I've been using Mediseen for 8 months now. The medicine reminders and health tracking features are incredibly helpful for managing my diabetes effectively.",
      avatar: "KS",
      verified: true
    }
  ];

  const stats = [
    { number: "4.9★", label: "Average Rating", icon: <FaStar className="text-2xl" /> },
    { number: "50K+", label: "Happy Patients", icon: <FaHeart className="text-2xl" /> },
    { number: "100%", label: "Authentic Medicines", icon: <FaShieldAlt className="text-2xl" /> },
    { number: "24/7", label: "Support Available", icon: <FaClock className="text-2xl" /> }
  ];

  return (
    <section id="features" className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 healthcare-pattern opacity-10"></div>
      
      <div className="container-custom px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge-accent mb-5">
            <FaHeart className="text-accent-600" />
            <span>Patient Testimonials</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-3 animate-fade-in-up">
            What Our <span className="gradient-text">Patients Say</span>
          </h2> 
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Don't just take our word for it. Here's what our satisfied patients and healthcare professionals 
            have to say about their experience with Mediseen.
          </p>
        </div>

        {/* Statistics - Horizontal Layout */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-xl font-display font-bold text-primary-600 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 h-full hover:shadow-medium transition-all duration-300 relative overflow-hidden">
                  {/* Background Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-5">
                    <FaQuoteLeft className="text-6xl text-primary-600" />
                  </div>
                  
                  <div className="relative z-10">
                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-warning-400 text-sm" />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">({testimonial.rating}.0)</span>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm italic">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold shadow-medium">
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                          {testimonial.verified && (
                            <div className="w-4 h-4 bg-success-100 rounded-full flex items-center justify-center">
                              <FaCheckCircle className="text-success-600 text-xs" />
                            </div>
                          )}
                        </div>
                        <div className="text-xs text-primary-600 font-medium">{testimonial.role}</div>
                        <div className="text-xs text-gray-500">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators - Horizontal Layout */}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-10">
            Why <span className="gradient-text">Trust Us</span>
          </h3>
          
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center">
                  <FaShieldAlt className="text-success-600 text-lg" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900">Licensed & Verified</h4>
                  <p className="text-gray-600 text-sm">All healthcare providers are licensed and verified by regulatory authorities</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <FaHeart className="text-primary-600 text-lg" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900">Patient First</h4>
                  <p className="text-gray-600 text-sm">Your health and well-being are our top priorities in everything we do</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                  <FaClock className="text-accent-600 text-lg" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900">24/7 Support</h4>
                  <p className="text-gray-600 text-sm">Round-the-clock healthcare support whenever you need assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 