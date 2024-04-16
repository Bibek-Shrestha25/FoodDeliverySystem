import { Link } from "react-router-dom";
import logo from "../assets/logos.png";
function Navbar() {
  return (
    <>
      <div className="flex flex-row bg-orange-400 items-center justify-between text-white ">
        {/* <div className="xsm:hidden sm:flex flex flex-row gap-[40px]  justify-between"> */}
        <div className="h-[60px] w-[50px]-3xl ">
          <Link to="/">
            <img src={logo} alt="" className="h-[40px] " />{" "}
          </Link>
        </div>
        <div className=" xsm:hidden flex flex-row justify-between m-2 p-4 gap-10 font-bold ">
          <div>
            <Link to="/">Restaurants</Link>
          </div>
          <div className="p">
            {/* <i class="fa-solid fa-address-book"></i> */}
            <Link to="/contact">Contact Us</Link>
          </div>
          <div>
            <Link to="/aboutus">About Us</Link>
          </div>
          <div>
            <Link to="/ordernow">Order Now</Link>
          </div>
          <div>
            <Link to="/login"> Sign in</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
