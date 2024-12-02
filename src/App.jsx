import About from "./components/About";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MainThing from "./components/MainThing";
import Navbar from "./components/Navbar";
import Popular from "./components/Popular";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <Categories />
      <About />
      <Popular />
      <MainThing />
      <Testimonials />
      <Footer />
    </div>
  );
}
