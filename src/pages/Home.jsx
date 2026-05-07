import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import BottomCart from "../components/BottomCart";
// import BottomNavbar from "../components/BottonNavbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
      <BottomCart></BottomCart>
      {/* <BottomNavbar></BottomNavbar> */}
    </>
  );
};

export default Home;