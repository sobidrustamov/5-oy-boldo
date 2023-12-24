import { Component } from "react";
import AboutHero1 from "../../assets/images/AboutHero1.png";
import AboutHero2 from "../../assets/images/AboutHero2.png";
import AboutHero3 from "../../assets/images/AboutHero3.png";
import AboutHero4 from "../../assets/images/AboutHero4.png";
import AboutHero5 from "../../assets/images/AboutHero5.png";

class Story extends Component {
  render() {
    return (
      <section id="story" className="px-[100px] mt-[-150px]">
        <div className="grid grid-cols-3 grid-rows-2 gap-[50px]">
          <div className="justify-self-end">
            <img src={AboutHero1} alt="" />
          </div>
          <div className="row-span-3 h-full">
            <img src={AboutHero2} alt="" />
          </div>
          <div>
            <img src={AboutHero3} alt="" />
          </div>
          <div className="justify-self-end">
            <img src={AboutHero4} alt="" />
          </div>
          <div>
            <img src={AboutHero5} alt="" />
          </div>
        </div>
        <div className="w-[842px] mx-auto">
          <h4 className="text-[20px] text-[#777]">Our Story</h4>
          <h2 className="text-[3rem] my-5">
            Handshake infographic mass market crowdfunding iteration.
          </h2>
          <p className="text-[20px] text-[#777] my-[40px]">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
            Sales user experience branding growth hacking holy grail
            monetization conversion prototype stock network effects. Learning
            curve network effects return on investment bootstrapping
            business-to-consumer.
          </p>
        </div>
      </section>
    );
  }
}

export default Story;
