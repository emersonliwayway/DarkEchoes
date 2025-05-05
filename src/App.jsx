import { useState } from "react";
import EpisodeDetails from "./components/EpisodeDetails";
import AllEpisodes from "./components/AllEpisodes";

export default function App() {
  const [selectedEpisode, setSelectedEpisode] = useState();

  // renders to page
  return (
    <>
      <header>
        <h1 className="appTitle" onClick={() => setSelectedEpisode(null)}>
          Dark Echoes
        </h1>
      </header>
      <main>
        <EpisodeDetails
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
        <AllEpisodes
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
      </main>
    </>
  );
}
