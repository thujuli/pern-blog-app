import SidebarCardTitle from "../../atoms/SidebarCardTitle/SidebarCardTitle";
import SidebarCardContainer from "../../atoms/SidebarCardContainer/SidebarCardContainer";
import "./sidebarCats.css";

export default function SidebarCats({ title, categories }) {
  return (
    <SidebarCardContainer>
      <SidebarCardTitle>{title}</SidebarCardTitle>
      <div className="sidebarCats">
        {categories.map((item, index) => (
          <span className="sidebarCat" key={index}>
            {item}
          </span>
        ))}
      </div>
    </SidebarCardContainer>
  );
}
