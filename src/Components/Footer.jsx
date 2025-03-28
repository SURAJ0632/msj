import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Download,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";

function Footer() {
  return (
    <footer
      className="bg-green-900 text-white pt-12 pb-8 relative overflow-hidden"
      style={{ fontFamily: "'Work Sans', sans-serif" }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-yellow-600"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -z-0"></div>

      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Column */}
          <div className="lg:pr-6">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                MSJ masale | spices
              </h2>
            </div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Since 1932, we've been crafting authentic spice blends that bring
              the rich flavors of India to kitchens worldwide. Our commitment to
              quality ensures every product meets the highest standards.
            </p>

            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-green-800 hover:bg-yellow-500 p-2 rounded-full transition-all duration-300 hover:text-green-900"
              >
                <Facebook
                  size={18}
                  className="text-white hover:text-green-900"
                />
              </a>
              <a
                href="#"
                className="bg-green-800 hover:bg-yellow-500 p-2 rounded-full transition-all duration-300 hover:text-green-900"
              >
                <Instagram
                  size={18}
                  className="text-white hover:text-green-900"
                />
              </a>
              <a
                href="#"
                className="bg-green-800 hover:bg-yellow-500 p-2 rounded-full transition-all duration-300 hover:text-green-900"
              >
                <Twitter
                  size={18}
                  className="text-white hover:text-green-900"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block text-white">
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-600"></span>
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about-us" },
                { name: "Products", href: "/products" },
                { name: "Contact", href: "/contact" },
                { name: "FAQ", href: "/faq" },
                { name: "Privacy Policy", href: "/privacy-policy" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="hover:text-yellow-400 transition-colors duration-300 flex items-center"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 text-yellow-500" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block text-white">
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-600"></span>
              Contact Us
            </h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mt-1 mr-3 text-yellow-500 flex-shrink-0" />
                <p>
                  325, Experio Building, Vibhuti Khand, Gomti Nagar, Lucknow,
                  Uttar Pradesh, 226010
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-yellow-500 flex-shrink-0" />
                <a
                  href="tel:+919519797775"
                  className="hover:text-yellow-400 transition-colors"
                >
                  +91 9519797775
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-yellow-500 flex-shrink-0" />
                <a
                  href="mailto:hello@vallabhiindia.com"
                  className="hover:text-yellow-400 transition-colors"
                >
                  hello@vallabhiindia.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter & Download */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block text-white">
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-600"></span>
              Get Updates
            </h3>
            <p className="text-gray-300 mb-3 text-sm">
              Subscribe to our newsletter for updates and offers
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-green-800 text-white rounded-l-lg focus:outline-none focus:ring-1 focus:ring-yellow-500 w-full text-sm border border-green-700"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-green-900 px-3 py-2 rounded-r-lg transition-all duration-300 text-sm font-medium"
                >
                  Subscribe
                </button>
              </div>
            </form>
            {/* <a
              href="/catalogue.pdf"
              download="MSJ_Masale_Catalogue.pdf"
              className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-green-900 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium"
            >
              <Download className="w-4 h-4 mr-1" />
              Download Catalogue
            </a> */}
          </div>
        </div>

        {/* Copyright & Bottom Links */}
        <div className="pt-6 border-t border-green-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-xs mb-3 md:mb-0">
            © {new Date().getFullYear()} Vallabhi Agro Services. All rights
            reserved.
          </div>

          <div className="flex space-x-4">
            <a
              href="/privacy-policy"
              className="text-gray-400 hover:text-yellow-400 text-xs transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
