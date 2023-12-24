import BlogCard from "../BlogCard";
import Ourblog1 from "../../assets/images/Ourblog1.png";
import Ourblog2 from "../../assets/images/Ourblog2.png";
import Ourblog3 from "../../assets/images/Ourblog3.png";
import User1 from "../../assets/images/User1.png";
import User2 from "../../assets/images/User2.png";
import User3 from "../../assets/images/User3.png";
import Button from "../Button";

function Ourblog() {
  return (
    <section id="services" className="px-[100px] py-[5rem] text-center">
      <div className="container">
        <p className="text-[20px] leading-[2rem] text-[#777777]">Our Blog</p>
        <h2 className="w-[842px] text-[3rem] leading-[4.5rem] mx-auto">
          Value proposition accelerator product management venture{" "}
        </h2>
        <div className="flex py-[4rem] gap-[50px] justify-between">
          <BlogCard
            imgName={Ourblog1}
            text={"Category"}
            info={"Pitch termsheet backing validation focus release."}
            date={"November 22, 2021"}
            userImg={User1}
            fName={"Chandler Bing"}
          />
          <BlogCard
            imgName={Ourblog2}
            text={"Category"}
            info={
              "Seed round direct mailing non-disclosure agreement graphical user interface rockstar."
            }
            date={"November 22, 2021"}
            userImg={User2}
            fName={"Chandler Bing"}
          />
          <BlogCard
            imgName={Ourblog3}
            text={"Category"}
            info={"Pitch termsheet backing validation focus release."}
            date={"November 22, 2021"}
            userImg={User3}
            fName={"Chandler Bing"}
          />
        </div>
        <Button
          text={"Load more"}
          clas={
            "border-[#0A2640] border font-bold text-[#0A2640] px-[56px] py-[1rem] rounded-full"
          }
        />
      </div>
    </section>
  );
}

export default Ourblog;
