import Reveal from "../motion/reveal/Reveal";

const SecOne = () => {
  return (
    <section className="bg-slate-900 py-20">
      <div className="container mx-auto px-3 flex flex-col gap-10">
        <div className="card max-w-[800px] text-slate-300">
          <h2 className="text-2xl lg:text-4xl uppercase font-medium mb-3">
            <Reveal>Hi, I&apos;m Shakib,</Reveal>
          </h2>
          <p className="text-slate-400">
            <Reveal>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit cum ratione illum explicabo! Dolore tempora,
              delectus molestiae perferendis exercitationem nemo aut quibusdam
              totam atque veniam iure perspiciatis minus odio ea.
            </Reveal>
          </p>
        </div>
        <div className="card max-w-[800px] text-slate-300 lg:ms-auto">
          <h2 className="text-2xl lg:text-4xl uppercase font-medium mb-3">
            <Reveal>Hi, I&apos;m Shakib,</Reveal>
          </h2>
          <p className="text-slate-400">
            <Reveal>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit cum ratione illum explicabo! Dolore tempora,
              delectus molestiae perferendis exercitationem nemo aut quibusdam
              totam atque veniam iure perspiciatis minus odio ea.
            </Reveal>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SecOne