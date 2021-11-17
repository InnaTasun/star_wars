import ElemByUrl from "./ElemByUrl";
import styled from "styled-components";
import parseUrl from "../parseUrl";

function StarringNav(props) {
  const dataArr = props.dataArr;

  const listItems = dataArr.map((filmUrl) => (
    <li className="starring-list--film" key={parseUrl(filmUrl).id}>
      <ElemByUrl url={filmUrl} mainProp="title" elemType="navImg" />
    </li>
  ));

  return <ul className={`${props.className} starring-list`}>{listItems}</ul>;
}

const StyledStarringNav = styled(StarringNav)`
  display: flex;
  justify-content: start;

  .starring-list {
    &--film {
      height: 290px;
      margin: 0.5rem;
      list-style-type: none;
    }
  }
`;

export default StyledStarringNav;
