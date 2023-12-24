import Customer from "../../assets/images/Customer.png";
import Customer2 from "../../assets/images/Customer2.png";
import Diagram1 from "../../assets/images/Diagram1.png";
import Button from "../Button";
function Customers() {
  return (
    <section id="customers" className="px-[100px] pb-[100px]">
      <div className="container flex justify-between items-center gap-[150px] mb-[250px]">
        <div className="flex-1 ">
          <div className="img-box relative">
            <img src={Customer} alt="man-img" className="w-full" />
            <img
              src={Diagram1}
              alt="diagram"
              className="absolute bottom-[-80px] right-[230px] shadow-md bg-white p-4 rounded-md"
            />
          </div>
        </div>
        <div className="flex-1 gap-3 items-start flex flex-col">
          <h2 className="text-[36px] leading-[56px] my-5">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>
          <ul className="flex flex-col gap-[24px] text-[20px] mb-[40px]">
            <li>We connect our customers with the best.</li>
            <li>Advisor success customer launch party.</li>
            <li>Business-to-consumer long tail.</li>
          </ul>
          <Button
            clas={
              "text-white bg-[#000]  font-bold px-[56px] py-[1rem] rounded-full"
            }
            text={"Star Now"}
          />
        </div>
      </div>
      <div className="container flex justify-between items-center gap-[150px] mb-[100px]">
        <div className="flex-1 gap-3 items-start flex flex-col">
          <h2 className="text-[36px] leading-[56px] my-5">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>
          <ul className="flex flex-col gap-[24px] text-[20px] mb-[40px]">
            <li>We connect our customers with the best.</li>
            <li>Advisor success customer launch party.</li>
            <li>Business-to-consumer long tail.</li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="img-box relative">
            <img src={Customer2} alt="man-img" className="w-full" />
            <img
              src={Diagram1}
              alt="diagram"
              className="absolute bottom-[-100px] right-[330px] shadow-md bg-white p-4 rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customers;
