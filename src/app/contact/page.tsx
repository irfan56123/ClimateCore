import { Phone, Mail, MapPin, Clock } from "lucide-react";
import LeadForm from "@/components/LeadForm";

export const metadata = {
    title: "Contact Us | Vently Air — 24/7 HVAC Support",
    description: "Need HVAC repair or installation? Contact Vently Air today for expert heating and cooling services. We are available 24/7 for emergency support.",
};

export default function ContactPage() {
    return (
        <main className="pt-24 pb-16 bg-white transition-all duration-300">
            {/* 🟦 Header */}
            <div className="bg-[#184A99] py-16 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">How Can We Help?</h1>
                <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                    Whether you need an emergency repair, a new installation, or regular maintenance,
                    our team is ready to assist you.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 overflow-visible relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* ⬜ Left: Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-3xl shadow-2xl p-0 overflow-hidden border border-gray-100 h-full">
                            <div className="p-8 md:p-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                                <p className="text-gray-500 mb-8">Fill out the form below and an expert will get back to you within 30 minutes.</p>
                                <LeadForm />
                            </div>
                        </div>
                    </div>

                    {/* 🟦 Right: Contact Info */}
                    <div className="lg:col-span-5 flex flex-col gap-6">

                        <ContactCard
                            icon={<Phone className="w-6 h-6" />}
                            title="Call Us Directly"
                            content={process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+91 6204260510"}
                            sub="Available 24/7 for Emergency Repairs"
                            link={`tel:${process.env.NEXT_PUBLIC_PHONE || "+916204260510"}`}
                        />

                        <ContactCard
                            icon={<Mail className="w-6 h-6" />}
                            title="Email Support"
                            content={`info@${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}`}
                            sub="General inquiries and scheduling"
                            link={`mailto:info@${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}`}
                        />

                        <ContactCard
                            icon={<Clock className="w-6 h-6" />}
                            title="Business Hours"
                            content="Mon - Sun: 24/7"
                            sub="Always open for your comfort needs"
                        />

                        <ContactCard
                            icon={<MapPin className="w-6 h-6" />}
                            title="Service Areas"
                            content="Multiple Local Branches"
                            sub="Serving your neighborhood with local experts"
                            link="/service-areas"
                        />

                    </div>
                </div>
            </div>

            {/* 🗺️ Simple Map Placeholder Section */}
            <section className="mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="bg-gray-100 rounded-3xl h-[400px] flex items-center justify-center text-gray-400 font-medium border-2 border-dashed border-gray-200">
                    <div className="text-center">
                        <MapPin className="w-12 h-12 mx-auto mb-4 opacity-20" />
                        Interactive Map Integration Ready
                    </div>
                </div>
            </section>
        </main>
    );
}

function ContactCard({ icon, title, content, sub, link }: {
    icon: React.ReactNode;
    title: string;
    content: string;
    sub: string;
    link?: string;
}) {
    const CardContent = (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex items-start gap-4">
            <div className="bg-blue-50 text-[#184A99] p-4 rounded-xl">
                {icon}
            </div>
            <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">{title}</h3>
                <p className="text-xl font-bold text-gray-900 mb-1">{content}</p>
                <p className="text-xs text-gray-400">{sub}</p>
            </div>
        </div>
    );

    if (link) {
        return (
            <a href={link} className="block group">
                {CardContent}
            </a>
        );
    }

    return CardContent;
}
