import { useFetch } from "../useFetch";
import parseUrl from "../parseUrl";
import { Link } from "react-router-dom";
import Pics from "../images";
import styled from "styled-components";

function ElemByUrl(props) {
  const { url, elemType, addProp } = props;
  let mainProp = props.mainProp;
  const elems = useFetch(url);
  const { id, dataType } = parseUrl(url);

  if (elems.length === 0) return <></>;

  if (!elems[0].hasOwnProperty(mainProp)) mainProp = addProp;

  if (elemType === "navImg") {
    return (
      <Link className={`${props.className} element`} to={`/${dataType}/${id}`}>
        <img
          className="element--img"
          src={Pics[dataType][id - 1]}
          alt={elems[0][mainProp]}
        />

        {dataType === "people" ? (
          <p className="element--label">{elems[0][mainProp]}</p>
        ) : (
          ""
        )}
      </Link>
    );
  } else {
    return (
      <span>
        {elems[0][mainProp]}
        {addProp && `(${elems[0][addProp]})`}
      </span>
    );
  }
}

const StyledElemByUrl = styled(ElemByUrl)`
  position: relative;

  .element {
    &--img {
      height: 100%;
    }

    &--label {
      position: absolute;
      padding: 1px;
      bottom: 10px;
      width: 100%;
      text-align: center;
      background-image: radial-gradient(black, transparent);
      color: white;
    }
  }
`;

export default StyledElemByUrl;
