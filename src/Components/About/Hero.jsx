import { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <section
        id="hero"
        className="bg-[#0A2640] p-[100px] pb-[200px] text-center"
      >
        <h4 className="text-[20px] text-[#f1f1f1]">About</h4>
        <h1 className="w-[842px] text-white mx-auto text-[4rem] leading-[84px]">
          We love to make great things, things that matter.
        </h1>
        <p className="w-[746px] mx-auto text-[#f1f1f1] my-3">
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover advantage innovator success deployment non-disclosure.
        </p>
      </section>
    );
  }
}

export default Hero;
