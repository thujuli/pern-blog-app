import "./heroSection.css";
import bgHeroSection from "../../../assets/images/bg-hero.jpg";

export default function HeroSection() {
  return (
    <section className="hero">
      <p className="heroDesc">React & Node</p>
      <h1 className="heroTitle">BLOG</h1>
      <img
        src={bgHeroSection}
        alt="Background Hero Section"
        className="heroBg"
      />
    </section>
  );
}
