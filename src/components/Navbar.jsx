import { Link } from "react-router-dom";
import logo from "../assets/logos.png";
function Navbar() {
  return (
    <>
      <div className="flex flex-row bg-orange-400 items-center justify-between  ">
        {/* <div className="xsm:hidden sm:flex flex flex-row gap-[40px]  justify-between"> */}
        <div className="h-[40px] w-[40px] ">
          <Link to="/">
            <img src={logo} alt="" className="h-[40px] " />{" "}
          </Link>
        </div>
        <div className=" xsm:hidden flex flex-row justify-between m-2 p-2 gap-10">
          <div>
            <Link>Restaurants</Link>
          </div>
          <div>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div>
            <Link to="/aboutus">About Us</Link>
          </div>
          <div>
            <Link>Order Now</Link>
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
