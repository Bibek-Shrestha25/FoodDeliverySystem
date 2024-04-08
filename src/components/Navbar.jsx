import { Link } from "react-router-dom";

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
        className="flex flex-row bg-blue-300"
      >
        <div>
          <h2>Logo</h2>
        </div>
        {/* /////// */}
        <div style={{ padding: "0px 30px", gap: "50px", display: "flex" }}>
          <div>
            <Link style={{ textDecoration: "none" }}>Home</Link>
          </div>
          <div>
            <Link style={{ textDecoration: "none" }}>Contact Us</Link>
          </div>
          <div>
            <Link style={{ textDecoration: "none" }}>About Us</Link>
          </div>
          <div>
            <Link style={{ textDecoration: "none" }}>Order Now</Link>
          </div>
          <div>
            <Link style={{ textDecoration: "none" }}>
              {" "}
              <button style={{ padding: "5px 10px" }}>Sign In</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
