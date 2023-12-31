import SidebarCardTitle from "../../atoms/SidebarCardTitle/SidebarCardTitle";
import SidebarCardContainer from "../../atoms/sidebarCardContainer/SidebarCardContainer";
import SocialIcons from "../SocialIcons/SocialIcons";
import "./sidebarSocial.css";

export default function SidebarSocial({ title }) {
  return (
    <SidebarCardContainer>
      <SidebarCardTitle>{title}</SidebarCardTitle>
      <SocialIcons />
    </SidebarCardContainer>
  );
}
