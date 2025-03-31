import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subheading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="Slider Image" />
          <h3 className="text-4xl uppercase text-center text-white -mt-16 pb-16">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Slider Image" />
          <h3 className="text-4xl uppercase text-center text-white -mt-16 pb-16">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Slider Image" />
          <h3 className="text-4xl uppercase text-center text-white -mt-16 pb-16">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="Slider Image" />
          <h3 className="text-4xl uppercase text-center text-white -mt-16 pb-16">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="Slider Image" />
          <h3 className="text-4xl uppercase text-center text-white -mt-16 pb-16">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
