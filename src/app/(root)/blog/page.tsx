export default function BlogPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white selection:bg-purple-500/30">
      {/* --- BACKGROUND BLOBS (Aurora Effect) --- */}
      {/* Left Purple Blob */}
      <div className="-left-[10%] pointer-events-none absolute top-[20%] h-[500px] w-[500px] rounded-full bg-purple-900/20 blur-[120px]" />

      {/* Right Teal/Cyan Blob */}
      <div className="-right-[10%] pointer-events-none absolute top-[30%] h-[500px] w-[500px] rounded-full bg-cyan-900/20 blur-[120px]" />

      {/* Bottom Soft White Glow */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-[300px] bg-gradient-to-t from-white/10 to-transparent" />

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-32 pb-20 text-center">
        {/* Header Section */}
        <h2 className="mb-16 font-serif text-5xl tracking-tight md:text-6xl">
          Welcome To{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent italic">
            LofiStack
          </span>
        </h2>

        {/* Body Text */}
        <div className="mb-20 max-w-2xl space-y-8 text-gray-400 text-lg leading-relaxed md:text-xl">
          <p>
            <span className="text-purple-300">LofiStack</span> owns and operates
            a diverse collection of{" "}
            <span className="text-purple-300">
              high-scale digital platforms
            </span>
            . We don't just <span className="text-purple-300">manage them</span>{" "}
            — we engineer the underlying{" "}
            <span className="text-purple-300">infrastructure</span> that drives
            their success.
          </p>
          <p>
            Our products have reached millions of users across the globe. Yet,
            we view these milestones{" "}
            <span className="text-purple-300">as just the beginning</span>. We
            are still at the starting{" "}
            <span className="text-purple-300">line of our journey</span> to
            build an all-time great company.
          </p>
          <p className="text-gray-200">
            Think it can't be <span className="text-purple-400">done?</span>{" "}
            <span className="text-purple-400">Watch us.</span>
          </p>
        </div>

        {/* Footer Section (Expertise) */}
        <div className="mt-10">
          <h1 className="font-serif text-7xl leading-[0.8] tracking-tighter md:text-8xl">
            Our <br />
            <span className="bg-gradient-to-r from-gray-100 via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h1>
        </div>
      </main>
    </div>
  );
}
