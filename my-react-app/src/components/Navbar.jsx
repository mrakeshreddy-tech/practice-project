import routerImg from "../assets/rrd.jpg";

const Navbar = () => {
  console.log("hi")
  return (
    <div>
      <img src={routerImg} alt="routerdomimage"/>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button>Get Started</button>

       
    </div>
    
  );
};

export default Navbar;
