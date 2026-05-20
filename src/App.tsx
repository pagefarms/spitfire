import { useEffect, type CSSProperties } from 'react'
import andyPortrait from './assets/andy-page.png'
import chipPortrait from './assets/chip-ransler.png'
import richmondImage from './assets/richmond-pixel.png'
import spitfireLogo from './assets/spit-fire-logo.png'
import './App.css'

const contactHref =
  'mailto:heyandypage@gmail.com?subject=Spitfire%20Works%20engagement'

const stats = [
  ['01', 'Audit the workflow'],
  ['02', 'Build the fix'],
  ['03', 'Automate the drag'],
  ['04', 'Keep improving'],
]

const capabilities = [
  {
    title: 'Ops bottlenecks',
    text: 'Forms, reports, vendor portals, handoffs, approvals, and spreadsheet rituals that quietly steal hours every week.',
  },
  {
    title: 'Internal software',
    text: 'Dashboards, admin tools, parsers, APIs, portals, QA workflows, and reporting apps built with AI-assisted speed.',
  },
  {
    title: 'Growth execution',
    text: 'Ad creative, landing pages, scraping, enrichment, outbound, lifecycle, SEO, paid acquisition, and analytics in one loop.',
  },
  {
    title: 'AI where it helps',
    text: 'Agents, MCPs, image generation, document extraction, workflow automation, and human review when they make work faster.',
  },
]

const peReasons = [
  {
    title: 'Too small for a full tech team',
    text: 'Many lower-middle-market portcos need internal software, cleaner data, better reporting, and growth execution before they can justify a real engineering function.',
  },
  {
    title: 'Too messy for normal consultants',
    text: 'The work is usually inside the tools, inboxes, vendor portals, spreadsheets, ad accounts, and undocumented rituals that never make it into a strategy deck.',
  },
  {
    title: 'Too urgent for slow agencies',
    text: 'We use AI-assisted building, automation, and hands-on operator judgment to get useful systems in front of the business quickly.',
  },
]

const founderCards = [
  {
    title: 'Builder first',
    text: 'Strategy is useful only when it turns into a working system. We can scope the work, write the code, wire the tools, and launch the first version.',
  },
  {
    title: 'Operator taste',
    text: 'The work has to survive real teams, real inboxes, real spreadsheets, real ad accounts, and real Monday mornings.',
  },
  {
    title: 'AI-native speed',
    text: 'We use AI to compress build cycles, create assets, inspect messy data, write glue code, and move faster without pretending every fix is magic.',
  },
]

const phases = [
  {
    label: 'Discover',
    meta: '2-week operating sprint',
    text: 'Go into the portfolio company, map the real workflow, inspect the tools, and find the expensive manual loops.',
  },
  {
    label: 'Define',
    meta: 'Rank by leverage',
    text: 'Pick the highest-return fixes by workflow pain, revenue upside, implementation speed, and adoption likelihood.',
  },
  {
    label: 'Build',
    meta: 'Ship the first system',
    text: 'Design, code, automate, integrate, test, launch ads, build assets, and put working systems in front of users.',
  },
  {
    label: 'Improve',
    meta: 'Stay in the loop',
    text: 'Iterate after real usage, train the team, watch the metrics, and expand into the next bottleneck.',
  },
]

const projectReceipts = [
  {
    name: 'Cost Analysts',
    type: 'Waste hauling / ops automation',
    built: [
      'Waste-hauling savings lead form',
      'Vendor portal automation CLIs',
      'Internal workflow scripts',
      'Process tooling for repetitive operator work',
    ],
  },
  {
    name: 'RecMint',
    type: 'Solar document intelligence',
    built: [
      'CoC document parsing workflow',
      'Planset data extraction workflow',
      'Structured outputs from messy solar documents',
      'Installer-facing review support tools',
    ],
  },
  {
    name: 'Scenthound',
    type: 'Franchise operating system',
    built: [
      'Consumer mobile app',
      'Customer web app',
      'Corporate reporting surfaces',
      'Franchisor internal tooling',
      'Developer, design, and QA team management',
    ],
  },
  {
    name: 'Novela Weddings',
    type: 'Marketplace + AI media ops',
    built: [
      'Vendor and venue scraping',
      'Contact enrichment and outreach workflows',
      'Email warmup setup',
      'Image color-palette API',
      'Wedding photo auto-tagging API',
    ],
  },
  {
    name: 'Campus Ready',
    type: 'Commerce + lifecycle analytics',
    built: [
      'WooCommerce and Brevo integration',
      'Custom event API',
      'GA tracking and reporting',
      'SEO overhaul',
      'Email reputation and domain work',
      'Verification webapp',
    ],
  },
  {
    name: 'ION',
    type: 'Ecommerce growth stack',
    built: [
      'Recharge and Shopify implementation',
      'Meta ads execution and auditing',
      'Affiliate GTM scraping',
      'Klaviyo flows',
      'Reporting and auditing app',
      'Creative automation',
      'SEO improvements',
    ],
  },
  {
    name: 'Frandera',
    type: 'Franchise data engine',
    built: [
      'Full web development',
      'FDD extraction workflow',
      'Contact enrichment pipeline',
      'Google Maps workflows',
      'LoopNet research workflows',
      'Owner email discovery workflows',
    ],
  },
  {
    name: 'Richmond Consignment',
    type: 'Local ops platform',
    built: [
      'Authenticated webapp',
      'Resend notification workflows',
      'Weekly payout reports',
      'Pickup scheduling',
      'Meta ads',
      'Quo outreach',
    ],
  },
]

