import React from 'react';
import { FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Services */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Services</h6>
          <ul className="space-y-2">
            <li><a className="hover:underline">Branding</a></li>
            <li><a className="hover:underline">Design</a></li>
            <li><a className="hover:underline">Marketing</a></li>
            <li><a className="hover:underline">Advertisement</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Company</h6>
          <ul className="space-y-2">
            <li><a className="hover:underline">About us</a></li>
            <li><a className="hover:underline">Contact</a></li>
            <li><a className="hover:underline">Jobs</a></li>
            <li><a className="hover:underline">Press kit</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Social</h6>
          <div className="flex space-x-4">
            {/* Twitter */}
            <a href="#" aria-label="Twitter"
              className="text-purple-600 hover:shadow-lg hover:shadow-purple-400 transition-shadow duration-300 rounded-full p-1"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube"
              className="text-purple-600 hover:shadow-lg hover:shadow-purple-400 transition-shadow duration-300 rounded-full p-1"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook"
              className="text-purple-600 hover:shadow-lg hover:shadow-purple-400 transition-shadow duration-300 rounded-full p-1 "
            >
              <FaFacebook className="w-6 h-6" />
            </a>
          </div>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
