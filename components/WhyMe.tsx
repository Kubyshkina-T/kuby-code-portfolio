const qualities = [
  ["Independent", "I take ownership, move proactively and keep the path forward clear.", "↗"],
  ["Persistent", "I don’t give up easily — I keep iterating until the problem is solved.", "◎"],
  ["Versatile", "I adapt quickly, learn fast and bring flexibility to every project.", "✦"],
];

export function WhyMe() {
  return (
    <section className="section-shell section-block why-section">
      <p className="section-kicker reveal">04 / THE DIFFERENCE</p><h2 className="reveal">Why work with <em>me?</em></h2>
      <div className="quality-grid">{qualities.map(([title, text, icon]) => <article className="quality-card reveal" key={title}><span>{icon}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </section>
  );
}
