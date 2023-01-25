import React, { useEffect } from "react";
import Location from "../Location";
import { RenderWrapper } from "./styled";
import Pagination from "../Pagination";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getAllLocationsThunk } from "../../store/locationSlice";

const RenderLocations: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { locationData, loading, error } = useAppSelector(
    (state) => state.locations
  );

  useEffect(() => {
    if (id) {
      dispatch(getAllLocationsThunk(id));
    }
  }, [dispatch]);

  return (
    // <>
    //   {loading ? (
    //     <Loading />
    //   ) : error ? (
    //     <p>Sorry, please reload the page</p>
    //   ) : (
    //     <RenderWrapper>
    //       <Location />
    //       <Pagination currentPage={Number(id)} pages={locationData.count} />
    //     </RenderWrapper>
    //   )}
    // </>
  );
};

export default RenderLocations;
