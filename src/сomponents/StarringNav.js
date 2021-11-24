import ElemByUrl from './ElemByUrl';
import styled from 'styled-components';
import parseUrl from '../parseUrl';

function StarringNav(props) {
  const { dataArr, className } = props;
  let listItems = [];

  if (dataArr) {
    listItems = dataArr.map((filmUrl) => (
      <li className='starring-list--film' key={parseUrl(filmUrl).id}>
        <ElemByUrl url={filmUrl} mainProp='title' elemType='navImg' />
      </li>
    ));
  }
  return <ul className={`${className} starring-list`}>{listItems}</ul>;
}

const StyledStarringNav = styled(StarringNav)`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;

  .starring-list {
    &--film {
      height: 290px;
      margin: 0.5rem;
      list-style-type: none;
      box-shadow: 7px 7px 7px rgba(0,0,0,0.5);
    }
  }
`;

export default StyledStarringNav;
