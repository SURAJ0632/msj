import React from "react";
import { Link } from "react-router-dom";
import GaramMasala from "../assets/packets/11.png";
import SambharMasala from "../assets/packets/12.png";
import Biriyani from "../assets/packets/8.png";
import Kashmiri from "../assets/packets/14.png";
import ChatMasala from "../assets/packets/4.png";
import pavBhaji from "../assets/packets/3.png";
import CholeMasale from "../assets/packets/2.png";
import SabziMasala from "../assets/packets/9.png";
import ChaiMasala from "../assets/packets/6.png";
import AaloDum from "../assets/packets/5.png";
import turmericPowder from "../assets/packets/18.png";
import Coriander from "../assets/packets/7.png";
import JeeraPowder from "../assets/packets/17.png";
import blackPepper from "../assets/packets/10.png";
import Shawarma from "../assets/packets/1.png";
import Arabic from "../assets/packets/13.png";
import Ramadan from "../assets/packets/15.png";
import smokedPaparika from "../assets/packets/16.png";

const packagingOptions = [
  "1gm", "7gm", "50gm", "100gm", 
  "250gm", "500gm", "1kg", "2kg", 
  "5kg", "10kg"
];

const products = [
  { id: 1, name: "Garam Masala", image: GaramMasala },
  { id: 12, name: "Coriander Powder", image: Coriander },
  { id: 13, name: "Jeera Powder", image: JeeraPowder },
  { id: 4, name: "Kashmiri Chilli", image: Kashmiri },
  { id: 10, name: "Aloo Dum Masala", image: AaloDum },
  { id: 8, name: "Sabji Masala", image: SabziMasala },
  { id: 7, name: "Chole Masala", image: CholeMasale },
  { id: 2, name: "Sambhar Masala", image: SambharMasala },
  { id: 3, name: "Biryani Masala", image: Biriyani },
  { id: 5, name: "Chaat Masala", image: ChatMasala },
  { id: 6, name: "Pav Bhaji Masala", image: pavBhaji },
  { id: 15, name: "Shawarma Masala", image: Shawarma },
  { id: 17, name: "Ramadan Iftar Blend", image: Ramadan },
  { id: 16, name: "Arabic Seven Spices", image: Arabic },
  { id: 18, name: "Smoked Paprika", image: smokedPaparika },
  { id: 11, name: "Turmeric Powder", image: turmericPowder },
  { id: 14, name: "Black Pepper", image: blackPepper },
  { id: 9, name: "Chai Masala", image: ChaiMasala },
];

export default function Products() {
  return (
    <div
      className="min-h-screen bg-green-900 py-20 px-4 sm:px-6 lg:px-8 mt-20"
      style={{ fontFamily: "'Work Sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
            <span className="mx-4 text-sm font-medium tracking-widest text-yellow-400 uppercase">
              Premium Spices
            </span>
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Discover Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Premium
            </span>{" "}
            Collection
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Handcrafted spice blends available in various packaging options
          </p>
        </div>

        {/* Packaging Options Info */}
        <div className="mb-12 bg-green-800/50 rounded-xl p-6 border border-yellow-500/30">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4 text-center">
            Available Packaging Options
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {packagingOptions.map((size) => (
              <span 
                key={size}
                className="px-4 py-2 bg-green-700/50 text-yellow-100 rounded-full border border-yellow-500/30 text-sm"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-green-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-green-700"
            >
              {/* Product Image Container */}
              <div className="relative h-64 w-full flex items-center justify-center bg-green-900 p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {product.name}
                </h3>
                
                {/* Packaging Options */}
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-yellow-400 mb-2">
                    Available Sizes:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {packagingOptions.slice(0, 3).map((size) => (
                      <span 
                        key={size}
                        className="px-3 py-1 bg-green-700/30 text-yellow-100 rounded-full text-xs border border-yellow-500/20"
                      >
                        {size}
                      </span>
                    ))}
                    {packagingOptions.length > 3 && (
                      <span className="px-3 py-1 bg-green-900/50 text-yellow-100 rounded-full text-xs border border-yellow-500/20">
                        +{packagingOptions.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-2xl p-10 shadow-xl">
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              Can't Find What You Need?
            </h2>
            <p className="text-green-900/90 mb-8 max-w-2xl mx-auto">
              We offer custom packaging solutions from 1gm to 10kg bulk orders
            </p>
            <Link to="/contact">
              <button className="bg-green-900 text-white hover:bg-green-800 font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 border border-yellow-400">
                Request Custom Packaging
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}