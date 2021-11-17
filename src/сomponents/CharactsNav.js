import ElemByUrl from "./ElemByUrl";
import styled from "styled-components";
import parseUrl from "../parseUrl";

function CharactsNav(props) {
  const dataArr = props.dataArr;

  const listItems = dataArr.map((characterUrl) => (
    <li className="characts-list--character" key={parseUrl(characterUrl).id}>
      <ElemByUrl url={characterUrl} mainProp="name" elemType="navImg" />
    </li>
  ));

  return <ul className={`${props.className} characts-list`}>{listItems}</ul>;
}

const StyledCharactsNav = styled(CharactsNav)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .characts-list {
    &--character {
      height: 200px;
      margin: 0.5rem;
      list-style-type: none;
    }
  }
`;

export default StyledCharactsNav;
