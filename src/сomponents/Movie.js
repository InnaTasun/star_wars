import { useParams } from 'react-router';
import { useFetch } from '../hooks/useFetch';
import * as URLS from '../constants/urls';
import pics from '../images';
import Description from './Description';
import CharactsNav from './CharactsNav';
import styled from 'styled-components';
import * as DATA_TYPES from '../constants/dataTypes';

function Movie({ className }) {
  const { id } = useParams();
  const movies = useFetch(URLS.FILMS_URL + '/' + id);

  if (!movies.length) {
    return null;
  }

  return (
    <div className={className}>
      <div className='film'>
        <img
          className='film--logo'
          src={pics.films[id - 1]}
          alt={movies[0].title}
        />
        <Description
          className='film--info'
          dataType={DATA_TYPES.FILMS}
          data={movies[0]}
        />
      </div>

      <h3>CHARACTERS</h3>
      <CharactsNav dataType='people' dataArr={movies[0].characters} />
    </div>
  );
}

const StyledMovie = styled(Movie)`
  .film {
    display: flex;
    height: 500px;
    justify-content: start;
    flex-wrap: nowrap;
    margin: 0 10px 40px 0;

    &--logo {
      height: 100%;
      box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.5);
    }

    &--info {
      margin-left: 2rem;
      text-align: justify;

      .bold{
        font-weight: bold;
      }
    }
  }
`;

export default StyledMovie;
