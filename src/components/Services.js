import React from 'react';
import { FaPills, FaUserMd, FaFlask, FaHospital, FaAmbulance, FaUserNurse, FaStethoscope, FaHeart, FaArrowRight, FaCheckCircle, FaShieldAlt, FaClock } from 'react-icons/fa';

const Services = () => {
  const serviceSteps = [
    {
      step: "01",
      title: "Book Your Care",
      description: "Choose from our comprehensive healthcare services - medicine delivery, doctor consultations, lab tests, hospital appointments, ambulance services, or homecare.",
      icon: <FaStethoscope className="text-3xl" />,
      color: "from-primary-500 to-primary-600"
    },
    {
      step: "02", 
      title: "Get Professional Treatment",
      description: "Connect with verified healthcare professionals, licensed pharmacies, certified labs, and experienced medical staff for personalized care.",
      icon: <FaUserMd className="text-3xl" />,
      color: "from-accent-500 to-accent-600"
    },
    {
      step: "03",
      title: "Track & Manage Your Health",
      description: "Monitor your health journey with our integrated platform. Track medicine schedules, appointment reminders, and maintain comprehensive health records.",
      icon: <FaHeart className="text-3xl" />,
      color: "from-success-500 to-success-600"
    }
  ];

  const services = [
    {
      icon: <FaPills className="text-2xl" />,
      title: "Medicine Delivery",
      description: "Get authentic medicines delivered to your doorstep within 2 hours with prescription verification and quality assurance.",
      features: ["Licensed Pharmacies", "Fast Delivery", "Prescription Upload", "Quality Assured"],
      color: "from-primary-500 to-primary-600",
      bgColor: "bg-primary-50"
    },
    {
      icon: <FaUserMd className="text-2xl" />,
      title: "Doctor Consultations",
      description: "Consult with expert doctors online through high-quality video calls. Get instant prescriptions and personalized medical advice.",
      features: ["Expert Doctors", "Video Consultation", "Instant Prescriptions", "24/7 Available"],
      color: "from-accent-500 to-accent-600",
      bgColor: "bg-accent-50"
    },
    {
      icon: <FaFlask className="text-2xl" />,
      title: "Pathology Labs",
      description: "Book lab tests online and get samples collected from home. Receive digital reports within 24 hours with detailed analysis.",
      features: ["Home Sample Collection", "Digital Reports", "Quick Results", "Expert Analysis"],
      color: "from-success-500 to-success-600",
      bgColor: "bg-success-50"
    },
    // {
    //   icon: <FaHospital className="text-2xl" />,
    //   title: "Hospital Appointments",
    //   description: "Book appointments with top hospitals and specialists. Skip the queue and get priority scheduling with expert care.",
    //   features: ["Top Hospitals", "Specialist Doctors", "Priority Booking", "Expert Care"],
    //   color: "from-secondary-500 to-secondary-600",
    //   bgColor: "bg-secondary-50"
    // },
    // {
    //   icon: <FaAmbulance className="text-2xl" />,
    //   title: "Ambulance Services",
    //   description: "Emergency ambulance services available 24/7. Quick response time with trained medical staff and modern equipment.",
    //   features: ["24/7 Emergency", "Quick Response", "Trained Staff", "Modern Equipment"],
    //   color: "from-error-500 to-error-600",
    //   bgColor: "bg-error-50"
    // },
    // {
    //   icon: <FaUserNurse className="text-2xl" />,
    //   title: "Homecare Services",
    //   description: "Professional homecare services including nursing, physiotherapy, and medical equipment rental with expert care.",
    //   features: ["Professional Nurses", "Physiotherapy", "Equipment Rental", "Expert Care"],
    //   color: "from-warning-500 to-warning-600",
    //   bgColor: "bg-warning-50"
    // }
  ];

  return (
    <section id="services" className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 healthcare-pattern opacity-20"></div>
      
      <div className="container-custom px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="badge-primary mb-4">
            <FaStethoscope className="text-primary-600" />
            <span>Comprehensive Healthcare</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            How <span className="gradient-text">Medicoo</span> Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience compassionate healthcare with our simple three-step process. From booking to delivery, 
            we make healthcare accessible, convenient, and trustworthy for you and your family.
          </p>
        </div>

        {/* Three-Step Process - Timeline Style */}
        <div className="mb-12">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-success-500"></div>
            
            <div className="space-y-8">
              {serviceSteps.map((step, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-primary-500 rounded-full z-10"></div>
                  
                  {/* Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-white rounded-2xl p-4 shadow-soft border border-gray-100">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center text-white shadow-medium`}>
                          {step.icon}
                        </div>
                        <div className='flex items-center space-x-2 text-center'>
                          <div className={`inline-block px-2 py-1 bg-gradient-to-r ${step.color} text-white text-sm font-bold rounded-full`}>
                            {step.step}
                          </div>
                          <h3 className="text-lg font-display font-bold text-gray-900">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-3">
              Our <span className="gradient-text">Healthcare Services</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare solutions designed to meet all your medical needs with convenience, 
              quality, and care at the forefront.
            </p>
          </div>

          {/* Services - Compact Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 h-full hover:shadow-medium transition-all duration-300 overflow-hidden">
                  <div className="relative z-10">
                    {/* Service Icon */}
                    <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    
                    {/* Service Title */}
                    <h4 className="text-lg font-display font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                      {service.title}
                    </h4>
                    
                    {/* Service Description */}
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                      {service.description}
                    </p>
                    
                    {/* Service Features */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                          <span className="text-xs text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Learn More Button */}
                    {/* <div className="pt-4 border-t border-gray-100">
                      <button className="flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300 group">
                        <span>Learn More</span>
                        <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <FaShieldAlt className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 text-base">Licensed & Secure</h4>
                  <p className="text-gray-600 text-sm">All services are licensed and follow strict security protocols</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center">
                  <FaClock className="text-success-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 text-base">24/7 Support</h4>
                  <p className="text-gray-600 text-sm">Round-the-clock healthcare support whenever you need it</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                  <FaHeart className="text-accent-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 text-base">Patient First</h4>
                  <p className="text-gray-600 text-sm">Your health and comfort are our top priorities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 