import React, { useEffect } from "react";
import Character from "../Character";
import { useRecoilState } from "recoil";
import { charactersState } from "../../atoms";
import { RenderWrapper } from "./styled";
import Pagination from "../Pagination";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import { useQuery } from "@apollo/client";
import { GetAllCharacters } from "../../queries/characters";

const RenderCharacters: React.FC = () => {
  const { id } = useParams();

  const { loading, data, error } = useQuery(GetAllCharacters, {
    variables: { page: Number(id) },
  });
  const [characters, setCharacters] = useRecoilState(charactersState);
  const { results, info }: { results: any[]; info: any } = characters;
  useEffect(() => {
    if (data) {
      setCharacters(data.characters);
    }
  }, [loading]);

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
