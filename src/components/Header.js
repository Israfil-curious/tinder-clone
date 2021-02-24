import React from 'react';
import "./Header.css";

import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core/'
import ForumIcon from '@material-ui/icons/Forum';

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>
            <img
                className="header_logo"
                src="https://i.pinimg.com/originals/d4/d8/82/d4d882dccd11187b7980ada01a465d48.png"
                alt="tinder_logo"
            />
            <IconButton>
                <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>
            
        </div>
    );
};

export default Header;