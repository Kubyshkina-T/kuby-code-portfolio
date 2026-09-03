import Image from "next/image";

export function Hero() {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy reveal">
        <p className="eyebrow"><span>✦</span> Available for freelance projects</p>
        <h1>Hi, I’m Tanya</h1>
        <p className="hero-role">Full Stack Developer<span>.</span></p>
        <p className="handwritten">Give me the problem — I’ll figure it out.</p>
        <p className="hero-description">
          I build modern, scalable web applications that feel fast, clear and human. From first idea to a reliable product, I stay curious and keep moving.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View Projects <span aria-hidden="true">↘</span></a>
          <a className="button button-secondary" href="#contact">Contact Me <span aria-hidden="true">✉</span></a>
        </div>
        <ul className="hero-notes" aria-label="Working values">
          <li><b>◇</b><span><strong>Clean code</strong>Readable & maintainable</span></li>
          <li><b>⌁</b><span><strong>Steady delivery</strong>Clear, useful progress</span></li>
          <li><b>♡</b><span><strong>User focused</strong>Details that matter</span></li>
        </ul>
      </div>
      <div className="hero-visual reveal reveal-delay">
        <span className="hero-code hero-code-one" aria-hidden="true">{`{ }`}</span>
        <span className="hero-code hero-code-two" aria-hidden="true">✦</span>
        <div className="portrait-frame">
          <Image src="/hero-image.png" alt="Portrait of Tanya, full stack developer" width={1122} height={1402} priority unoptimized sizes="(max-width: 800px) 90vw, 48vw" />
        </div>
      </div>
    </section>
  );
}
