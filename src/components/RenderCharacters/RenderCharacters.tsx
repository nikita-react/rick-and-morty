import React, { useEffect, useState } from "react";
import Character from "../Character";
import api from "../../api";
import { useRecoilState } from "recoil";
import { charactersState } from "../../atoms";
import { RenderWrapper } from "../../mainStyled";
import Pagination from "../Pagination";
import { useParams } from "react-router-dom";
import Loading from "../Loading";

const RenderCharacters: React.FC = () => {
  const { id } = useParams();
  const [characters, setCharacters] = useRecoilState(charactersState);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const { results, info }: { results: any[]; info: any } = characters;

  useEffect(() => {
    const getData = async () => {
      const data = await api.characters.getCharacters(pageNumber);
      setCharacters(data);
      setLoading(false);
    };
    if (id) {
      setPageNumber(Number(id));
      getData();
    } else {
      getData();
    }
  }, [pageNumber]);

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
          <Pagination
            currentPage={pageNumber}
            pages={info?.pages}
            setPageNumber={setPageNumber}
          />
        </>
      )}
    </>
  );
};

export default RenderCharacters;
