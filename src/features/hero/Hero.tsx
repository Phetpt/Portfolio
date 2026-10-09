import { candidateProfile } from "@/data/profile"

export function Hero() {
  return(
    <section id="hero" className="mx-auto max-w-5xl px-6 py-12 sm:py-20">
      <h1 className="text-3xl font-bold sm:text-5xl tracking-tight">{candidateProfile.name}</h1>
      <p className="mt-4 text-xl">{candidateProfile.title}</p>
      <p className="mt-3 max-w-2xl text-base leading-7 text-[#616367]">{candidateProfile.tagline}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href={`mailto:${candidateProfile.email}`} 
        className="inline-flex min-h-11 items-center rounded-lg border border-[#616367] px-4 py-2
        font-medium focus-visible:outline-2 focus-visible:outline-offset-4">
          Contact Email
        </a>
        <a href={candidateProfile.github} 
        className="inline-flex min-h-11 items-center rounded-lg border border-[#616367] px-4 py-2
        font-medium focus-visible:outline-2 focus-visible:outline-offset-4"
        target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={candidateProfile.linkedin}
        className="inline-flex min-h-11 items-center rounded-lg border border-[#616367] px-4 py-2
        font-medium focus-visible:outline-2 focus-visible:outline-offset-4"
        target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a
          href="#projects"
          className="inline-flex min-h-11 items-center rounded-lg border border-[#616367] px-4 py-2 
          font-medium focus-visible:outline-2 focus-visible:outline-offset-4">
          Projects
        </a>
      </div>

    </section>
  )
}