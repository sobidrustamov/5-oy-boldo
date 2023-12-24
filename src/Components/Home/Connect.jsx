import ConnectImg from "../../assets/images/ConnectImg.png";

function Connect() {
  return (
    <section id="connect" className="p-[100px]">
      <img src={ConnectImg} alt="" className="w-full my-[2rem]" />
      <div className="flex justify-between">
        <h3 className="w-[500px] text-[36px] leading-[56px]">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h3>
        <ul className="text-[20px] leading-[2rem]">
          <li className="border-b-2 border-[#777] mb-5 py-3 flex gap-[3rem] justify-between">
            <span> We connect our customers with the best?</span>
            <span className="text-white rounded-full bg-black flex items-center justify-center w-[32px]">
              <i className="fa-solid fa-chevron-down "></i>
            </span>
          </li>
          <li className="border-b-2 border-[#777] mb-5 py-3 flex gap-[3rem] justify-between">
            <span> Android research & development rockstar?</span>
            <span className="text-white rounded-full bg-black flex items-center justify-center w-[32px]">
              <i className="fa-solid fa-chevron-down "></i>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Connect;
