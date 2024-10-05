import TextReveal from "../motion/reveal/TextReveal";
import Svg from "../svg/Svg";

const Hero = () => {
  return (
    <section className="py-20 min-h-screen flex flex-col justify-center items-center bg-slate-800 text-white relative overflow-hidden">
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-20 uppercase">
        <TextReveal delay={1.5}>Hello World !!!</TextReveal>
      </h1>
      <Svg />
    </section>
  );
};

export default Hero;
