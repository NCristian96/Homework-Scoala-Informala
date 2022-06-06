import { useState, useEffect } from "react";
import showChars from "./ShowChars";

const Episodes = () => {
  const [episodes, setEpisode] = useState([]);
  const getEpisodes = async () => {
    const res = await fetch(`https://rickandmortyapi.com/api/episode`);
    return res.json();
  };
  useEffect(() => {
    getEpisodes().then(res => {
      setEpisode(res.results);
      // console.log(res.results);
    });
  }, []);
  return episodes.map(elem => {
    return (
      <div key={elem.id} className="content-div">
        <div>Episode name:{elem.name}</div>
        <div>Air date:{elem.air_date}</div>
        <div>Episode:{elem.episode}</div>
        <button className="button-design" onClick={() => showChars(elem.characters)}>
          View Characters
        </button>
      </div>
    );
  });
};

export default Episodes;
