import { useRef, useState } from 'react'
import Reveal from './Reveal.jsx'

const QA = [
  { q: 'Does it read my messages or calls?', a: 'No. DriveGuardian only detects that an event happened (like a call or text while driving) — it never reads, stores, or shares the content of your messages, calls, or your contacts.' },
  { q: 'Does it work when the app is closed?', a: 'Yes. It runs as a lightweight background service that keeps monitoring your drives — even after you close the app or restart your phone.' },
  { q: 'Will it drain my battery?', a: "It's designed to be battery-friendly, using efficient motion and location checks so it can stay on all day without noticeably affecting your battery." },
  { q: 'What does my accountability partner see?', a: 'Only high-level safe-driving summaries you choose to share. They never see your location, your messages, or your call details.' },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  const bodyRef = useRef(null)
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen((o) => !o)}>
        {q}
        <span className="pm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>
        </span>
      </button>
      <div className="faq-a" ref={bodyRef} style={{ maxHeight: open ? bodyRef.current?.scrollHeight : 0 }}>
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function Faq() {
  return (
    <section className="block" id="faq">
      <div className="wrap center">
        <Reveal><span className="eyebrow">FAQ</span></Reveal>
        <Reveal delay={1}><h2 className="h2">Questions, answered</h2></Reveal>
      </div>
      <div className="wrap">
        <Reveal delay={2}>
          <div className="faq">
            {QA.map((item) => <FaqItem key={item.q} {...item} />)}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