const shippedLinks = [
  ['Frandera.com', 'https://frandera.com/'],
  ['RichmondConsignment.com', 'https://richmondconsignment.com/'],
  ['BankingTerminal.com', 'https://bankingterminal.com/'],
  ['JSONWorkspace.com', 'https://www.jsonworkspace.com/'],
  ['PeptideBenefitsGuide.com', 'https://www.peptidebenefitsguide.com/'],
  ['Tailframed.com', 'https://www.tailframed.com/'],
]

const toolGroups = [
  {
    category: 'Build',
    tools: [
      'Cursor',
      'Claude',
      'Supabase',
      'Vercel',
      'Railway',
      'Render',
      'Bubble.io',
      'PrintingPress.dev',
    ],
  },
  {
    category: 'Automate',
    tools: ['Zapier', 'Gumloop', 'Apify', 'AgentMail', 'Resend', 'Mailgun'],
  },
  {
    category: 'Growth',
    tools: [
      'Meta Ads Manager',
      'Customer.io',
      'Warmbox',
      'Higgsfield',
      'Shopify',
      'Squarespace',
      'Quo',
    ],
  },
  {
    category: 'Ops + data',
    tools: [
      'Airtable',
      'Stripe',
      'Snowflake',
      'PostHog',
      'RingCentral',
      'Notion',
    ],
  },
]

const discoveryDeliverables = [
  'Workflow map of the current operating reality',
  'Ranked list of bottlenecks, automation targets, and internal tool opportunities',
  'First-build recommendation with expected leverage and adoption risk',
  'Prototype, workflow fix, or technical proof where speed matters',
]

const sprintOutputRows = [
  {
    bottleneck: 'Weekly reporting',
    drag: 'Manual spreadsheet consolidation',
    fix: 'Automated report pipeline',
    effort: 'Sprint-sized',
    leverage: 'Cleaner visibility',
  },
  {
    bottleneck: 'Lead follow-up',
    drag: 'Slow handoff from form to CRM',
    fix: 'Routing + enrichment workflow',
    effort: 'Fast',
    leverage: 'Faster response',
  },
  {
    bottleneck: 'Document review',
    drag: 'Manual extraction from PDFs',
    fix: 'Parser + review queue',
    effort: 'Focused',
    leverage: 'Less operator drag',
  },
]

const fitSignals = [
  'A portco has manual work everyone complains about but nobody owns.',
  'Reporting is slow, unreliable, or trapped in spreadsheets.',
  'Growth work is spread across too many tools, vendors, and half-finished ideas.',
  'The team needs internal software but cannot justify a full dev team.',
  'AI could help, but nobody inside has time to figure out where.',
]

const commercialModels = [
  {
    title: 'Paid by default',
    text: 'Most work is structured as a paid discovery sprint, build engagement, or ongoing improvement retainer. Clear scope, real work, no vague advisory fog.',
  },
  {
    title: 'Selective upside alignment',
    text: 'In special cases, especially acquisition targets, we may take part of compensation as equity, an advisory stake, a success fee, or a hybrid structure.',
  },
  {
    title: 'Only when incentives are clean',
    text: 'Upside only makes sense when the work can materially affect enterprise value and we have enough access, speed, and trust to influence the outcome.',
  },
]

const systemInputs = [
  'CRM',
  'Email',
  'Spreadsheets',
  'Shopify',
  'Support',
  'Accounting',
  'Documents',
  'Ad accounts',
]

const philosophy = [
  'No abstract AI strategy decks.',
  'No pretending every problem needs a chatbot.',
  'No six-month rebuild when a sharp workflow tool ships faster.',
  'No disappearing after the first demo.',
]

