// app/components/nav/menuData.ts
export type NavItem = {
  label: string;
  url: string;
  children?: NavItem[];
};

export const headerMenu: NavItem[] = [
  {
    label: "Heating",
    url: "/heating",
    children: [
      {
        label: "Furnace Installation",
        url: "/heating/furnace-installation",
      },
      {
        label: "Furnace Repair",
        url: "/heating/furnace-repair",
      },
      {
        label: "Furnace Maintenance",
        url: "/heating/furnace-maintenance",
      },
      {
        label: "Heat Pump Installation",
        url: "/heating/heat-pump-installation",
      },
      {
        label: "Heat Pump Repair",
        url: "/heating/heat-pump-repair",
      },
      {
        label: "Central Heating Systems",
        url: "/heating/central-heating",
      },
    ],
  },
  {
    label: "Air Conditioning",
    url: "/air-conditioning",
    children: [
      {
        label: "AC Installation",
        url: "/air-conditioning/ac-installation",
      },
      {
        label: "AC Repair",
        url: "/air-conditioning/ac-repair",
      },
      {
        label: "AC Maintenance",
        url: "/air-conditioning/ac-maintenance",
      },
      {
        label: "Mini Split Installation",
        url: "/air-conditioning/mini-split-installation",
      },
      {
        label: "Mini Split Repair",
        url: "/air-conditioning/mini-split-repair",
      },
      {
        label: "Condenser Installation",
        url: "/air-conditioning/condenser-installation",
      },
    ],
  },
  {
    label: "Indoor Air Quality",
    url: "/air-quality",
    children: [
      {
        label: "Air Duct Cleaning",
        url: "/air-quality/air-duct-cleaning",
      },
      {
        label: "Dryer Vent Cleaning",
        url: "/air-quality/dryer-vent-cleaning",
      },
      {
        label: "Chimney Cleaning",
        url: "/air-quality/chimney-cleaning",
      },
    ],
  },

  {
    label: "About Us",
    url: "/about-us",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];
