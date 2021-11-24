import ElemByUrl from './ElemByUrl';
import styled from 'styled-components';

function DescrInfoList(props) {
  const { dataArr, className } = props;
  let listItems;

  if (!dataArr || !dataArr.length) {
    listItems = 'n/a';
  } else {
    listItems = dataArr.map((itemUrl, index) => (
      <li className='info-list--info-item' key={index}>
        <ElemByUrl url={itemUrl} mainProp='name' addProp='model' />
        {index !== dataArr.length - 1 ? ', ' : ''}
      </li>
    ));
  }

  return <ul className={`${className} info-list`}>{listItems}</ul>;
}

const StyledDescrInfoList = styled(DescrInfoList)`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;

  .info-list {
    &--info-item {
      list-style-type: none;
      margin-right: 0.5rem;
    }
  }
`;

export default StyledDescrInfoList;
