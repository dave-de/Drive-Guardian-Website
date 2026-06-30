import Reveal from './Reveal.jsx'
import Counter from './Counter.jsx'

const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 20.5v-17c0-.85.94-1.36 1.66-.9l13.2 8.5c.67.43.67 1.37 0 1.8L4.66 21.4c-.72.46-1.66-.05-1.66-.9z" />
  </svg>
)

export default function Hero() {
  return (
    <section className="hero">
      <div className="aurora"><i className="a1" /><i className="a2" /><i className="a3" /></div>
      <div className="grid-overlay" />
      <div className="wrap hero-grid">
        <div>
          <Reveal immediate>
            <span className="pill"><span className="dot" /> Real-time safe-driving monitoring</span>
          </Reveal>
          <Reveal immediate delay={1}>
            <h1><span className="grad-text">Drive focused.</span><br />Stay accountable.</h1>
          </Reveal>
          <Reveal immediate delay={2}>
            <p className="sub">
              DriveGuardian quietly notices when you're using your phone behind the wheel — and keeps an
              accountability partner in the loop. Build safer habits with a live safety score and weekly reports.
            </p>
          </Reveal>
          <Reveal immediate delay={3}>
            <div className="hero-cta">
              <a className="btn btn-light" href="#download"><span className="sheen" /><PlayIcon /> Get it on Google Play</a>
              <a className="btn btn-ghost" href="#features">Explore features</a>
            </div>
          </Reveal>
          <Reveal immediate delay={4}>
            <div className="trust">
              <div><b><Counter to={96} suffix="%" /></b><span>Focused-drive score</span></div>
              <div><b><Counter to={24} suffix="/7" /></b><span>Background monitoring</span></div>
              <div><b><Counter to={100} suffix="%" /></b><span>Private &amp; ad-free</span></div>
            </div>
          </Reveal>
        </div>

        <Reveal immediate delay={2}>
          <div className="phone-wrap">
            <div className="halo" />
            <div className="badge-float bf1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Safe trip logged
            </div>
            <div className="badge-float bf2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" stroke="#ef4444" strokeWidth="2" strokeLinejoin="round" /><path d="M12 9v4M12 17h.01" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" /></svg>
              Distraction caught
            </div>
            <div className="phone">
              <div className="notch" />
              <div className="pcard">
                <div className="lbl">SAFETY SCORE</div>
                <div className="ring"><div><div><b>92</b><br /><small>this week</small></div></div></div>
                <div className="pgrid">
                  <div className="pstat"><b>0</b><span>Texts while driving</span></div>
                  <div className="pstat"><b>2</b><span>Calls answered</span></div>
                  <div className="pstat"><b>5</b><span>Safe trips</span></div>
                  <div className="pstat"><b>1</b><span>Partner</span></div>
                </div>
              </div>
              <nav className="pnav">
                <span className="tab on">
                  <span className="pico"><svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" stroke="#9a9dff" strokeWidth="2" strokeLinejoin="round" /></svg></span>
                  Home
                </span>
                <span className="tab">
                  <span className="pico"><svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#6f719c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                  Activity
                </span>
                <span className="tab">
                  <span className="pico"><svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="#6f719c" strokeWidth="2" strokeLinecap="round" /><circle cx="9" cy="7" r="4" stroke="#6f719c" strokeWidth="2" /></svg></span>
                  Partners
                </span>
                <span className="tab">
                  <span className="pico"><svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#6f719c" strokeWidth="2" strokeLinejoin="round" /><path d="M14 2v6h6" stroke="#6f719c" strokeWidth="2" strokeLinejoin="round" /></svg></span>
                  Reports
                </span>
                <span className="tab">
                  <span className="pico"><svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" stroke="#6f719c" strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="7" r="4" stroke="#6f719c" strokeWidth="2" /></svg></span>
                  Profile
                </span>
              </nav>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
