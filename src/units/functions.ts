import { Location } from "react-router-dom";
import { ICart } from "../modules/modules";

export const hryvniaToDollarConverter = (price: number) => {
  const newPrice: number = price / 40;
  return newPrice.toFixed(2);
};

export const cutName = (name: string) => {
  if (name.includes("/")) {
    const newName: string = name.slice(0, name.indexOf("/") - 1);
    return newName.toUpperCase();
  } else {
    return name.toUpperCase();
  }
};

export const showDollarPrice = (price: number): string => {
  const dollar: string = (price * 100).toFixed().slice(0, -2);
  const cents: string = (price * 100).toFixed().slice(-2);

  const arrayToJoin: string[] = [dollar === "" ? "0" : dollar, cents];
  const actualPrice: string = arrayToJoin.join(",");
  return actualPrice;
};

export const getSlugFromLocation = (data: Location) => {
  const name = data.pathname.split("/").pop();
  if (name === undefined) {
    throw new Error("Opps, name is undefined!");
  }
  return name;
};

export const wait = <T>(func: () => T, time: number): Promise<T> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(func());
    }, time)
  );
};

export const getMAP_API_KEY = (): string => {
  const KEY = process.env.REACT_APP_MAP_API_KEY;
  if (KEY === undefined) {
    throw new Error("Sorry, Map API key is undefined");
  }
  return KEY;
};

export const getAPI_ID_KEY = (): string => {
  const KEY = process.env.REACT_APP_MAP_API_ID_KEY;
  if (KEY === undefined) {
    throw new Error("Sorry, Map API ID key is undefined");
  }
  return KEY;
};

export const getLocalStorageCart = (storeName: string): ICart[] | [] => {
  let cart: string | null | [] = localStorage.getItem(`PlovaCart${storeName}`);
  if (cart === null || []) {
    return [];
  }
  if (cart !== null || []) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};
