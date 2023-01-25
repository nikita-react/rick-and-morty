import React, { useEffect } from "react";
import Character from "../Character";
import { RenderWrapper } from "./styled";
import Pagination from "../Pagination";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { getAllCharactersThunk } from "../../store/charactersSlice";

interface charactersDataTypes {
  results?: any[];
  info?: {
    pages: number;
  };
}

const RenderCharacters: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { error, loading, charactersData } = useAppSelector(
    (state) => state.characters
  );

  const { results, info }: charactersDataTypes = charactersData;

  useEffect(() => {
    if (id) {
      dispatch(getAllCharactersThunk(id));
    }
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <p>Sorry, please reload the page</p>
      ) : (
        <>
          <RenderWrapper>
            {results &&
              results.map((result) => (
                <Character key={result.id} character={result} />
              ))}
          </RenderWrapper>
          <Pagination currentPage={Number(id)} pages={info?.pages} />
        </>
      )}
    </>
  );
};

export default RenderCharacters;
