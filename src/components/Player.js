import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
// import { playAudio } from "../Util";

const Player = ({ setSongs, setCurrentSong, songs, currentSong, isPlaying, setIsPlaying, audioRef, setSongInfo, songInfo }) => {
    //UseEffect
    useEffect(() => {
        //Add Active State
        const newSongs = songs.map((song) => {
            if (song.id === currentSong.id) {
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
        if ((isPlaying) && audioRef.current.paused) {
            audioRef.current.play()
        }
    }, [isPlaying, currentSong])//Changing when currentSong updates

    //Event Handler
    const playSongHandler = () => {
        // const audio = document.querySelector('audio')
        // console.log(audioRef.current);
        // audioRef.current.play();
        if (isPlaying) {
            //using useRef to reference
            audioRef.current.pause();
            //set the isPlaying to opposite to what it was
            setIsPlaying(!isPlaying);
        }
        else {
            audioRef.current.play();
            //set the isPlaying to opposite to what it was
            setIsPlaying(!isPlaying);
        }
    };

    //Time Formatting
    const getTime = (time) => {
        return `${Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)}`;
    }

    //Draggable track point
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value })
    };

    //Skipping Handler
    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === 'skip-forward') {
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        } else {
            //Need to have reuturn if do if else
            ((currentIndex - 1) % songs.length === -1) ? await setCurrentSong(songs[songs.length - 1]) : await setCurrentSong(songs[(currentIndex - 1)]);
        }
        if (isPlaying) audioRef.current.play();
    };

    //Add the styles
    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`,
    }

    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div style={{ background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})` }}
                    className="track">
                    <input
                        min={0}
                        max={songInfo.duration || 0}
                        onChange={dragHandler}
                        value={songInfo.currentTime}
                        type="range"
                    />
                    <div style={trackAnim} className="animate-track"></div>
                </div>
                <p>{getTime(songInfo.duration || 0.00)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler('skip-back')}
                    className="skip-back"
                    size="2x"
                    icon={faBackward} />
                <FontAwesomeIcon
                    onClick={playSongHandler}
                    className="play" size="2x"
                    icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler('skip-forward')}
                    className="skip-forward"
                    size="2x"
                    icon={faForward} />
            </div>

        </div >
    )
}

export default Player;