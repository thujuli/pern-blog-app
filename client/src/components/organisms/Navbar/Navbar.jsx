import "./navbar.css";
import searchIcon from "../../../assets/images/search-solid.svg";
import profileIcon from "../../../assets/images/person.jpg";
import SocialIcons from "../../molecules/SocialIcons/SocialIcons";
import { Link } from "react-router-dom";

const navbarMenus = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "about",
    link: "/about",
  },
  {
    name: "contact",
    link: "/contact",
  },
  {
    name: "write",
    link: "/write",
  },
  {
    name: "logout",
    link: "/logout",
  },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbarLeft">
        <SocialIcons />
      </div>
      <div className="navbarCenter">
        <ul className="navbarList">
          {navbarMenus.map((item, index) => (
            <li key={index} className="navbarListItem">
              <Link to={item.link} className="link">
                {item.name.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbarRight">
        <Link to="/settings">
          <img src={profileIcon} alt="Profile Icon" className="navbarProfile" />
        </Link>
        <img src={searchIcon} alt="Search Icon" className="navbarSearch" />
      </div>
    </nav>
  );
}
