import React, { useEffect } from "react";
import { List, Item, Img, Text } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { LinkStyled } from "../../mainStyled";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useAppSelector, useAppDispatch } from "../../hooks";
// import { getLocationThunk } from "../../store/locationSlice";
import { useParams } from "react-router-dom";

type oneLocationDataTypes = {
  name: string;
  type: string;
  dimension: string;
  residents: string[];
};

const Location: React.FC = () => {
  const { id } = useParams();
  const themeState = useAppSelector((state) => state.theme.default);
  const { location } = useAppSelector((state) => state.locations.locationData);
  const residents: any[] = location.residents;

  return (
    <List>
      <Item themeState={themeState}>name: {location.name}</Item>
      <Item themeState={themeState}>type: {location.type}</Item>
      <Item themeState={themeState}>dimension: {location.dimension}</Item>
      <Item themeState={themeState}>
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
            residents.map(({ id, image, name }) => (
              <SwiperSlide key={id}>
                <LinkStyled to={`/character/${id}`}>
                  <Img src={image} alt="" />
                  <Text themeState={themeState}>{name}</Text>
                </LinkStyled>
              </SwiperSlide>
            ))}
        </Swiper>
      </Item>
    </List>
  );
};

export default Location;
