import { Reveal } from './Reveal.jsx';

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