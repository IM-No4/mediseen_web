import React from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaLock, FaEye, FaUser, FaDatabase, FaCookieBite, FaEnvelope, FaPhone, FaArrowLeft } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-soft border-b border-gray-100">
        <div className="container-custom px-2 md:px-0 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-medium">
                <FaShieldAlt className="text-white text-lg" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-display font-bold text-gray-900">
                  Privacy <span className="gradient-text">Policy</span>
                </h1>
                <p className="text-gray-600 text-sm">Last updated: August 2025</p>
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
              Your Privacy Matters
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Medicoo, we are committed to protecting your privacy and ensuring the security of your personal and health information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our healthcare platform.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-primary-50 rounded-xl">
                <FaShieldAlt className="text-primary-600 text-lg" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Secure & Protected</div>
                  <div className="text-gray-600 text-xs">Your data is encrypted and secure</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-success-50 rounded-xl">
                <FaLock className="text-success-600 text-lg" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">HIPAA Compliant</div>
                  <div className="text-gray-600 text-xs">Following healthcare privacy standards</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Information We Collect */}
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white shadow-medium">
                  <FaDatabase className="text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                    Information We Collect
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Personal information (name, email, phone)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Health information (prescriptions, history)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Device information (IP address, browser)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white shadow-medium">
                  <FaEye className="text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                    How We Use Your Information
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Provide healthcare services</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Process payments and transactions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Send notifications and updates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-success-500 to-success-600 rounded-xl flex items-center justify-center text-white shadow-medium">
                  <FaLock className="text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                    Data Security
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-success-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Encryption of sensitive data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-success-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Secure servers and infrastructure</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-success-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Regular security audits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center text-white shadow-medium">
                  <FaUser className="text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                    Your Rights
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Access your personal information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Correct inaccurate data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Request deletion of your data</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-6 text-center">
              Contact Our <span className="gradient-text">Privacy Team</span>
            </h2>
            <p className="text-gray-600 text-center mb-8 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, 
              please don't hesitate to contact us.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 p-4 bg-primary-50 rounded-xl">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <FaEnvelope className="text-primary-600 text-lg" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Email Us</div>
                  <div className="text-gray-600 text-sm">privacy@medicoo.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-success-50 rounded-xl">
                <div className="w-10 h-10 bg-success-100 rounded-xl flex items-center justify-center">
                  <FaPhone className="text-success-600 text-lg" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Call Us</div>
                  <div className="text-gray-600 text-sm">+91 79052 75048</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 