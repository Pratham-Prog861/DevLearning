import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-200">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-lg font-semibold text-[#000000]">Developed by Pratham Darji</p>
        <p className="text-sm mb-4 text-gray-600">&copy; {new Date().getFullYear()} All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-[#A435F0] transition duration-300">Privacy Policy</a>
          <a href="#" className="text-gray-600 hover:text-[#A435F0] transition duration-300">Terms of Service</a>
          <a href="#" className="text-gray-600 hover:text-[#A435F0] transition duration-300">Contact Us</a>
        </div>
        <div className="mt-6">
          <p className="text-xs text-gray-600">Follow us on:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-gray-600 hover:text-[#A435F0] transition duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-[#A435F0] transition duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-[#A435F0] transition duration-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;