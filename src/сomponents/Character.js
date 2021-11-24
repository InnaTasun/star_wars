import { useParams } from 'react-router';
import { useFetch } from '../hooks/useFetch';
import * as URLS from '../constants/urls';
import pics from '../images';
import Description from './Description';
import StarringNav from './StarringNav';
import styled from 'styled-components';
import * as DATA_TYPES  from "../constants/dataTypes"

function Character({ className }) {
  const { id } = useParams();
  const character = useFetch(URLS.PEOPLE_URL + '/' + id);

  if (!character.length) {
    return null;
  }

  return (
    <div className={className}>
      <div className='character'>
        <img
          className='character--logo'
          src={pics.people[id - 1]}
          alt={character[0].name}
        />
        <Description
          className='character--info'
          dataType={DATA_TYPES.PEOPLE}
          data={character[0]}
        />
      </div>
      <h3>MOVIES STARRING</h3>
      <StarringNav dataArr={character[0].films} />
    </div>
  );
}

const StyledCharacter = styled(Character)`
  .character {
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

export default StyledCharacter;
