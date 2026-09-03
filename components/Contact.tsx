const contacts = [
  ["Email", "hello@kubycode.com", "mailto:hello@kubycode.com", "✉"],
  ["GitHub", "github.com", "https://github.com/", "⌘"],
  ["LinkedIn", "linkedin.com", "https://www.linkedin.com/", "in"],
  ["Upwork", "upwork.com", "https://www.upwork.com/", "up"],
];

export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-shell contact-inner reveal">
        <div className="contact-copy"><p className="section-kicker">05 / CONTACT</p><h2>Have a project<br />in <em>mind?</em></h2><p>Let’s build something useful, thoughtful and a little bit special.</p><a className="button button-dark" href="mailto:hello@kubycode.com">Start a conversation <span>↗</span></a></div>
        <div className="contact-list">{contacts.map(([title, value, url, icon]) => <a href={url} target={url.startsWith("http") ? "_blank" : undefined} rel={url.startsWith("http") ? "noreferrer" : undefined} key={title}><span>{icon}</span><div><small>{title}</small><strong>{value}</strong></div><b>↗</b></a>)}</div>
      </div>
    </section>
  );
}
