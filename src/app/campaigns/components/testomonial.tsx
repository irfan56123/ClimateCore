"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import customer1 from "../customer/customer1.png";
import st1 from "../customer/st1.jpg";
import st2 from "../customer/st2.jpg";
import st3 from "../customer/st3.jpg";

interface Testimonial {
  id: number;
  stars: number;
  quote: string;
  name: string;
  role?: string;
  image: StaticImageData;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    stars: 5,
    quote:
      "I can hear well and quickly reply to others. I’m comfortable in my own community as well as at home. I’m 100% satisfied.",
    name: "Mrs. Gupta",
    image: st1,
  },
  {
    id: 2,
    stars: 5,
    quote:
      "There’s a big difference now. Khushi responds when we call out to her. I’m extremely happy for my daughter and 100% satisfied.",
    name: "Baby Khushi",
    role: "Father: Mr. Honey",
    image: st2,
  },
  {
    id: 3,
    stars: 5,
    quote:
      "These HVACs have not just transformed my mother's life; they've also deeply influenced our entire family.",
    name: "Piyush Jain",
    image: st3,
  },
];

const CustomerReviews: React.FC = () => {
  return (
    <div className="bg-orange-50 py-8 px-4">
      {/* Header Section */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
        Trusted by 4,00,000+ Customers
      </h2>

      {/* Banner Image */}
      <div className="mb-8 w-full relative h-64 sm:h-80 md:h-96 lg:h-[400px]">
        <Image
          src={customer1}
          alt="Customer Reviews Banner"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"
          >
            {/* Stars */}
            <div className="flex items-center text-yellow-500 mb-4">
              {Array.from({ length: testimonial.stars }).map((_, i) => (
                <span key={i} className="text-xl">
                  ★
                </span>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-gray-700 mb-4 flex-1">
              <p className="text-lg italic">“{testimonial.quote}”</p>
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3 mt-4">
              <div className="w-12 h-12 relative rounded-full overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                {testimonial.role && (
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
