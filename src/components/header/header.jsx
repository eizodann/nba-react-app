import React from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import SideNav from '../header/sidenav/sidenav';

const Header = (props) => {
  const navBars = () => (
    <div className={style.bars}>
      <FontAwesome
        onClick={props.onOpenNav}
        style={{ color: "#dfdfdf", padding: "10x", cursor: "pointer" }}
        name="bars" size="2x"
      />
    </div>
  );
  const logo = () => (
    <Link to="/" className={style.logo}>
      <img src="/images/nba_logo.png" alt="nba logo" />
    </Link>
  );

  return (
    <header className={style.header}>
      <SideNav {...props}/>
      <div className={style.headerOpt}>
        {navBars()}
        {logo()}
      </div>
    </header>
  );
};

export default Header;
