import React from 'react';
import classes from './TopBar.module.css';

const TopBar = (props) => {
   return (
       <div className= {classes.topbar}>
       <img className = {classes.img} src="https://i.imgur.com/qGnXXkb.png" alt="amazon-logo" />
       </div>
   )
}

export default TopBar;