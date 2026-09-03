const facts = [
  ["⌘", "Full stack", "End-to-end thinking"],
  ["↗", "Always learning", "Curious by default"],
  ["◎", "Based in Europe", "Available worldwide"],
];

export function About() {
  return (
    <section className="section-shell" id="about">
      <div className="about-card reveal">
        <div className="section-kicker">01 / ABOUT</div>
        <div className="about-copy">
          <p className="mini-title">A little about me</p>
          <h2>I turn complex ideas into <em>simple experiences.</em></h2>
          <p>I’m Tanya — a full stack developer who enjoys thoughtful interfaces, solid foundations and the satisfying moment when a difficult problem finally clicks.</p>
        </div>
        <div className="facts">
          {facts.map(([icon, title, detail]) => <div className="fact" key={title}><span>{icon}</span><strong>{title}</strong><small>{detail}</small></div>)}
        </div>
      </div>
    </section>
  );
}
