import React, { useEffect, useState } from "react";
import Character from "../Character";
import api from "../../api";
import { useRecoilState } from "recoil";
import { charactersState } from "../../atoms";
import { RenderWrapper } from "./styled";
import Pagination from "../Pagination";
import { useParams } from "react-router-dom";
import Loading from "../Loading";

const RenderCharacters: React.FC = () => {
  const { id } = useParams();

  const [characters, setCharacters] = useRecoilState(charactersState);
  const [loading, setLoading] = useState(true);
  const { results, info }: { results: any[]; info: any } = characters;

  useEffect(() => {
    const getData = async () => {
      const data = await api.characters.getCharacters(id);
      setCharacters(data);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
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
