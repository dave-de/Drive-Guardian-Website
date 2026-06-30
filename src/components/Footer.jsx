export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap foot">
        <div className="foot-brand">
          <span className="logo" style={{ width: 32, height: 32, borderRadius: 10 }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </span>
          DriveGuardian
        </div>
        <div>
          <span>© 2026 DriveGuardian. All rights reserved.</span>
          <a href="/privacy.html">Privacy</a>
          <a href="mailto:support@driveguardian.app">Contact</a>
        </div>
      </div>
    </footer>
  )
}
