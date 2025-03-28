import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import { Link } from 'react-router-dom';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long has MSJ Spices been in business?",
      answer: "MSJ Spices has been a trusted name in the spice industry since 1933. With over 90 years of experience, we've perfected the art of sourcing and blending premium quality spices."
    },
    {
      question: "Where do you source your spices from?",
      answer: "We directly source our spices from the finest farms across India, known for producing the highest quality spices. Our network includes farms in Kerala, Karnataka, Tamil Nadu, and other prime spice-growing regions."
    },
    {
      question: "Are your spices organic?",
      answer: "Yes, we offer both conventional and certified organic spice options. All our organic products are certified by recognized Indian and international organic certification bodies."
    },
    {
      question: "What quality certifications do you have?",
      answer: "MSJ Spices is FSSAI certified, ISO 22000:2018 certified, and meets all international food safety standards. We also comply with FDA, EU, and other global regulatory requirements for spice exports."
    },
    {
      question: "Do you offer bulk/wholesale pricing?",
      answer: "Absolutely! We specialize in bulk exports and offer competitive wholesale pricing. Our minimum order quantity starts at 500kg for most products, with discounts available for larger orders."
    },
    {
      question: "What packaging options do you offer?",
      answer: "We provide flexible packaging solutions including 25kg bags, 50kg drums, or customized packaging as per client requirements. Retail packaging options are also available for private label customers."
    },
    {
      question: "How do you ensure spice freshness during shipping?",
      answer: "We use vacuum-sealed packaging with oxygen absorbers and moisture barriers. For sea shipments, we use specially designed containers with climate control when necessary to maintain optimal conditions."
    },
    {
      question: "What countries do you export to?",
      answer: "We currently export to over 35 countries worldwide including the USA, UK, UAE, Germany, Japan, Australia, and many more. Contact us to inquire about shipping to your specific country."
    },
    {
      question: "Can you create custom spice blends?",
      answer: "Yes, our R&D team specializes in creating custom spice blends tailored to your specific requirements. We can develop proprietary blends for your brand while maintaining strict confidentiality."
    },
    {
      question: "What is your lead time for orders?",
      answer: "Standard lead time is 15-20 days from order confirmation. For large orders or custom blends, lead time may vary between 25-30 days. We offer expedited processing for urgent requirements."
    },
    {
      question: "How do you handle quality control?",
      answer: "Every batch undergoes rigorous testing in our in-house laboratory for purity, moisture content, microbial levels, and other quality parameters. We also conduct third-party testing as required by clients."
    },
    {
      question: "Do you provide documentation for customs clearance?",
      answer: "Yes, we provide all necessary export documentation including certificate of origin, phytosanitary certificates, lab test reports, and any other required paperwork for smooth customs clearance."
    }
  ];

  return (
    <div className="min-h-screen bg-[#022c22] py-12 px-4 sm:px-6 lg:px-8 mt-30" style={{ fontFamily: "'Work Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-yellow-400">Frequently Asked</span> Questions
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Answers to common questions about MSJ Spices - Your trusted spice partner since 1933
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border-2 border-yellow-500 rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                className={`w-full px-6 py-4 text-left flex justify-between items-center ${activeIndex === index ? 'bg-yellow-500/10' : 'bg-[#022c22]'}`}
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-yellow-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-yellow-500" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 pt-2 bg-[#022c22]/50">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Still have questions?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our spice experts are ready to help you with any additional questions about our products, exports, or partnerships.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="inline-block">
              <button className="bg-yellow-500 text-[#022c22] hover:bg-yellow-400 font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-300 text-lg hover:scale-105 transform">
                Contact Us
              </button>
            </Link>
            <Link to="/product" className="inline-block">
              <button className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 font-semibold px-8 py-3 rounded-full transition-all duration-300 text-lg hover:scale-105 transform">
                View Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;