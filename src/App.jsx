export default function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="container">
        <h1>Mckenzie Dev</h1>
        <div>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#contact" className="btn btn-outline">Let’s Talk</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero">
        <h2>Modern, fast, black-aesthetic sites that convert.</h2>
        <p>
          I build silky-smooth static websites for small businesses: clean code, subtle motion,
          and zero CMS headaches.
        </p>
        <a href="#contact" className="btn btn-primary">Start a project</a>
        <a href="#work" className="btn btn-outline">See work</a>
      </header>

      {/* Work Section */}
      <section id="work" className="container">
        <h3>Selected Work</h3>
        <div className="card">
          <h4>Halo Auto Detailing</h4>
          <p>
            Conversion-focused landing page with sticky pricing and instant contact.
          </p>
        </div>
        <div className="card">
          <h4>Mountain Cafe</h4>
          <p>
            Menu + gallery with lightweight animations and offline-friendly caching.
          </p>
        </div>
        <div className="card">
          <h4>Craft Studio</h4>
          <p>
            Grid portfolio with hover reveals and case study pages.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container">
        <h3>Services</h3>
        <div className="card">
          <h4>Static sites that fly</h4>
          <p>Zero bloat, instant loads, and search-friendly markup.</p>
        </div>
        <div className="card">
          <h4>Motion that guides</h4>
          <p>Micro-interactions to focus user attention.</p>
        </div>
        <div className="card">
          <h4>SEO basics done right</h4>
          <p>Meta, schema, and performance budgets baked in.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container">
        <h3>Let’s Build Your Site</h3>
        <p style={{ textAlign: "center", marginBottom: "1.5rem", color: "#bbb" }}>
          Tell me about your business and I’ll reply with a free homepage mockup.
        </p>
        <div className="card">
          <form>
            <input type="text" placeholder="Your Name" style={{ width: "100%", marginBottom: "1rem", padding: "0.75rem" }} />
            <input type="email" placeholder="Your Email" style={{ width: "100%", marginBottom: "1rem", padding: "0.75rem" }} />
            <textarea placeholder="Project details" rows="5" style={{ width: "100%", marginBottom: "1rem", padding: "0.75rem" }} />
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} Mckenzie Dev. All rights reserved.</p>
      </footer>
    </div>
  );
}
