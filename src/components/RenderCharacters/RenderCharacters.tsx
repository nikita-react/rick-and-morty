import React, { useEffect, useState } from "react";
import Character from "../Character";
import api from "../../api";
import { useRecoilState } from "recoil";
import { charactersState } from "../../atoms";
import { RenderWrapper } from "../../mainStyled";
import Pagination from "../Pagination";

const RenderCharacters: React.FC = () => {
  const [characters, setCharacters] = useRecoilState(charactersState);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { results, info }: { results: any[]; info: any } = characters;

  useEffect(() => {
    const getData = async () => {
      const data = await api.characters.getCharacters(pageNumber);
      setCharacters(data);
    };
    getData();
  }, [pageNumber]);

  return (
    <>
      <RenderWrapper>
        {results &&
          results.map((result) => (
            <Character key={result.id} character={result} />
          ))}
      </RenderWrapper>
      <Pagination
        pages={info?.pages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </>
  );
};

export default RenderCharacters;
