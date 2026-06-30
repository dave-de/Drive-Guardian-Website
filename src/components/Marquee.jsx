const ITEMS = [
  '🚗 Automatic drive detection',
  '📵 Distraction tracking',
  '📈 Live safety score',
  '🤝 Accountability partners',
  '🔔 Smart reports',
  '🔒 Privacy-first',
]

export default function Marquee() {
  // Duplicate the list so the infinite scroll loops seamlessly.
  const loop = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee">
      <div className="track">
        {loop.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  )
}
