import React from "react";

export default function Page() {
    return (
        <div className="max-w-4xl mx-auto p-6 text-white">
            <h1 className="text-3xl font-bold text-center text-white mb-6">
                Cookie Policy
            </h1>
            <p className="mb-4">
                At BAM, we use cookies and similar technologies to improve your browsing
                experience, provide personalized services, and better understand how
                our website is used. This Cookie Policy explains what cookies are, how
                we use them, and your choices regarding their use. By continuing to use
                our website (
                <a
                    href="https://www.bamhire.com/"
                    className="text-blue-500 hover:underline"
                >
                    https://www.bamhire.com/
                </a>
                ), you consent to the use of cookies as described in this policy.
            </p>

            <hr className="my-6 border-gray-300" />

            <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                    1. What Are Cookies?
                </h2>
                <p className="mb-4">
                    Cookies are small text files that are stored on your device (computer,
                    smartphone, tablet) when you visit a website. They help the website
                    remember your preferences and activities, making your experience more
                    seamless and personalized.
                </p>
            </section>

            <hr className="my-6 border-gray-300" />

            <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                    2. Types of Cookies We Use
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <span className="font-semibold">Essential Cookies:</span> Necessary
                        for the website to function properly, enabling core features such as
                        security, network management, and accessibility.
                    </li>
                    <li>
                        <span className="font-semibold">Performance and Analytics Cookies:</span>{" "}
                        Help us understand how visitors interact with our website by
                        collecting anonymous data.
                    </li>
                    <li>
                        <span className="font-semibold">Functional Cookies:</span> Allow the
                        website to remember your preferences, such as language selection or
                        login details.
                    </li>
                    <li>
                        <span className="font-semibold">Advertising and Targeting Cookies:</span>{" "}
                        Used to deliver relevant advertisements and measure the
                        effectiveness of our marketing campaigns.
                    </li>
                </ul>
            </section>

            <hr className="my-6 border-gray-300" />

            <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                    3. How We Use Cookies
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Improve the performance and functionality of our website.</li>
                    <li>Analyze website traffic and user behavior.</li>
                    <li>Deliver personalized content and targeted advertising.</li>
                    <li>
                        Enhance your browsing experience by remembering your preferences.
                    </li>
                </ul>
            </section>

            <hr className="my-6 border-gray-300" />

            <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                    4. Managing Your Cookie Preferences
                </h2>
                <p className="mb-4">
                    You have the right to control the use of cookies. Here’s how:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <span className="font-semibold">Browser Settings:</span> Manage
                        cookies through your browser settings. Disabling some cookies may
                        affect website functionality.
                    </li>
                    <li>
                        <span className="font-semibold">Cookie Banners:</span> Use our
                        cookie banner to accept or decline cookies when visiting the site.
                    </li>
                    <li>
                        <span className="font-semibold">Opt-Out Tools:</span> Some
                        third-party services offer opt-out options for analytics and
                        advertising.
                    </li>
                </ul>
            </section>

            <hr className="my-6 border-gray-300" />

            <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                    5. Third-Party Cookies
                </h2>
                <p className="mb-4">
                    We may allow third-party services to place cookies on your device.
                    These third parties have their own privacy and cookie policies, and
                    we encourage you to review them.
                </p>
            </section>

            <hr className="my-6 border-gray-300" />

            <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                    6. Updates to This Policy
                </h2>
                <p className="mb-4">
                    We may update this Cookie Policy from time to time to reflect changes
                    in our practices or for legal reasons. Updates will be posted on this
                    page with an updated "Effective Date."
                </p>
            </section>

            <hr className="my-6 border-gray-300" />

            <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                    7. Contact Us
                </h2>
                <p className="mb-4">
                    If you have any questions about this Cookie Policy or how we use
                    cookies, please contact us:
                </p>
                <p className="mb-4">
                    BAM
                    <br />
                    Phone: (708) 790-1398
                    <br />
                    Email:{" "}
                    <a
                        href="mailto:recruiting@bamhire.com"
                        className="text-blue-500 hover:underline"
                    >
                        recruiting@bamhire.com
                    </a>
                </p>
            </section>

            <hr className="my-6 border-gray-300" />

            <p className="text-center text-gray-600">
                Thank you for choosing BAM. We are committed to providing you with a
                transparent and user-friendly experience.
            </p>
        </div>
    );
}
