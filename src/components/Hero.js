import React, { useRef } from "react";
import SearchBar from "./SearchBar";

const Hero = () => {
  
    return (
      <section className="bg-blue-950">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                //https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80
                src="/heroImage.jpeg"
                className="absolute inset-0 h-full object-cover rounded-xl rounded-tl-md"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-6xl font-bold sm:text-4xl text-gray-100">
              Đặt lịch hẹn với bác sĩ gia đình ngay hôm nay
              </h2>

              <p className="mt-4 text-gray-300">
              Sức khỏe của bạn là ưu tiên hàng đầu. Chúng tôi cung cấp dịch vụ y tế tận nhà, giúp bạn tiếp cận bác sĩ chuyên môn mà không cần phải đi xa. Đặt lịch ngay để nhận tư vấn và chăm sóc sức khỏe chất lượng cao.
              </p>
              <br />
              <SearchBar />
              <br />  
              <button 
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                I need Doctor Now
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  
}
export default Hero;
