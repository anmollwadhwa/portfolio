export default function Home() {
  return (
    <main className="dotted-background flex min-h-screen items-center px-6 py-12 sm:px-10 lg:px-16">
      <section className="mx-auto w-full max-w-5xl">
        <p className="mb-6 font-mono text-sm uppercase tracking-[0.24em] text-black/55">
          Personal portfolio
        </p>
        <h1 className="max-w-4xl text-6xl font-semibold tracking-[-0.06em] text-black sm:text-8xl lg:text-9xl">
          Anmol Wadhwa
        </h1>
        <p className="mt-8 max-w-2xl text-2xl leading-tight tracking-[-0.03em] text-black sm:text-3xl">
          A second-year CS grad building a foundation in Rust.
        </p>
      </section>
    </main>
  );
}