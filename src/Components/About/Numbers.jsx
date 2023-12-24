import { Component } from "react";

export default class Numbers extends Component {
  render() {
    return (
      <section id="numbers" className="bg-[#0A2640] p-[100px] text-center">
        <h4 className="text-[20px] text-[#777]">Our Numbers</h4>
        <h2 className="text-white text-[3rem] w-[842px] mx-auto">
          Handshake infographic mass market crowdfunding iteration.
        </h2>
        <div className="flex justify-evenly">
          <div>
            <h2 className="text-[6rem] text-green-300">120m</h2>
            <p className="text-[#777] text-[1.4rem]">Cool feature title</p>
          </div>
          <div>
            <h2 className="text-[6rem] text-green-300">10.000</h2>
            <p className="text-[#777] text-[1.4rem]">Cool feature title</p>
          </div>
          <div>
            <h2 className="text-[6rem] text-green-300">240</h2>
            <p className="text-[#777] text-[1.4rem]">Cool feature title</p>
          </div>
        </div>
      </section>
    );
  }
}
