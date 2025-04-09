import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import History from "./History";
import Visit from "./Visit";
import Discover from "./Discover";
import Intro from "./Intro";


const Main = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <main className="container mx-auto p-4">
        <Hero />
        <History />
        <Visit />
        <Discover />
      </main>
      <Footer />
    </>
  );
};

export default Main;
