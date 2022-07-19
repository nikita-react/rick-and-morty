import React from "react";
import { List, Item } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface LocationTypes {
  location: {
    name: string;
    type: string;
    dimension: string;
    residents: [];
  };
}
const Location: React.FC<LocationTypes> = ({ location }) => {
  const { residents } = location;
  const arrayOfImages =
    residents && residents.map((resident: any) => resident.split("/").pop());

  return (
    <List>
      <Item>name: {location.name}</Item>
      <Item>type: {location.type}</Item>
      <Item>dimension: {location.dimension}</Item>
      <Item>
        residents:
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          style={{ padding: "20px 45px 35px" }}
        >
          {arrayOfImages &&
            arrayOfImages.map((id) => (
              <SwiperSlide key={id}>
                <img
                  src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}
                  alt=""
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </Item>
    </List>
  );
};

export default Location;
