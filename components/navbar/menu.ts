export type MenuItemType = {
  name: string;
  path: string;
  active: boolean;
}

export const MenuLists: MenuItemType[] = [
  {
    name: "Home",
    path: "/",
    active: true
  },
  {
    name: "About",
    path: "/about",
    active: false
  },
  {
    name: "Services",
    path: "/services",
    active: false
  },
  {
    name: "Pricing",
    path: "/pricing",
    active: false
  },
  {
    name: "Contact",
    path: "/contact",
    active: false
  },
]