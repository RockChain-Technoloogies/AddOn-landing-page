import { Reveal } from './Reveal.jsx';

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