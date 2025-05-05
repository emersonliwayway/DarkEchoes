// detailed information about selectes episode
export default function EpisodeDetails({ selectedEpisode }) {
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
