import React from "react";
import Masala from "../assets/spiceAbout.png";
import Sir from "../assets/sir.png";

export default function AboutUs() {
  return (
    <div
      className="container mx-auto px-4 md:px-6 py-8 mt-12 md:py-12 bg-[#022c22]"
      style={{ fontFamily: "'Work Sans', sans-serif" }}
    >
      {/* Hero Section */}
      <section className="relative bg-[#022c22] rounded-2xl overflow-hidden mb-12 h-56 flex items-center justify-center mt-24 border-2 border-yellow-500">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            The <span className="text-yellow-400">Story</span> Behind Our Spices
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Three decades of passion, tradition, and uncompromising quality in
            every blend
          </p>
        </div>
      </section>

      {/* Section 1: Our Story */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Image with frame */}
        <div className="relative group h-full min-h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-[#022c22]/20 rounded-2xl transform rotate-1 scale-105"></div>
          <div className="relative h-full rounded-2xl overflow-hidden shadow-xl border-2 border-yellow-500">
            <img
              src={Masala}
              alt="Our Story"
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center bg-[#022c22] p-8 rounded-2xl border-2 border-yellow-500">
          <div className="inline-flex items-center mb-4">
            <div className="w-10 h-1 bg-yellow-500 mr-3"></div>
            <span className="text-sm font-medium tracking-widest text-yellow-500 uppercase">
              Our Heritage
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Authentic
            </span>{" "}
            Flavors Since 1932
          </h2>

          <div className="space-y-5 text-gray-200">
            <p className="text-lg">
              <span className="font-bold text-white">MSJ Masale</span> brings
              generations of spice expertise to your kitchen. Our{" "}
              <span className="font-semibold text-yellow-400">
                handcrafted blends
              </span>{" "}
              transform ordinary meals into extraordinary culinary experiences.
            </p>

            <p className="text-lg">
              We source only the{" "}
              <span className="font-semibold text-yellow-400">
                purest organic spices
              </span>
              , rigorously tested and{" "}
              <span className="font-semibold text-yellow-400">
                FSSAI certified
              </span>{" "}
              to meet the highest quality standards.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
              {[
                { name: "Turmeric", color: "bg-yellow-100 text-yellow-800" },
                { name: "Cumin", color: "bg-amber-100 text-amber-800" },
                { name: "Cardamom", color: "bg-yellow-100 text-yellow-800" },
                { name: "Cloves", color: "bg-red-100 text-red-800" },
                { name: "Pepper", color: "bg-gray-100 text-gray-800" },
                { name: "Cinnamon", color: "bg-orange-100 text-orange-800" },
              ].map((spice, i) => (
                <span
                  key={i}
                  className={`px-4 py-2 ${spice.color} rounded-lg text-sm font-medium shadow-sm border border-white`}
                >
                  {spice.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Founder */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Founder Image */}
        <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl group border-2 border-yellow-500">
          <img
            src={Sir}
            alt="Mr. Narendra Shukla"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-3xl font-bold text-white">
              Mr. Narendra Shukla
            </h3>
            <p className="text-white/90">Founder</p>
          </div>
        </div>

        {/* Founder Bio */}
        <div className="flex flex-col justify-center bg-[#022c22] p-8 rounded-2xl border-2 border-yellow-500">
          <div className="inline-flex items-center mb-4">
            <div className="w-10 h-1 bg-yellow-500 mr-3"></div>
            <span className="text-sm font-medium tracking-widest text-yellow-500 uppercase">
              Leadership
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Visionary
            </span>{" "}
            Behind Our Legacy
          </h2>

          <div className="space-y-5 text-gray-200">
            <p className="text-lg">
              With{" "}
              <span className="font-bold text-yellow-400">
                three decades of dedication
              </span>
              , Mr. Shukla transformed a humble vision into a nationally trusted
              brand through{" "}
              <span className="font-semibold text-yellow-400">
                uncompromising quality standards
              </span>{" "}
              and{" "}
              <span className="font-semibold text-yellow-400">
                authentic recipes
              </span>
              .
            </p>

            <p className="text-lg">
              His{" "}
              <span className="font-bold text-yellow-400">
                relentless pursuit of excellence
              </span>{" "}
              established MSJ as a benchmark for purity in the spice industry,
              while maintaining traditional{" "}
              <span className="font-semibold text-yellow-400">
                handcrafting techniques
              </span>
              .
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                {
                  value: "30+",
                  label: "Years Experience",
                  color: "from-yellow-500 to-yellow-600",
                },
                {
                  value: "100%",
                  label: "Natural Ingredients",
                  color: "from-yellow-600 to-yellow-700",
                },
                {
                  value: "50+",
                  label: "Spice Varieties",
                  color: "from-amber-500 to-amber-600",
                },
                {
                  value: "FSSAI",
                  label: "Certified Quality",
                  color: "from-yellow-500 to-yellow-600",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-br ${stat.color} p-4 rounded-xl text-white shadow-md`}
                >
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Mission & Vision */}
      {/* Section 3: Mission & Vision */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Mission */}
        <div className="bg-[#022c22] rounded-2xl overflow-hidden shadow-xl border-2 border-yellow-500 h-full flex flex-col">
          <div className="h-3 bg-gradient-to-r from-[#022c22] to-yellow-600"></div>
          <div className="p-8 flex-grow flex flex-col">
            <div className="flex items-center mb-6">
              <div className="w-10 h-1 bg-yellow-500 mr-3"></div>
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            </div>
            <div className="space-y-4 text-gray-200 flex-grow">
              <p className="text-lg">
                To{" "}
                <span className="font-bold text-yellow-400">
                  elevate everyday cooking
                </span>{" "}
                through spices that deliver{" "}
                <span className="font-semibold text-yellow-400">
                  unmatched authenticity
                </span>{" "}
                and{" "}
                <span className="font-semibold text-yellow-400">
                  culinary excellence
                </span>
                .
              </p>
              <p className="text-lg">
                We combine{" "}
                <span className="font-bold text-yellow-400">
                  traditional wisdom
                </span>{" "}
                with{" "}
                <span className="font-bold text-yellow-400">
                  modern quality standards
                </span>{" "}
                to create blends that honor India's rich spice heritage.
              </p>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="bg-[#022c22] rounded-2xl overflow-hidden shadow-xl border-2 border-yellow-500 h-full flex flex-col">
          <div className="h-3 bg-gradient-to-r from-yellow-500 to-yellow-600"></div>
          <div className="p-8 flex-grow flex flex-col">
            <div className="flex items-center mb-6">
              <div className="w-10 h-1 bg-yellow-500 mr-3"></div>
              <h2 className="text-3xl font-bold text-white">Our Vision</h2>
            </div>
            <div className="space-y-4 text-gray-200 flex-grow">
              <p className="text-lg">
                To become{" "}
                <span className="font-bold text-yellow-400">
                  global ambassadors
                </span>{" "}
                of authentic Indian flavors while{" "}
                <span className="font-semibold text-yellow-400">
                  sustainably sourcing
                </span>{" "}
                and{" "}
                <span className="font-semibold text-yellow-400">
                  innovating
                </span>{" "}
                traditional spice blends.
              </p>
              <p className="text-lg">
                We envision a world where every kitchen experiences the{" "}
                <span className="font-bold text-yellow-400">true essence</span>{" "}
                of India's spice heritage through our products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Core Values */}
      <section className="mb-16">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center mb-4 w-full">
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-yellow-700"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Pillars
            </span>{" "}
            of Our Excellence
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Fundamental principles that guide every aspect of our work,
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "🌿",
              title: "Natural Purity",
              description:
                "Absolutely no artificial additives or preservatives in any of our products.",
              color: "bg-[#022c22] border-yellow-500",
            },
            {
              icon: "🤝",
              title: "Ethical Sourcing",
              description:
                "Direct partnerships with Indian farmers ensuring fair trade practices.",
              color: "bg-[#022c22] border-yellow-500",
            },
            {
              icon: "🔬",
              title: "Lab Tested",
              description:
                "Rigorous quality and safety checks for every batch.",
              color: "bg-[#022c22] border-yellow-500",
            },
            {
              icon: "🧓",
              title: "Traditional Wisdom",
              description: "Generations-old authentic formulations preserved.",
              color: "bg-[#022c22] border-yellow-500",
            },
          ].map((value, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border-2 ${value.color} shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col`}
            >
              <div className="text-4xl mb-4 text-yellow-500">{value.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-300 flex-grow">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="bg-[#022c22] rounded-2xl p-10 md:p-12 text-center relative overflow-hidden border-2 border-yellow-500">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
          }}
        ></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to Elevate Your Culinary Experience?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
            Discover why chefs and home cooks alike trust MSJ Masale for
            authentic, premium quality spices that transform every dish.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/products" className="inline-block">
              <button className="bg-yellow-500 text-[#022c22] hover:bg-yellow-400 font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-300 text-lg hover:scale-105 transform">
                Explore Our Products
              </button>
            </a>
            <a href="/contact" className="inline-block">
              <button className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 font-semibold px-8 py-3 rounded-full transition-all duration-300 text-lg hover:scale-105 transform">
                Connect With Us
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
