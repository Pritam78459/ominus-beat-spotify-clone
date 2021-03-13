import React from 'react';
import './SidebarOption.css'
import {useDataLayerValue} from './DataLayer';
import {getPlaylist} from './App';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify =  new SpotifyWebApi();

function SidebarOption({title, Icon, PLID}) {

    const [{current_playlist, token}, dispatch] = useDataLayerValue();

    spotify.setAccessToken(token);
    

    function changePlaylist() {
        
        spotify.getPlaylist(PLID).then(response => {
            console.log(PLID);
            dispatch({
              type: "SET_DISCOVER_WEEKLY",
              discover_weekly: response,
            });
          })

        
    }

    return (
        <div className="SidebarOption" >
            {Icon && <Icon className="SidebarOption_icon">{Icon}</Icon>}
            {Icon ? <h4>{title}</h4>:<p onClick={changePlaylist} >{title}</p>}
        </div>
    )
}

export default SidebarOption
