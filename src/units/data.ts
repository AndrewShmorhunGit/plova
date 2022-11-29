import {
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialFacebook,
} from "react-icons/ti";

export const joinLinks = [
  {
    id: 1,
    text: "Careers",
  },
  {
    id: 2,
    text: "Plova for Partners",
  },
  {
    id: 3,
    text: "Couriers",
  },
  {
    id: 4,
    text: "Plova Business",
  },
];

export const aboutLinks = [
  {
    id: 1,
    text: "About us",
  },
  {
    id: 2,
    text: "FAQ",
  },
  {
    id: 3,
    text: "Plova Prime",
  },
  {
    id: 4,
    text: "Blog",
  },
  {
    id: 5,
    text: "Contact us",
  },
  {
    id: 6,
    text: "Security",
  },
];

interface socialLinks {
  id: number;
  text: string;
  icon: JSX.Element;
}

export const socialLinks = [
  {
    id: 1,
    text: "Facebook",
    icon: TiSocialFacebook,
  },
  {
    id: 2,
    text: "Twitter",
    icon: TiSocialTwitter,
  },
  {
    id: 3,
    text: "Instagram",
    icon: TiSocialInstagram,
  },
];

export const language: string[] = ["English", "French", "Russian", "Spanish"];

interface jumbotron {
  id: number;
  category: string;
  icon: string;
}

export const categories = [
  "International",
  "Pizza",
  "Sushi",
  "Cosmetics",
  "Flowers",
  "Desserts",
  "Burgers",
  "Alcohol",
  "Beer",
];

export const jumbotron = [
  {
    id: 1,
    category: "Charity",
    iconUrl:
      "https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/StoreCategories/jwum2o0vanhq29kmennd",
  },
  {
    id: 2,
    category: "Food",
    iconUrl:
      "https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/StoreCategories/prj0mlcuvmymzfh8pqjz",
  },
  {
    id: 3,
    category: "Plova Express",
    iconUrl:
      "https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/StoreCategories/hxgpd20fgz7ykr6gnh8x",
  },
  {
    id: 4,
    category: "Groceries",
    iconUrl:
      "https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/CategoryGroups/lcmflctz9nuq7odxz0rk",
  },
  {
    id: 5,
    category: "Shops & Services",
    iconUrl:
      "https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/CategoryGroups/pltazoi0lkmpwhwb3aom",
  },
  {
    id: 6,
    category: "Pharmacy & Beauty",
    iconUrl:
      "https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/CategoryGroups/laa5wggggfjirdvhngz5",
  },
  {
    id: 7,
    category: "Coffee & Desserts",
    iconUrl:
      "https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/StoreCategories/vevdez89piflyonld84d",
  },
  {
    id: 8,
    category: "Anything",
    iconUrl:
      "https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/CategoryGroups/favmxfgt35oymbx7wi54",
  },
];

interface cooperationData {
  id: number;
  image: string;
  theme: string;
  text: string;
  linkTo: string;
}

export const cooperationData = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/glovoapp/image/fetch/w_254,h_220,c_lpad,b_transparent,f_auto,q_auto:low,dpr_3.0/https://glovoapp.com/images/corporate-container/rider-image.png",
    theme: "Become a rider",
    text: "Be your own boss! Enjoy flexibility, freedom and competitive earnings by delivering with Plova.",
    linkTo: "https://couriers.glovoapp.com/ua/",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/glovoapp/image/fetch/w_254,h_220,c_lpad,b_transparent,f_auto,q_auto:low,dpr_3.0/https://glovoapp.com/images/corporate-container/partners-image.png",
    theme: "Become a partner",
    text: "Grow with Plova! Our technology and user base can help you boost sales and unlock new opportunities!",
    linkTo: "https://sell.glovoapp.com/",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/glovoapp/image/fetch/w_254,h_220,c_lpad,b_transparent,f_auto,q_auto:low,dpr_2.0/https://glovoapp.com/images/corporate-container/careers-image.png",
    theme: "Careers",
    text: "Ready for an exciting new challenge? If you’re ambitious, humble, and love working with others, then we want to hear from you!",
    linkTo: "https://jobs.glovoapp.com/",
  },
];
