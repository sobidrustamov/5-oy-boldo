import Button from "./Button";

function ServicesCard({ imgName, text, info }) {
  return (
    <div className="text-left">
      <img src={imgName} alt="" className="w-full" />
      <h3
        className="text-[1.5rem] leadin-[2.3rem] my-[.8rem]"
        children={text}
      ></h3>
      <p className="text-[20px] leading-[2rem] text-[#777]" children={info}></p>
      <Button
        clas={
          "inline-block text-[20px] font-bold border-b-2 border-black py-[1rem] my-2"
        }
        text={"Explore Page >"}
      />
    </div>
  );
}

export default ServicesCard;
