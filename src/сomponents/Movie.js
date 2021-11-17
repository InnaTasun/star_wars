import { useParams } from "react-router";
import { useFetch } from "../useFetch";
import * as urls from "../constants/urls";
import Pics from "../images";
import Description from "./Description";
import CharactsNav from "./CharactsNav";
import styled from "styled-components";

function Movie(props) {
  const params = useParams();
  const id = params.id;
  const movies = useFetch(urls.FILMS_URL + "/" + id);

  if (movies.length === 0) return <></>;

  return (
    <div className={props.className}>
      <div className="film">
        <img
          className="film--logo"
          src={Pics.films[id - 1]}
          alt={movies[0].title}
        />
        <Description className="film--info" dataType="films" data={movies[0]} />
      </div>

      <h3>CHARACTERS</h3>
      <CharactsNav dataType="people" dataArr={movies[0].characters} />
    </div>
  );
}

const StyledMovie = styled(Movie)`
  .film {
    display: flex;
    height: 500px;
    justify-content: start;
    flex-wrap: nowrap;
    margin: 10px 10px 40px 0;

    &--logo {
      height: 100%;
    }

    &--info {
      margin-left: 2rem;
      text-align: justify;
    }
  }
`;

export default StyledMovie;
