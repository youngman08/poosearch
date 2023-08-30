import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import header_logo from "../images/Myearth2.png";
import LoginRegDialog from "../pages/loginReg";
import "../styles/basic.css";
import "../styles/header.css";
import { AppContext } from "./contex";
const Header = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const handleDarkModeToggle = (event, newMode) => {
    setDarkMode(newMode);
  };
  const { open, handleOpenLogin, handlePass, handleClose } =
    useContext(AppContext);
  return (
    <>
      <div className="mheader">
        <div className="header-item1">
          <img className="header-logo" src={header_logo} alt="" />

          <div className="dropdownMenu">
            <a id="menuInDayMood" className="firstLink">
              Menu
            </a>
            <div className="dropdown-content">
              <a id="ContactUsInDayMood" className="firstLink" href="#">
                Contact Us
              </a>
              <a id="F&QInDayMood" className="firstLink" href="#">
                F&Q
              </a>
              <a id="Packages&PricesInDayMood" className="firstLink" href="#">
                Packages&Prices
              </a>
            </div>
          </div>
        </div>
        <div className="header-item2">
          <Link
            to="#"
            id="SigninInDayMood"
            className="firstLink"
            onClick={handleOpenLogin}
          >
            Signin
          </Link>
          <Link to="/bookmarks" id="BookmarksInDayMood" className="firstLink">
            Bookmarks
          </Link>
          <ToggleButtonGroup
            value={darkMode}
            exclusive
            onChange={handleDarkModeToggle}
            aria-label="dark mode toggle"
          >
            <ToggleButton
              value={false}
              aria-label="light mode"
              className="header-icon"
            >
              <Brightness7Icon style={{ color: "white" }} />
            </ToggleButton>
            <ToggleButton
              value={true}
              aria-label="dark mode"
              className="header-icon"
            >
              <Brightness4Icon style={{ color: "white" }} />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div className="mobile-menu ">
        <span className="mobile-menu2">
          <p className="KNp1">KN</p>
          <img className="header-logoResponsive" src={header_logo} alt="" />
          <p className="ledjeographyp2">WLEDGEOGRAPHY</p>
        </span>
        <MenuIcon />
      </div>
      <LoginRegDialog />
    </>
  );
};

export default Header;
