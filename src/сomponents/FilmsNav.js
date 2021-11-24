import ElemByUrl from './ElemByUrl';
import styled from 'styled-components';

function FilmsNav(props) {
  const { dataArr, className } = props;
  let listItems = [];

  if (dataArr) {
    listItems = dataArr.map((film) => (
      <li className='films-list--film' key={film.episode_id}>
        <ElemByUrl url={film.url} mainProp='title' elemType='navImg' />
      </li>
    ));
  }

  return <ul className={`${className} films-list`}>{listItems}</ul>;
}

const StyledFilmsNav = styled(FilmsNav)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .films-list {
    &--film {
      height: 290px;
      margin: 0.5rem;
      list-style-type: none;
      box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.5);
    }
  }
`;

export default StyledFilmsNav;
