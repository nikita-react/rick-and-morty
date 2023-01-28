import React, { useEffect } from "react";
import Location from "../Location";
import { RenderWrapper } from "./styled";
import Pagination from "../Pagination";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useQuery } from "@apollo/client";
import { GetLocationAndCount } from "../../queries/locations";
import { addLocationData } from "../../store/locationSlice";

const RenderLocations: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { loading, data, error } = useQuery(GetLocationAndCount, {
    variables: { id: id },
  });
  const { locationError, locationLoading, locationData } = useAppSelector(
    (state) => state.locations
  );

  useEffect(() => {
    if (data) {
      dispatch(
        addLocationData({
          loading,
          data: {
            location: data.location,
            count: data.locations.info.count,
          },
          error,
        })
      );
    }
  }, [id, data]);

  return (
    <>
      {locationLoading ? (
        <Loading />
      ) : error ? (
        <p>Sorry, please reload the page</p>
      ) : (
        <RenderWrapper>
          <Location />
          <Pagination currentPage={Number(id)} pages={locationData.count} />
        </RenderWrapper>
      )}
    </>
  );
};

export default RenderLocations;
