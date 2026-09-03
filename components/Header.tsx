const navItems = ["About", "Projects", "Skills", "Contact"];

export function Header() {
  return (
    <header className="header-shell">
      <a className="brand" href="#top" aria-label="Kuby Code home">KUBY <span>CODE</span></a>
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
        ))}
      </nav>
      <a className="header-cta" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
    </header>
  );
}
