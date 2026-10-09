import { candidateProfile } from "@/data/profile"
import { impactMetrics } from "@/data/metrics"

export default function About() {
  return(
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-bold">About me</h2>
      <p className="mt-6 max-w-2xl leading-7 text-[#616367]">{candidateProfile.bio}</p>

      <div className="mt-8">
        <h3 className="font-semibold">Specialize</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[#616367]">
          {candidateProfile.specializations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <dl className="mt-10 grid gap-4 sm:grid-cols-2">
        {impactMetrics.map((metric) => (
          <div key={metric.id} className="rounded-lg border border-[#616367] p-6">
            <dt className="font-medium">{metric.label}</dt>
            <dd className="mt-2 text-3xl font-bold">{metric.value}</dd>
            <dd className="mt-3 text-[#616367]">{metric.subtext}</dd>
        </div>
        ))}      
      </dl>
    </section>
  )
}