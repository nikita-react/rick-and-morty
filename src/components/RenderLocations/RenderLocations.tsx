import React, { useEffect } from "react";
import Location from "../Location";
import { RenderWrapper } from "./styled";
import Pagination from "../Pagination";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getAllLocationThunk } from "../../store/locationSlice";

interface locationsDataTypes {
  info?: {
    count: number;
  };
}

const RenderLocations: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { error, loading, locationData } = useAppSelector(
    (state) => state.locations
  );
  const { info }: locationsDataTypes = locationData;

  useEffect(() => {
    dispatch(getAllLocationThunk());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <p>Sorry, please reload the page</p>
      ) : (
        <RenderWrapper>
          <Location />
          <Pagination currentPage={Number(id)} pages={info?.count} />
        </RenderWrapper>
      )}
    </>
  );
};

export default RenderLocations;
