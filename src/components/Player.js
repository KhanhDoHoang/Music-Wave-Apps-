import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
    //Ref
    const audioRef = useRef(null);

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
        } else {
            audioRef.current.play();
            //set the isPlaying to opposite to what it was
            setIsPlaying(!isPlaying);
        }
    }

    return (
        <div className="player">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={faPlay} />
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
            <audio ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}

export default Player;