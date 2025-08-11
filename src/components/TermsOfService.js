import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileContract, FaHandshake, FaShieldAlt, FaExclamationTriangle, FaCheckCircle, FaEnvelope, FaPhone, FaGavel, FaArrowLeft } from 'react-icons/fa';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-soft border-b border-gray-100">
        <div className="container-custom px-2 md:px-0 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-medium">
                <FaFileContract className="text-white text-lg" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-display font-bold text-gray-900">
                  Terms of <span className="gradient-text">Service</span>
                </h1>
                <p className="text-gray-600 text-sm">Last updated: December 2024</p>
              </div>
            </div>
            {/* if large device then show back to home else show arrow left */}
            <div className="hidden md:block">
              <Link 
                to="/" 
                className="flex items-center space-x-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors duration-300"
              >
                <FaArrowLeft className="text-sm" />
                <span className="font-medium">Back to Home</span>
              </Link>
            </div>
            <div className="block md:hidden">
              <Link 
                to="/" 
                className="flex items-center space-x-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors duration-300"
              >
                <FaArrowLeft className="text-sm" />
                <span className="font-medium">Back</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom px-2 md:px-0 py-8">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-4">
              Agreement to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              By accessing and using Mediseen's healthcare platform, you agree to be bound by these Terms of Service. 
              These terms govern your use of our services, including medicine delivery, doctor consultations, and other healthcare services.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-primary-50 rounded-xl">
                <FaHandshake className="text-primary-600 text-lg" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Legal Agreement</div>
                  <div className="text-gray-600 text-xs">Binding terms for service usage</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-success-50 rounded-xl">
                <FaGavel className="text-success-600 text-lg" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Compliant Service</div>
                  <div className="text-gray-600 text-xs">Following healthcare regulations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Service Description */}
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white shadow-medium">
                  <FaShieldAlt className="text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                    Service Description
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Medicine delivery services</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Doctor consultations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Lab test bookings</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Hospital appointments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white shadow-medium">
                  <FaCheckCircle className="text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                    User Responsibilities
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Provide accurate information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Maintain account security</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Follow healthcare guidelines</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Pay for services on time</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Prohibited Activities */}
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-error-500 to-error-600 rounded-xl flex items-center justify-center text-white shadow-medium">
                  <FaExclamationTriangle className="text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                    Prohibited Activities
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-error-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Sharing false medical information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-error-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Misusing prescription services</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-error-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Violating privacy policies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-error-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Unauthorized account access</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-success-500 to-success-600 rounded-xl flex items-center justify-center text-white shadow-medium">
                  <FaHandshake className="text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                    Payment Terms
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-success-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Secure payment processing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-success-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Multiple payment options</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-success-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Transparent pricing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-success-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Refund policies apply</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Disclaimers */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-6 text-center">
              Important <span className="gradient-text">Disclaimers</span>
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-warning-50 rounded-xl">
                <FaExclamationTriangle className="text-warning-600 text-lg mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Medical Disclaimer</h4>
                  <p className="text-gray-600 text-sm">Our services are not a substitute for professional medical advice. Always consult with qualified healthcare providers for medical decisions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-info-50 rounded-xl">
                <FaShieldAlt className="text-info-600 text-lg mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Service Availability</h4>
                  <p className="text-gray-600 text-sm">Service availability may vary by location. We reserve the right to modify or discontinue services with notice.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-success-50 rounded-xl">
                <FaCheckCircle className="text-success-600 text-lg mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Quality Assurance</h4>
                  <p className="text-gray-600 text-sm">We maintain high standards for all healthcare services and partner with licensed professionals and pharmacies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-6 text-center">
              Questions About Our <span className="gradient-text">Terms?</span>
            </h2>
            <p className="text-gray-600 text-center mb-8 leading-relaxed">
              If you have any questions about these Terms of Service, 
              please contact our legal team.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 p-4 bg-primary-50 rounded-xl">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <FaEnvelope className="text-primary-600 text-lg" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Email Us</div>
                  <div className="text-gray-600 text-sm">legal@mediseen.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-success-50 rounded-xl">
                <div className="w-10 h-10 bg-success-100 rounded-xl flex items-center justify-center">
                  <FaPhone className="text-success-600 text-lg" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Call Us</div>
                  <div className="text-gray-600 text-sm">+91 98765 43210</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 