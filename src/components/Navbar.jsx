import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <>
      <div
        // style={{
        //   display: "flex",
        //   justifyContent: "space-between",
        //   textDecoration: "none",
        //   padding: "20px",
        // }}
        className="flex flex-row bg-orange-400 items-center justify-between "
      >
        <div className="h-[40px] w-[40px] ">
          <img src={logo} alt="" />{" "}
        </div>
        {/* /////// */}
        <div className="flex flex-row justify-between m-2 p-2 gap-10 ">
          <div>
            <Link>Restaurants</Link>
          </div>
          <div>
            <Link>Contact Us</Link>
          </div>
          <div>
            <Link>About Us</Link>
          </div>
          <div>
            <Link>Order Now</Link>
          </div>
          <div>
            <Link>
              {" "}
              <button
                className="btn btn-pink"
                style={{
                  border: "2px solid blue",
                  padding: "2px 5px",
                  borderRadius: "5px",
                }}
              >
                <Link>Sign In</Link>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
