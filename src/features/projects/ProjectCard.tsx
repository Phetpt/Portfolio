import type { CaseStudy } from "@/types/portfolio";

export function ProjectCard({project}: {project: CaseStudy}) {

  return(
    <article className="rounded-lg border border-[#616367] p-6">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p>{project.subtitle}</p>

      <p className="mt-3 text-[#616367]">
        {project.role} · {project.period}
      </p>
      
      <p className="mt-4 leading-7 text-[#616367]">{project.summary}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map( (tag) => (
          <li key={tag} className="rounded border border-[#616367] px-2 py-1 text-sm">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  )
  
}