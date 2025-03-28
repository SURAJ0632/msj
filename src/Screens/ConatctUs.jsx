import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Loader2,
  Clock,
  ChevronRight,
} from "lucide-react";

function ContactUs() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_q0m9m7t",
        "template_ktbe3hm",
        form.current,
        "nh8Z-bNIiiXIKdmc7"
      )
      .then(
        () => {
          setIsSent(true);
          setLoading(false);
          form.current.reset();
          setTimeout(() => setIsSent(false), 5000);
        },
        (error) => {
          console.log("FAILED...", error);
          setLoading(false);
        }
      );
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-green-900 px-4 py-8 md:py-16 relative overflow-hidden mt-24"
      style={{ fontFamily: "'Work Sans', sans-serif" }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-yellow-500/20 to-transparent -z-0"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -z-0"></div>

      <div className="w-full max-w-6xl z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center mb-3">
            <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"></div>
            <span className="mx-3 text-xs font-medium tracking-widest text-yellow-400 uppercase">
              Get In Touch
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full"></div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              MSJ Spices
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Connect with our team for premium spice solutions and partnerships
          </p>
        </div>

        {/* Main Form Container */}
        <div className="bg-green-800 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row border border-green-700">
          {/* Left Side - Contact Form */}
          <div className="md:w-2/3 p-6 md:p-8 relative">
            {isSent && (
              <div className="mb-4 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 px-3 py-2 rounded-lg flex items-center text-sm">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Your message has been sent successfully!
              </div>
            )}

            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "name", label: "Name*", type: "text" },
                  { name: "company", label: "Company*", type: "text" },
                  { name: "city", label: "City*", type: "text" },
                  { name: "state", label: "State*", type: "text" },
                  { name: "country", label: "Country*", type: "text" },
                  {
                    name: "enquiry_type",
                    label: "Enquiry Type*",
                    type: "select",
                    options: [
                      "Select an option",
                      "General Inquiry",
                      "Business Partnership",
                      "Customer Support",
                      "Wholesale Inquiry",
                    ],
                  },
                  { name: "email", label: "Email*", type: "email" },
                  { name: "phone", label: "Phone Number*", type: "tel" },
                ].map((field) => (
                  <div key={field.name} className="space-y-1 group">
                    <label className="text-xs font-medium text-gray-300 group-focus-within:text-yellow-400 transition-colors">
                      {field.label}
                    </label>
                    {field.type === "select" ? (
                      <select
                        name={field.name}
                        required
                        className="w-full px-3 py-2 text-sm border border-green-700 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 transition-all bg-green-900 text-white"
                      >
                        {field.options.map((option, i) => (
                          <option
                            key={i}
                            value={option}
                            disabled={i === 0}
                            className="bg-green-900"
                          >
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        required
                        className="w-full px-3 py-2 text-sm border border-green-700 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 transition-all bg-green-900 text-white"
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="space-y-1 group">
                <label className="text-xs font-medium text-gray-300 group-focus-within:text-yellow-400 transition-colors">
                  Your Message*
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="w-full px-3 py-2 text-sm border border-green-700 rounded-lg focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 transition-all bg-green-900 text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-green-900 font-medium py-2.5 px-4 rounded-lg shadow transition-all duration-300 flex items-center justify-center text-sm"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div className="md:w-1/3 bg-gradient-to-b from-green-900 to-green-800 text-white p-6 md:p-8 flex flex-col justify-between border-l border-green-700">
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 relative inline-block text-white">
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-600"></span>
                  Contact Information
                </h3>
                <p className="text-gray-300 text-sm">
                  We're here to help with your spice needs. Reach out anytime.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: <MapPin className="w-4 h-4 text-yellow-500" />,
                    title: "Our Location",
                    content:
                      "Gomti Nagar, Lucknow, Uttar Pradesh,226010, India",
                  },
                  {
                    icon: <Phone className="w-4 h-4 text-yellow-500" />,
                    title: "Phone Number",
                    content: "+91 9519797775",
                  },
                  {
                    icon: <Mail className="w-4 h-4 text-yellow-500" />,
                    title: "Email Address",
                    content: "hello@vallabhiindia.com",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-yellow-500/10 p-2 rounded-full mr-3">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1 text-white">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 text-sm">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-green-700">
              <h4 className="font-semibold text-sm mb-3 flex items-center text-white">
                <Clock className="w-4 h-4 mr-2 text-yellow-500" />
                Business Hours
              </h4>
              <div className="space-y-1 text-gray-300 text-sm">
                {[
                  { day: "Monday - Friday", time: "10:00 AM - 7:00 PM" },
                  { day: "Sunday", time: "Closed", highlight: true },
                ].map((schedule, i) => (
                  <p key={i} className="flex justify-between items-center">
                    <span>{schedule.day}</span>
                    <span
                      className={schedule.highlight ? "text-yellow-400" : ""}
                    >
                      {schedule.time}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional CTA Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center bg-green-800 rounded-lg p-4 shadow border border-green-700">
            <div className="mb-3 sm:mb-0 sm:mr-4">
              <h4 className="text-lg font-semibold text-white">
                Need immediate assistance?
              </h4>
              <p className="text-gray-300 text-sm">
                Our customer care team is ready to help
              </p>
            </div>
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-green-900 font-medium py-2 px-4 rounded-lg shadow text-sm whitespace-nowrap">
              Call Now +91 9519797775
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
