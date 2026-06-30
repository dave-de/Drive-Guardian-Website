import Reveal from './Reveal.jsx'

export default function Testimonial() {
  return (
    <section className="block bg-alt">
      <div className="wrap">
        <Reveal>
          <div className="quote">
            <div className="mark">“</div>
            <p>It's like having a co-pilot who keeps me honest. My phone stays down, my score goes up, and my family can see I'm driving safe.</p>
            <div className="who">— An early DriveGuardian driver</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
