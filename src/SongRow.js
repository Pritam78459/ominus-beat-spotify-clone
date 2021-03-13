import React from 'react'
import './SongRow.css';
import {useDataLayerValue} from './DataLayer';



function SongRow({track}) {

    const [{current_track}, dispatch] = useDataLayerValue();

    function changeCurrentTrack() {
        dispatch({
            type:'SET_CURRENT_TRACK',
            current_track:track,
        })
        //console.log('clicked');
    }

    return (
        <div className="songRow" >
            <img className="songRow_album" src={track.album.images[0].url} alt=""/>
            <div className="songRow_info" onClick={changeCurrentTrack} >
                <h1>{track.name}</h1>
                <a >{track.artists.map((artist) => artist.name).join(", ")} -{" "} {track.album.name} </a>
                
            </div>
            
        </div>
    )
}

export default SongRow
