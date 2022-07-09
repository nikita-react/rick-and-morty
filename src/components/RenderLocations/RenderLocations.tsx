import React, { useEffect } from "react";
import api from "../../api";
import { useRecoilState } from "recoil";
import { locationsState } from "../../atoms";
import { RenderWrapper } from "../../mainStyled";

const RenderLocations: React.FC = () => {
  const [locations, setLocations] = useRecoilState(locationsState);

  useEffect(() => {
    const getData = async () => {
      const data = await api.locations.getLocations();
      const { results } = data;
      setLocations(results);
    };
    getData();
  }, []);

  return <RenderWrapper>location</RenderWrapper>;
};

export default RenderLocations;
