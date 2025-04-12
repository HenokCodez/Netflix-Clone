import React from "react";
import { useEffect, useState } from "react";
import HeaderCss from "../Header/Header.module.css";
import Logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${HeaderCss.container} ${isScrolled ? HeaderCss.scrolled : HeaderCss.transparent}`}>
      <div className={HeaderCss.left}>
        <img src={Logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>TVShows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>MyList</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className={HeaderCss.right}>
        <ul>
          <li>
            <SearchIcon className={HeaderCss.icon} />
          </li>
          <li>
            <NotificationsIcon className={HeaderCss.icon} />
          </li>
          <li>
            <AccountBoxIcon className={HeaderCss.icon} />
          </li>
          <li>
            <ArrowDropDownIcon className={HeaderCss.icon} />
          </li>
        </ul>
      </div>
    </div>
  );
}
