import SidebarProfile from "../../molecules/SidebarProfile/SidebarProfile";
import "./sidebar.css";
import profileImg from "../../../assets/images/person.jpg";
import SidebarCats from "../../molecules/SidebarCats/SidebarCats";
import SidebarSocial from "../../molecules/SidebarSocial/SidebarSocial";

const categories = ["life", "music", "sport", "style", "tech", "cinema"];

export default function Sidebar() {
  return (
    <section className="sidebar">
      <SidebarProfile
        imgSrc={profileImg}
        imgAlt="Example Profile"
        title="about me"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
        consectetur tempore. Asperiores magni fugit tenetur itaque, sit quaerat
        sint laudantium.
      </SidebarProfile>
      <SidebarCats title="categories" categories={categories} />
      <SidebarSocial title="follow us" />
    </section>
  );
}
