import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid , Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay"
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
    return (
        <div className="footer" >
            <div className="footer__left" >
                <img
                className="footer_albumLogo"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwlJQEuRqJp8%2Fmaxresdefault.jpg&f=1&nofb=1" alt=""/>
                <div className="footer__songInfo">
                <h4>No song is playing</h4>
                <p>...</p>
                </div>
            </div>
            <div className="footer__center" >
                <ShuffleIcon className="footer__color"/>
                <SkipPreviousIcon className="footer__icon"/>
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
                <SkipNextIcon className="footer__icon"/>
                <RepeatIcon className="footer__color"/>
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon/>
                </Grid>
                <Grid item>
                    <VolumeDownIcon/>
                </Grid>
                <Grid item xs>
                    <Slider></Slider>
                </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
