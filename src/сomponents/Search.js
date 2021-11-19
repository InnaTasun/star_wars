import { useRef, useState } from "react";
import searchImg from "../images/searchImg.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Search(props) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  function handleClick() {
    inputRef.current.value = "";
    setInputValue("");
  }

  return (
    <div className={`${props.className} search`}>
      <input
        className="search--input"
        ref={inputRef}
        type="search"
        placeholder="Search movie or character..."
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />

      <Link to={`/search/${inputValue}`} onClick={handleClick}>
        <img className="search--btn" src={searchImg} alt="lens" />
      </Link>
    </div>
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
