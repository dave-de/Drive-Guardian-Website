import Reveal from './Reveal.jsx'

const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 20.5v-17c0-.85.94-1.36 1.66-.9l13.2 8.5c.67.43.67 1.37 0 1.8L4.66 21.4c-.72.46-1.66-.05-1.66-.9z" />
  </svg>
)

export default function Download() {
  return (
    <section className="block bg-alt" id="download">
      <div className="wrap">
        <Reveal>
          <div className="cta-final">
            <h2>Ready to drive safer?</h2>
            <p>Get DriveGuardian and start building safer driving habits today.</p>
            {/* Set the real Play Store URL here once the app is published. */}
            <a className="btn btn-light" href="#"><span className="sheen" /><PlayIcon /> Get it on Google Play</a>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,.75)', marginBottom: 0 }}>Coming soon · Android 7.0+</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
