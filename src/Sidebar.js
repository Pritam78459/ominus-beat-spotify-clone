import React from 'react';
import './Sidebar.css';
import title from './login_title.png'
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useDataLayerValue} from './DataLayer';
import SpotifyWebApi from 'spotify-web-api-js';



function Sidebar() {

    const [{playlists, discover_weekly}, dispatch] = useDataLayerValue();


   
    return (
        <div className="sidebar">
            <img className="sidebar_logo" src = {title} alt = "logo"></img>
            <SidebarOption Icon = {HomeIcon} title="Home"/>
            <SidebarOption Icon = {SearchIcon} title="Search"/>
            <SidebarOption Icon = {LibraryMusicIcon} title="Library"/>
            
            <br/>

            <strong className="sidebar_title" >Playlists</strong>
            <hr></hr>
            
            {playlists?.items?.map(playlist => (
                <SidebarOption PLID={playlist.uri.split(":")[2]} title={playlist.name}/>
            ))}
            

            
        </div>
    )
}

export default Sidebar;
