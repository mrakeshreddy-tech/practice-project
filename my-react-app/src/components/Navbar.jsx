import routerImg from "../assets/rrd.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center">
      <img src={routerImg} alt="routerdomimage" height="85" width="100" />
      <ul>
        <Link to="/"><li className="inline-block">Home</li></Link>
        <Link to="/products"><li className="inline-block">Products</li></Link>
        <Link to="/about"><li className="inline-block">About</li></Link>
        <Link to="/contact"><li className="inline-block">Contact</li></Link>
      </ul>
      <button>Get Started</button>
    </div>
  );
};

export default Navbar;
