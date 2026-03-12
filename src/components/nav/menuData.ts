// app/components/nav/menuData.ts
export type NavItem = {
  label: string;
  url?: string;
  isHeading?: boolean;
  children?: NavItem[];
};

export const headerMenu: NavItem[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/about-us",
  },
  {
    label: "Contact",
    url: "/contact",
  },
  {
    label: "Our Services",
    url: "/services",
    children: [
      {
        label: "Air Quality & Cleaning",
        children: [
          { label: "Air Duct Cleaning", url: "/services/duct-cleaning" },
          { label: "Dryer Vent Service", url: "/services/dryer-vent" },
          { label: "Chimney Cleaning", url: "/services/chimney-cleaning" },
          { label: "Air Quality Test", url: "/services/air-quality-test" },
          { label: "Sanitation", url: "/services/sanitation" },
          { label: "UV Light Installation", url: "/services/uv-light-installation" },
          { label: "Air Purification System", url: "/services/air-purification" },
          { label: "Whole House Humidification", url: "/services/whole-house-humidification" },
        ],
      },
      {
        label: "Heating Services",
        children: [
          { label: "Furnace, Coil & Blower Fan", url: "/services/furnace" },
          { label: "Heating System Installation", url: "/services/heating-system-installation" },
          { label: "Heating System Maintenance", url: "/services/heating-system-maintenance" },
          { label: "Emergency Heating Service", url: "/services/emergency-heating-service" },
          { label: "Hydro Air Systems", url: "/services/hydro-air-systems" },
        ],
      },
      {
        label: "AC & Cooling Services",
        children: [
          { label: "Air Conditioning Installation", url: "/services/ac-installation" },
          { label: "Air Conditioning Maintenance", url: "/services/ac-maintenance" },
          { label: "Air Conditioning Service & Repair", url: "/services/ac-service" },
          { label: "Ductless Split Systems", url: "/services/ductless-split-systems" },
        ],
      },
      {
        label: "Smart Home Solutions",
        children: [
          { label: "Home Automation & Smart Thermostats", url: "/services/smart-thermostats" },
        ],
      },
    ],
  },
];
