import React from 'react';
// import { playAudio } from "../Util";

const LibrarySong = ({ setSongs, id, songs, song, setCurrentSong, audioRef, isPlaying }) => {
    const songSelectHandler = async () => {
        //Old way comparing between clicked song and song in State
        // const selectedSong = songs.filter((state) => state.id === id);
        // setCurrentSong(selectedSong[0]);

        //Passed down the current song from Library
        await setCurrentSong(song);
        //Add Active State
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,
                }
            } else {
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(newSongs);
        //Check song plays or not
        if (isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then((audio) => {
                    audioRef.current.play();
                })
            }
        }
        // playAudio(isPlaying, audioRef);
    };
    return (
        <div
            onClick={songSelectHandler}
            className={`library-song ${song.active ? 'selected' : ""}`}>
            <img src={song.cover} alt={song.name}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;