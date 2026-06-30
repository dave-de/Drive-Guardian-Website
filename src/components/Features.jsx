import Reveal from './Reveal.jsx'

const FEATURES = [
  {
    title: 'Automatic drive detection',
    desc: "Senses when you're driving using GPS and motion sensors — nothing to start or stop manually.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" stroke="#6E72F0" strokeWidth="2" strokeLinecap="round" />
        <circle cx="7" cy="17" r="2" stroke="#6E72F0" strokeWidth="2" />
        <circle cx="17" cy="17" r="2" stroke="#6E72F0" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Distraction tracking',
    desc: "Logs calls and texts that happen while you're moving — risky moments become visible, not forgotten.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.18 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" stroke="#6E72F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Live safety score',
    desc: 'A clear weekly accountability score that rewards focused driving and trends up as you improve.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="m12 14 4-4" stroke="#6E72F0" strokeWidth="2" strokeLinecap="round" />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" stroke="#6E72F0" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Accountability partners',
    desc: 'Add someone you trust — a parent, partner or friend — and they get emailed your safe-driving summaries.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="#6E72F0" strokeWidth="2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="#6E72F0" strokeWidth="2" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#6E72F0" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Smart weekly reports',
    desc: "Hourly, daily and weekly breakdowns show exactly when distractions happen — and where you're winning.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#6E72F0" strokeWidth="2" strokeLinejoin="round" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#6E72F0" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Always-on & battery friendly',
    desc: 'Keeps watching over your drives in the background — even after a restart — without draining your phone.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#6E72F0" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
]

// Spotlight that follows the cursor inside each card.
const handleMove = (e) => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', e.clientX - r.left + 'px')
  e.currentTarget.style.setProperty('--my', e.clientY - r.top + 'px')
}

export default function Features() {
  return (
    <section className="block" id="features">
      <div className="wrap center">
        <Reveal><span className="eyebrow">Features</span></Reveal>
        <Reveal delay={1}><h2 className="h2">Everything you need to drive safer</h2></Reveal>
        <Reveal delay={2}>
          <p className="lead">DriveGuardian works silently in the background and turns distracted-driving moments into habits you can actually improve.</p>
        </Reveal>
      </div>
      <div className="wrap">
        <div className="features">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i % 3}>
              <div className="feature" onMouseMove={handleMove}>
                <div className="ico">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
