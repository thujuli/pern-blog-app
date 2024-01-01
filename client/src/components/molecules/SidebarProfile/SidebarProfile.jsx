import SidebarCardTitle from "../../atoms/SidebarCardTitle/SidebarCardTitle";
import SidebarCardContainer from "../../atoms/SidebarCardContainer/SidebarCardContainer";
import "./SidebarProfile.css";

export default function SidebarProfile({ title, imgSrc, imgAlt, children }) {
  return (
    <SidebarCardContainer>
      <SidebarCardTitle>{title}</SidebarCardTitle>
      <img src={imgSrc} alt={imgAlt} className="sidebarProfileImg" />
      <p className="sidebarProfileDesc">{children}</p>
    </SidebarCardContainer>
  );
}
