// import { library } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import LibrarySong from "./LibrarySong";

const Library = ({ libraryStatus, setSongs, songs, setCurrentSong, audioRef, isPlaying }) => {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''} `}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song =>
                    <LibrarySong
                        setSongs={setSongs}
                        audioRef={audioRef}
                        song={song}
                        songs={songs}
                        id={song.id}
                        setCurrentSong={setCurrentSong}
                        key={song.id}
                        isPlaying={isPlaying}
                    />
                )}
            </div>
        </div >
    )
}

export default Library;