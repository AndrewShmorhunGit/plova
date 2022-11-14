interface sushiyaMenu {
  brandName: string;
  headerBackgroundImage: string;
  deliveryTime1: number;
  deliveryTime2: number;
  deliveryPrice: number;
  rate: number;
  menu: [
    {
      category: {
        categoryName: string;
        categoryImage: string;
        bonus: string;
      };
      products: [
        {
          name: string;
          description: string;
          price: number;
          image: string;
          modifiers: string;
        }
      ];
    }
  ];
}

// const modifier = {};

export const sushiyaMenu = {
  brandName: "Sushiya",
  headerBackgroundImage:
    "https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/e_blur:400/Stores/l4hgrbhxd6ognfnly6ri",
  deliveryTime1: 0,
  deliveryTime2: 0,
  deliveryPrice: 1,
  rate: 97,
  message: `Each roll comes with one free set of ginger, wasabi and soy sauce`,
  menu: [
    {
      category: {
        categoryName: "Top sellers",
        categoryImage:
          "https://api.getorder.biz/product/45015/image/109/700/700/5356301100389.webp",
        bonus: "",
      },
      products: [
        {
          name: "Cool Set",
          description:
            "The category 'Sushi sets' is an offer at a special (reduced) price. The takeaway discount does not apply to the offer of sushi and roll sets. 3 pieces of soy sauce, 30 g of ginger and 10 g of wasabi are added to this sushi set free of charge.",
          price: 16,
          image:
            "https://api.getorder.biz/product/44591/image/109/700/700/5424301678778.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Vzumi Set",
          description:
            "The category 'Sushi sets' is an offer at a special (reduced) price. The takeaway discount does not apply to the offer of sushi and roll sets. 3 pieces of soy sauce and 30 g of ginger and 10 g of wasabi are added to this sushi set for free.",
          price: 15.5,
          image:
            "https://api.getorder.biz/product/45015/image/109/700/700/5356301100389.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Roll Philadelphia De Luxe with eel",
          description:
            "Each roll comes with 1 soy sauce for free, as well as 10 g of ginger and 3 g of wasabi, which are packaged together.",
          price: 10,
          image:
            "https://api.getorder.biz/product/44712/image/109/700/700/5022036723567.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Roll Philadelphia De Luxe with salmon and eel",
          description:
            "Each roll comes with 1 soy sauce for free, as well as 10 g of ginger and 3 g of wasabi, which are packaged together",
          price: 8.5,
          image:
            "https://api.getorder.biz/product/44707/image/109/700/700/5602176697869.webp",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Sushi Sets",
        categoryImage:
          "https://api.getorder.biz/product/45015/image/109/700/700/5356301100389.webp",
        bonus: "",
      },
      products: [
        {
          name: "Parti set",
          description:
            "The category 'Sushi sets' is an offer at a special (reduced) price. The takeaway discount does not apply to the offer of sushi and roll sets. 9 pieces of soy sauce, 90 g of ginger and 30 g of wasabi are added to this sushi set for free.",
          price: 50,
          image:
            "https://api.getorder.biz/product/44595/image/109/700/700/5413151442738.webp",
          modifiers: "",
          bonuses: "",
        },
        {
          name: "Maxi King Lukhuri De Luxe set",
          description:
            "The category 'Sushi sets' is an offer at a special (reduced) price. The takeaway discount does not apply to the offer of sushi and roll sets. 3 pieces of soy sauce, 30 g of ginger and 10 g of wasabi are added to this sushi set for free.",
          price: 32.5,
          image:
            "https://api.getorder.biz/product/44594/image/109/700/700/5688301974289.webp",
          modifiers: "",
          bonuses: "",
        },
        {
          name: "Nichosi set",
          description:
            "The category 'Sushi sets' is an offer at a special (reduced) price. The takeaway discount does not apply to the offer of sushi and roll sets. 3 pieces of soy sauce, 30 g of ginger and 10 g of wasabi are added to this sushi set for free",
          price: 27.5,
          image:
            "https://api.getorder.biz/product/44598/image/109/700/700/5317301087865.webp",
          modifiers: "",
          bonuses: "",
        },
        {
          name: "Parti set",
          description:
            "The category 'Sushi sets' is an offer at a special (reduced) price.The takeaway discount does not apply to the offer of sushi and roll sets. 3 pieces of soy sauce, 30 g of ginger and 10 g of wasabi are added to this sushi set for free.",
          price: 22,
          image:
            "https://api.getorder.biz/product/44593/image/109/700/700/5087301094018.webp",
          modifiers: "",
          bonuses: "",
        },
        {
          name: "Vzumi set",
          description:
            "The category 'Sushi sets' is an offer at a special (reduced) price. The takeaway discount does not apply to the offer of sushi and roll sets. 3 pieces of soy sauce and 30 g of ginger and 10 g of wasabi are added to this sushi set for free.",
          price: 16,
          image:
            "https://api.getorder.biz/product/45015/image/109/700/700/5356301100389.webp",
          modifiers: "",
          bonuses: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Drinks",
        categoryImage:
          "https://api.getorder.biz/product/44656/image/109/700/700/5901317524591.webp",
        bonus: "",
      },
      products: [
        {
          name: "Fresh grapefruit",
          description: "",
          price: 3,
          image:
            "https://api.getorder.biz/product/44654/image/109/700/700/5872317524488.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Fresh orange",
          description: "",
          price: 3,
          image:
            "https://api.getorder.biz/product/44648/image/109/700/700/5323317524249.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Borjomi glass 0.5l",
          description: "",
          price: 2.25,
          image:
            "https://api.getorder.biz/product/45116/image/109/700/700/5319209250945.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Classic lemonade with mint",
          description: "",
          price: 1.5,
          image:
            "https://api.getorder.biz/product/44624/image/109/700/700/5847149667078.webp",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Roles",
        categoryImage:
          "https://api.getorder.biz/product/45351/image/109/700/700/5605231689571.webp",
        bonus: "",
      },
      products: [
        {
          name: "Roll Philadelphia De Luxe with eel",
          description:
            "Each roll comes with 1 soy sauce for free, as well as 10 g of ginger and 3 g of wasabi, which are packaged together.",
          price: 9.5,
          image:
            "https://api.getorder.biz/product/44712/image/109/700/700/5022036723567.webp",
          modifiers: "",
        },
        {
          name: "Golden Dragon Roll",
          description:
            "Each roll comes with 1 soy sauce for free, as well as 10 g of ginger and 3 g of wasabi, which are packaged together.",
          price: 9,
          image:
            "https://api.getorder.biz/product/44691/image/109/700/700/5712341375413.webp",
          modifiers: "",
        },
        {
          name: "Roll Philadelphia De Luxe with salmon and eel",
          description:
            "Each roll comes with 1 soy sauce for free, as well as 10 g of ginger and 3 g of wasabi, which are packaged together.",
          price: 8.5,
          image:
            "https://api.getorder.biz/product/44707/image/109/700/700/5602176697869.webp",
          modifiers: "",
        },
        {
          name: "oll Philadelphia De Luxe with eel, salmon and smoked cheese",
          description:
            "Each roll comes with 1 soy sauce for free, as well as 10 g of ginger and 3 g of wasabi, which are packaged together.",
          price: 8.5,
          image:
            "https://api.getorder.biz/product/45123/image/109/700/700/5971216927823.webp",
          modifiers: "",
        },
        {
          name: "Roll Philadelphia De Luxe with Ebi shrimp",
          description:
            "Each roll comes with 1 soy sauce for free, as well as 10 g of ginger and 3 g of wasabi, which are packaged together.",
          price: 7.25,
          image:
            "https://api.getorder.biz/product/45351/image/109/700/700/5605231689571.webp",
          modifiers: "",
        },
        {
          name: "Roll Philadelphia De Luxe with fresh salmon",
          description:
            "Each roll comes with 1 soy sauce for free, as well as 10 g of ginger and 3 g of wasabi, which are packaged together.",
          price: 7.25,
          image:
            "https://api.getorder.biz/product/44701/image/109/700/700/5921898918855.webp",
          modifiers: "",
        },
        {
          name: "Roll Philadelphia De Luxe with salmon and mango",
          description:
            "Each roll comes with 1 soy sauce for free, as well as 10 g of ginger and 3 g of wasabi, which are packaged together.",
          price: 7.25,
          image:
            "https://api.getorder.biz/product/44701/image/109/700/700/5921898918855.webp",
          modifiers: "",
        },
        {
          name: "Roll Double Fish",
          description:
            "Each roll comes with 1 soy sauce for free, as well as 10 g of ginger and 3 g of wasabi, which are packaged together.",
          price: 7.25,
          image:
            "https://api.getorder.biz/product/44689/image/109/700/700/5716335461229.webp",
          modifiers: "",
        },
        {
          name: "Philadelphia with aburi salmon and tuna",
          description:
            "Each roll comes with 1 soy sauce for free, as well as 10 g of ginger and 3 g of wasabi, which are packaged together.",
          price: 7.25,
          image:
            "https://api.getorder.biz/product/44731/image/109/700/700/5173300229053.webp",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Salads",
        categoryImage:
          "https://api.getorder.biz/product/44765/image/109/700/700/5820205021861.webp",
        bonus: "",
      },
      products: [
        {
          name: "Salad with marinated salmon",
          description: "",
          price: 6.5,
          image:
            "https://api.getorder.biz/product/45010/image/109/700/700/5725314050040.webp",
          modifiers: "",
        },
        {
          name: "Bowl with salmon and rice",
          description: "",
          price: 5.5,
          image:
            "https://api.getorder.biz/product/45117/image/109/700/700/5352203405140.webp",
          modifiers: "",
        },
        {
          name: "Spring roll with salmon sashimi",
          description: "",
          price: 5,
          image:
            "https://api.getorder.biz/product/44764/image/109/700/700/5642205021746.webp",
          modifiers: "",
        },
        {
          name: "Spring roll with tuna",
          description: "",
          price: 4.5,
          image:
            "https://api.getorder.biz/product/44765/image/109/700/700/5820205021861.webp",
          modifiers: "",
        },
        {
          name: "Spring roll with crab mix and hiyashi",
          description: "",
          price: 3.5,
          image:
            "https://api.getorder.biz/product/44762/image/109/700/700/5815205021362.webp",
          modifiers: "",
        },
        {
          name: "Hiyashi seaweed salad with sesame",
          description: "",
          price: 2.25,
          image:
            "https://api.getorder.biz/product/44757/image/109/700/700/5112341668339.webp",
          modifiers: "",
        },
      ],
    },

    {
      category: {
        categoryName: "Desserts",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/image_preview_card/arrow.svg",
        bonus: "",
      },
      products: [
        {
          name: "Matcha tiramisu",
          description: "",
          price: 2,
          image:
            "https://api.getorder.biz/product/44812/image/109/700/700/5521301995529.webp",
          modifiers: "",
        },
        {
          name: "Pear cake",
          description: "",
          price: 2.5,
          image:
            "https://api.getorder.biz/product/45360/image/109/700/700/5214261854929.webp",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Sushi",
        categoryImage:
          "https://api.getorder.biz/product/44823/image/109/700/700/5290342556630.webp",
        bonus: "",
      },
      products: [
        {
          name: "Sushi eel",
          description: "",
          price: 2,
          image:
            "https://api.getorder.biz/product/44823/image/109/700/700/5290342556630.webp",
          modifiers: "",
        },
        {
          name: "Sushi salmon",
          description: "",
          price: 1,
          image:
            "https://api.getorder.biz/product/44825/image/109/700/700/5231342554820.webp",
          modifiers: "",
        },
      ],
    },
  ],
};
