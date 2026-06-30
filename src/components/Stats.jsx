import Reveal from './Reveal.jsx'
import Counter from './Counter.jsx'

const STATS = [
  { to: 3, suffix: 's', label: 'To detect a distraction' },
  { to: 24, suffix: '/7', label: 'Always-on monitoring' },
  { to: 7, suffix: '×', label: 'Weekly accountability' },
  { to: 0, suffix: '', label: 'Ads, ever' },
]

// 3D tilt that follows the cursor (perspective set on the outer wrapper).
const onMove = (e) => {
  const c = e.currentTarget
  const r = c.getBoundingClientRect()
  const px = (e.clientX - r.left) / r.width - 0.5
  const py = (e.clientY - r.top) / r.height - 0.5
  c.style.transform = `rotateY(${px * 16}deg) rotateX(${-py * 16}deg) translateY(-6px)`
}
const onLeave = (e) => {
  e.currentTarget.style.transform = ''
}

export default function Stats() {
  return (
    <section className="block">
      <div className="wrap">
        <div className="stats">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i}>
              <div className="statbox-outer">
                <div className="statbox" onMouseMove={onMove} onMouseLeave={onLeave}>
                  <b><Counter to={s.to} suffix={s.suffix} /></b>
                  <span>{s.label}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
