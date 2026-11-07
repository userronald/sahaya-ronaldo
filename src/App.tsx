import { MotionConfig } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import BusinessProjects from "./components/BusinessProjects";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Expertise from "./components/Expertise";
import Highlights from "./components/Highlights";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <Profile />
        <Projects />
        <BusinessProjects />
        <Experience />
        <Expertise />
        <Highlights />
        <Services />
      </main>
      <Contact />
    </MotionConfig>
  );
}
