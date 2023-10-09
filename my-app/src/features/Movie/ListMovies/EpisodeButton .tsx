import React from 'react';

interface TypeOfEpisodeButton{
index:any;
selectedEpisode:any;
handleEpisodeChange:any;
}
const EpisodeButton = React.memo(({ index, selectedEpisode, handleEpisodeChange }:TypeOfEpisodeButton) => {
  return (
    <button
      className={`ml-2 py-1 px-2 rounded-full hover:bg-gray-200 ${selectedEpisode === index + 1 ? "bg-gray-200" : ""}`}
      onClick={() => handleEpisodeChange(index + 1)}
    >
      {`Tập ${index + 1}`}
    </button>
  );
});

export default EpisodeButton;
