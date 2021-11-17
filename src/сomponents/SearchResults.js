import { useFetch } from "../useFetch";
import * as urls from "../constants/urls";
import { useParams } from "react-router";
import ElemByUrl from "./ElemByUrl";
import styled from "styled-components";

function SearchResults(props) {
  const params = useParams();
  const filmsResult = useFetch(`${urls.FILMS_URL}?search=${params.q}`);
  const peopleResult = useFetch(`${urls.PEOPLE_URL}?search=${params.q}`);
  const results = filmsResult.concat(peopleResult);

  const listItems = results.map((item, index) => (
    <li className="results-list--result" key={index}>
      <ElemByUrl
        url={item.url}
        mainProp="name"
        addProp="title"
        elemType="navImg"
      />
    </li>
  ));

  return (
    <section className={props.className}>
      <h2>SEARCH RESULTS</h2>
      <ul className="results-list">{listItems}</ul>
    </section>
  );
}

const StyledSearchResults = styled(SearchResults)`
  .results-list {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;

    &--result {
      height: 290px;
      margin: 0.5rem;
      list-style-type: none;
    }
  }
`;
export default StyledSearchResults;
