import React from 'react';

const LibrarySong = ({ song, setCurrentSong, songs, id }) => {
    const songSelectHandler = () => {
        // const selectedSong = songs.filter((state) => state.id === id);
        // setCurrentSong(selectedSong[0]);

        //Passed down the current song from Library
        setCurrentSong(song);
    }
    return (
        <div onClick={songSelectHandler} className="library-song">
            <img src={song.cover} alt={song.name}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;