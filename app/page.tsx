import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub, SiX } from "react-icons/si";

export default function Home() {
  return (
    <main className="dotted-background relative flex min-h-screen items-center px-6 py-12 pb-28 sm:px-10 lg:px-16">
      <section className="mx-auto w-full max-w-5xl">
        <p className="mb-3 font-mono text-xl uppercase tracking-[0.14em] text-black/55">
          Sup! I&apos;m
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-black sm:text-5xl lg:text-8xl">
          anmol wadhwa
        </h1>
        <p className="mt-7 max-w-2xl text-2xl leading-tight tracking-[-0.03em] text-black sm:text-3xl">
          fiddling around with how things work beneath
        </p>
        <div className="mt-11 max-w-3xl text-2xl tracking-[0.005em]">
          I&apos;m a second year CS student exploring Rust, backend systems.
        </div>
      </section>
      <nav
        aria-label="Social links"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-6"
      >
        <a
          href="https://x.com/anmollwadhwa"
          target="_blank"
          rel="noreferrer"
          aria-label="X"
          className="text-black transition-opacity hover:opacity-55"
        >
          <SiX aria-hidden="true" className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/anmolwadhwaa"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-black transition-opacity hover:opacity-55"
        >
          <FaLinkedinIn aria-hidden="true" className="h-6 w-6" />
        </a>
        <a
          href="https://github.com/anmollwadhwa"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-black transition-opacity hover:opacity-55"
        >
          <SiGithub aria-hidden="true" className="h-6 w-6" />
        </a>
      </nav>
    </main>
  );
}