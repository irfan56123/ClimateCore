export const ADVANTAGES = [
  {
    title: "Video Inspection",
    desc: "Our experts will provide you with a before & after video inspection so you can see the impact for yourself!",
  },
  {
    title: "Online Quotes",
    desc: "Skip the wait and get a comprehensive quote directly from your home via a quick zoom call.",
  },
  {
    title: "Licensed & Insured",
    desc: "Get the level of service that matters by a company that stands by its work and by you.",
  },
];

const COMMON_FAQS = [
  {
    q: "How Long Does A Cleaning Take?",
    a: "A typical job will take about 1-2 hours with same day service available after our consultation.",
  },
  {
    q: "What Forms Of Payment Do You Accept?",
    a: "We accept all forms of payment including cash, check and credit cards. We also provide monthly payment options via a third-party service.",
  },
  {
    q: "Where Do You Operate?",
    a: "We currently have providers in Massachusetts, Connecticut, New Hampshire & Rhode Island",
  },
];

export type ServiceExtra =
  | { type: "benefits"; heading: string; items: { label: string; desc: string }[] }
  | { type: "metrics"; heading: string; items: { label: string; desc: string }[] };

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  shortDesc: string;
  description: string[];
  qualityStatement: string;
  extras: ServiceExtra[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const services: Service[] = [
  {
    slug: "duct-cleaning",
    title: "Air Duct Cleaning",
    tagline: "Professional Air Duct Cleaning",
    image: "/services/duct.jpg",
    shortDesc:
      "Professional duct cleaning to improve air quality and HVAC efficiency.",
    description: [
      "Vently Air is a premier air duct cleaning company operating nationally. We pride ourselves in our proven track record to deliver competitive rates and providing outstanding customer service.",
      "When it comes to the air quality of your home – we are passionate about ensuring our work is the best in the industry. Our aim is to ensure you are breathing the best air which is free from many harmful airborne particles and other pollutants.",
      "Our experts will guide you through the process and explain how the ducts in your home operate and spread air.",
      "Ensuring you get a regular cleaning is the only way to prevent your air ducts from potentially giving you allergies or other negative side effects.",
    ],
    qualityStatement:
      "It makes a difference! The recommended timeline to clean your ducts is once every few years, especially if anyone suffers from allergies.",
    extras: [],
    faqs: [
      ...COMMON_FAQS,
      {
        q: "What Does Air Duct Cleaning Cost?",
        a: "We offer starting prices from $175 and up, however final quotes will be dependent on square feet, location and units in building. Schedule a consultation to get a finalized quote.",
      },
    ],
    relatedSlugs: [
      "air-quality-test",
      "uv-light-installation",
      "dryer-vent",
      "furnace",
    ],
  },
  {
    slug: "dryer-vent",
    title: "Dryer Vent Service",
    tagline: "Dryer Vent Service",
    image: "/services/Dryer Vent Service.jpg",
    shortDesc:
      "Reduce fire hazards and improve dryer efficiency with professional cleanings.",
    description: [
      "Professional dryer vent cleaning by Vently Air will ensure you have everything running smoothly & properly in your home.",
      "Poor maintenance of your dryer vent impacts both drying quality and safety, with clogged vents risking malfunction and potential fire hazards.",
      "Beyond cleaning, Vently Air provides repairs and replacements as needed. The service pairs perfectly with air duct cleaning performed simultaneously.",
    ],
    qualityStatement:
      "A clean dryer vent not only improves drying efficiency but significantly reduces the risk of dryer fires — one of the leading causes of home fires.",
    extras: [],
    faqs: [
      {
        q: "How Long Does A Cleaning Take?",
        a: "A typical job will take about 1 hour with same day service available after our consultation.",
      },
      {
        q: "What Forms Of Payment Do You Accept?",
        a: "We accept all forms of payment including cash, check and credit cards.",
      },
      {
        q: "What Does Dryer Vent Service Cost?",
        a: "Our dryer vent service usually starts at $100.",
      },
      {
        q: "Where Do You Operate?",
        a: "We currently have providers in Massachusetts, Connecticut, New Hampshire, North Carolina & Washington DC.",
      },
    ],
    relatedSlugs: [
      "duct-cleaning",
      "furnace",
      "chimney-cleaning",
      "sanitation",
    ],
  },
  {
    slug: "furnace",
    title: "Furnace, Coil & Blower Fan",
    tagline: "Furnace, Coil, Blower Fan Cleaning",
    image: "/services/Furnance.jpg",
    shortDesc:
      "High-efficiency furnace and blower fan cleaning for consistent warmth and clean air.",
    description: [
      "Furnace and blower fan cleaning is an essential part of keeping the air in your home fresh & clean.",
      "It is especially important to clean out the furnace before colder seasons when your unit will run heavily. The service pairs well with air duct and dryer vent cleaning as part of a complete maintenance routine.",
      "Uncleaned furnaces accumulate dirt & debris and negatively impact your home's air quality. Don't overlook this critical aspect of your home maintenance.",
    ],
    qualityStatement:
      "The recommended timeline to clean your furnace and ducts is once every few years, especially if anyone suffers from allergies.",
    extras: [],
    faqs: [
      ...COMMON_FAQS,
      {
        q: "What Does Furnace Cleaning Cost?",
        a: "We offer starting prices from $175 and up, however final quotes will be dependent on square feet, location and units in building. Schedule a consultation to get a finalized quote.",
      },
    ],
    relatedSlugs: [
      "duct-cleaning",
      "dryer-vent",
      "chimney-cleaning",
      "uv-light-installation",
    ],
  },
  {
    slug: "chimney-cleaning",
    title: "Chimney Cleaning",
    tagline: "Proper Chimney Cleaning",
    image: "/chimney.jpeg",
    shortDesc:
      "Expert chimney cleaning and repair for safety and optimal performance.",
    description: [
      "Chimney cleaning services by Vently Air are critical if you use your chimney and want to ensure your home has the best air quality possible.",
      "Soot and debris accumulation from wood burning requires professional attention to keep your chimney operating safely and efficiently.",
      "We recommend combining chimney cleaning with our other air quality services for a comprehensive home air quality solution.",
    ],
    qualityStatement:
      "You will not only see but feel the difference when it comes to cleaning your chimney. Recommended to clean your chimney every few years.",
    extras: [],
    faqs: [
      ...COMMON_FAQS,
      {
        q: "What Does Chimney Cleaning Cost?",
        a: "We typically do chimney cleaning with our other services like air duct cleaning which starts at $275. Call for best prices.",
      },
    ],
    relatedSlugs: [
      "duct-cleaning",
      "dryer-vent",
      "air-quality-test",
      "uv-light-installation",
    ],
  },
  {
    slug: "sanitation",
    title: "Sanitation",
    tagline: "Protect Your Home",
    image: "/services/sanitation.jpg",
    shortDesc:
      "Comprehensive sanitation for a virtually virus-free home or office environment.",
    description: [
      "Sanitation services from Vently Air are an essential procedure in ensuring the most virtually virus free environment in your home or office.",
      "We address everything from airborne impurities to surface level contamination, eliminating 99% of known issues.",
      "Our sanitation service is recommended before or after larger gatherings or events, or anytime you feel you'd like to refresh your property.",
    ],
    qualityStatement:
      "Our professional sanitation process gives you peace of mind knowing your space is as clean and healthy as possible.",
    extras: [],
    faqs: [
      ...COMMON_FAQS,
      {
        q: "What Does Sanitation Cost?",
        a: "Pricing varies based on the size of your space and scope of work. Contact us for a personalized quote.",
      },
    ],
    relatedSlugs: [
      "air-quality-test",
      "uv-light-installation",
      "duct-cleaning",
      "dryer-vent",
    ],
  },
  {
    slug: "uv-light-installation",
    title: "UV Light Installation",
    tagline: "UV Light Installation",
    image: "/uvlight.jpeg",
    shortDesc:
      "UV light systems that eliminate allergens, bacteria, and mold from your HVAC system.",
    description: [
      "UV light systems eliminate allergens from your HVAC unit in the same way that they kill germs — targeting dust mites, bacteria, microorganisms, mold and mildew.",
      "UV technology has been utilized as a sterilizing agent since the late 1800s for air disinfection purposes, making it a proven, trusted solution for healthier indoor air.",
    ],
    qualityStatement:
      "UV light installation can increase your system's capacity by as much as 35% through improved airflow, while killing up to 90% of microorganisms living within the coils and air ducts.",
    extras: [
      {
        type: "benefits",
        heading: "Why Install UV Light in Your HVAC?",
        items: [
          {
            label: "Eliminate Odors",
            desc: "UV lights help eliminate volatile organic compounds (VOCs) from the air — including odors from tobacco, paint, and burnt food.",
          },
          {
            label: "Improve HVAC Efficiency",
            desc: "Installation can increase system capacity by as much as 35% through improved airflow and can kill up to 90% of microorganisms in coils and ducts.",
          },
          {
            label: "Reduce Allergens",
            desc: "Targets dust mites, bacteria, mold, and mildew — significantly reducing allergy-related symptoms for your household.",
          },
        ],
      },
    ],
    faqs: [
      ...COMMON_FAQS,
      {
        q: "What Does UV Light Installation Cost?",
        a: "We offer starting prices from $175 and up, with final quotes dependent on square feet, location and units. Schedule a consultation for a finalized quote.",
      },
    ],
    relatedSlugs: [
      "duct-cleaning",
      "air-quality-test",
      "sanitation",
      "furnace",
    ],
  },
  {
    slug: "air-quality-test",
    title: "Air Quality Test",
    tagline: "Air Quality Test",
    image: "/services/air-quality.jpg",
    shortDesc:
      "Professional indoor air quality testing measuring 7 key pollutant metrics.",
    description: [
      "Indoor air pollutants can cause major health complications, especially for those already at risk for lung cancer. Symptoms include nasal irritation, scratchy throat, headaches, nausea, and fatigue — often mimicking allergies, colds, or viruses.",
      "Vently Air's professional air quality test measures seven distinct metrics to give you a complete picture of what you're breathing inside your home or office.",
    ],
    qualityStatement:
      "Understanding your indoor air quality is the first step to a healthier home. Our certified experts provide comprehensive reporting and actionable recommendations.",
    extras: [
      {
        type: "metrics",
        heading: "7 Air Quality Parameters We Test",
        items: [
          {
            label: "PM 1.0",
            desc: "Particles under 1.0 micron — viruses, bacteria, metal fumes, smoke, and smog.",
          },
          {
            label: "PM 2.5",
            desc: "Particles under 2.5 microns — combustion particles and candle smoke.",
          },
          {
            label: "PM 10",
            desc: "Particles over 10 microns — dust, pollen, and mold (primary allergens).",
          },
          {
            label: "HCHO / HC2O",
            desc: "Formaldehyde levels from building materials and household products.",
          },
          {
            label: "TVOC",
            desc: "Total volatile organic compounds from chemicals, cleaning products, pesticides, and paint.",
          },
          {
            label: "Humidity",
            desc: "Moisture level measurement for optimal indoor comfort and health.",
          },
          {
            label: "AQI",
            desc: "Overall air quality index summarising your home's complete air health.",
          },
        ],
      },
    ],
    faqs: [
      ...COMMON_FAQS,
      {
        q: "What Does an Air Quality Test Cost?",
        a: "Prices start at $250 and up, with final quotes dependent on square feet, location and units. Schedule a consultation for a finalized quote.",
      },
    ],
    relatedSlugs: [
      "uv-light-installation",
      "sanitation",
      "duct-cleaning",
      "dryer-vent",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
