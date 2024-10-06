import Slide from "../slide/Slide";

const SecTwo = () => {
  return (
    <section className="bg-slate-900 py-20 overflow-hidden">
      <div className="container mx-auto px-3 flex flex-col items-center lg:justify-between lg:flex-row gap-10">
        <Slide animObj={{ from: { x: "-100vw" }, to: { x: 0 } }}>
          <div className="box1 bg-green-500 w-[320px] h-[400px]"></div>
        </Slide>
        <Slide animObj={{ from: { x: "100vw" }, to: { x: 0 } }}>
          <div className="box2 bg-blue-500 w-[320px] h-[400px]"></div>
        </Slide>
      </div>
    </section>
  );
};

export default SecTwo;
