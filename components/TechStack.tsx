const stack = ["React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express", "MongoDB", "HTML", "CSS", "REST API", "Git/GitHub"];

export function TechStack() {
  return (
    <section className="section-shell section-block stack-section" id="skills">
      <div className="section-heading reveal"><div><p className="section-kicker">03 / TOOLKIT</p><h2>Tech stack<span>.</span></h2></div><p>The technologies I use to move ideas from the sketchbook into the real world.</p></div>
      <div className="stack-list reveal">{stack.map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</span>)}</div>
    </section>
  );
}
