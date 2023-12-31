import "./navbar.css";
import searchIcon from "../../../assets/images/search-solid.svg";
import profileIcon from "../../../assets/images/person.jpg";
import SocialIcons from "../../molecules/SocialIcons/SocialIcons";

const navbarMenus = [
  {
    name: "home",
  },
  {
    name: "about",
  },
  {
    name: "contact",
  },
  {
    name: "write",
  },
  {
    name: "logout",
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
              {item.name.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbarRight">
        <img src={profileIcon} alt="Profile Icon" className="navbarProfile" />
        <img src={searchIcon} alt="Search Icon" className="navbarSearch" />
      </div>
    </nav>
  );
}
