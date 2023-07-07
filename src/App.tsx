import "./App.css";
import TopBar from "./TopBar";
import Hero from "./Hero";
import Introduction from "./Introduction";
import TechIUse from "./TechIUse";
import ProjectsCaroussel from "./ProjectsCaroussel";

import ContactInfo from "./ContactInfo";
import Footer from "./Footer";
import Cursor from "./Cursor";

function App() {
  return (
    <>
    <Cursor />
      <div className=" bg-gradient-to-r from-primary-content to-secondary-content ">
        <TopBar />
        <Hero />
        <Introduction />
        <TechIUse />
        <ProjectsCaroussel />
        <ContactInfo />
        <Footer />
      </div>
    </>
  );
}

export default App;
