import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  const itemPerPage = 6;
  const numberOfPage = Math.ceil(items.length / itemPerPage);

  const paginatedItems = [];
  for (let i = 0; i < numberOfPage; i++) {
    paginatedItems.push(items.slice(i * itemPerPage, (i + 1) * itemPerPage));
  }

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div>
      <Swiper
        cssMode={true}
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {paginatedItems.map((pageItems, index) => (
          <SwiperSlide key={index}>
            <div className="grid md:grid-cols-3 gap-10 pb-10">
              {pageItems.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;
