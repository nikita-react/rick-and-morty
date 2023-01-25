import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { locationsState } from "../../atoms";
import Location from "../Location";
import { RenderWrapper } from "./styled";
import Pagination from "../Pagination";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import { useQuery } from "@apollo/client";
import { GetLocationAndCount } from "../../queries/locations";

const RenderLocations: React.FC = () => {
  const { id } = useParams();
  // const { loading, data, error } = useQuery(GetLocationAndCount, {
  //   variables: { id: id },
  // });
  // const [locationData, setLocationData] = useRecoilState(locationsState);

  useEffect(() => {
    // if (data) {
    // setLocationData({
    //   location: data.location,
    //   count: data.locations.info.count,
    // });
    // }
  }, []);

  return (
    <>
      {/* {loading ? (
        <Loading />
      ) : error ? (
        <p>Sorry, please reload the page</p>
      ) : (
        <RenderWrapper>
          <Location />
          <Pagination currentPage={Number(id)} pages={locationData.count} />
        </RenderWrapper>
      )} */}
    </>
  );
};

export default RenderLocations;
