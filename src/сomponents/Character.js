import { useParams } from "react-router";
import { useFetch } from "../useFetch";
import * as urls from "../constants/urls";
import Pics from "../images";
import Description from "./Description";
import StarringNav from "./StarringNav";
import styled from "styled-components";

function Character(props) {
  const params = useParams();
  const id = params.id;
  const character = useFetch(urls.PEOPLE_URL + "/" + id);

  if (character.length === 0) return <></>;

  return (
    <div className={props.className}>
      <div className="character">
        <img
          className="character--logo"
          src={Pics.people[id - 1]}
          alt={character[0].name}
        />
        <Description
          className="character--info"
          dataType="people"
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

export default StyledCharacter;
