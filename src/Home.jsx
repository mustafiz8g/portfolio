// import Banner from "./Banner";




// const Home = () => (
//   <>
// <section  >
//   <Banner></Banner>
// </section>
// <section id="skill" className="h-screen bg-green-100 flex items-center justify-center">
//   <h1 className="text-4xl">Skill section</h1>
// </section>
// <section id="projects" className="h-screen bg-green-100 flex items-center justify-center">
//   <h1 className="text-4xl">About Section</h1>
// </section>
// <section id="about" className="h-screen bg-green-100 flex items-center justify-center">
//   <h1 className="text-4xl">About Section</h1>
// </section>
// <section id="contact" className="h-screen bg-yellow-100 flex items-center justify-center">
//   <h1 className="text-4xl">Contact Section</h1>
// </section>

//   </>
// );

// export default Home;






import React from "react";
import { animateScroll as scroll } from "react-scroll";
import Banner from "./Banner";
import { FaCircleArrowUp } from "react-icons/fa6";
import './Banner.css'
import Skill from "./Skill";
import Contact from "./Contact";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

   

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuad",
    });
  };



  return (

    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4  transition"
        
      >
        <FaCircleArrowUp  className="text-4xl text-[#03fd9d] bg-black rounded-full "/>

      </button>
    )
  );
};

const Home = () => (
  <>
    <section>
      <Banner />
    </section>
    <section id="skill">
     <Skill></Skill>
    </section>
    <section id="projects" className="h-screen bg-green-100 flex items-center justify-center">
      <h1 className="text-4xl">Projects Section</h1>
    </section>
    <section id="about" className="h-screen bg-red-100 flex items-center justify-center">
      <h1 className="text-4xl">About Section</h1>
    </section>
    <section id="contact" >
      <Contact></Contact>
    </section>
    <ScrollToTop />
  </>
);

export default Home;
