import Slide from "../slide/Slide";

const SecThree = () => {
  const colors = [
    "red",
    "blue",
    "green",
    "orange",
    "tomato",
    "cyan",
    "black",
    "#ddd",
    "yellow",
    "white",
  ];
  return (
    <section className="bg-slate-900 py-20 overflow-hidden">
      <div
        className="container mx-auto px-3 grid gap-8 justify-center items-center"
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(20rem,1fr))" }}
      >
        {colors.map((color, i) => (
          <div key={i} className="overflow-hidden">
            <Slide animObj={{ from: { y: 200 }, to: { y: 0 } }}>
              <div
                className="box2 bg-blue-500 min-w-[320px] h-[400px]"
                style={{ backgroundColor: color }}
              ></div>
            </Slide>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecThree;
