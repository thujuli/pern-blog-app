import HeroSection from "../../components/organisms/HeroSection/HeroSection";
import PostSection from "../../components/organisms/PostSection/PostSection";
import Sidebar from "../../components/organisms/Sidebar/Sidebar";
import OnlyNavbar from "../../components/templates/OnlyNavbar";
import "./homePage.css";

export default function HomePage() {
  return (
    <OnlyNavbar>
      <HeroSection />
      <section className="main">
        <PostSection />
        <Sidebar />
      </section>
    </OnlyNavbar>
  );
}
