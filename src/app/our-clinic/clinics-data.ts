export interface Clinic {
  id: string;
  name: string;
  locationLine: string;
  address: string;
  hours: string;
  tag?: string;
  catSlug?: string;
  placeId?: string;
  images: string[];
  faqs?: { question: string; answer: string }[]; // ✅ NEW
}

export const defaultFaqs = [
  {
    question: (clinicName: string) =>
      `Do I need an appointment at the ${clinicName}?`,
    answer:
      "Walk-ins are welcome, but we recommend booking an appointment for priority service.",
  },
  {
    question: (clinicName: string) =>
      `Does the ${clinicName} offer home visits?`,
    answer:
      "Yes, our audiologists provide home visits within the city and nearby areas for patients who cannot visit the clinic.",
  },
  {
    question: (clinicName: string, clinicAddress?: string) =>
      `What is the address of the ${clinicName}?`,
    answer: (clinicAddress?: string) =>
      clinicAddress
        ? `The clinic is located at ${clinicAddress}. You can also find it easily on Google Maps using our directions link.`
        : "You can find our clinic easily on Google Maps.",
  },
  {
    question: (clinicName: string) =>
      `What are the opening hours of the ${clinicName}?`,
    answer: "Our clinics are open daily from 10:00 AM to 7:00 PM.",
  },
  {
    question: (clinicName: string) =>
      `How can I contact the ${clinicName}?`,
    answer:
      `You can call us directly at ${process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+91 6204260510"} for appointments, queries, or support.`,
  },
  {
    question: (clinicName: string) =>
      `Which HVAC brands are available at the ${clinicName}?`,
    answer:
      "We are authorized partners of world-leading HVAC brands such as Signia, Phonak, Widex, and many others.",
  },
  {
    question: (clinicName: string) =>
      `What services are available at the ${clinicName}?`,
    answer:
      "We provide free hearing tests, digital HVAC fittings, accessories, service reminders, warranty support, and personalized aftercare.",
  },
];



