import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRef } from "react";
import TestimonialItem from "./testimonialItem";

export default function Testimonial() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-400 py-16">
      <div className="container mx-auto max-w-[1344px]">
        <div className="px-5 sm:px-10">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{ clickable: true }}
            className="relative"
          >
            <SwiperSlide>
              <TestimonialItem
                name="John Doe"
                title="Founder, Company Name"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialItem
                name="Jane Smith"
                title="CEO, Another Company"
                content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </SwiperSlide>
            {/* Add more slides as needed */}
            <div className="absolute bottom-0 right-0 sm:right-10 z-10 flex items-center gap-6">
              <button
                className="testimonial-button prev"
                ref={navigationPrevRef}
              >
                <img
                  className="w-4 h-8 object-cover"
                  src="/arrow-left.svg"
                  alt="arrow"
                />
              </button>
              <button
                className="testimonial-button next"
                ref={navigationNextRef}
              >
                <img
                  className="w-4 h-8 object-cover"
                  src="/arrow-right.svg"
                  alt="arrow"
                />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
