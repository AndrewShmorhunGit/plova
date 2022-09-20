import {
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialFacebook,
} from "react-icons/ti";

import {
  GiFullPizza,
  GiIceCreamCone,
  GiHamburger,
  GiFallingLeaf,
  GiFishingBoat,
  GiCoffeeCup,
} from "react-icons/gi";

import { TbGrill } from "react-icons/tb";
// import { BiDish } from "react-icons/bi";

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

export const brands = [
  "McDonald's",
  "KFC",
  "Puzata Hata",
  "Burger King",
  "Okko Cafe",
  "Doner Market",
  "Chelentano",
  "Sushi Wok",
];

interface categories {
  id: number;
  category: string;
  icon?: JSX.Element;
}

export const categories = [
  { id: 1, category: "Pizza", icon: GiFullPizza },
  { id: 2, category: "Ice Cream", icon: GiIceCreamCone },
  { id: 3, category: "Burgers", icon: GiHamburger },
  { id: 4, category: "Vegetarian", icon: GiFallingLeaf },
  { id: 5, category: "Grill", icon: TbGrill },
  { id: 6, category: "Seafood", icon: GiFishingBoat },
  { id: 7, category: "Sushi" },
  { id: 8, category: "Tea & coffee", icon: GiCoffeeCup },
  { id: 9, category: "Fast Food" },
];
