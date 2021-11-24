import { useRef, useState } from 'react';
import searchImg from '../images/searchImg.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Search( props) {
  const { className } = props
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  function onChange(event) {
    setInputValue(event.target.value);
  }

  function onClick() {
    props.onChange();
    inputRef.current.value = '';
    setInputValue('');
  }
  
  return (
    <form className={`${className} search`} action={`/search/${inputValue}`}>
      <input
        className='search--input'
        ref={inputRef}
        type='search'
        placeholder='Search movie or character...'
        value={inputValue}
        onChange={onChange}
      />

      <Link to={`/search/${inputValue}`} onClick={onClick}>
        <img className='search--btn' src={searchImg} alt='lens' />
      </Link>
    </form>
  );
}

const StyledSearch = styled(Search)`
  .search {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    &--input {
      color: dimgrey;
      border-top: none;
      border-left: none;
      border-right: none;
      width: 250px;
      padding-left: 1rem;
      padding-right: 1rem;
      &:focus {
        outline: none;
      }
    }
    &--btn {
      height: 70%;
    }
  }
`;

export default StyledSearch;
