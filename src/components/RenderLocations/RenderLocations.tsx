import React, { useEffect, useState } from "react";
import api from "../../api";
import { useRecoilState } from "recoil";
import { locationsState } from "../../atoms";
import Location from "../Location";
import { RenderWrapper } from "./styled";
import Pagination from "../Pagination";
import { useParams } from "react-router-dom";
import Loading from "../Loading";

const RenderLocations: React.FC = () => {
  const { id } = useParams();

  const [location, setLocation] = useRecoilState(locationsState);
  const [pages, setPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const data = await api.locations.getOneLocation(id);
      const { info } = await api.locations.getLocations();

      setLocation(data);
      setPages(info.count);
      setLoading(false);
    };
    getData();
  }, []);
  console.log(id);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <RenderWrapper>
          <Location location={location} />
          <Pagination currentPage={Number(id)} pages={pages} />
        </RenderWrapper>
      )}
    </>
  );
};

export default RenderLocations;
