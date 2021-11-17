import ElemByUrl from "./ElemByUrl";
import styled from "styled-components";

function FilmsNav(props) {
  const dataArr = props.dataArr;

  const listItems = dataArr.map((film) => (
    <li className="films-list--film" key={film.episode_id}>
      <ElemByUrl url={film.url} mainProp="title" elemType="navImg" />
    </li>
  ));

  return <ul className={`${props.className} films-list`}>{listItems}</ul>;
}

const StyledFilmsNav = styled(FilmsNav)`
  display: flex;
  justify-content: space-around;

  .films-list {
    &--film {
      height: 290px;
      margin: 0.5rem;
      list-style-type: none;
    }
  }
`;

export default StyledFilmsNav;