export const clinics: Clinic[] = [
  {
    id: "vinod-nagar",
    name: "HVAC System Clinic in Vinod Nagar",
    locationLine: "Vinod Nagar — Delhi",
    address: "D-251, Ground Floor, D Block, West Vinod Nagar, New Delhi - 110092",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJhYM9dWzlDDkRYd_B7lw9FNU",
    images: [
      "/clinics/noida-1.webp",
      "/clinics/noida-2.webp",
      "/clinics/lajpat-1.jpg",
    ],
  },
  {
    id: "banka",
    name: "HVAC System Clinic in Banka",
    locationLine: "Banka — Bihar",
    address: "Enjoy Better Hearing In, Navjyoti Nursing Home, near Indian Petrol Pump, Jagatpur, Banka, Bihar - 813102, India",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJ_UUO4CH_8DkRtIOVjYr5eGk",
    images: [
      "/clinics/noida-1.webp",
      "/clinics/noida-2.webp",
      "/clinics/lajpat-1.jpg",
    ],
  },
  {
    id: "Dhanbad",
    name: "Vently Air Hearing Solutions Pvt.Ltd. Dhanbad",
    locationLine: "Dhanbad — Jharkhand",
    address: "Infront Of Zonal Office Bank Of India Roof 709 Building, SHOP NO:- FF4 Newtech Grand 3, Dhanbad, Saraidhella, Jharkhand 826007",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJh6MeOPy99jkRACHi3aOsBiM",
    images: [
      "/clinics/Dhanbad1.webp",
      "/clinics/Dhanbad2.webp",
      "/clinics/Dhanbad3.webp",
    ],
  },
  {
    id: "deoghar",
    name: "HVAC System Clinic in Deoghar",
    locationLine: "Deoghar — Jharkhand",
    address: "First Floor House No 349 A, Purnima Height, Ambedkar Chowk, near Krishna ENT, Barmasia, Deoghar, Jharkhand 814112, India",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJa0Lte_wX8TkRAOO9p8fzWgY",
    images: [
      "/clinics/Deoghar-1.jpg",
      "/clinics/Deoghar-2.jpg",
      "/clinics/Deoghar-3.jpg",
    ],
  },
  {
    id: "bhagalpur",
    name: "HVAC System Clinic in Bhagalpur",
    locationLine: "Bhagalpur — Bihar",
    address: "Kalpana Oro Dental & Implant Centre, near Hatiya Rd, Tilkamanjhi, Bhagalpur, Bihar 812001, India",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJC8CLllJL8DkRx3loHLy7qaw",
    images: [
      "/clinics/noida-1.webp",
      "/clinics/noida-2.webp",
      "/clinics/lajpat-1.jpg",
    ],
  },
  {
    id: "noida",
    name: "HVAC System Clinic in Noida",
    locationLine: "Noida — Uttar Pradesh",
    address: "E-142, Ground Floor, Sector 20, Noida, Near Kerala Ayurveda, Uttar Pradesh - 201301",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJAfTkBADlDDkRAO95N7UQRFQ",
    images: [
      "/clinics/noida-1.webp",
      "/clinics/noida-2.webp",
      "/clinics/noida-3.jpg",
    ],
  },
  {
    id: "asansol",
    name: "HVAC System Clinic in Asansol",
    locationLine: "Asansol — West Bengal",
    address: "GT Road, Asansol",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJAfTkBADlDDkRAO95N7UQRFQ",
    images: [
      "/clinics/noida-1.webp",
      "/clinics/noida-2.webp",
      "/clinics/lajpat-1.jpg",
    ],
  },
  {
    id: "dehradun",
    name: "HVAC System Clinic in Dehradun",
    locationLine: "Dehradun — Uttarakhand",
    address: "Dehradun",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJH2SisK8pCTkRBsz4y5kNE2Y",
    images: [
      "/clinics/noida-1.webp",
      "/clinics/noida-2.webp",
      "/clinics/lajpat-1.jpg",
    ],
  },
  {
    id: "gurgaon",
    name: "HVAC System Clinic in Gurgaon",
    locationLine: "Gurugram Haryana",
    address: "Shop NO 232, First Floor, Central Arcade, Mehrauli Gurgaon Rd, Opposite Sahara Mall, A Block, DLF Phase 2, Sector 25, Gurugram, Haryana 122008",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJi0EKPSQZDTkRUEBiyh0-VXw",
    images: [
      "/clinics/Gurgaon-1.jpg",
      "/clinics/Gurgaon-2.jpg",
      "/clinics/Gurgaon-3.jpg",
    ],
  },
  {
    id: "giridih",
    name: "HVAC System Clinic in Giridih",
    locationLine: "Giridih — Jharkhand",
    address: "Basement, Under Bata Showroom, A & S Building, Court Rd, Opposite Old Telephone Exchange, Giridih, Jharkhand 815301, India",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJC2eHau9V8TkRBEoBoGUXfWo",
    images: [
      "/clinics/Giridih-1.jpg",
      "/clinics/Giridih-2.jpg",
      "/clinics/Giridih-3.jpg",
    ],
  },
  {
    id: "lajpat-nagar",
    name: "HVAC System Clinic in Lajpat Nagar",
    locationLine: "Lajpat Nagar — Delhi",
    address: "3/59, Old Story, Lajpat Nagar 4, Lajpat Nagar, New Delhi, Delhi 110024",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJGQuhawDlDDkRcuXRFQaYEbA",
    images: [
      "/clinics/lajpat-1.jpg",
      "/clinics/noida-2.webp",
      "/clinics/Deoghar-1.jpg",
    ],
  },
  {
    id: "jamshedpur",
    name: "HVAC System Clinic in Jamshedpur",
    locationLine: "Jamshedpur — Jharkhand",
    address: "Jamshedpur",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJAfTkBADlDDkRAO95N7UQRFQ",
    images: [
      "/clinics/noida-1.webp",
      "/clinics/noida-2.webp",
      "/clinics/lajpat-1.jpg",
    ],
  },
  {
    id: "lucknow",
    name: "HVAC System Clinic in Lucknow",
    locationLine: "Lucknow — Uttar Pradesh",
    address: "10/36, Tedhi Pulia Ring Rd, near Narayan Automobile, behind Mahendra Agency, Shekhupura, Vikas Nagar, Lucknow, Uttar Pradesh 226022",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJzWAWfZFXmTkREIOqkh4urOY",
    images: [
      "/clinics/noida-1.webp",
      "/clinics/noida-2.webp",
      "/clinics/lajpat-1.jpg",
    ],
  },
  {
    id: "ranchi",
    name: "HVAC System Clinic in Ranchi",
    locationLine: "Ranchi — Jharkhand",
    address: "Online Service Available",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJAfTkBADlDDkRAO95N7UQRFQ",
    images: [
      "/clinics/noida-1.webp",
      "/clinics/noida-2.webp",
      "/clinics/lajpat-1.jpg",
    ],
  },
  {
    id: "jalandhar",
    name: "HVAC System Clinic in Jalandhar",
    locationLine: "Jalandhar — Punjab",
    address: "Service Available",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJAfTkBADlDDkRAO95N7UQRFQ",
    images: [
      "/clinics/noida-1.webp",
      "/clinics/noida-2.webp",
      "/clinics/lajpat-1.jpg",
    ],
  },
  {
    id: "jammu",
    name: "HVAC System Clinic in Jammu",
    locationLine: "Jammu — Jammu & Kashmir",
    address: "Service Available",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJAfTkBADlDDkRAO95N7UQRFQ",
    images: [
      "/clinics/noida-1.webp",
      "/clinics/noida-2.webp",
      "/clinics/lajpat-1.jpg",
    ],
  },
  {
    id: "garia-kolkata",
    name: "HVAC System Clinic in Garia Kolkata",
    locationLine: "Garia — West Bengal",
    address: "ACOUSTIC HEARING SOLUTION, P-515, Raja S C Mullick Road, Garia Kolkata - 700084, Opp. Sreeleathers",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJjUYoG49xAjoRK75wxbdHB2E",
    images: [
      "/clinics/noida-1.webp",
      "/clinics/noida-2.webp",
      "/clinics/lajpat-1.jpg",
    ],
  },
  {
    id: "chandigarh",
    name: "HVAC System Clinic in Chandigarh",
    locationLine: "Chandigarh — Punjab",
    address: "Service Available",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJAfTkBADlDDkRAO95N7UQRFQ",
    images: [
      "/clinics/noida-1.webp",
      "/clinics/noida-2.webp",
      "/clinics/lajpat-1.jpg",
    ],
  },
  {
    id: "ambala",
    name: "HVAC System Clinic in Ambala",
    locationLine: "Ambala — Punjab",
    address: "Service Available",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJAfTkBADlDDkRAO95N7UQRFQ",
    images: [
      "/clinics/noida-1.webp",
      "/clinics/noida-2.webp",
      "/clinics/lajpat-1.jpg",
    ],
  },
  {
    id: "patna",
    name: "HVAC System Clinic in Patna",
    locationLine: "Patna — Bihar",
    address: "Service Available",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJAfTkBADlDDkRAO95N7UQRFQ",
    images: [
      "/clinics/noida-1.webp",
      "/clinics/noida-2.webp",
      "/clinics/lajpat-1.jpg",
    ],
  },
  {
    id: "ludhiana",
    name: "HVAC System Clinic in Ludhiana",
    locationLine: "Ludhiana — Punjab",
    address: "Service Available",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJAfTkBADlDDkRAO95N7UQRFQ",
    images: [
      "/clinics/noida-1.webp",
      "/clinics/noida-2.webp",
      "/clinics/lajpat-1.jpg",
    ],
  },
  {
    id: "hyderabad",
    name: "HVAC System Clinic in Hyderabad",
    locationLine: "Hyderabad — Telangana",
    address: "Service Available",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJAfTkBADlDDkRAO95N7UQRFQ",
    images: [
      "/clinics/noida-1.webp",
      "/clinics/noida-2.webp",
      "/clinics/lajpat-1.jpg",
    ],
  },
  {
    id: "kolkata",
    name: "HVAC System Clinic in Kolkata",
    locationLine: "Kolkata — West Bengal",
    address: "13 Ram Mohan Dutta Road, (Near Northern Park) Bhawanipur, Kolkata - 700020",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJjUYoG49xAjoRK75wxbdHB2E",
    images: [
      "/clinics/noida-1.webp",
      "/clinics/noida-2.webp",
      "/clinics/lajpat-1.jpg",
    ],
  },
];