import { Reveal } from './Reveal.jsx';

const events = [
  ['Tonight', 'Open Mic & Coffee', 'The Terrace · 7:30 PM', '🎙️'],
  ['Saturday', 'Nagpur Night Market', 'Civil Lines · 5:00 PM', '✨'],
  ['Sunday', 'Sunrise Run Club', 'Futala Lake · 6:00 AM', '🏃'],
  ['Next week', 'Creators Connect', 'AddOn Studio · 4:00 PM', '🎨'],
];

function PageHero({ eyebrow, title, copy, action, aside }) {
  return <section className="page-hero"><div className="page-shell page-hero-grid"><Reveal><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{copy}</p><a className="page-button" href={action.href}>{action.label} <span>→</span></a></Reveal><Reveal delay={90} className="page-hero-aside">{aside}</Reveal></div></section>;
}

export function EventsPage() {
  return <><PageHero eyebrow="DISCOVER LOCAL" title={<>Plans worth<br/><em>leaving home for.</em></>} copy="Find events, offers and people around your city. Save a spot, buy your ticket and get the details in one place." action={{ href: '#home', label: 'Get the app' }} aside={<div className="event-hero-card"><span className="event-sticker">THIS WEEKEND</span><b>Find your next<br/>favourite plan.</b><small>Personalised for Nagpur</small><div className="event-bubbles"><i>🎵</i><i>🍜</i><i>🎟️</i></div></div>} /><section className="page-section"><div className="page-shell"><div className="page-heading"><div><p className="eyebrow">WHAT'S ON</p><h2>Make your next plan local.</h2></div><a href="#home">Open AddOn →</a></div><div className="event-grid">{events.map(([date, name, details, emoji]) => <article className="event-card" key={name}><div className="event-art">{emoji}<span>{date}</span></div><h3>{name}</h3><p>{details}</p><a href="#home">View event <span>→</span></a></article>)}</div></div></section></>;
}

export function BusinessPage() {
  const points = ['Create attention-grabbing ad reels', 'Publish and sell tickets in minutes', 'Reach people close to your business', 'Track performance in one dashboard'];
  return <><PageHero eyebrow="FOR BUSINESSES" title={<>Be seen by the<br/><em>right local crowd.</em></>} copy="Create campaigns, promote an event and turn local attention into real customers—without the usual complexity." action={{ href: 'tel:8055223358', label: 'Talk to our team' }} aside={<div className="business-preview"><div><small>Campaign reach</small><b>24,860</b><span>↗ 18.4% this month</span></div><div className="business-chart"><i/><i/><i/><i/><i/><i/><i/></div><p>People discovered your business nearby</p></div>} /><section className="page-section soft-section"><div className="page-shell business-grid"><Reveal><p className="eyebrow">ONE SIMPLE PLATFORM</p><h2>Everything you need to grow locally.</h2><p className="page-copy">From your first ad to a sold-out event, AddOn keeps your local marketing and ticketing in one clear workflow.</p><ul className="business-list">{points.map((point, index) => <li key={point}><b>0{index + 1}</b>{point}</li>)}</ul></Reveal><Reveal delay={90} className="business-steps"><article><span>01</span><h3>Create</h3><p>Build an ad or event with your own visuals and details.</p></article><article><span>02</span><h3>Reach</h3><p>Show up in the feeds of people nearby who care.</p></article><article><span>03</span><h3>Grow</h3><p>Measure interest, bookings and the results that matter.</p></article></Reveal></div></section></>;
}

