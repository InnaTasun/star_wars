import * as dataTypes from "../constants/dataTypes"
import ElemByUrl from "./ElemByUrl";
import DescrInfoList from "./DescrInfoList";
import factsArr from "../constants/facts";
import parseUrl from "../parseUrl";


export default function Description(props) {
  const {data,dataType} = props

  switch(dataType){
    case dataTypes.FILMS:
      const facts = factsArr[parseUrl(data.url).id - 1]
      const factsItems = facts.map((fact, index) => (
        <li key={index}>{fact}</li>
      ));

      return (
          <section className={props.className}>
            <h2>{data.title}</h2> <br/>
            <p><b>Episode:</b> {data.episode_id}</p>
            <p><b>Release date:</b> {data.release_date}</p>
            <p><b>Director:</b> {data.director}</p>
            <p><b>Producer:</b> {data.producer}</p><br /> 
            <p><b>Opening crawl:</b><br /> {data.opening_crawl}</p><br /> 
            <aside><b>Interesting facts:</b><br />{factsItems}</aside> 
          </section>
      );

    case dataTypes.PEOPLE:  
      return (
        <section className={props.className}>
          <h2>{data.name}</h2> <br/>
          <p><b>Gender:</b> {data.gender}</p>
          <p><b>Birth year:</b> {data.birth_year}</p>
          <p><b>Homeworld:</b> planet <ElemByUrl url={data.homeworld} mainProp="name" /></p>
          <p><b>Height:</b> {data.height}</p>
          <p><b>Mass:</b> {data.mass}</p>
          <p><b>Skin color:</b> {data.skin_color}</p>
          <p><b>Hair color:</b> {data.hair_color}</p>
          <p><b>Eye color:</b> {data.eye_color}</p><br /> 
          <div><b>Starships:</b>
            <DescrInfoList  dataArr={data.starships}  />
          </div><br /> 
          <div><b>Vehicles:</b>
            <DescrInfoList  dataArr={data.vehicles}  />
          </div>
        </section>
      );

    default:
      return <></>
  } 
}