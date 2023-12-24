import EnterpriceCard from "../EnterpriceCard";
import User1 from "../../assets/images/User1.png";
import User2 from "../../assets/images/User2.png";
import User3 from "../../assets/images/User3.png";
function Enterprice() {
  return (
    <section id="enterprice" className="px-[100px] py-[5rem] bg-[#0A2640]">
      <div className="container">
        <h2 className="w-[712px] text-[3rem] text-white leading-[4.5rem]">
          An enterprise template to ramp up your company website{" "}
        </h2>
        <div className="flex py-[4rem] gap-[22px] justify-between items-start">
          <EnterpriceCard
            fName={"Albus Dumbledore"}
            userImg={User1}
            text={`“Buyer buzz partner network disruptive non-disclosure agreement business”`}
            email={"Manager @ Howarts"}
          />
          <EnterpriceCard
            fName={"Severus Snape"}
            userImg={User2}
            text={`
            "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor."
            `}
            email={"Manager @ Slytherin"}
          />
          <EnterpriceCard
            fName={"Harry Potter"}
            userImg={User3}
            text={`“Release facebook responsive web design business model canvas seed money monetization.”`}
            email={"Team Leader @ Gryffindor"}
          />
        </div>
      </div>
    </section>
  );
}

export default Enterprice;
