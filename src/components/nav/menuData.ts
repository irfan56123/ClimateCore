// app/components/nav/menuData.ts
export type NavItem = {
  label: string;
  url: string;
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
        label: "Air Duct Cleaning",
        url: "/services/duct-cleaning",
      },
      {
        label: "Dryer Vent Service",
        url: "/services/dryer-vent",
      },
      {
        label: "Furnace, Coil & Blower Fan",
        url: "/services/furnace",
      },
      {
        label: "Chimney Cleaning",
        url: "/services/chimney-cleaning",
      },
      {
        label: "UV Light Installation",
        url: "/services/uv-light-installation",
      },
      {
        label: "Air Quality Test",
        url: "/services/air-quality-test",
      },
      {
        label: "Sanitation",
        url: "/services/sanitation",
      },
    ],
  },
];
