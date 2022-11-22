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
