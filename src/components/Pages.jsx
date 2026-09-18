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
      <div className="page-shell">
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

export function TermsPage() {
  return <>
    <section className="page-hero privacy-hero">
      <div className="page-shell privacy-hero-shell">
        <Reveal>
          <div className="privacy-hero-copy">
            <p className="eyebrow">TERMS & CONDITIONS</p>
            <h1>The rules that keep AddOn fair for everyone.</h1>
            <p className="privacy-hero-meta">Effective Date: September 18, 2026</p>
          </div>
        </Reveal>

        <Reveal delay={90} className="privacy-hero-side">
          <div className="privacy-summary-card">
            <span className="privacy-summary-label">Our approach</span>
            <ul>
              <li>Clear, plain-language terms</li>
              <li>Fair use for everyone</li>
              <li>Simple dispute handling</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="page-section privacy-section">
      <div className="page-shell">
        <article className="privacy-article">
          <p className="privacy-intro">Welcome to AddOn, a platform operated by RockChain Technologies. These Terms & Conditions govern your access to and use of the AddOn mobile application, website, and related services.</p>
          <p>By accessing or using AddOn, you agree to comply with and be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our services.</p>

          <h2 id="acceptance">1. Acceptance of Terms</h2>
          <p>By creating an account, accessing, or using AddOn, you acknowledge that you have read, understood, and agreed to these Terms & Conditions and our Privacy Policy.</p>

          <h2 id="eligibility">2. Eligibility</h2>
          <p>To use AddOn:</p>
          <ul>
            <li>You must be at least 13 years of age.</li>
            <li>Users under 18 must have permission from a parent or legal guardian.</li>
            <li>Business accounts must be created and managed by authorized representatives.</li>
          </ul>

          <h2 id="user-accounts">3. User Accounts</h2>
          <p>You are responsible for maintaining the security of your account and all activities conducted through it.</p>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate and current information.</li>
            <li>Maintain the confidentiality of login credentials.</li>
            <li>Notify us immediately of unauthorized account access.</li>
            <li>Not share your account with others.</li>
          </ul>
          <p>We reserve the right to suspend or terminate accounts that provide false information or violate these terms.</p>

          <h2 id="google-sign-in">4. Google Sign-In and Authentication</h2>
          <p>AddOn may allow users to sign in using Google Authentication or other approved login methods.</p>
          <p>By using these services, you authorize us to access basic profile information such as:</p>
          <ul>
            <li>Name</li>
            <li>Email Address</li>
            <li>Profile Picture</li>
          </ul>
          <p>This information is used solely for account creation, authentication, and service functionality.</p>

          <h2 id="user-content">5. User Content</h2>
          <p>Users may upload and share content, including:</p>
          <ul>
            <li>Photos</li>
            <li>Videos</li>
            <li>Event Information</li>
            <li>Business Listings</li>
            <li>Profile Information</li>
          </ul>
          <p>You retain ownership of your content. However, by uploading content to AddOn, you grant us a non-exclusive, worldwide license to store, display, and distribute that content solely for operating and improving the platform.</p>
          <p>You are solely responsible for the content you upload.</p>

          <h2 id="prohibited-activities">6. Prohibited Activities</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Violate any applicable law or regulation.</li>
            <li>Upload illegal, harmful, offensive, or fraudulent content.</li>
            <li>Infringe intellectual property rights.</li>
            <li>Impersonate another individual or organization.</li>
            <li>Attempt unauthorized access to systems or accounts.</li>
            <li>Distribute malware, spam, or malicious code.</li>
            <li>Abuse or interfere with platform operations.</li>
          </ul>

          <h2 id="business-listings">7. Business Listings and Events</h2>
          <p>Businesses and event organizers using AddOn must ensure that:</p>
          <ul>
            <li>Information provided is accurate and up to date.</li>
            <li>Event details, locations, pricing, and schedules are correct.</li>
            <li>Promotions and offers are not misleading.</li>
          </ul>
          <p>RockChain Technologies is not responsible for disputes between users, businesses, or event organizers.</p>

          <h2 id="payments">8. Payments and Ticket Purchases</h2>
          <p>Where applicable:</p>
          <ul>
            <li>Payments may be processed through approved third-party payment providers.</li>
            <li>Event organizers are responsible for refund policies unless otherwise stated.</li>
            <li>Users must comply with all event-specific terms and conditions.</li>
            <li>Unauthorized ticket resale may result in account restrictions.</li>
          </ul>

          <h2 id="location-services">9. Location Services</h2>
          <p>AddOn may use location information to provide location-based features and improve user experience.</p>
          <p>You may disable location access through your device settings; however, some features may not function properly.</p>

          <h2 id="media-access">10. Camera, Gallery, and Media Access</h2>
          <p>AddOn may request access to:</p>
          <ul>
            <li>Camera</li>
            <li>Photo Gallery</li>
            <li>Media Storage</li>
          </ul>
          <p>These permissions are used only for profile images, content uploads, event media, and related platform functionality.</p>

          <h2 id="ip">11. Intellectual Property</h2>
          <p>All rights, titles, and interests in AddOn, including software, branding, logos, designs, and content created by RockChain Technologies, remain the exclusive property of RockChain Technologies.</p>
          <p>You may not copy, reproduce, distribute, or modify our intellectual property without written permission.</p>

          <h2 id="termination">12. Account Suspension and Termination</h2>
          <p>We reserve the right to suspend, restrict, or terminate access to AddOn if:</p>
          <ul>
            <li>These Terms are violated.</li>
            <li>Fraudulent activity is detected.</li>
            <li>Content or behavior threatens platform security or users.</li>
          </ul>
          <p>Users may request account deletion by contacting us.</p>

          <h2 id="disclaimers">13. Disclaimer of Warranties</h2>
          <p>AddOn is provided on an "as is" and "as available" basis.</p>
          <p>We do not guarantee:</p>
          <ul>
            <li>Uninterrupted service</li>
            <li>Error-free operation</li>
            <li>Continuous availability</li>
            <li>Accuracy of user-generated content</li>
          </ul>

          <h2 id="limitation-of-liability">14. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, RockChain Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of AddOn.</p>

          <h2 id="changes">15. Changes to These Terms</h2>
          <p>We may modify these Terms & Conditions at any time.</p>
          <p>Updated versions will be posted within the application and/or on our website. Continued use of AddOn after updates constitutes acceptance of the revised terms.</p>

          <h2 id="contact">16. Contact Information</h2>
          <div className="privacy-contact-card">
            <p><strong>RockChain Technologies</strong></p>
            <p>Email: <a href="mailto:contact@rockchain.in">contact@rockchain.in</a></p>
            <p>Website: <a href="https://addon.rockchain.in/" target="_blank" rel="noreferrer">addon.rockchain.in</a></p>
          </div>
          <p>For questions regarding these Terms & Conditions, please contact us using the information above.</p>
        </article>
      </div>
    </section>
  </>;
}

