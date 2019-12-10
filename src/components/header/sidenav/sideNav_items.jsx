import React from 'react';
import style from './sideNav.module.css';

import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";

const SideNavItems = () => {
    return (
        <div className={style.option}>
            <Link to="/">
            <FontAwesome name="home">Home</FontAwesome>
            </Link>
        </div>
    );
};

export default SideNavItems;