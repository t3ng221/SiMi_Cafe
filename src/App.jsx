import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import Home from "./components/Home/Home";
import Item from "./components/Items/Item";
import Banner1 from "./components/Banner/Banner1";
import Banner2 from "./components/Banner/Banner2";
import Testimonials from "./components/Testimonials/Textimonials";
import Footer from "./components/Footer/Footer";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
      <Navbar />
      <Home />
      <Item />
      <Banner1 />
      <Banner2 />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
