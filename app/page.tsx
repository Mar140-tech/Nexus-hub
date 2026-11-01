export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Nexus-hub</p>
        <h1>Central platform for network, security, and connectivity operations.</h1>
        <p className="lead">
          Nexus-hub brings together project coordination, infrastructure visibility, and security-aware
          workflows in a single operational foundation.
        </p>

        <div className="feature-grid">
          <article>
            <h2>Network Coordination</h2>
            <p>Track changes, dependencies, and rollout planning across connectivity-focused work.</p>
          </article>
          <article>
            <h2>Security Posture</h2>
            <p>Connect operational context to security review, governance, and risk awareness.</p>
          </article>
          <article>
            <h2>Operational Visibility</h2>
            <p>Give engineering and security teams a shared view of project execution and impact.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
