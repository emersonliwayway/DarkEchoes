import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  // detailed information about selectes episode
  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p className="message">Please select an episode to learn more.</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h1>Episode {selectedEpisode.id}</h1>
        <h2 className="episodeTitle">{selectedEpisode.title}</h2>
        <p>{selectedEpisode.description}</p>
        <button
          onClick={() => {
            console.log("Watch Now");
          }}
        >
          Watch Now
        </button>
      </section>
    );
  }
  // list of episodes to select from
  function AllEpisodes() {
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

  // renders to page
  return (
    <>
      <header>
        <h1 className="appTitle" onClick={() => setSelectedEpisode(null)}>
          Dark Echoes
        </h1>
      </header>
      <main>
        <EpisodeDetails />
        <AllEpisodes />
      </main>
    </>
  );
}
