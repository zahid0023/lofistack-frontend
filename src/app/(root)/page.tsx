const expertiseItems = [
  {
    title: "Website Development",
    description:
      "Website development is essentially the process of building and maintaining everything you see and use on the internet.",
    height: "h-[300px]",
    offset: "md:mt-10",
  },
  {
    title: "Digital Marketing",
    description:
      "Digital marketing is the mirror image of website development.",
    height: "h-[250px]",
    offset: "md:-mt-6",
  },
  {
    title: "Graphic Design",
    description:
      "If website development is the structure and digital marketing is the strategy, graphic design is the soul.",
    height: "h-[260px]",
    offset: "md:mt-16",
  },
  {
    title: "App Development",
    description:
      "App development is the process of creating software specifically designed to run on mobile devices.",
    height: "h-[210px]",
    offset: "md:-mt-2",
  },
  {
    title: "Integration & Automation",
    description:
      "Integration and automation is building the store, and marketing is getting people to visit it.",
    height: "h-[320px]",
    offset: "md:-mt-16",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <section className="bg-black text-white">
        <div className="container pt-[646px]">
          <h1 className="mb-[223px] text-center font-libre-caslon-text text-[90px]">
            Welcome to{" "}
            <span className="bg-linear-to-tr from-[#D365FF] to-[#8E94FF] bg-clip-text pr-3 text-transparent italic">
              LofiStack
            </span>
          </h1>
          <p className="mb-[118px] text-[45px]">
            LofiStack owns and operates a diverse collection of high-scale
            digital platforms. We don’t just manage them - we engineer the
            underlying infrastructure that drives their success.
          </p>
          <p className="mb-[118px] text-[45px]">
            Our products have reached millions of users across the globe. Yet,
            we view these milestones as just the beginning. We are still at the
            starting line of our journey to build an all-time great company.
          </p>

          <p className="text-[45px]">Think it can’t be done? Watch us.</p>
        </div>
      </section>

      {/* Our Expertise section */}
      <section className="relative overflow-hidden bg-[#e9e9eb] text-[#1f1f1f]">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-200/80 via-transparent to-transparent"></div>

        <div className="absolute left-24 size-[500px] rounded-full bg-purple-700/30 blur-[120px]"></div>

        <div className="absolute right-24 size-[500px] rounded-full bg-cyan-600/20 blur-[120px]"></div>
        <div className="container">
          <div className="relative mx-auto mb-20 max-w-4xl text-center">
            <div className="-z-10 -translate-y-1/2 pointer-events-none absolute inset-x-0 top-1/2 h-56 rounded-[32px] bg-linear-to-r from-[#8b5cf6]/55 via-[#67e8f9]/50 to-[#60a5fa]/55 blur-3xl" />
            <div className="relative mt-[246px] mb-[190px]">
              <h2 className="font-libre-caslon-text font-medium text-[100px] leading-none">
                Our{" "}
                <span className="absolute top-full left-1/2 bg-linear-to-r from-white via-[#00FFC3] to-[#3FB5FF] bg-clip-text text-transparent">
                  Expertise
                </span>
              </h2>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {expertiseItems.map((item, index) => (
              <article
                key={item.title}
                className={`${item.offset} ${
                  index === 3
                    ? "md:col-start-1"
                    : index === 4
                      ? "md:col-span-2 md:col-start-2 md:max-w-[560px]"
                      : ""
                }`}
              >
                <div
                  className={`${item.height} mb-5 rounded-3xl bg-[#b4b4b7]`}
                />
                <h3 className="mb-2 font-semibold text-4xl md:text-[36px] md:leading-[1.05]">
                  {item.title}
                </h3>
                <p className="max-w-[320px] text-[#505050] text-lg leading-tight md:text-[22px]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
