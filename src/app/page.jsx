import Hero from "@/components/hero/Hero";
import SecOne from "@/components/sec-one/SecOne";
import SecThree from "@/components/sec-three/SecThree";
import SecTwo from "@/components/sec-two/SecTwo";
import SecFour from "./sec-four/SecFour";
import SecFive from "@/components/sec-five/SecFive";

const HomePage = () => {
  return (
    <>
      <Hero />
      <SecOne />
      <SecTwo />
      <SecThree />
      <SecFour />
      <SecFive />
    </>
  );
};

export default HomePage;
