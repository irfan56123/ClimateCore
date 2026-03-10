export const metadata = {
    title: "Privacy Policy | Vently Air",
    description: "Read our privacy policy to understand how we collect, use, and protect your personal information at Vently Air.",
};

export default function PrivacyPolicy() {
    return (
        <main className="pt-32 pb-16 max-w-4xl mx-auto px-4 lg:px-0">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b pb-4">Privacy Policy</h1>

            <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
                <p>
                    At Vently Air, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our HVAC services.
                </p>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">1. Information We Collect</h2>
                    <p>We may collect the following types of information:</p>
                    <ul className="list-disc pl-6">
                        <li><strong>Personal Details:</strong> Name, email address, phone number, and physical address when you request an estimate or schedule a service.</li>
                        <li><strong>Technical Data:</strong> IP address, browser type, and device information gathered through cookies to improve our website experience.</li>
                        <li><strong>Service Data:</strong> Information about your HVAC system and service history with us.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">2. How We Use Your Information</h2>
                    <p>Your information is used to:</p>
                    <ul className="list-disc pl-6">
                        <li>Provide requested HVAC services, repairs, and installations.</li>
                        <li>Process estimates and service requests efficiently.</li>
                        <li>Communicate with you regarding appointments or emergency services.</li>
                        <li>Improve our website functionality and marketing efforts.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">3. Data Protection & Security</h2>
                    <p>
                        We implement industry-standard security measures to prevent unauthorized access, alteration, or disclosure of your personal data. Our website uses SSL encryption for secure data transmission.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">4. Cookies and Tracking</h2>
                    <p>
                        Vently Air uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may impact some features of our site.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">5. Third-Party Sharing</h2>
                    <p>
                        We do not sell your personal information to third parties. We may share data with trusted partners (such as financing providers or equipment manufacturers) only as necessary to fulfill your service requests.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">6. Your Rights</h2>
                    <p>
                        You have the right to access, correct, or request the deletion of your personal data held by Vently Air. To exercise these rights, please contact us at <a href="mailto:support@ventlyair.com" className="text-blue-600 hover:underline text-sm uppercase">support@ventlyair.com</a>.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">7. Updates to This Policy</h2>
                    <p>
                        We may update this policy periodically to reflect changes in our practices or legal requirements. The latest version will always be posted on this page.
                    </p>
                    <p className="mt-8 text-sm text-gray-400">
                        Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </section>
            </div>
        </main>
    );
}
