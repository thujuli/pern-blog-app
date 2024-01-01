import Container from "../components/atoms/Container/Container";
import HeroSection from "../components/organisms/HeroSection/HeroSection";
import PostSection from "../components/organisms/PostSection/PostSection";
import Sidebar from "../components/organisms/Sidebar/Sidebar";
import OnlyNavbar from "../components/templates/OnlyNavbar";

export default function HomePage() {
  return (
    <OnlyNavbar>
      <HeroSection />
      <Container>
        <PostSection />
        <Sidebar />
      </Container>
    </OnlyNavbar>
  );
}