const whyNamePillars = [
  {
    title: 'Speed when it matters',
    text: 'The Spitfire became legendary because it moved fast when speed was not optional. That is the standard here: reduce the time between seeing the bottleneck and shipping the fix.',
  },
  {
    title: 'Engineering precision',
    text: 'The point is not speed for its own sake. Systems should be shaped carefully: every workflow, automation, dashboard, and integration should exist for a reason.',
  },
  {
    title: 'Adaptable by design',
    text: 'Businesses change after the first version goes live. The work has to keep improving as the team uses it, breaks it, trusts it, and asks for the next layer.',
  },
  {
    title: 'Built for results',
    text: 'The name is a reminder to stay practical. No decorative strategy. No theater. Build the thing, put it in the business, and make the operation better.',
  },
]

const teamMembers = [
  {
    name: 'Andy Page',
    role: 'Founder / Managing Partner',
    initials: 'AP',
    portrait: andyPortrait,
  },
  {
    name: 'Chip Ransler',
    role: 'Founder / Managing Partner',
    initials: 'CR',
    portrait: chipPortrait,
  },
]

function useRevealAnimations(routeKey: string) {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    targets.forEach((target) => observer.observe(target))

    return () => observer.disconnect()
  }, [routeKey])
}

function TeamSection() {
  return (
    <section className="team-section" id="team" aria-labelledby="team-title">
      <div className="team-panel" data-reveal>
        <div className="team-copy">
          <p className="eyebrow">Team</p>
          <h2 id="team-title">Founders and project teams.</h2>
          <p>
            Spitfire Works is led by Andy Page and Chip Ransler. Engagements
            are founder-led, with small implementation teams assembled around
            the work required for each project.
          </p>
        </div>
        <div className="team-details" aria-label="Spitfire Works founders">
          <div className="team-roster">
            {teamMembers.map((member) => (
              <article className="team-member" key={member.name}>
                <div className="team-member-mark" aria-hidden="true">
                  {member.portrait ? (
                    <img src={member.portrait} alt="" />
                  ) : (
                    <span>{member.initials}</span>
                  )}
                </div>
                <div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="team-note">
            Project teams may include developers, automation specialists,
            designers, growth operators, data specialists, and QA.
          </p>
        </div>
      </div>
    </section>
  )
}

function WhyNamePage() {
  return (
    <>
      <section className="name-hero-section" aria-labelledby="name-title">
        <div className="name-hero-copy" data-reveal>
          <p className="eyebrow">Why the name</p>
          <h1 id="name-title">Spitfire means speed with engineering taste.</h1>
          <p className="hero-lede">
            The name comes from the Spitfire aircraft: fast, precise,
            adaptable, and built to matter under pressure. That is the standard
            for the work here.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href={contactHref}>
              Email Andy
            </a>
            <a className="secondary-link" href="/">
              Back home
            </a>
          </div>
        </div>
      </section>

      <section className="name-story-section" aria-labelledby="name-story-title">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">The standard</p>
          <h2 id="name-story-title">
            Not nostalgia. A useful operating principle.
          </h2>
          <p>
            A good implementation partner should move quickly, engineer the
            details, adapt after contact with reality, and stay pointed at
            results.
          </p>
        </div>
        <div className="name-pillar-grid">
          {whyNamePillars.map((pillar, index) => (
            <article
              className="name-pillar-card"
              data-reveal
              key={pillar.title}
              style={{ '--delay': `${index * 70}ms` } as CSSProperties}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="name-manifesto-section" aria-labelledby="mission-title">
        <div className="name-manifesto-card" data-reveal>
          <p className="eyebrow">The modern mission</p>
          <h2 id="mission-title">
            The fight is against drag inside the business.
          </h2>
          <p>
            Manual inefficiency, technical debt, scattered growth systems,
            brittle reporting, and half-owned workflows are the modern
            operating problems. Spitfire Works exists to help companies move
            through that mess with speed, precision, and practical force.
          </p>
        </div>
      </section>
    </>
  )
}

function App() {
  const isWhyNamePage = window.location.pathname === '/why-the-name'

  useRevealAnimations(isWhyNamePage ? 'why-name' : 'home')

  useEffect(() => {
    document.title = isWhyNamePage
      ? 'Why the name - Spitfire Works'
      : 'Spitfire Works - technical strike team for portfolio companies'
  }, [isWhyNamePage])

  return (
    <div className="site-shell">
      <header className="site-header" data-reveal>
        <a className="brand-mark" href="/" aria-label="Spitfire Works home">
          <span className="brand-icon">
            <img src={spitfireLogo} alt="" />
          </span>
          <span>Spitfire Works</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="/#pe">PE fit</a>
          <a href="/#work">Work</a>
          <a href="/#engagement">Engagement</a>
          <a href="/#receipts">Receipts</a>
          <a href="/#tools">Stack</a>
          <a href="/why-the-name">Name</a>
          <a href="/#commercial">Terms</a>
        </nav>
        <a className="nav-cta" href={contactHref}>
          Email Andy
        </a>
      </header>

      <main id="top">
        {isWhyNamePage ? (
          <WhyNamePage />
        ) : (
          <>
            <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow">
                Spitfire Works / PE operating partner
              </p>
              <h1 id="hero-title">
                The technical strike team for portfolio companies.
              </h1>
              <p className="hero-lede">
                We partner with small PE firms and operators to find
                bottlenecks, build internal tools, automate workflows, ship
                growth systems, and use AI wherever it makes the work faster.
              </p>
              <div className="hero-actions">
                <a className="primary-link" href={contactHref}>
                  Email Andy
                </a>
                <a className="secondary-link" href="#receipts">
                  See project work
                </a>
              </div>
            </div>

            <figure className="hero-media" data-reveal>
              <img
                src={richmondImage}
                alt="Pixel-art Richmond skyline over a river and park in spring"
              />
            </figure>
          </div>

          <div className="stat-row" aria-label="Operating loop">
            {stats.map(([number, label], index) => (
              <div
                className="stat-card"
                data-reveal
                key={label}
                style={{ '--delay': `${index * 60}ms` } as CSSProperties}
              >
                <span>{number}</span>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="intro-strip" aria-label="Positioning">
          <p data-reveal>
            We are not an AI consultancy. We are an AI-assisted execution team
            for portfolio companies with messy operations, underbuilt systems,
            and expensive manual work.
          </p>
        </section>

        <section className="pe-section" id="pe" aria-labelledby="pe-title">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">For PE firms</p>
            <h2 id="pe-title">
              Portco improvement should be shipped, not studied forever.
            </h2>
            <p>
              Small funds need someone who can enter the operating mess, find
              the leverage, and build. Not another team that stops at a roadmap.
            </p>
          </div>
          <div className="pe-grid">
            {peReasons.map((reason, index) => (
              <article
                className="pe-card"
                data-reveal
                key={reason.title}
                style={{ '--delay': `${index * 70}ms` } as CSSProperties}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="fit-section" id="fit" aria-labelledby="fit-title">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Good fit when</p>
            <h2 id="fit-title">
              Bring us in when the work is expensive and stuck.
            </h2>
          </div>
          <ul className="fit-list" data-reveal>
            {fitSignals.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section-panel" id="work" aria-labelledby="work-title">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">What we fix</p>
            <h2 id="work-title">
              We fix the unsexy systems that slow portfolio companies down.
            </h2>
          </div>
          <div className="capability-grid">
            {capabilities.map((item, index) => (
              <article
                className="capability-card"
                data-reveal
                key={item.title}
                style={{ '--delay': `${index * 70}ms` } as CSSProperties}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="system-section" aria-labelledby="system-title">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Where we find leverage</p>
            <h2 id="system-title">
              Every portco has tools, people, and manual glue. We turn the glue
              into software.
            </h2>
          </div>
          <div className="system-map" data-reveal>
            <div className="system-nodes">
              {systemInputs.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="system-core">
              <span>Execution layer</span>
              <p>AI / code / MCPs / automations / humans</p>
            </div>
          </div>
        </section>

        <section
          className="section-panel engagement-section"
          id="engagement"
          aria-labelledby="engagement-title"
        >
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Engagement model</p>
            <h2 id="engagement-title">
              Discover {'->'} Define {'->'} Build {'->'} Improve
            </h2>
            <p>
              Start with a 2-week sprint inside a portfolio company. Find the
              expensive bottlenecks. Pick the first high-leverage fix. Build it.
              Stay involved until it works in the actual business.
            </p>
          </div>
          <ol className="phase-track">
            {phases.map((phase, index) => (
              <li
                className="phase-card"
                data-reveal
                key={phase.label}
                style={{ '--delay': `${index * 80}ms` } as CSSProperties}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{phase.label}</h3>
                <p className="phase-meta">{phase.meta}</p>
                <p>{phase.text}</p>
              </li>
            ))}
          </ol>
          <div className="deliverable-panel" data-reveal>
            <div className="deliverable-copy">
              <p className="eyebrow">What the sprint produces</p>
              <h3>A decision-ready map of where to build first.</h3>
              <ul>
                {discoveryDeliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="sprint-output" aria-label="Representative first sprint output">
              <div className="sprint-output-header">
                <span>First sprint output</span>
                <span>Representative memo</span>
              </div>
              <div className="sprint-output-table">
                <div className="sprint-output-row sprint-output-head">
                  <span>Bottleneck</span>
                  <span>Current drag</span>
                  <span>First fix</span>
                  <span>Build effort</span>
                  <span>Leverage</span>
                </div>
                {sprintOutputRows.map((row) => (
                  <div className="sprint-output-row" key={row.bottleneck}>
                    <span>{row.bottleneck}</span>
                    <span>{row.drag}</span>
                    <span>{row.fix}</span>
                    <span>{row.effort}</span>
                    <span>{row.leverage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="receipts-section" id="receipts" aria-labelledby="receipts-title">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Projects / receipts</p>
            <h2 id="receipts-title">A partial map of shipped systems.</h2>
          </div>
          <div className="receipts-grid">
            {projectReceipts.map((project, index) => (
              <article
                className="receipt-card"
                data-reveal
                key={project.name}
                style={{ '--delay': `${(index % 4) * 60}ms` } as CSSProperties}
              >
                <span>{project.type}</span>
                <h3>{project.name}</h3>
                <p className="receipt-label">Built</p>
                <ul className="receipt-built-list">
                  {project.built.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="shipped-links" data-reveal>
            <p className="eyebrow">Live / shipped links</p>
            <div>
              {shippedLinks.map(([label, href]) => (
                <a href={href} target="_blank" rel="noreferrer" key={label}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          className="founder-section"
          aria-labelledby="founder-title"
        >
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Founder-led</p>
            <h2 id="founder-title">
              Founder-led by an operator who actually builds.
            </h2>
            <p>
              Spitfire Works is led by a builder who uses AI daily to ship
              software, automations, growth systems, internal tools, ad
              workflows, and strange one-off fixes inside real businesses.
            </p>
          </div>
          <div className="founder-grid">
            {founderCards.map((card, index) => (
              <article
                className="founder-card"
                data-reveal
                key={card.title}
                style={{ '--delay': `${index * 70}ms` } as CSSProperties}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="tools-section" id="tools" aria-labelledby="tools-title">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Tools we move through</p>
            <h2 id="tools-title">
              Comfortable in the messy middle of AI, code, ads, ops, and growth.
            </h2>
          </div>
          <div className="tool-group-grid" data-reveal>
            {toolGroups.map((group) => (
              <article className="tool-group-card" key={group.category}>
                <h3>{group.category}</h3>
                <div className="tool-cloud">
                  {group.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="commercial-section"
          id="commercial"
          aria-labelledby="commercial-title"
        >
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Commercial model</p>
            <h2 id="commercial-title">
              Paid by default. Aligned on upside when it actually makes sense.
            </h2>
            <p>
              We are not trying to make every engagement clever. Most work is
              paid directly. But when the target, timing, and value creation are
              obvious, we are open to structures that let us participate in the
              upside we help create.
            </p>
          </div>
          <div className="commercial-grid">
            {commercialModels.map((model, index) => (
              <article
                className="commercial-card"
                data-reveal
                key={model.title}
                style={{ '--delay': `${index * 70}ms` } as CSSProperties}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{model.title}</h3>
                <p>{model.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="philosophy-section" aria-labelledby="philosophy-title">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">How we think</p>
            <h2 id="philosophy-title">
              Execution beats AI theater.
            </h2>
            <p>
              We are a fit when a portco has an expensive problem, a messy
              workflow, and no time for a normal consulting cycle. We are not a
              low-cost dev shop, not a prompt-pack vendor, and not an AI
              strategy performance.
            </p>
          </div>
          <ul className="principle-list" data-reveal>
            {philosophy.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <TeamSection />

        <section className="final-cta-section" aria-labelledby="final-cta-title">
          <div className="final-cta-card" data-reveal>
            <p className="eyebrow">Start with one portco</p>
            <h2 id="final-cta-title">
              Bring us into a portfolio company for two weeks.
            </h2>
            <p>
              We will map the workflow, rank the leverage, and identify the
              first system worth building. If there is an obvious fix, we start
              shipping.
            </p>
            <a
              className="primary-link"
              href={contactHref}
            >
              Email Andy
            </a>
          </div>
        </section>
          </>
        )}
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src={spitfireLogo} alt="" />
          <span>Spitfire Works</span>
        </div>
        <span>AI-assisted execution for portfolio companies.</span>
        <a href="/why-the-name">Why the name</a>
        <a href={isWhyNamePage ? '/why-the-name#top' : '#top'}>Back to top</a>
      </footer>
    </div>
  )
}

export default App
