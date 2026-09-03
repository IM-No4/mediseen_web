import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa';
import { MEDICAL_DISCLAIMER_FULL, MEDICAL_DISCLAIMER_TITLE } from '../constants/medicalDisclaimer';

const MedicalDisclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header - same recipe as TermsOfService.js/PrivacyPolicy.js */}
      <div className="bg-white shadow-soft border-b border-gray-100">
        <div className="container-custom px-2 md:px-0 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-medium">
                <FaExclamationTriangle className="text-white text-lg" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-display font-bold text-gray-900">
                  {MEDICAL_DISCLAIMER_TITLE}
                </h1>
                <p className="text-gray-600 text-sm">Please read carefully</p>
              </div>
            </div>
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
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8">
            <p className="text-gray-700 leading-relaxed text-base">
              {MEDICAL_DISCLAIMER_FULL}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalDisclaimer;
