import {
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialFacebook,
} from "react-icons/ti";

export const joinLinks = [
  {
    id: 1,
    text: "vacancy",
  },
  {
    id: 2,
    text: "partners",
  },
  {
    id: 3,
    text: "couriers",
  },
];

export const aboutLinks = [
  {
    id: 1,
    text: "about",
  },
  {
    id: 2,
    text: "connection",
  },
  {
    id: 3,
    text: "security",
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
    text: "facebook",
    icon: TiSocialFacebook,
  },
  {
    id: 2,
    text: "twitter",
    icon: TiSocialTwitter,
  },
  {
    id: 3,
    text: "instagram",
    icon: TiSocialInstagram,
  },
];

export const language = ["English", "French", "Russian", "Spanish"];

export const brands = ["McDonald's", "KFC", "Taco Bell", "Burger King"];

export const categories = [
  "Pizza",
  "Ice Cream",
  "Burgers",
  "Vegetarian",
  "Grill",
  "Seafood",
  "Breakfast",
  "Tea & coffee",
];
