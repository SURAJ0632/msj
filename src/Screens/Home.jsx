import React from "react";
import { Link } from "react-router-dom";
import Banner from "../assets/MSJ.png";
import About from "../assets/spiceAbout.png";
import Turmeric from "../assets/turmeric.png";
import RedChilli from "../assets/redchilli.png";
import Coriander from "../assets/coriander.png";
import GaramMasala from "../assets/masala1.png";
import BlackPepper from "../assets/Products/blackpepper.png";
import Cumin from "../assets/cumin.png";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import { Award, Leaf, Shield, Truck, Globe, Users, Clock } from "lucide-react";

export default function HomePage() {
  return (
    <div
      className="w-full bg-green-800 mt-24"
      style={{ fontFamily: "'Work Sans', sans-serif" }}
    >
      {/* Hero Section with Floating Spices Animation */}
      <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gray-900">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-90"
          >
            <source src="src/assets/MSJ.mp4" type="video/mp4" />
            <img
              src={Banner}
              alt="Spice Banner"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
        </div>

        {/* Floating spice elements */}
        <div className="absolute top-1/4 left-10 w-16 h-16 bg-yellow-500/10 rounded-full filter blur-md animate-float1"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-yellow-500/10 rounded-full filter blur-md animate-float2"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-yellow-500/10 rounded-full filter blur-md animate-float3"></div>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-5xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The <span className="text-yellow-400">Art</span> of <br />
               Authentic Indian Spices
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light max-w-3xl mx-auto">
              Premium quality spices handpicked for your culinary masterpieces,
              crafted with generations of expertise.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/product" className="inline-block">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-8 py-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 group text-base">
                  Explore Our Collection
                  <svg
                    className="w-4 h-4 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </Link>
              <Link to="/about-us" className="inline-block">
                <button className="border-2 border-white hover:border-yellow-400 text-white hover:text-yellow-400 font-medium px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 group text-base">
                  Our Story
                  <svg
                    className="w-4 h-4 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scrolling Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white mt-1 rounded-full animate-scrollIndicator"></div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-8 bg-gradient-to-r from-green-900 to-green-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              {
                icon: <Award className="w-8 h-8 text-yellow-400" />,
                text: "Premium Quality",
              },
              {
                icon: <Leaf className="w-8 h-8 text-yellow-400" />,
                text: "100% Natural",
              },
              {
                icon: <Shield className="w-8 h-8 text-yellow-400" />,
                text: "FSSAI Certified",
              },
              {
                icon: <Truck className="w-8 h-8 text-yellow-400" />,
                text: "PAN-India Delivery",
              },
              {
                icon: <Globe className="w-8 h-8 text-yellow-400" />,
                text: "Global Export",
              },
              {
                icon: <Users className="w-8 h-8 text-yellow-400" />,
                text: "500+ Happy Clients",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-green-800 p-3 rounded-lg shadow-sm flex flex-col items-center text-center border border-green-700"
              >
                <div className="mb-2">{item.icon}</div>
                <p className="font-medium text-white text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-green-800 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-6 border-yellow-500/20 rounded-xl z-0"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition duration-500">
                <img
                  src={About}
                  alt="About MSJ Spices"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="inline-block mb-6">
                <span className="text-sm font-semibold tracking-widest text-yellow-400 uppercase">
                  Our Heritage
                </span>
                <div className="w-16 h-1 bg-yellow-400 mt-2"></div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Crafting <span className="text-yellow-400">Flavor</span> <br />
                Since 1932
              </h2>

              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                At <span className="font-semibold text-white">MSJ Spices</span>,
                we've spent decades perfecting the art of spice blending. Our
                journey began in a small kitchen with a simple passion - to
                bring the authentic taste of Indian cuisine to every home.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "FSSAI certified spices for guaranteed quality and safety",
                  "Ethically sourced from trusted farmers across India",
                  "Traditional methods meet modern hygiene standards",
                  "Small-batch production ensuring maximum freshness",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-yellow-400/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-white/90">{item}</p>
                  </div>
                ))}
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: "30+", label: "Years Experience" },
                  { value: "50+", label: "Spice Varieties" },
                  { value: "100%", label: "Natural Ingredients" },
                  { value: "500+", label: "Happy Clients" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-green-900/50 p-3 rounded-lg border border-yellow-400/20"
                  >
                    <p className="text-2xl font-bold text-yellow-400">
                      {stat.value}
                    </p>
                    <p className="text-white/80 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link to="/about-us">
                  <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-2.5 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 flex items-center text-base">
                    Discover Our Story
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="border-2 border-white hover:border-yellow-400 text-white hover:text-yellow-400 font-medium px-6 py-2.5 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 flex items-center text-base">
                    Contact Us
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-green-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-yellow-400">Time-Tested</span> Process
            </h2>
            <p className="text-lg text-white/90">
              From farm to your kitchen - preserving authenticity at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Leaf className="w-8 h-8 text-white" />,
                title: "Sourcing",
                description:
                  "Directly from trusted farmers across India's spice regions,",
                bg: "bg-yellow-500",
              },
              {
                icon: <Clock className="w-8 h-8 text-white" />,
                title: "Drying",
                description:
                  "Natural sun-drying to preserve essential oils and flavors,",
                bg: "bg-yellow-500",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    ></path>
                  </svg>
                ),
                title: "Grinding",
                description:
                  "Low-temperature grinding to lock in aroma and nutrients,",
                bg: "bg-yellow-500",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                ),
                title: "Quality Check",
                description: "Rigorous testing for purity, potency and safety.",
                bg: "bg-yellow-500",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-green-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-green-700"
              >
                <div
                  className={`${step.bg} w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto`}
                >
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-center text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/80 text-center text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spices Info Section */}
      <section className="py-16 bg-gradient-to-b from-green-800 to-green-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why <span className="text-yellow-400">MSJ</span> Spices Stands
              Apart
            </h2>
            <p className="text-xl text-white/90 font-light mb-3">
              "Food, it's not just about filling the stomach—it's a celebration
              of life."
            </p>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: image1,
                title: "Sourced From Best Farms",
                description:
                  "We partner with farms in prime  regions across India to source only the finest quality spices, ensuring authentic flavors and premium quality.",
              },
              {
                icon: image2,
                title: "Hygienic Processing",
                description:
                  "Our state-of-the-art facilities maintain the highest hygiene standards with minimal human contact throughout the processing journey.",
              },
              {
                icon: image3,
                title: "Low Temperature Grinding",
                description:
                  "Our specialized LTG technology preserves the natural oils and flavors that give our spices their distinctive aroma and taste profile.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-green-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-500 transform hover:-translate-y-2 border border-green-700"
              >
                <div className="bg-yellow-500/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-center text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-white/80 text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Products Section */}
      <section className="py-16 bg-green-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-2xl font-semibold tracking-widest text-yellow-400 uppercase mb-3 inline-block">
              Our Premium Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Spices That <span className="text-yellow-400">Elevate</span> Your
              Cooking
            </h2>
            <p className="text-xl text-white/90 font-light">
              Handcrafted with generations of expertise to bring authentic
              flavors to your kitchen.
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                name: "Turmeric Powder",
                description:
                  "Our organic turmeric powder is packed with curcumin, offering powerful anti-inflammatory benefits and that perfect golden hue to your dishes. Grown in the fertile soils of Erode, Tamil Nadu, our turmeric is carefully harvested at peak season for maximum potency.",
                features: [
                  "Rich in antioxidants and anti-inflammatory properties",
                  "Perfect for curries, golden milk, and health tonics",
                  "Certified organic and chemical-free",
                  "Contains 5-7% curcumin content (industry standard is 2-3%)",
                  "Sun-dried for maximum flavor retention",
                ],
                uses: [
                  "Add to warm milk for traditional haldi doodh",
                  "Essential for Indian curries and dals",
                  "Natural food coloring agent",
                  "Skin care and face masks",
                ],
                image: Turmeric,
              },
              {
                name: "Kashmiri Chilli Powder",
                description:
                  "Our sun-dried Kashmiri chilli powder delivers a fiery kick and rich color that transforms ordinary dishes into extraordinary culinary experiences. Sourced from the famous Byadgi and Guntur chillies, we offer a perfect balance of heat and flavor.",
                features: [
                  "Available in mild, medium, and extra hot varieties",
                  "Ideal for curries, marinades, and street food",
                  "Naturally boosts metabolism and circulation",
                  "Rich in vitamins A and C",
                  "No artificial color or additives",
                ],
                uses: [
                  "Essential for spicy curries and chutneys",
                  "Perfect for marinades and rubs",
                  "Adds vibrant color to dishes",
                  "Key ingredient in chaat masalas",
                ],
                image: RedChilli,
              },
              {
                name: "Coriander Powder",
                description:
                  "Our freshly ground coriander powder adds a citrusy, aromatic depth to dishes while balancing the heat of other spices. Sourced from Rajasthan's finest coriander seeds, our powder has a distinctive fresh aroma that elevates any dish.",
                features: [
                  "Essential in Indian and Middle Eastern cuisines",
                  "Known for its cooling digestive properties",
                  "Adds subtle sweetness and complexity to dishes",
                  "High in dietary fiber and antioxidants",
                  "Freshly ground for maximum flavor",
                ],
                uses: [
                  "Base for most curry powders",
                  "Essential in garam masala blends",
                  "Perfect for marinades and rubs",
                  "Adds depth to soups and stews",
                ],
                image: Coriander,
              },
              {
                name: " Garam Masala",
                description:
                  "Our handcrafted garam masala is a carefully balanced blend that delivers a warm, complex flavor to elevate your cooking to new heights. This signature blend combines 12 premium spices in precise proportions, a recipe perfected over three generations.",
                features: [
                  "Family recipe perfected over generations",
                  "Perfect for curries, stews, and roasted vegetables",
                  "Small-batch blended for maximum freshness",
                  "Contains premium cinnamon, cardamom, and cloves",
                  "No artificial flavors or preservatives",
                ],
                uses: [
                  "Sprinkle on finished dishes for aroma",
                  "Essential for biryanis and pulaos",
                  "Enhances meat and vegetable curries",
                  "Adds warmth to desserts and drinks",
                ],
                image: GaramMasala,
              },
              {
                name: "Cumin Powder",
                description:
                  "Our premium cumin powder is made from the finest Gujarat-grown cumin seeds, known for their distinctive earthy flavor and digestive benefits. Lightly roasted before grinding to enhance its natural aroma.",
                features: [
                  "Rich in iron and digestive enzymes",
                  "Essential for tempering and tadkas",
                  "Adds depth to Mexican and Middle Eastern dishes",
                  "Helps improve digestion",
                  "Distinctive smoky aroma",
                ],
                uses: [
                  "Key ingredient in jeera rice",
                  "Essential for chaats and street foods",
                  "Adds flavor to yogurt drinks",
                  "Base for many spice blends",
                ],
                image: Cumin,
              },
              {
                name: "Black Pepper Powder",
                description:
                  "Freshly ground from premium Tellicherry peppercorns, our black pepper powder delivers bold, pungent flavor with subtle citrus notes. Known as the 'King of Spices', our pepper retains its natural oils for maximum flavor impact.",
                features: [
                  "Made from premium Tellicherry peppercorns",
                  "Rich in piperine for enhanced nutrient absorption",
                  "Natural preservative and flavor enhancer",
                  "Contains antioxidants and anti-inflammatory compounds",
                  "Freshly ground for maximum potency",
                ],
                uses: [
                  "Essential table seasoning",
                  "Enhances soups and sauces",
                  "Key ingredient in rubs and marinades",
                  "Adds heat to desserts and drinks",
                ],
                image: BlackPepper,
              },
            ].map((product, index) => (
              <div
                key={index}
                className={`bg-green-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-700 ${
                  product.badge === "Signature Blend"
                    ? "border-2 border-yellow-400"
                    : ""
                }`}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                    {product.badge && (
                      <span
                        className={`absolute top-4 left-4 ${
                          product.badge === "Best Seller"
                            ? "bg-yellow-500 text-gray-900"
                            : "bg-yellow-500 text-gray-900"
                        } px-4 py-1 rounded-full text-sm font-medium`}
                      >
                        {product.badge}
                      </span>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4"></div>
                  </div>

                  <div className="lg:w-3/5 p-8">
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {product.name}
                    </h3>
                    <p className="text-lg text-white/90 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold text-yellow-400 mb-3 flex items-center">
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          Key Features
                        </h4>
                        <ul className="space-y-2 text-white/80">
                          {product.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <svg
                                className="flex-shrink-0 w-5 h-5 text-yellow-400 mr-2 mt-0.5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-yellow-400 mb-3 flex items-center">
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            ></path>
                          </svg>
                          Culinary Uses
                        </h4>
                        <ul className="space-y-2 text-white/80">
                          {product.uses.map((use, i) => (
                            <li key={i} className="flex items-start">
                              <svg
                                className="flex-shrink-0 w-5 h-5 text-yellow-400 mr-2 mt-0.5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>{use}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full filter blur-xl"></div>
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full filter blur-xl"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Experience MSJ Spices?
                </h2>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Join thousands of satisfied customers who trust our spices for
                  their culinary creations
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <Link to="/product">
                    <button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-md transition-all duration-300 text-sm flex items-center justify-center">
                      Shop All Products
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        ></path>
                      </svg>
                    </button>
                  </Link>
                  <Link to="/contact">
                    <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-4 rounded-full transition-all duration-300 text-sm flex items-center justify-center">
                      Contact Our Team
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}