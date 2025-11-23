const navigation = [
  { href: "#expertises", label: "Expertises" },
  { href: "#secteurs", label: "Secteurs" },
  { href: "#approche", label: "Approche" },
  { href: "#contact", label: "Contact" }
];

const services = [
  {
    title: "Ingénierie & Conception",
    description:
      "Études techniques, dimensionnement et modélisation 3D pour navires, équipements portuaires et infrastructures offshore.",
    icon: "🛠️"
  },
  {
    title: "Maintenance & Réhabilitation",
    description:
      "Plans de maintenance, interventions sur site, modernisation d’installations critiques et prolongation du cycle de vie.",
    icon: "⚙️"
  },
  {
    title: "Sécurité & Conformité",
    description:
      "Audits réglementaires, évaluation des risques, certification et programmes de formation pour les équipes embarquées.",
    icon: "🛡️"
  },
  {
    title: "Solutions Digitales",
    description:
      "Jumeaux numériques, monitoring embarqué, exploitation de la donnée en temps réel pour optimiser la performance.",
    icon: "🌐"
  }
];

const sectors = [
  "Ports & terminaux",
  "Marine marchande",
  "Offshore & énergie",
  "Défense & sécurité",
  "Industrie & process",
  "Transport & logistique"
];

const process = [
  {
    title: "Diagnostic & Audit",
    description:
      "Collecte de données sur site, inspection et évaluation du capital technique pour définir les priorités d’action."
  },
  {
    title: "Design & Simulation",
    description:
      "Modélisation numérique, dimensionnement et tests de scénarios pour sécuriser les décisions avant exécution."
  },
  {
    title: "Déploiement & Pilotage",
    description:
      "Planification, supervision des interventions et coordination des partenaires jusqu’à la mise en service."
  },
  {
    title: "Transfert & Suivi",
    description:
      "Formation des équipes, livraison de documentation et monitoring continu pour pérenniser la performance."
  }
];

const metrics = [
  { value: "18+", label: "années d’expérience cumulées" },
  { value: "120", label: "missions techniques réalisées" },
  { value: "98%", label: "clients satisfaits & fidèles" }
];

const features = [
  "Ingénieurs pluridisciplinaires certifiés et mobilisables rapidement",
  "Interventions en Tunisie, en Afrique et en Méditerranée",
  "Culture de la sécurité et conformité intégrée à chaque étape",
  "Outils digitaux propriétaires pour accélérer les diagnostics"
];

const contactInfo = [
  { label: "Téléphone", value: "+216 71 761 041", href: "tel:+21671761041" },
  { label: "Email", value: "contact@iceem.tn", href: "mailto:contact@iceem.tn" }
];

export default function HomePage() {
  return (
    <>
      <header>
        <div className="container nav">
          <a className="nav-logo" href="#top">
            <span className="logo-mark">IC</span>
            ICEEM
          </a>
          <nav className="nav-links" aria-label="Navigation principale">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero" id="hero">
          <div className="container">
            <div className="hero-content">
              <div>
                <div className="badge">
                  <span role="img" aria-hidden>
                    🌊
                  </span>
                  Ingénierie & Expertise Maritime
                </div>
                <h1 className="hero-title">
                  Des solutions maritimes et industrielles fiables, pensées pour la performance durable.
                </h1>
                <p className="hero-description">
                  ICEEM accompagne les autorités portuaires, armateurs et industriels avec une expertise locale
                  enrichie par des standards internationaux. Conception, maintenance et sécurité intelligemment
                  orchestrées pour protéger vos opérations critiques.
                </p>
                <div className="hero-cta">
                  <a className="btn btn-primary" href="#contact">
                    Demander un diagnostic
                  </a>
                  <a className="btn btn-outline" href="#expertises">
                    Découvrir nos expertises
                  </a>
                </div>
                <div className="feature-list">
                  {features.map((feature) => (
                    <div className="feature-item" key={feature}>
                      <span className="feature-icon" aria-hidden>
                        ✓
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="metrics">
                {metrics.map((metric) => (
                  <div className="metric-card" key={metric.value}>
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="expertises">
          <div className="container">
            <p className="tagline">Nos expertises</p>
            <h2 className="section-title">
              Architecture, maintenance et sécurité pour vos environnements critiques.
            </h2>
            <p className="section-subtitle">
              Notre équipe rassemble des spécialistes en ingénierie navale, électrique, mécanique et sécurité maritime
              pour couvrir l’ensemble du cycle de vie de vos actifs.
            </p>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-icon" aria-hidden>
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sectors" id="secteurs">
          <div className="container">
            <p className="tagline">Secteurs d’intervention</p>
            <h2 className="section-title">Nos équipes s’adaptent à vos enjeux métiers.</h2>
            <p className="section-subtitle">
              Chaque secteur dispose de contraintes opérationnelles spécifiques. Nous mobilisons des compétences dédiées
              pour garantir une maîtrise totale des risques.
            </p>
            <div className="sector-grid">
              {sectors.map((sector) => (
                <div className="sector-card" key={sector}>
                  <span className="sector-label">{sector}</span>
                  <span>Solutions sur mesure, audit de conformité et accompagnement terrain.</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="process" id="approche">
          <div className="container">
            <p className="tagline">Approche projet</p>
            <h2 className="section-title">Un accompagnement de bout en bout, axé performance.</h2>
            <p className="section-subtitle">
              Nous co-construisons avec vos équipes pour déployer des solutions fiables, mesurables et respectueuses des
              exigences réglementaires.
            </p>
            <div className="process-steps">
              {process.map((step, index) => (
                <article className="step-card" key={step.title}>
                  <span className="step-number">Étape {index + 1}</span>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="container">
            <div className="cta-card">
              <p className="badge">
                <span role="img" aria-hidden>
                  🤝
                </span>
                Parlons de votre projet
              </p>
              <h2 className="section-title" style={{ color: "#fff", marginBottom: "0.5rem" }}>
                Planifions un échange stratégique avec nos experts.
              </h2>
              <p style={{ color: "rgba(255, 255, 255, 0.75)", maxWidth: "540px", lineHeight: 1.6 }}>
                Nous analysons vos enjeux et mettons en place un plan d’action priorisé pour sécuriser, optimiser et
                développer vos activités maritimes ou industrielles.
              </p>
              <div className="cta-actions">
                <a className="btn btn-outline" href="mailto:contact@iceem.tn">
                  Écrire à un consultant
                </a>
                <a className="btn btn-primary" href="tel:+21671761041">
                  Appeler ICEEM
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">ICEEM</div>
            <p>
              Ingénierie, Conseil & Expertise Maritime. Nous sécurisons vos opérations critiques avec des solutions
              robustes et conformes aux normes internationales.
            </p>
          </div>
          <div>
            <span className="tagline" style={{ color: "rgba(255,255,255,0.6)" }}>
              Contact direct
            </span>
            <ul className="footer-list">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <span className="footer-contact">
                    <span>{item.label}</span>
                    <a href={item.href}>{item.value}</a>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="tagline" style={{ color: "rgba(255,255,255,0.6)" }}>
              Adresse
            </span>
            <ul className="footer-list">
              <li>
                Zone Industrielle Charguia 1
                <br />
                2035 Tunis, Tunisie
              </li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} ICEEM. Tous droits réservés.</span>
          <a href="https://iceem.tn" target="_blank" rel="noreferrer">
            www.iceem.tn
          </a>
        </div>
      </footer>
    </>
  );
}
