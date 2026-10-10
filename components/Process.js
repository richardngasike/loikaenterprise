import { PROCESS } from "../lib/site";

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>From first enquiry to delivery.</h2>
          <p>A clear four-step process, so you always know where your order stands.</p>
        </div>

        <div className="process-grid">
          {PROCESS.map((step, index) => (
            <div key={step.title} className="process-step">
              <span className="step-number">
                STEP {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
