export const metadata = {
    title: "Terms of Use | Vently Air",
    description: "Please read the terms of use for using the Vently Air website and our professional HVAC services.",
};

export default function TermsOfUse() {
    return (
        <main className="pt-32 pb-16 max-w-4xl mx-auto px-4 lg:px-0">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b pb-4">Terms of Use</h1>

            <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
                <p>
                    Welcome to Vently Air. By accessing our website or using our HVAC services, you agree to comply with and be bound by the following terms and conditions.
                </p>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">1. Acceptance of Terms</h2>
                    <p>
                        Your use of this website and Vently Air's services serves as your legal acceptance of these terms. If you do not agree, please refrain from using our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">2. Service Estimates</h2>
                    <p>
                        All estimates provided through our website or via phone are preliminary. Final pricing is subject to on-site inspection by a certified Vently Air technician. Estimates are valid for 30 days unless otherwise specified.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">3. Payments and Cancellations</h2>
                    <p>
                        Payments are due upon completion of services unless prior financing arrangements have been made. Appointments must be cancelled at least 24 hours in advance to avoid a potential service fee.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">4. Warranty and Guarantee</h2>
                    <p>
                        Vently Air provides a standard warranty on workmanship. Parts and equipment are covered by the respective manufacturer's warranty. We guarantee satisfaction on all repair and installation services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">5. Intellectual Property</h2>
                    <p>
                        All content on this website, including text, graphics, logos, and images, is the property of Vently Air and protected by copyright laws. Unauthorized use of any materials is strictly prohibited.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">6. Limitation of Liability</h2>
                    <p>
                        Vently Air shall not be held liable for indirect, incidental, or consequential damages resulting from the use of our website or services, except as mandated by law.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">7. Contact Information</h2>
                    <p>
                        If you have any questions regarding these terms, please reach out to us at:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-4">
                        <p className="font-bold text-gray-900">Vently Air HVAC Solutions</p>
                        <p>Phone: {process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+91 6204260510"}</p>
                        <p>Email: support@ventlyair.com</p>
                    </div>
                </section>

                <p className="mt-8 text-sm text-gray-400">
                    Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
            </div>
        </main>
    );
}