export function AboutPage() {
  const things = ['Discover nearby events and activities', 'Explore local businesses and services', 'Create and manage events', 'Share photos and videos', 'Connect with communities and users', 'Receive real-time updates and notifications', 'Promote businesses and offerings'];
  const features = [['Event Discovery', 'Find events based on your interests and location.'], ['Business Promotion', 'Businesses can showcase their services, products, offers, and events to a wider audience.'], ['Content Sharing', 'Users can upload and share photos, videos, and updates with the community.'], ['Personalized Experience', 'Receive recommendations and content relevant to your interests and location.'], ['Secure Authentication', 'Sign in securely using supported authentication methods, including Google Sign-In.']];
  return <><PageHero eyebrow="ABOUT ADDON" title={<>Your city has more.<br/><em>We help you find it.</em></>} copy="AddOn brings neighbourhood discovery, local businesses and memorable experiences together in one useful everyday app." action={{ href: '#events', label: 'Explore events' }} aside={<div className="about-mark"><div>+</div><b>Local is<br/>everything.</b><span>Built for the moments around you.</span></div>} />
    <section className="page-section"><div className="page-shell"><div className="page-heading"><div><p className="eyebrow">ABOUT ADDON</p><h2>A single platform to explore and interact.</h2></div></div><article className="privacy-article"><p className="privacy-intro">AddOn is an innovative social and event discovery platform developed by RockChain Technologies. The platform is designed to connect people, businesses, creators, and event organizers through a seamless digital experience.</p><p>With AddOn, users can discover local events, explore businesses, share content, connect with communities, and stay updated on activities happening around them. Whether you're looking for entertainment, networking opportunities, business promotions, or community engagement, AddOn provides a single platform to explore and interact.</p><h2>Our Mission</h2><p>Our mission is to simplify the way people discover events, businesses, and opportunities by creating a connected ecosystem that brings communities together.</p><h2>What You Can Do With AddOn</h2><ul>{things.map((item) => <li key={item}>{item}</li>)}</ul><h2>Key Features</h2>{features.map(([title, copy]) => <div key={title}><h3>{title}</h3><p>{copy}</p></div>)}</article></div></section>
    <section className="page-section soft-section"><div className="page-shell"><div className="page-heading"><div><p className="eyebrow">OUR COMMITMENT</p><h2>Privacy, reliability, and transparency.</h2></div></div><article className="privacy-article"><p className="privacy-intro">At AddOn, we are committed to providing a secure, reliable, and user-friendly platform while respecting user privacy and maintaining transparency in how data is handled.</p><h2>Developed By</h2><p><strong>RockChain Technologies</strong></p><p>Website: <a href="https://addon.rockchain.in/" target="_blank" rel="noreferrer">addon.rockchain.in</a></p><p>Email: <a href="mailto:contact@rockchain.in">contact@rockchain.in</a></p><h2>Contact Us</h2><div className="privacy-contact-card"><p>For support, feedback, partnerships, or business inquiries, please contact us at:</p><p><strong>Email:</strong> <a href="mailto:contact@rockchain.in">contact@rockchain.in</a></p><p><strong>Website:</strong> <a href="https://addon.rockchain.in/" target="_blank" rel="noreferrer">addon.rockchain.in</a></p></div></article></div></section></>;
}
