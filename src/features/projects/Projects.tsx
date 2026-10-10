import { caseStudy } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "@/Components/common/SectionHeader";

export function Projects() {

  return(
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeader title="Projects"/>

      <div className="mt-6 gap-6 grid md:grid-cols-2">
        {caseStudy.map( (caseStudy) => (
          <ProjectCard key={caseStudy.id} project={caseStudy}/>
        ))}
      </div>
      
    </section>
  )
}