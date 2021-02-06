import React from 'react'
import './header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
function Header() {
  return (
    <div className="header">
      <IconButton>
      <PersonIcon fontSize="large" className="header__icon"/>
      </IconButton>
      <img src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png" 
      className="header__logo"
      alt=""/>
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon"/>
      </IconButton>
    </div>
  )
}

export default Header
