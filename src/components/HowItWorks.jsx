import Reveal from './Reveal.jsx'

const STEPS = [
  { n: 1, title: 'Install & grant access', desc: 'Download, sign in, and allow the permissions it needs to detect distracted driving.' },
  { n: 2, title: 'Add a partner', desc: 'Invite an accountability partner by email — they receive your safe-driving summaries automatically.' },
  { n: 3, title: 'Just drive', desc: 'DriveGuardian runs in the background, tracks distractions, and builds your safety score — automatically.' },
]

export default function HowItWorks() {
  return (
    <section className="block bg-alt" id="how">
      <div className="wrap center">
        <Reveal><span className="eyebrow">How it works</span></Reveal>
        <Reveal delay={1}><h2 className="h2">Set it once, drive safer for good</h2></Reveal>
      </div>
      <div className="wrap">
        <div className="steps">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i}>
              <div className="step">
                <div className="num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
