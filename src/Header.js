import React from 'react';
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./Header.css"
import { Link, useHistory } from 'react-router-dom';

function Header({backButton}) {
    const history = useHistory();
    return(
        <div className="header">
        {backButton ? (
            <IconButton onClick={() => history.replace(backButton)}>
            <ArrowBackIosIcon fontSize="large" className="header_icon"/>
            </IconButton>
        ):
    (
        <IconButton>
        <PersonIcon className="header_icon" fontSize="large" />
        </IconButton>
    )}
        
        <Link to="/"><img className="header_logo" src="https://i.dlpng.com/static/png/6184865-this-post-is-a-part-of-tinder-logo-transparent-background-hd-tinder-logo-png-840_771_preview.png" alt="tinder logo" / >
        </Link>
        <Link to="/chat"><IconButton><ForumIcon  className="header_icon" fontSize="large" /></IconButton>
        </Link>
        </div>
    )
}

export default Header;