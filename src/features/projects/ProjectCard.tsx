import type { CaseStudy } from "@/types/portfolio";
import { Badge } from "@/Components/common/Badge";
import { Card } from "@/Components/common/Card";

export function ProjectCard({project}: {project: CaseStudy}) {

  return(
    <article>
      <Card>
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p>{project.subtitle}</p>

        <p className="mt-3 text-muted">
          {project.role} · {project.period}
        </p>

        <p className="mt-4 leading-7 text-muted">{project.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map( (tag) => (
            <li key={tag}>
              <Badge>{tag}</Badge>
            </li>
          ))}
        </ul>
      </Card>
      
    </article>
  )
  
}