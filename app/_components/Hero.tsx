import React from 'react'

function Hero() {
  return (
    <section className="bg-black">
  <div className="mx-auto max-w-screen-xl px-4 pt-32 lg:flex h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
        Understand User Flow.
        <strong className="font-extrabold text-zinc-800 sm:block"> Documents & Diagram </strong>
      </h1>

      <p className="mt-4 text-zinc-500 sm:text-xl/relaxed font-semibold">
        All-in-one markdown editor, collaborative canvas, and diagram-as-code builder
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-white px-12 py-3 text-sm font-semibold text-black shadow hover:bg-zinc-900 hover:text-white focus:outline-none focus:ring active:bg-white sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero