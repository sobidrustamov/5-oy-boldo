import Button from "./Button";
import Logo3 from "../assets/images/Logo3.png";

function Footer() {
  return (
    <footer className="px-[100px] my-[80px]">
      <div className="p-[50px] bg-[#0A2640] my-[50px] rounded-xl">
        <h2 className="w-[716px] text-center text-white text-[3rem] mx-auto">
          An enterprise template to ramp up your company website
        </h2>
        <form className="flex justify-center items-center gap-4 my-5">
          <input
            type="email"
            placeholder="Your Email Address"
            className="px-5 w-[30%] py-[1rem] rounded-full"
          />
          <Button
            text={"Start now"}
            clas={
              "bg-green-400 font-bold text-[#0A2640] px-[56px] py-[1rem] rounded-full"
            }
          />
        </form>
      </div>
      <div className=" flex gap-[220px]">
        <div>
          <img src={Logo3} alt="" />
          <p className="w-[300px] text-[#777] my-[40px]">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
        </div>
        <ul className="flex flex-col justify-between">
          <li className="font-bold">Landings</li>
          <li>Home</li>
          <li>Products</li>
          <li>Services</li>
        </ul>
        <ul className="flex flex-col justify-between">
          <li className="font-bold">Company</li>
          <li>Home</li>
          <li>
            Careers{" "}
            <span className="py-2 px-4 rounded-full bg-green-400">Hiring</span>
          </li>
          <li>Services</li>
        </ul>
        <ul className="flex flex-col justify-between">
          <li className="font-bold">Resources</li>
          <li>Home</li>
          <li>Products</li>
          <li>Services</li>
        </ul>
      </div>
      <p className="w-[300px] text-[#777] mt-[20px]">All rights reserved.</p>
    </footer>
  );
}

export default Footer;
