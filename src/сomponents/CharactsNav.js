import ElemByUrl from './ElemByUrl';
import styled from 'styled-components';
import parseUrl from '../parseUrl';

function CharactsNav(props) {
  const { dataArr, className } = props;
  let listItems = [];

  if (dataArr && dataArr.length) {
    listItems = dataArr.map((characterUrl) => (
      <li className='characts-list--character' key={parseUrl(characterUrl).id}>
        <ElemByUrl url={characterUrl} mainProp='name' elemType='navImg' />
      </li>
    ));
  }
  return <ul className={`${className} characts-list`}>{listItems}</ul>;
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
      box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.5);
    }
  }
`;

export default StyledCharactsNav;
