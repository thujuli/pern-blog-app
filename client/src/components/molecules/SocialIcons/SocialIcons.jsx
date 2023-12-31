import "./socialIcons.css";
import facebookIcon from "../../../assets/images/square-facebook.svg";
import instagramIcon from "../../../assets/images/square-instagram.svg";
import pinterestIcon from "../../../assets/images/square-pinterest.svg";
import twitterIcon from "../../../assets/images/square-x-twitter.svg";

const navbarIcons = [
  {
    img: facebookIcon,
    alt: "Facebook Icon",
  },
  {
    img: instagramIcon,
    alt: "Instagram Icon",
  },
  {
    img: pinterestIcon,
    alt: "Pinterest Icon",
  },
  {
    img: twitterIcon,
    alt: "Twitter Icon",
  },
];

export default function SocialIcons() {
  return (
    <div className="socialIcons">
      {navbarIcons.map((item, index) => (
        <img className="socialIcon" src={item.img} alt={item.alt} key={index} />
      ))}
    </div>
  );
}
