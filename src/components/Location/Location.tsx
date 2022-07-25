import React from "react";
import { List, Item, Img } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { locationsState } from "../../atoms";
import { useRecoilValue } from "recoil";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Location: React.FC = () => {
  const { location } = useRecoilValue(locationsState);
  const residents: any[] = location?.residents;

  return (
    <List>
      <Item>name: {location?.name}</Item>
      <Item>type: {location?.type}</Item>
      <Item>dimension: {location?.dimension}</Item>
      <Item>
        residents:
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          style={{ padding: "20px 45px 35px" }}
          spaceBetween={45}
        >
          {residents &&
            residents.map(({ id, image }) => (
              <SwiperSlide key={id}>
                <Img src={image} alt="" />
              </SwiperSlide>
            ))}
        </Swiper>
      </Item>
    </List>
  );
};

export default Location;
