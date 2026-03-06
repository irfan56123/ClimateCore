import ClinicsList from "./ClinicsList";

export const metadata = {
  title: "Find HVAC System Clinics Near You | Vently Air Hearing Solutions",
  description:
    "Locate Vently Air HVAC System Clinics across Delhi, Noida, Bihar, Jharkhand, Punjab & more. Expert audiologists, free hearing tests, and advanced HVACs. Open daily till 7 PM.",
};

export default function ClinicPage() {
  return (
    <main className="bg-gradient-to-b from-[#eaf5ff] to-white text-gray-900">
      <ClinicsList />
    </main>
  );
}
