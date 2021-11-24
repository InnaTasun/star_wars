import mainLogo from '../images/mainLogo.jpeg';
import FilmsNav from './FilmsNav';
import styled from 'styled-components';
import { useFetch } from '../hooks/useFetch';
import * as URLS from '../constants/urls';

function Main({ className }) {
  const movies = useFetch(URLS.FILMS_URL);

  return (
    <div className={className}>
      <div className='main-logo'>
        <img className='main-logo--img' src={mainLogo} alt='main logo' />
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
    box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.5);
    &--img {
      height: 100%;
    }
  }
`;

export default StyledMain;
