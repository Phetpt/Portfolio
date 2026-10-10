import { candidateProfile } from "@/data/profile"
import { impactMetrics } from "@/data/metrics"
import { Card } from "@/Components/common/Card"
import { SectionHeader } from "@/Components/common/SectionHeader"

export default function About() {
  return(
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeader title="About me"/>
      <p className="mt-6 max-w-2xl leading-7 text-muted">{candidateProfile.bio}</p>

      <div className="mt-8">
        <h3 className="font-semibold">Specialize</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
          {candidateProfile.specializations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <dl className="mt-10 grid gap-4 sm:grid-cols-2">
        {impactMetrics.map((metric) => (
          <Card key={metric.id} className="rounded-lg border border-muted p-6">
            <dt className="font-medium">{metric.label}</dt>
            <dd className="mt-2 text-3xl font-bold">{metric.value}</dd>
            <dd className="mt-3 text-muted">{metric.subtext}</dd>
        </Card>
        ))}      
      </dl>
    </section>
  )
}