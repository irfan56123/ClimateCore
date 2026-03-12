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
        a: "We accept all forms of payment including cash, check and credit cards. We also provide monthly payment options via a third-party service.",
      },
      {
        q: "What Does Dryer Vent Service Cost?",
        a: "Our dryer vent service usually starts at $100.",
      },
      {
        q: "Where Do You Operate?",
        a: "We currently have providers in Massachusetts, Connecticut, New Hampshire & Rhode Island.",
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
  {
    slug: "ac-installation",
    title: "Air Conditioning Installation",
    tagline: "Professional AC Installation",
    image: "/placeholder.jpg",
    shortDesc: "Reliable, efficient air conditioning solutions you can count on for years to come.",
    description: [
      "Stay cool and comfortable all summer with professional AC installation from Vently Air Air. Even in Massachusetts, hot and humid summers make reliable air conditioning essential for your home or workplace.",
      "Whether you're installing AC for the first time or replacing an older system, our team can design and install the right solution for your space. We specialize in a wide range of systems, including ductless mini-splits, high-velocity systems, and traditional central air systems—using only high-quality components built for long-lasting performance.",
      "Our experienced technicians are licensed and trained to install and service a wide variety of industry-leading air conditioning systems.",
      "Proper duct sizing plays a critical role in AC efficiency and comfort. That’s why we carefully design and install correctly sized ductwork to maximize system performance. Once installation is complete, we balance the system to ensure cool air is evenly distributed throughout your space.",
      "Contact Vently Air today for reliable, efficient air conditioning solutions you can count on for years to come."
    ],
    qualityStatement:
      "Our experienced technicians are licensed and trained to expertly install and service a wide variety of air conditioning systems for optimal performance.",
    extras: [],
    faqs: [
      ...COMMON_FAQS,
      {
        q: "What Does AC Installation Cost?",
        a: "Pricing varies based on your home size and system choice. Schedule a consultation for a finalized quote.",
      },
    ],
    relatedSlugs: ["duct-cleaning", "furnace", "air-quality-test", "sanitation"],
  },
  {
    slug: "ac-maintenance",
    title: "Air Conditioning Maintenance",
    tagline: "Expert AC Maintenance",
    image: "/placeholder.jpg",
    shortDesc: "Keep your AC running efficiently and save money with regular maintenance.",
    description: [
      "Keep your AC running efficiently and save money with regular air conditioning maintenance from Vently Air Air. Just like changing the oil in your car, annual AC service helps extend the life of your system and prevents costly breakdowns—especially during the hottest days of summer.",
      "Our comprehensive AC service includes replacing the air filter, cleaning the indoor evaporator coil, washing the outdoor condenser coils, flushing the condensate drain line, and checking refrigerant levels. We also inspect your system for airflow issues to make sure cool air is reaching every room in your home.",
      "If your system is older, our technicians can evaluate its condition, estimate its remaining lifespan, and explain the potential energy savings of upgrading to a newer, high-efficiency unit. In many cases, the energy savings can help offset the cost of a replacement system.",
      "Even though the AC season in Massachusetts is relatively short, regular maintenance keeps your system reliable, efficient, and ready whenever you need it."
    ],
    qualityStatement:
      "Regular maintenance keeps your system reliable, efficient, and ready whenever you need it, preventing costly breakdowns.",
    extras: [],
    faqs: [
      ...COMMON_FAQS,
      {
        q: "What Does AC Maintenance Cost?",
        a: "Our AC maintenance service pricing varies depending on the system type. Schedule a consultation for an exact quote.",
      },
    ],
    relatedSlugs: ["ac-installation", "duct-cleaning", "furnace", "air-quality-test"],
  },
  {
    slug: "ac-service",
    title: "Air Conditioning Service & Repair",
    tagline: "Emergency AC Repair Service",
    image: "/placeholder.jpg",
    shortDesc: "Fast and reliable air conditioning repair services when you need them most.",
    description: [
      "AC System Breakdown? Call Our Emergency Line: 781-819-0399",
      "Air conditioning systems can fail for many reasons, including poor maintenance, clogged filters, refrigerant leaks, electrical issues, or worn components. When your AC stops working—especially during the heat of summer—it can quickly make your home or workplace uncomfortable.",
      "At Vently Air, we respond to emergency AC repair calls as quickly as possible. Our service vehicles are fully stocked with a wide range of testing tools, allowing our technicians to diagnose and repair many systems on the spot so you can get your cool air back fast.",
      "The best way to prevent unexpected breakdowns is with regular maintenance. Annual AC service helps keep your system running efficiently and can often prevent costly emergency repairs. However, if a breakdown does occur, you can count on us for prompt service and fair, reasonable pricing—because we believe in treating our customers the way we’d want to be treated."
    ],
    qualityStatement:
      "Count on us for prompt service and fair, reasonable pricing when your AC breaks down.",
    extras: [],
    faqs: [
      ...COMMON_FAQS,
      {
        q: "Do you offer emergency AC repair?",
        a: "Yes! Call our emergency line at 781-819-0399 for fast assistance.",
      },
    ],
    relatedSlugs: ["ac-maintenance", "ac-installation", "duct-cleaning"],
  },
  {
    slug: "air-purification",
    title: "Air Purification System",
    tagline: "Professional Air Purification",
    image: "/placeholder.jpg",
    shortDesc: "Improve the air quality in your home with professional air purification solutions.",
    description: [
      "Improve the air quality in your home with professional air purification solutions from Vently Air. We offer a range of options designed to keep your indoor air cleaner, healthier, and more comfortable for your family.",
      "From standard air filters and high-efficiency 5-inch media filters to advanced electronic air cleaners and UV air sterilization systems, we can recommend and install the solution that best fits your home. Better air filtration can help reduce allergies, minimize dust and dust mites, and remove pet dander from your indoor environment.",
      "Standard one-inch filters can clog quickly and reduce the efficiency of your HVAC system. Upgrading to a 5-inch media filter provides longer-lasting filtration, improved system performance, and cleaner air throughout your home. Electronic air cleaners can remove up to 99.9% of airborne allergens without the need for frequent filter replacements. UV air sterilizers help neutralize mold, mildew, bacteria, and viruses that may be circulating in your air.",
      "Let Vently Air help you create a healthier indoor environment with the right air purification system for your home."
    ],
    qualityStatement:
      "Better air filtration can help reduce allergies, minimize dust and dust mites, and remove pet dander from your indoor environment.",
    extras: [],
    faqs: [
      ...COMMON_FAQS,
      {
        q: "What types of purification systems do you install?",
        a: "We install standard air filters, high-efficiency 5-inch media filters, advanced electronic air cleaners, and UV air sterilizers.",
      },
    ],
    relatedSlugs: ["air-quality-test", "uv-light-installation", "duct-cleaning"],
  },
  {
    slug: "ductless-split-systems",
    title: "Ductless Split Systems",
    tagline: "Efficient Ductless Heating & Cooling",
    image: "/placeholder.jpg",
    shortDesc: "Energy-efficient ductless mini-split systems for heating and cooling your home or business.",
    description: [
      "Heating and cooling are essential for keeping your home comfortable year-round. In many New England homes, adding ductwork to new spaces—such as home additions or finished attics—isn’t always practical. That’s where ductless mini-split systems provide the perfect solution.",
      "A sleek indoor wall unit can deliver both heating and cooling directly to the room, while a compact outdoor unit is installed conveniently outside. With minimal construction and disruption, most ductless systems can be installed in as little as one day.",
      "Ductless systems are also very energy-efficient, making them a cost-effective option for homeowners in Massachusetts when extending existing ductwork isn’t possible. These systems may qualify for significant rebates through Mass Save and can often be controlled wirelessly through a smartphone app.",
      "Some ductless systems also offer flexible options that can integrate with existing or new ductwork for new construction or renovations—often providing a more affordable alternative to traditional oil or electric heating systems. All systems are backed by a 10-year warranty for long-term peace of mind.",
      "Ductless mini-splits are also an excellent solution for commercial spaces such as restaurants, retail stores, offices, and server rooms where precise temperature control is important.",
      "Contact Vently Air today to learn how a ductless system can provide efficient, reliable comfort for your home or business."
    ],
    qualityStatement:
      "Ductless mini-split systems provide a highly efficient, customizable heating and cooling solution with minimal installation disruption.",
    extras: [],
    faqs: [
      ...COMMON_FAQS,
      {
        q: "How long does it take to install a ductless system?",
        a: "With minimal construction and disruption, most ductless systems can be installed in as little as one day.",
      },
      {
        q: "Do ductless systems qualify for rebates?",
        a: "Yes, our highly efficient ductless systems may qualify for significant rebates through Mass Save.",
      }
    ],
    relatedSlugs: ["ac-installation", "furnace", "ac-service"],
  },
  {
    slug: "emergency-heating-service",
    title: "Emergency Heating Service",
    tagline: "24/7 Emergency Heating Service",
    image: "/placeholder.jpg",
    shortDesc: "Fast and reliable emergency heating repair services to restore your heat quickly.",
    description: [
      "If your heating system stops working unexpectedly, don’t wait in the cold. Call Vently Air anytime for 24/7 emergency heating service. Our team responds quickly and will get to your home or business as soon as possible to restore your heat.",
      "During a Massachusetts winter, indoor temperatures can drop fast when a heating system fails. This can lead to uncomfortable and even dangerous conditions, including frozen pipes and potential property damage. When your heat goes out, you need reliable help right away.",
      "Heating systems can stop working for many reasons, including worn components, lack of maintenance, or unexpected mechanical issues. The best way to prevent sudden breakdowns is with regular service and maintenance. That’s why we offer affordable heating maintenance programs designed to keep your system running efficiently and reliably all winter long.",
      "If your heat isn’t working, don’t wait—call Vently Air and we’ll get your system back up and running."
    ],
    qualityStatement:
      "Our team responds quickly to emergency heating calls to ensure your home or business stays warm and safe during the coldest days.",
    extras: [],
    faqs: [
      ...COMMON_FAQS,
      {
        q: "Do you offer 24/7 emergency heating service?",
        a: "Yes, call us anytime for fast emergency heating repair to restore your heat as soon as possible.",
      },
    ],
    relatedSlugs: ["heating-system-installation", "heating-system-maintenance", "furnace"],
  },
  {
    slug: "heating-system-installation",
    title: "Heating System Installation",
    tagline: "High-Efficiency Heating Installation",
    image: "/placeholder.jpg",
    shortDesc: "Upgrade to a new, high-efficiency heating system for reliable warmth and lower energy bills.",
    description: [
      "In Massachusetts, the heating season can last up to six months each year. During that time, a dependable heating system isn’t just about comfort—it’s essential for the safety of your home and family. With winter temperatures often dropping well below freezing in eastern Massachusetts, a high-efficiency gas or propane furnace can keep your home warm and reliable all season long.",
      "Older heating systems can be extremely inefficient and costly to operate. Many systems that are 15 years or older may only operate at 50–60% efficiency. Modern gas and propane furnaces can reach efficiency levels of up to 97%, helping homeowners reduce energy waste and lower monthly heating bills. In many cases, upgrading to a new system can reduce heating costs by 20–30%, allowing homeowners to recover their investment over time.",
      "Massachusetts homeowners may also qualify for rebates of $500–$800 through the Mass Save program. After completing a free home energy audit, you may also be eligible for a 7-year, 0% interest loan to help finance a new high-efficiency heating system.",
      "Vently Air installs and services a wide range of heating systems. For new installations, we recommend the reliability and performance of Trane gas furnaces. We also install Hydro-Air systems and heat pump systems to meet a variety of home and business heating needs.",
      "Contact Vently Air today to learn more about upgrading to an efficient, dependable heating system."
    ],
    qualityStatement:
      "Upgrading to a new, high-efficiency gas or propane furnace can keep your home warm, reliable, and reduce energy costs.",
    extras: [],
    faqs: [
      ...COMMON_FAQS,
      {
        q: "Are there rebates available for new heating systems?",
        a: "Yes! Massachusetts homeowners may qualify for rebates of $500–$800 through the Mass Save program when installing high-efficiency systems.",
      },
    ],
    relatedSlugs: ["heating-system-maintenance", "emergency-heating-service", "furnace"],
  },
  {
    slug: "heating-system-maintenance",
    title: "Heating System Maintenance",
    tagline: "Professional Heating Maintenance",
    image: "/placeholder.jpg",
    shortDesc: "Keep your heating system running efficiently and reliably all winter long.",
    description: [
      "In Massachusetts, an inefficient heating furnace can cost you big—almost like burning money. Vently Air provides professional furnace service that cleans and tunes your burners for maximum performance, delivering cleaner, more efficient heat while lowering your energy costs.",
      "We offer regular maintenance contracts to ensure your gas or propane furnace stays in top shape all season long. Proper maintenance helps prevent breakdowns and keeps your home warm and safe during harsh New England winters.",
      "Don’t get caught without heat in the middle of a storm. Call Vently Air today to find the right maintenance program for your heating system.",
      "Serving Boston, Eastern Massachusetts, Western Massachusetts, North Shore, South Shore, and Greater Boston communities."
    ],
    qualityStatement:
      "Proper maintenance helps prevent breakdowns, reduces energy costs, and keeps your home warm and safe during harsh winters.",
    extras: [],
    faqs: [
      ...COMMON_FAQS,
      {
        q: "Why is heating maintenance important?",
        a: "Regular maintenance cleans and tunes your system for maximum performance, delivering cleaner, more efficient heat and preventing unexpected breakdowns.",
      },
    ],
    relatedSlugs: ["heating-system-installation", "emergency-heating-service", "furnace"],
  },
  {
    slug: "smart-thermostats",
    title: "Home Automation & Smart Thermostats",
    tagline: "Smart Thermostat Installation",
    image: "/placeholder.jpg",
    shortDesc: "Upgrade to a smart thermostat for modern convenience, enhanced comfort, and energy savings.",
    description: [
      "Ever leave home in a rush and forget to turn down the heat—only to realize you’re wasting money on a cold winter day in Massachusetts? It’s time to upgrade to the modern convenience of a smart thermostat. Vently Air can install a smart thermostat in your home to give you comfort, control, and energy savings.",
      "Upgrade your home today and take control of your comfort and energy bills."
    ],
    qualityStatement:
      "Take control of your comfort and energy bills with a professionally installed smart thermostat.",
    extras: [
      {
        type: "benefits",
        heading: "Smart Thermostat Features",
        items: [
          {
            label: "Intuitive Controls",
            desc: "Easy-to-use touch screen controls for accurate temperature adjustments.",
          },
          {
            label: "Remote Access",
            desc: "Control your home's temperature from your smartphone or the internet, from anywhere.",
          },
          {
            label: "Learning Technology",
            desc: "Adapts to your habits and schedule, automatically adjusting to maximize comfort and savings.",
          },
          {
            label: "Rebates Available",
            desc: "Eligibility for rebates from Mass Save, or programs like Nest’s National Grid program.",
          }
        ],
      },
    ],
    faqs: [
      ...COMMON_FAQS,
      {
        q: "What are the benefits of a smart thermostat?",
        a: "Smart thermostats offer remote control via smartphone, learning technology that adapts to your habits, and potential energy savings and rebates through Mass Save.",
      },
    ],
    relatedSlugs: ["heating-system-installation", "ac-installation", "ductless-split-systems"],
  },
  {
    slug: "hydro-air-systems",
    title: "Hydro Air Systems",
    tagline: "Efficient Hydro-Air Heating & Cooling",
    image: "/placeholder.jpg",
    shortDesc: "Combine an air handler and ductwork with a water heater and AC coils for efficient temperature control.",
    description: [
      "Hydro-air systems combine an air handler and ductwork with a water heater and AC coils—delivering both heating and cooling through a single system. Hot water heats the air in winter, while AC coils keep your home cool in summer.",
      "Hydro-air systems are often more cost-effective than traditional radiator (“wet”) systems paired with separate ducted AC.",
      "For homeowners in Metro West, where heating and cooling demands can be extreme, hydro-air systems provide a reliable solution when traditional systems aren’t enough.",
      "Contact Vently Air today to learn how a hydro-air system can meet your home’s heating and cooling needs."
    ],
    qualityStatement:
      "Hydro-air systems provide a highly reliable, centralized heating and cooling solution suitable for large or multi-zone homes.",
    extras: [
      {
        type: "benefits",
        heading: "Advantages of Hydro-Air Systems",
        items: [
          {
            label: "Easy Zoning",
            desc: "Perfect for large or multi-zone homes requiring independent temperature control per area.",
          },
          {
            label: "Expandable Options",
            desc: "Flexible expandability, such as adding the ability to heat a pool.",
          },
          {
            label: "High Efficiency",
            desc: "The ability to heat larger spaces efficiently with consistent temperatures.",
          }
        ],
      },
    ],
    faqs: [
      ...COMMON_FAQS,
      {
        q: "What is a hydro-air system?",
        a: "It combines an air handler and ductwork with a water heater and AC coils—delivering both heating and cooling through a single, centralized system.",
      },
    ],
    relatedSlugs: ["heating-system-installation", "ac-installation", "ductless-split-systems"],
  },
  {
    slug: "whole-house-humidification",
    title: "Whole House Humidification",
    tagline: "Whole-House Humidifier Installation",
    image: "/placeholder.jpg",
    shortDesc: "Improve comfort and health during dry winters with a whole-house humidifier.",
    description: [
      "During Massachusetts’ long winters, dry indoor air can cause dry skin, chapped lips, sore throats, snoring, and even damage wood floors and furnishings. Portable humidifiers are often inconvenient and require constant refilling—but a whole-house humidifier solves these problems with ease and efficiency.",
      "Vently Air can install a whole-house system directly on your existing heating and cooling setup.",
      "Enjoy improved comfort, better health, and protection for your home. Call Vently Air today to determine the best humidification system for your space and budget."
    ],
    qualityStatement:
      "A whole-house humidifier improves comfort, health, and protects your home's furnishings without the hassle of refilling portable units.",
    extras: [
      {
        type: "benefits",
        heading: "Humidifier Options",
        items: [
          {
            label: "Evaporative Humidifiers",
            desc: "Deliver optimal moisture evenly throughout your home through a high-quality evaporation panel.",
          },
          {
            label: "Steam Humidifiers",
            desc: "Inject precise, controlled steam directly into your ductwork for optimal humidity control.",
          }
        ],
      },
    ],
    faqs: [
      ...COMMON_FAQS,
      {
        q: "Why do I need a whole-house humidifier?",
        a: "It prevents dry skin, sore throats, and damage to wood furnishings by automatically maintaining comfortable humidity levels during long, dry winters.",
      },
    ],
    relatedSlugs: ["air-quality-test", "air-purification", "heating-system-installation"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
