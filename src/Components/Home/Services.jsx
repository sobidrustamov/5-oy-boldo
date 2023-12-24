import ServicesCard from "../ServicesCard";
import ServicesCard1 from "../../assets/images/ServiceseCard1.png";
import ServicesCard2 from "../../assets/images/ServiceseCard2.png";
import ServicesCard3 from "../../assets/images/ServiceseCard3.png";

function Services() {
  return (
    <section id="services" className="px-[100px] py-[5rem] text-center">
      <div className="container">
        <p className="text-[20px] leading-[2rem] text-[#777777]">
          Our Services
        </p>
        <h2 className="w-[842px] text-[3rem] leading-[4.5rem] mx-auto">
          Handshake infographic mass market crowdfunding iteration.
        </h2>
        <div className="flex py-[4rem] gap-[100px] justify-between">
          <ServicesCard
            imgName={ServicesCard1}
            text={"Cool feature title"}
            info={"Learning curve network effects return on investment."}
          />
          <ServicesCard
            imgName={ServicesCard2}
            text={"Cool feature title"}
            info={"Learning curve network effects return on investment."}
          />
          <ServicesCard
            imgName={ServicesCard3}
            text={"Cool feature title"}
            info={"Learning curve network effects return on investment."}
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
