"use client";

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800 mt-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-[#023784]">
        Privacy Policy
      </h1>
      <p className="mb-6 text-sm text-gray-600">Last updated: September 2025</p>

      <section className="space-y-6">
        <p>
          At <span className="font-semibold">Vently Air</span>, we value
          your privacy and are committed to protecting your personal data. This
          Privacy Policy explains how we collect, use, and safeguard your
          information when you use our website and services.
        </p>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            1. Information We Collect
          </h2>
          <p>
            We may collect personal details such as your name, email address,
            phone number, and any information you share through forms or
            consultations. Additionally, we may collect non-personal data such
            as browser type, device information, and website usage statistics.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To provide and improve our services</li>
            <li>To respond to inquiries and offer consultations</li>
            <li>
              To send important updates and promotional content (with your
              consent)
            </li>
            <li>To analyze site usage and enhance user experience</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            3. Sharing of Information
          </h2>
          <p>
            We do not sell or trade your personal information. Your data may be
            shared only with trusted partners who assist us in delivering our
            services, and always under strict confidentiality agreements.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
          <p>
            We implement industry-standard measures to protect your personal
            information. However, please note that no method of transmission
            over the internet or electronic storage is 100% secure.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal data.
            To exercise these rights, please contact us at{" "}
            <a
              href={`mailto:support@${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}`}
              className="text-[#023784] font-medium hover:underline"
            >
              support@{process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            6. Updates to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated date.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a
              href={`mailto:support@${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}`}
              className="text-[#023784] font-medium hover:underline"
            >
              support@{process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
