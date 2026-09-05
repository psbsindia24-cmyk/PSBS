import React from "react";
import { ArrowUpRight, Wrench } from "lucide-react";

const tools = [
  {
    id: 1,
    name: "ATR",
    description:
      "A digital solution developed by PSBS Management Services LLP to streamline business processes and improve operational efficiency.",
    category: "Business Management",
    url: "https://atr.psbsindia.com/",
  },
    
];

const OurTools = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="relative overflow-hidden border-b border-neutral-800">

        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[110px]" />
          <div className="absolute left-0 top-1/2 h-[250px] w-[250px] rounded-full bg-cyan-600/5 blur-[90px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-20 sm:px-8 lg:px-12 lg:pb-14 lg:pt-24">
          <div className="mx-auto max-w-4xl text-center">

            {/* Small Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-5 py-2 text-sm font-medium text-cyan-400 backdrop-blur-sm">
              <Wrench className="h-4 w-4" />
              PSBS Digital Solutions
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our{" "}
              <span className="text-cyan-400">
                Tools
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Explore the software and digital solutions developed by
              PSBS Management Services LLP to simplify business processes
              and improve operational efficiency.
            </p>

          </div>
        </div>
      </section>


      {/* =========================
          OUR SOFTWARE SECTION
      ========================== */}
      <section className="relative bg-neutral-950">

        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-0 top-10 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[110px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12 lg:py-14">

          {/* Section Heading */}
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Our Software
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Technology built by PSBS
            </h2>

            <p className="mt-3 max-w-2xl text-gray-400">
              Access our in-house software and digital solutions from one
              place.
            </p>
          </div>


          {/* =========================
              TOOL CARDS
          ========================== */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {tools.map((tool) => (
              <div
                key={tool.id}
                className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-black/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10"
              >

                {/* Card Glow */}
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/20" />

                <div className="relative">

                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
                    <Wrench className="h-6 w-6" />
                  </div>

                  {/* Category */}
                  <span className="inline-flex rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-xs font-medium text-gray-400">
                    {tool.category}
                  </span>

                  {/* Tool Name */}
                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {tool.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {tool.description}
                  </p>

                  {/* Divider */}
                  <div className="my-5 h-px bg-neutral-800" />

                  {/* Open Tool Button */}
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:bg-cyan-500 hover:shadow-cyan-500/20"
                  >
                    Open Tool

                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =========================
          BOTTOM CTA
      ========================== */}
      <section className="border-t border-neutral-800 bg-black">

        <div className="mx-auto max-w-4xl px-6 py-12 text-center sm:px-8 lg:py-14">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            PSBS Technology
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Smart solutions for smarter businesses.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-400">
            Our digital tools are designed to support efficient,
            technology-driven business operations.
          </p>

        </div>
      </section>

    </div>
  );
};

export default OurTools;