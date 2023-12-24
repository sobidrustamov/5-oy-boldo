import Header from "../Components/Header";
import Connect from "../Components/Home/Connect";
import Customers from "../Components/Home/Customers";
import Enterprice from "../Components/Home/Enterprice";
import Ourblog from "../Components/Home/Ourblog";
import Services from "../Components/Home/Services";
import Showcase from "../Components/Home/Showcase";

function Home() {
  return (
    <>
      <Header />
      <Showcase />
      <Services />
      <Customers />
      <Enterprice />
      <Connect />
      <Ourblog />
    </>
  );
}

export default Home;
