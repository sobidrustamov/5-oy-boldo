function BlogCard({ imgName, text, info, date, userImg, fName }) {
  return (
    <div className="text-left w-[400px]">
      <img src={imgName} alt="" className="w-full" />
      <h3
        className="font-bold leadin-[2.3rem] my-[.8rem] mr-5 inline-block"
        children={text}
      ></h3>
      <p className=" inline-block" children={date}></p>
      <p className="text-[20px] leading-[2rem] text-[#777]" children={info}></p>
      <div className="flex gap-3 items-center my-4">
        <img src={userImg} alt="" className="w-[32px]" />
        <h3 className="text-[1rem] leadin-[2.3rem]" children={fName}></h3>
      </div>
    </div>
  );
}

export default BlogCard;
