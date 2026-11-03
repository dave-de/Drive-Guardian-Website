const Check = () => (
  <span className="check">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path d="M20 6 9 17l-5-5" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
)

const POINTS = [
  'Only your own activity is tracked — on your device.',
  'Partners only see safe-driving summaries you choose to share.',
  'You choose what you share — your data stays within your family group.',
  'No ads. No selling your data. Ever.',
]

export default function Privacy() {
  return (
    <section className="block" id="privacy">
      <div className="wrap privacy-grid">
        <div>
          <span className="eyebrow">Privacy first</span>
          <h2 className="h2">Your data stays yours</h2>
          <p className="lead">
            DriveGuardian only uses what it needs to help you drive safely — and never sells your data.
          </p>
          <ul className="privacy-list">
            {POINTS.map((p) => (
              <li key={p}><Check /> {p}</li>
            ))}
          </ul>
          <p style={{ marginTop: 24 }}>
            <a className="btn btn-primary" href="/privacy.html">Read our Privacy Policy</a>
          </p>
        </div>
        <div className="cta-band" style={{ borderRadius: 24 }}>
          <h2 style={{ fontSize: 26 }}>Stay focused. Stay safe.</h2>
          <p>
            Distracted driving is one of the leading causes of crashes. DriveGuardian helps you build the
            habit of putting the phone down.
          </p>
        </div>
      </div>
    </section>
  )
}
