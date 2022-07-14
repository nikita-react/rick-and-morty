import React, { useEffect, useState } from "react";
import api from "../../api";
import { useRecoilState } from "recoil";
import { locationsState } from "../../atoms";
import Location from "../Location";
import { RenderWrapper } from "./styled";

const RenderLocations: React.FC = () => {
  const [location, setLocation] = useRecoilState(locationsState);
  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    const getData = async () => {
      const data = await api.locations.getLocation(pageNumber);

      setLocation(data);
    };
    getData();
  }, []);

  return (
    <RenderWrapper>
      <Location location={location} />
    </RenderWrapper>
  );
};

export default RenderLocations;
