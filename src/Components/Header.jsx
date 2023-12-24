import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import Button from "./Button";

function Header() {
  return (
    <header className="bg-[#0A2640] px-[100px] py-[3.5rem] flex justify-between">
      <Link to="/" className="flex text-[42px]">
        <img src={Logo} alt="logo" />
      </Link>
      <ul className="text-[1rem] gap-[40px] text-white flex items-center">
        <NavLink link={"/blog"} text={"Product"} />
        <NavLink link={"#"} text={"Services"} />
        <NavLink link={"/about"} text={"About"} />
        <Button
          text={"Log In"}
          clas={"bg-white text-black px-[40px] py-[.5rem] rounded-[1.5rem]"}
        />
      </ul>
    </header>
  );
}

export default Header;
