import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div className="bg-gray-900 text-gray-100 p-6 md:p-10 font-sans leading-relaxed">
                <h1 className="text-4xl font-extrabold mb-6 text-teal-400">Privacy Policy</h1>
                <p className="mb-6">
                    At <strong>BAM</strong>, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, share, and protect your personal information when you visit our website or engage with our services. By using our website (<a href="https://www.bamhire.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00ADB5' }}>https://www.bamhire.com/</a>) and services, you agree to the terms outlined in this policy.
                </p>
                <hr className="border-gray-700 my-6" />
                <section style={{ marginTop: '30px' }}>
                    <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                    <h3 style={{ fontSize: '1.4rem', marginTop: '20px' }}>a. Personal Information</h3>
                    <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                        <li>Name, email address, phone number, and other contact details.</li>
                        <li>Employment-related information such as your resume or job history if you apply for a position through our website.</li>
                    </ul>

                    <h3 style={{ fontSize: '1.4rem', marginTop: '20px' }}>b. Non-Personal Information</h3>
                    <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                        <li>IP address, browser type, and operating system.</li>
                        <li>Website usage data, including pages visited, time spent on the site, and other analytics data.</li>
                    </ul>

                    <h3 style={{ fontSize: '1.4rem', marginTop: '20px' }}>c. Cookies and Tracking Technologies</h3>
                    <p>
                        We use cookies to improve your browsing experience and understand how you interact with our website. You can manage your cookie preferences through your browser settings.
                    </p>
                </section>
                <hr className="border-gray-700 my-6" />
                <section style={{ marginTop: '30px' }}>
                    <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                    <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                        <li>Provide and improve our services.</li>
                        <li>Respond to your inquiries and requests.</li>
                        <li>Process job applications and connect you with potential employers or opportunities.</li>
                        <li>Analyze website performance and user behavior for optimization.</li>
                        <li>Comply with legal obligations.</li>
                    </ul>
                </section>
                <hr className="border-gray-700 my-6" />
                <section style={{ marginTop: '30px' }}>
                    <h2 className="text-2xl font-bold mb-4">3. How We Share Your Information</h2>
                    <p>
                        We value your trust and will never sell your personal information. However, we may share your information with:
                    </p>
                    <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                        <li><strong>Trusted Partners:</strong> To provide staffing or recruitment services in line with your career goals.</li>
                        <li><strong>Service Providers:</strong> To support our operations, such as IT services or analytics.</li>
                        <li><strong>Legal Authorities:</strong> When required by law or to protect our rights.</li>
                    </ul>
                </section>
                <hr className="border-gray-700 my-6" />
                <section style={{ marginTop: '30px' }}>
                    <h2 className="text-2xl font-bold mb-4">4. Your Choices and Rights</h2>
                    <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                        <li><strong>Access and Update:</strong> You can request access to or correction of your personal information by contacting us.</li>
                        <li><strong>Opt-Out:</strong> You can opt out of marketing communications at any time by following the unsubscribe instructions in our emails.</li>
                        <li><strong>Cookies Management:</strong> Adjust your browser settings to block or delete cookies.</li>
                    </ul>
                </section>
                <hr className="border-gray-700 my-6" />
                <section style={{ marginTop: '30px' }}>
                    <h2 className="text-2xl font-bold mb-4">5. How We Protect Your Information</h2>
                    <p>
                        We implement industry-standard security measures to safeguard your personal information. However, no method of online transmission or storage is 100% secure. We encourage you to take precautions to protect your own information.
                    </p>
                </section>
                <hr className="border-gray-700 my-6" />
                <section style={{ marginTop: '30px' }}>
                    <h2 className="text-2xl font-bold mb-4">6. Third-Party Links</h2>
                    <p>
                        Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. Please review their policies before providing any personal information.
                    </p>
                </section>
                <hr className="border-gray-700 my-6" />
                <section style={{ marginTop: '30px' }}>
                    <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
                    <p>
                        Our website and services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children.
                    </p>
                </section>
                <hr className="border-gray-700 my-6" />
                <section style={{ marginTop: '30px' }}>
                    <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Effective Date." We encourage you to review the policy periodically.
                    </p>
                </section>
                <hr className="border-gray-700 my-6" />
                <section style={{ marginTop: '30px' }}>
                    <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
                    <p>If you have any questions or concerns about this Privacy Policy or our practices, please contact us at:</p>
                    <address style={{ fontStyle: 'normal', marginTop: '10px' }}>
                        <strong>BAM</strong><br />
                        Phone: <a href="tel:+17087901398" style={{ color: '#00ADB5' }}>(708) 790-1398</a><br />
                        Email: <a href="mailto:recruiting@bamhire.com" style={{ color: '#00ADB5' }}>recruiting@bamhire.com</a>
                    </address>
                </section>

                <p style={{ marginTop: '30px', textAlign: 'center' }}>Thank you for trusting BAM. We are committed to protecting your privacy and providing you with a secure and transparent experience.</p>
        </div>
    );
}
