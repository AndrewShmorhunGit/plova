import {
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialFacebook,
} from "react-icons/ti";
import charity from "../images/jumbotron/charity.png";
import coffee from "../images/jumbotron/coffee.png";
import food from "../images/jumbotron/food.png";
import plovaExpress from "../images/jumbotron/plovaExpress.png";
import groceries from "../images/jumbotron/groceries.webp";
import magicStick from "../images/jumbotron/magicStick.webp";
import pharmacy from "../images/jumbotron/pharmacy.webp";
import shops from "../images/jumbotron/shops.webp";
import drinks from "../images/jumbotron/drinks.png";
import drugs from "../images/jumbotron/drugs.png";
import tobacco from "../images/jumbotron/tobacco.webp";
import courier from "../images/jumbotron/courier.png";

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

interface jumbotron {
  id: number;
  category: string;
  icon: HTMLImageElement;
  subcategory: Subcategory[] | null;
}

interface Subcategory {
  category: string;
  icon: HTMLImageElement;
}

export const jumbotron = [
  {
    id: 1,
    category: "Charity",
    icon: charity,
    subcategory: null,
  },
  {
    id: 2,
    category: "Food",
    icon: food,
    subcategory: null,
  },
  {
    id: 3,
    category: "Plova Express",
    icon: plovaExpress,
    subcategory: null,
  },
  {
    id: 4,
    category: "Groceries",
    icon: groceries,
    subcategory: [
      { category: "Groceries", icon: groceries },
      { category: "Alcohol & Drinks", icon: drinks },
    ],
  },
  {
    id: 5,
    category: "Shops & Services",
    icon: shops,
    subcategory: [
      { category: "Shops & Services", icon: shops },
      { category: "Tobacco", icon: tobacco },
    ],
  },
  {
    id: 6,
    category: "Pharmacy & Beauty",
    icon: pharmacy,
    subcategory: [
      { category: "Pharmacy & Beauty", icon: shops },
      { category: "Medical services", icon: drugs },
    ],
  },
  {
    id: 7,
    category: "Coffee & Desserts",
    icon: coffee,
    subcategory: null,
  },
  {
    id: 8,
    category: "Anything",
    icon: magicStick,
    subcategory: [
      { category: "Anything", icon: magicStick },
      { category: "Courier", icon: courier },
    ],
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
