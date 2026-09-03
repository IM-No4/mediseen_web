import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaExclamationTriangle,
  FaArrowLeft,
  FaHeartbeat,
  FaInfoCircle,
  FaUserMd,
  FaNotesMedical,
  FaPhoneAlt,
} from 'react-icons/fa';
import { MEDICAL_DISCLAIMER_FULL, MEDICAL_DISCLAIMER_TITLE } from '../constants/medicalDisclaimer';

const points = [
  {
    icon: <FaHeartbeat className="text-lg" />,
    title: 'Not a medical device',
    body: 'Medicoo is not intended to diagnose, treat, cure, or prevent any disease or medical condition.',
  },
  {
    icon: <FaInfoCircle className="text-lg" />,
    title: 'Not medical advice',
    body: 'Nothing in the app is a substitute for professional medical advice, diagnosis, or treatment.',
  },
  {
    icon: <FaNotesMedical className="text-lg" />,
    title: 'For information and organisation',
    body: 'Health tracking, medication reminders, and family health records are provided for informational and organisational purposes only.',
  },
  {
    icon: <FaUserMd className="text-lg" />,
    title: 'Always consult a professional',
    body: 'Speak to a qualified healthcare professional before making any decision about your health or medications.',
  },
];

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
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Full statement */}
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden">
            <div className="flex items-start space-x-4 bg-warning-50 border-b border-warning-100 p-6">
              <div className="w-11 h-11 rounded-xl bg-warning-100 text-warning-600 flex items-center justify-center flex-shrink-0">
                <FaExclamationTriangle className="text-lg" />
              </div>
              <div>
                <h2 className="font-display font-bold text-gray-900 text-lg mb-1">
                  Medicoo does not provide medical advice
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {MEDICAL_DISCLAIMER_FULL}
                </p>
              </div>
            </div>

            {/* Breakdown */}
            <div className="grid sm:grid-cols-2 gap-px bg-gray-100">
              {points.map((point) => (
                <div key={point.title} className="bg-white p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0">
                      {point.icon}
                    </div>
                    <h3 className="font-display font-bold text-gray-900 text-sm">{point.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{point.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency callout */}
          <div className="bg-red-50 border border-red-100 rounded-2xl p-6 flex items-start space-x-4">
            <div className="w-11 h-11 rounded-xl bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
              <FaPhoneAlt className="text-base" />
            </div>
            <div>
              <h3 className="font-display font-bold text-gray-900 text-sm mb-1">In an emergency</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                If you think you are having a medical emergency, call your local emergency number or
                go to the nearest hospital immediately. Do not rely on Medicoo for urgent care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalDisclaimer;
