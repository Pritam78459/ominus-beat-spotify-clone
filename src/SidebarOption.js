import React from 'react';
import './SidebarOption.css'
import {useDataLayerValue} from './DataLayer';

function SidebarOption({title, Icon, PLID}) {

    const [{current_playlist}, dispatch] = useDataLayerValue();
    

    function changePlaylist() {
        
        dispatch({
            type: "SET_CURRENT_PLAYLIST",
            current_playlist: PLID,
        })

        //console.log(PLID)
    }

    return (
        <div className="SidebarOption" >
            {Icon && <Icon className="SidebarOption_icon">{Icon}</Icon>}
            {Icon ? <h4>{title}</h4>:<p onClick={changePlaylist} >{title}</p>}
        </div>
    )
}

export default SidebarOption
