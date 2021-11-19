import mainLogo from "../images/mainLogo.jpeg";
import FilmsNav from "./FilmsNav";
import styled from "styled-components";
import { useFetch } from "../useFetch";
import * as urls from "../constants/urls";

function Main(props) {
  const movies = useFetch(urls.FILMS_URL);

  return (
    <div className={props.className}>
      <div className="main-logo">
        <img className="main-logo--img" src={mainLogo} alt="main logo" />
      </div>
      <h3>MOVIES</h3>
      <FilmsNav dataArr={movies} />
      <br />
    </div>
  );
}

const StyledMain = styled(Main)`
  .main-logo {
    height: 400px;
    background-color: black;
    text-align: center;
    margin-bottom: 40px;
    &--img {
      height: 100%;
    }
  }
`;

export default StyledMain;
