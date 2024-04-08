import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sliders from "../components/Sliders";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar />
      <Sliders />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
