import { candidateProfile } from "@/data/profile"
import Button from "@/Components/common/Button"

export function Hero() {
  return(
    <section id="hero" className="mx-auto max-w-5xl px-6 py-12 sm:py-20">
      <h1 className="text-3xl font-bold sm:text-5xl tracking-tight">
        {candidateProfile.name}
      </h1>
      <p className="mt-4 text-xl">{candidateProfile.title}</p>
      <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
        {candidateProfile.tagline}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button href={`mailto:${candidateProfile.email}`}>Contact Email</Button>
        <Button href={candidateProfile.github} target="_blank" rel="noopener noreferrer">Github</Button>
        <Button href={candidateProfile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</Button>
        <Button href="#projects" >Projects</Button>
      </div>

    </section>
  )
}