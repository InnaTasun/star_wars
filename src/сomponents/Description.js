import * as DATA_TYPES from '../constants/dataTypes'
import ElemByUrl from './ElemByUrl';
import DescrInfoList from './DescrInfoList';
import FACTS from '../constants/facts';
import parseUrl from '../parseUrl';


export default function Description(props) {
  const { data, dataType, className} = props

  switch(dataType){
    case DATA_TYPES.FILMS:
      let factsItems = [];
      const facts = FACTS[parseUrl(data.url).id - 1];

      if(facts && facts.length){
        factsItems = facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ));
      }

      return (
          <section className={className}>
            <h2>{data.title}</h2> <br/>
            <p><span className="bold">Episode:</span> {data.episode_id}</p>
            <p><span className="bold">Release date:</span> {data.release_date}</p>
            <p><span className="bold">Director:</span> {data.director}</p>
            <p><span className="bold">Producer:</span> {data.producer}</p><br /> 
            <p><span className="bold">Opening crawl:</span><br /> {data.opening_crawl}</p><br /> 
            <aside><span className="bold">Interesting facts:</span><br />{factsItems}</aside> 
          </section>
      );

    case DATA_TYPES.PEOPLE:  
      return (
        <section className={className}>
          <h2>{data.name}</h2> <br/>
          <p><span className="bold">Gender:</span> {data.gender}</p>
          <p><span className="bold">Birth year:</span> {data.birth_year}</p>
          <p><span className="bold">Homeworld:</span> planet <ElemByUrl url={data.homeworld} mainProp='name' /></p>
          <p><span className="bold">Height:</span> {data.height}</p>
          <p><span className="bold">Mass:</span> {data.mass}</p>
          <p><span className="bold">Skin color:</span> {data.skin_color}</p>
          <p><span className="bold">Hair color:</span> {data.hair_color}</p>
          <p><span className="bold">Eye color:</span> {data.eye_color}</p><br /> 
          <div><span className="bold">Starships:</span>
            <DescrInfoList dataArr={data.starships}  />
          </div><br /> 
          <div><span className="bold">Vehicles:</span>
            <DescrInfoList dataArr={data.vehicles}  />
          </div>
        </section>
      );

    default:
      return null;
  } 
}