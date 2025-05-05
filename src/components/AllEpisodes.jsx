import { useState } from "react";
import { episodeList } from "../data";

// list of episodes to select from
export default function AllEpisodes({ selectedEpisode, setSelectedEpisode }) {
  const [episodes] = useState(episodeList);
  return (
    <section className="list">
      <h2 className="title1" onClick={() => setSelectedEpisode(null)}>
        Episodes
      </h2>
      <ul className="list">
        {episodes.map((episode) => (
          <li
            key={episode.id}
            className="listItem"
            onClick={() => setSelectedEpisode(episode)}
          >
            {episode.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
