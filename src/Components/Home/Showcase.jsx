import Button from "../../Components/Button";
import ShowcaseImg1 from "../../assets/images/ShowcaseImg1.png";
import ShowcaseImg2 from "../../assets/images/ShowcaseImg2.png";
import ShowcaseImg3 from "../../assets/images/ShowcaseImg3.png";
import Logo1 from "../../assets/images/Logo1.png";
import Logo2 from "../../assets/images/Logo2.png";
function Showcase() {
  return (
    <section
      id="showcase"
      className="bg-[#0A2640] text-white px-[100px] pb-[4rem]"
    >
      <div className="flex justify-between items-center">
        <div className="w-[540px]">
          <h1 className="text-[3rem]">
            Save time by building fast with Boldo Template{" "}
          </h1>
          <p className="my-5">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className="flex gap-3 items-center">
            <Button
              clas={
                "bg-green-400 font-bold text-[#0A2640] px-[56px] py-[1rem] rounded-[1.5rem]"
              }
              text={"Buy template"}
            />
            <Button
              clas={"border font-bold px-[56px] py-[1rem] rounded-[1.5rem]"}
              text={"Explore"}
            />
          </div>
        </div>
        <div className="w-{500px] grid grid-cols-2 grid-rows-2">
          <div className="col-span-2 mb-5">
            <img src={ShowcaseImg1} alt="" className="w-full" />
          </div>
          <div className="h-[70%]">
            <img src={ShowcaseImg2} alt="" />
          </div>
          <div className="h-[70%]">
            <img src={ShowcaseImg3} alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-around ">
        <img src={Logo1} alt="" />
        <img src={Logo2} alt="" />
        <img src={Logo1} alt="" />
        <img src={Logo2} alt="" />
        <img src={Logo1} alt="" />
        <img src={Logo2} alt="" />
      </div>
    </section>
  );
}

export default Showcase;
