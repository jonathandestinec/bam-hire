import React from "react";

export default function TermsOfService() {
    return (
        <div className="bg-gray-900 text-gray-100 p-6 md:p-10 font-sans leading-relaxed">
            <h1 className="text-4xl font-extrabold mb-6 text-teal-400">Terms of Service</h1>
            <p className="mb-6">
                Welcome to <strong>BAM!</strong> By accessing or using our website (
                <a
                    href="https://www.bamhire.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 underline"
                >
                    https://www.bamhire.com/
                </a>
                ) and services, you agree to comply with and be bound by these Terms of
                Service. Please read them carefully. If you do not agree to these
                terms, you must not use our website or services.
            </p>
            <hr className="border-gray-700 my-6" />

            <h2 className="text-2xl font-bold mb-4">1. Use of Our Services</h2>
            <h3 className="text-xl font-semibold mb-2">Eligibility:</h3>
            <p className="mb-4">
                You must be at least 18 years old or the legal age in your jurisdiction
                to use our services. By using our website, you represent and warrant
                that you meet this requirement.
            </p>
            <h3 className="text-xl font-semibold mb-2">Permitted Use:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Use the website for lawful purposes only.</li>
                <li>Do not interfere with the proper functioning of the website.</li>
                <li>Do not attempt to gain unauthorized access to any part of the website or its systems.</li>
            </ul>

            <hr className="border-gray-700 my-6" />

            <h2 className="text-2xl font-bold mb-4">2. Account Registration and Responsibilities</h2>
            <p className="mb-4">
                To access certain services, you may need to create an account. You are
                responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Providing accurate and complete information during registration.</li>
                <li>Maintaining the confidentiality of your account credentials.</li>
                <li>Notifying us immediately if you suspect unauthorized access to your account.</li>
            </ul>
            <p className="mb-6">
                We reserve the right to suspend or terminate your account if you
                violate these terms.
            </p>

            <hr className="border-gray-700 my-6" />

            <h2 className="text-2xl font-bold mb-4">3. Content and Intellectual Property</h2>
            <h3 className="text-xl font-semibold mb-2">Ownership:</h3>
            <p className="mb-4">
                All content on our website, including text, graphics, logos, and
                software, is the property of BAM or its licensors and is protected by
                intellectual property laws.
            </p>
            <h3 className="text-xl font-semibold mb-2">Limited License:</h3>
            <p className="mb-4">
                We grant you a non-exclusive, non-transferable license to access and
                use the website for its intended purposes. You may not reproduce,
                modify, distribute, or exploit any part of the website without our
                prior written consent.
            </p>
            <h3 className="text-xl font-semibold mb-2">User Content:</h3>
            <p className="mb-6">
                If you submit content to our website (e.g., resumes, applications), you
                grant BAM a worldwide, royalty-free license to use, store, and process
                your content to provide our services. You are responsible for ensuring
                that your content does not violate any laws or third-party rights.
            </p>

            <hr className="border-gray-700 my-6" />

            <h2 className="text-2xl font-bold mb-4">4. Service Availability</h2>
            <p className="mb-6">
                We strive to ensure our website and services are accessible at all
                times. However, we do not guarantee uninterrupted or error-free
                operation. We may modify, suspend, or discontinue any part of our
                website or services without notice.
            </p>

            <hr className="border-gray-700 my-6" />

            <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                    BAM is not liable for any indirect, incidental, or consequential
                    damages arising from your use of our website or services.
                </li>
                <li>
                    Our total liability for any claims is limited to the amount you paid
                    us, if any, for the use of our services.
                </li>
            </ul>

            <hr className="border-gray-700 my-6" />

            <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
            <p className="mb-4">If you have any questions about these Terms, please contact us:</p>
            <address className="not-italic">
                <strong>BAM</strong>
                <br />
                Phone:{" "}
                <a href="tel:+17087901398" className="text-teal-400 underline">
                    (708) 790-1398
                </a>
                <br />
                Email:{" "}
                <a href="mailto:recruiting@bamhire.com" className="text-teal-400 underline">
                    recruiting@bamhire.com
                </a>
            </address>
        </div>
    );
}
