function EnterpriceCard({ userImg, text, fName, email }) {
  return (
    <div className="px-[40px] py-[50px] w-[380px] text-left bg-white rounded-md">
      <p
        className="text-[1.5rem] leading-[2.4rem] text-[#777]"
        children={text}
      ></p>
      <div className="flex gap-3 items-center my-5">
        <img src={userImg} alt="" className="w-[60px]" />
        <div>
          <h3 className="text-[1rem] leadin-[2.3rem]" children={fName}></h3>
          <p className="text-[14px]" children={email}></p>
        </div>
      </div>
    </div>
  );
}

export default EnterpriceCard;
