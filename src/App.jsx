import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import React from "react";

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
    </div>
  );
};

export default App;