export function PrivacyPage() {
  return <>
    <section className="page-hero privacy-hero">
      <div className="page-shell privacy-hero-shell">
        <Reveal>
          <div className="privacy-hero-copy">
            <p className="eyebrow">PRIVACY POLICY</p>
            <h1>We respect your data and your trust.</h1>
            <p className="privacy-hero-meta">Effective Date: September 15, 2026</p>
          </div>
        </Reveal>

        <Reveal delay={90} className="privacy-hero-side">
          <div className="privacy-summary-card">
            <span className="privacy-summary-label">Our approach</span>
            <ul>
              <li>Protection by design</li>
              <li>Clear data usage</li>
              <li>Secure third-party handling</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="page-section privacy-section">
      <div className="page-shell privacy-shell">
        <aside className="privacy-toc">
          <p className="eyebrow">Contents</p>
          <a href="#info-we-collect">1. Information We Collect</a>
          <a href="#how-we-use">2. How We Use Your Information</a>
          <a href="#content-visibility">3. Content Visibility</a>
          <a href="#data-sharing">4. Data Sharing</a>
          <a href="#data-security">5. Data Security</a>
          <a href="#data-retention">6. Data Retention</a>
          <a href="#childrens-privacy">7. Children’s Privacy</a>
          <a href="#your-rights">8. Your Rights</a>
          <a href="#third-party-services">9. Third-Party Services</a>
          <a href="#changes">10. Changes</a>
          <a href="#contact">11. Contact Us</a>
        </aside>

        <article className="privacy-article">
          <p className="privacy-intro">Welcome to AddOn, operated by RockChain Technologies Company. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use the AddOn mobile application and related services.</p>

          <h2 id="info-we-collect">1. Information We Collect</h2>
          <h3>Account Information</h3>
          <p>When you create an account, we may collect:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Profile picture</li>
            <li>Username</li>
          </ul>

          <h3>User Content</h3>
          <p>We may collect content that you create, upload, or share, including:</p>
          <ul>
            <li>Photos</li>
            <li>Videos</li>
            <li>Posts</li>
          </ul>

          <h3>Device Information</h3>
          <p>We may automatically collect:</p>
          <ul>
            <li>Device model</li>
            <li>Operating system version</li>
            <li>App version</li>
            <li>Device identifiers</li>
            <li>IP address</li>
            <li>Crash logs and diagnostics</li>
          </ul>

          <h3>Usage Information</h3>
          <p>We may collect information about:</p>
          <ul>
            <li>Features used within the app</li>
            <li>Content viewed</li>
            <li>Interactions with posts and profiles</li>
            <li>Login activity</li>
          </ul>

          <h2 id="how-we-use">2. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Provide and maintain the AddOn platform</li>
            <li>Create and manage user accounts</li>
            <li>Improve app performance and user experience</li>
            <li>Respond to support requests</li>
            <li>Detect fraud, abuse, and security threats</li>
            <li>Send service-related notifications</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Additional Permissions and Data Collection</h2>

          <h3>Google Sign-In</h3>
          <p>Users may sign in using their Google account. When you use Google Sign-In, we may receive information associated with your Google account, including:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Profile picture</li>
          </ul>
          <p>This information is used solely for authentication, account creation, and providing access to our services.</p>

          <h3>Location Information</h3>
          <p>AddOn may collect your device's location information when you grant permission.</p>
          <p>Location data may be used for:</p>
          <ul>
            <li>Showing relevant local content</li>
            <li>Improving user experience</li>
            <li>Providing location-based features</li>
          </ul>
          <p>You can disable location access at any time through your device settings.</p>

          <h3>Camera and Gallery Access</h3>
          <p>AddOn may request access to your device camera and photo gallery to allow you to:</p>
          <ul>
            <li>Capture photos and videos</li>
            <li>Upload profile pictures</li>
            <li>Share content on the platform</li>
          </ul>
          <p>We do not access your camera or gallery without your permission.</p>

          <h3>Push Notifications</h3>
          <p>AddOn may send push notifications related to:</p>
          <ul>
            <li>Account activity</li>
            <li>New content and updates</li>
            <li>Important service announcements</li>
            <li>Security alerts</li>
          </ul>
          <p>You may disable notifications through your device settings at any time.</p>

          <h3>Account Deletion</h3>
          <p>Users may request deletion of their account and associated personal information by contacting:</p>
          <p><strong>Email:</strong> <a href="mailto:contact@rockchain.in">contact@rockchain.in</a></p>
          <p>We will process deletion requests within a reasonable timeframe, subject to legal and operational requirements.</p>

          <h2 id="content-visibility">3. Content Visibility</h2>
          <p>Content that you choose to publish may be visible to other users of the platform according to your account and privacy settings.</p>
          <p>Please avoid sharing sensitive personal information publicly.</p>

          <h2 id="data-sharing">4. Data Sharing</h2>
          <p>We do not sell personal information.</p>
          <p>We may share information:</p>
          <ul>
            <li>With service providers that help operate our services</li>
            <li>When required by law or legal process</li>
            <li>To protect the rights, safety, and security of users and the platform</li>
            <li>During a business transfer, merger, or acquisition</li>
          </ul>

          <h2 id="data-security">5. Data Security</h2>
          <p>We implement reasonable technical and organizational measures to protect your information from unauthorized access, disclosure, alteration, or destruction.</p>
          <p>However, no method of transmission or storage is completely secure.</p>

          <h2 id="data-retention">6. Data Retention</h2>
          <p>We retain information as long as necessary to:</p>
          <ul>
            <li>Provide services</li>
            <li>Maintain legal compliance</li>
            <li>Resolve disputes</li>
            <li>Enforce agreements</li>
          </ul>
          <p>When no longer required, data may be deleted or anonymized.</p>

          <h2 id="childrens-privacy">7. Children's Privacy</h2>
          <p>AddOn is not intended for children under 13 years of age.</p>
          <p>We do not knowingly collect personal information from children under 13.</p>
          <p>If we become aware that such information has been collected, we will take reasonable steps to delete it.</p>

          <h2 id="your-rights">8. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access your information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your account</li>
            <li>Withdraw consent where applicable</li>
          </ul>
          <p>Requests may be submitted through the contact information below.</p>

          <h2 id="third-party-services">9. Third-Party Services</h2>
          <p>The app may use third-party services such as:</p>
          <ul>
            <li>Cloud hosting providers</li>
            <li>Analytics providers</li>
            <li>Authentication providers</li>
            <li>Push notification services</li>
          </ul>
          <p>These providers may process information according to their own privacy policies.</p>

          <h2 id="changes">10. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time.</p>
          <p>Updated versions will be posted within the application or on our website. Continued use of the service after updates constitutes acceptance of the revised policy.</p>

          <h2 id="contact">11. Contact Us</h2>
          <div className="privacy-contact-card">
            <p><strong>RockChain Technologies</strong></p>
            <p>Email: <a href="mailto:contact@rockchain.in">contact@rockchain.in</a></p>
            <p>Website: <a href="https://addon.rockchain.in/" target="_blank" rel="noreferrer">addon.rockchain.in</a></p>
          </div>
          <p>For privacy-related questions or requests, please contact us using the details above.</p>
        </article>
      </div>
    </section>
  </>;
}

export function AboutPage() {
  return <><PageHero eyebrow="ABOUT ADDON" title={<>Your city has more.<br/><em>We help you find it.</em></>} copy="AddOn brings neighbourhood discovery, local businesses and memorable experiences together in one useful everyday app." action={{ href: '#events', label: 'Explore events' }} aside={<div className="about-mark"><div>+</div><b>Local is<br/>everything.</b><span>Built for the moments around you.</span></div>} /><section className="page-section"><div className="page-shell"><div className="page-heading"><div><p className="eyebrow">OUR BELIEF</p><h2>Good things happen closer to home.</h2></div></div><div className="value-grid"><article><b>01</b><h3>Stay curious</h3><p>There is always a new corner, maker or event worth finding.</p></article><article><b>02</b><h3>Keep it local</h3><p>We make it easier for great neighbourhood businesses to be seen.</p></article><article><b>03</b><h3>Show up together</h3><p>Shared plans make cities feel more connected and alive.</p></article></div></div></section></>;
}
