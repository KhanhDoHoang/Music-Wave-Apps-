import React from 'react';
import LibrarySong from "./LibrarySong";

const Library = () => {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                <LibrarySong />
            </div>
        </div>
    )
}

export default Library;