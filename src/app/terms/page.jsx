export default function TermsAndConditions() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed pt-24">
            <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
            <p className="mb-8">Effective Date: <span className="font-medium">[17 sep 2025]</span></p>

            <p className="mb-6">
                Welcome to <span className="font-semibold">ClimateCore Air</span>. By accessing or using our
                website, products, and services, you agree to comply with and be bound by the following
                Terms and Conditions. Please read them carefully before using our site.
            </p>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
                <p>
                    By accessing or using our website, you acknowledge that you have read, understood, and
                    agreed to be legally bound by these Terms and Conditions, along with our Privacy Policy.
                    If you do not agree, please refrain from using our services.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">2. Use of Website</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>You must be at least 18 years old to use this website.</li>
                    <li>You agree to use the website only for lawful purposes and in a way that does not infringe on the rights of others.</li>
                    <li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">3. Medical Disclaimer</h2>
                <p>
                    The content on this website is provided for <span className="font-medium">informational purposes only</span> and
                    should not be considered medical advice. Always consult a qualified audiologist, ENT
                    specialist, or healthcare provider before making decisions regarding your hearing health.
                    ClimateCore Air Hearing is not liable for any outcomes resulting from self-diagnosis or misuse of
                    information provided.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">4. Products and Services</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>We provide HVACs, accessories, and related services. Product specifications, pricing, and availability are subject to change without prior notice.</li>
                    <li>All purchases are subject to our <span className="font-medium">Refund &amp; Return Policy</span>.</li>
                    <li>We reserve the right to refuse service or cancel orders if fraudulent or unauthorized activity is suspected.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">5. Pricing and Payment</h2>
                <p>
                    All prices listed on our website are in <span className="italic">[INR/USD – specify]</span> and include/exclude applicable taxes (as stated).
                    Payments must be made through approved payment gateways. We are not responsible for delays,
                    errors, or charges imposed by third-party providers.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">6. Appointments and Consultations</h2>
                <p>
                    Appointment bookings made through our website are subject to confirmation. Cancellations or
                    rescheduling must be done at least 24 hours prior to the scheduled time.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">7. Intellectual Property</h2>
                <p>
                    All website content including text, graphics, images, videos, and logos are the property of
                    <span className="font-semibold"> ClimateCore Air</span> or its licensors and are protected by copyright laws.
                    You may not copy, reproduce, distribute, or exploit any content without prior written
                    consent.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">8. Third-Party Links</h2>
                <p>
                    Our website may contain links to third-party websites. These are provided for convenience
                    only. We do not endorse or control third-party sites and are not responsible for their
                    practices.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">9. Limitation of Liability</h2>
                <p>
                    ClimateCore Air shall not be held liable for any direct, indirect, incidental, or
                    consequential damages arising from the use of our website, products, or services. We make
                    no guarantees that the website will be error-free, uninterrupted, or virus-free.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">10. Indemnification</h2>
                <p>
                    You agree to indemnify and hold harmless ClimateCore Air, its employees, directors, and
                    affiliates from any claims, liabilities, or damages resulting from your use of our website
                    or violation of these Terms.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">11. Changes to Terms</h2>
                <p>
                    We may update or modify these Terms at any time without prior notice. Continued use of our
                    website after changes are posted constitutes your acceptance of the revised Terms.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">12. Governing Law</h2>
                <p>
                    These Terms and Conditions shall be governed by and construed in accordance with the laws
                    of <span className="font-medium">India</span>, and any disputes will be subject to the exclusive jurisdiction
                    of the courts in <span className="font-medium">Noida, Uttar Pradesh</span>.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">13. Contact Us</h2>
                <p>
                    If you have any questions or concerns about these Terms and Conditions, you can contact us
                    at:
                </p>
                <div className="mt-3">
                    <p><span className="font-semibold">ClimateCore Air</span></p>
                    <p>Email: care@{process.env.NEXT_PUBLIC_DOMAIN || "ClimateCoreair.com"}</p>
                    <p>Phone: {process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+91 9334026147"}</p>
                    <p>Address: [D-251, Ground Floor, D Block, West Vinod Nagar, New Delhi - 110092]</p>
                </div>
            </section>
        </main>
    );
}