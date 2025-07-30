import React from 'react';

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
            <a href="#" aria-label="Twitter">
              <svg className="w-6 h-6 text-white hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-..." />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube">
              <svg className="w-6 h-6 text-white hover:text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-..." />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook">
              <svg className="w-6 h-6 text-white hover:text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-..." />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
