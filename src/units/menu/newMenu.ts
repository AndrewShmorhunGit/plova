interface ilMolinoMenu {
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

export const ilMolinoMenu = {
  brandName: "Il Molino",
  headerBackgroundImage:
    "https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/e_blur:400/Stores/h7srxokglcv5t6oymyxk",
  deliveryTime1: 25,
  deliveryTime2: 35,
  deliveryPrice: 1.5,
  rate: 96,
  message: "",
  menu: [
    {
      category: {
        categoryName: "Top sellers",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/jfxxpnxnspq61u27c1ki",
        bonus: "Deals",
      },
      products: [
        {
          name: "Assorted hot snacks",
          description:
            "Cheese balls, chicken nuggets, deep-fried crispy ravioli, french fries. Served with three types of sauces: garlic, ketchup, Caesar. Allergens: lactose, cereals, fish, eggs.",
          price: 9,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/drr6ipcfv7dro95vwcek",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Drinks",
        categoryImage:
          "https://api.getorder.biz/product/12258/image/29/700/700/cbc70c7e-5fa4-4edc-c01d-08d95c238f00.webp",
        bonus: "",
      },
      products: [
        {
          name: "Set Imperial",
          description:
            "Philadelphia with salmon, Philadelphia with eel, Philadelphia with shrimp, Philadelphia with tuna in sesame, California with crab mix in caviar, California with eel in sesame, California tempura, roll with salmon and cucumber, crunch with shrimp, tender with salmon..",
          price: 55,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/wixzwitohm7zjd6rynv2",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Pizza",
        categoryImage:
          "https://api.getorder.biz/product/12401/image/29/700/700/153c442a-f891-4534-bfc4-08d95c238f00.webp",
        bonus: "",
      },
      products: [
        {
          name: "Roll Philadelphia Gourmet",
          description: "Rice, salmon, eel, tobiko caviar, cream cheese, nori",
          price: 11,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/ayewso8ffolalnlfqik8",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Sets",
        categoryImage:
          "https://api.getorder.biz/product/12399/image/29/700/700/c8abe034-e04a-4ccf-c005-08d95c238f00.webp",
        bonus: "",
      },
      products: [
        {
          name: "Hiyashi wakame salad",
          description:
            "Hyashi algae, nut sauce (soy sauce, rice vinegar, cashew nuts, apples, sesame, onion, garlic, sugar syrup, vegetable oil), sesame",
          price: 3.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/bznxqaawz0a8ya0ro07p",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Appetizer",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/yfluqfr1k8rjiqdmb6wr",
        bonus: "",
      },
      products: [
        {
          name: "Udon noodles with shrimp",
          description:
            "Udon noodles, broccoli, carrots, beans, shrimp, mussels, squid, green onions, oyster sauce, tonkatsu sauce",
          price: 5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/wixzwitohm7zjd6rynv2",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Side dishes",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/kzi1wgakxybaa9ocrad8",
        bonus: "Deals",
      },
      products: [
        {
          name: "Set Imperial",
          description:
            "Philadelphia with salmon, Philadelphia with eel, Philadelphia with shrimp, Philadelphia with tuna in sesame, California with crab mix in caviar, California with eel in sesame, California tempura, roll with salmon and cucumber, crunch with shrimp, tender with salmon...",
          price: 55,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/wixzwitohm7zjd6rynv2",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Desserts",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/axdkhqpm3zvybjnqolfw",
        bonus: "",
      },
      products: [
        {
          name: "Cherry tart",
          description: "Cherry tart",
          price: 2,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/dbzqftoxmuxsvtzxgmkv",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Main dishes",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/ykjfskkh9vecxxsbbwri",
        bonus: "",
      },
      products: [
        {
          name: "Main dishes",
          description: "Soy sauce, sugar, mirin sauce",
          price: 0.5,
          image:
            "https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/image_preview_card/arrow.svg",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Paste",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/zmva2omwd1d7b3cjhzzb",
        bonus: "",
      },
      products: [
        {
          name: "Udon noodles with shrimp",
          description:
            "Udon noodles, broccoli, carrots, beans, shrimp, mussels, squid, green onions, oyster sauce, tonkatsu sauce",
          price: 5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/wixzwitohm7zjd6rynv2",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Salads",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/evetm7r6o6titfvqyjir",
        bonus: "Deals",
      },
      products: [
        {
          name: "Set Imperial",
          description:
            "Philadelphia with salmon, Philadelphia with eel, Philadelphia with shrimp, Philadelphia with tuna in sesame, California with crab mix in caviar, California with eel in sesame, California tempura, roll with salmon and cucumber, crunch with shrimp, tender with salmon...",
          price: 55,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/wixzwitohm7zjd6rynv2",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Sauces",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/vj4mgq95mpepsfvqzzea",
        bonus: "",
      },
      products: [
        {
          name: "Cherry tart",
          description: "Cherry tart",
          price: 2,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/dbzqftoxmuxsvtzxgmkv",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Soup",
        categoryImage:
          "https://api.getorder.biz/product/12355/image/29/700/700/26e02bbb-5882-439a-c04f-08d95c238f00.webp",
        bonus: "",
      },
      products: [
        {
          name: "Unagi sauce supplement",
          description: "Soy sauce, sugar, mirin sauce",
          price: 0.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/pzvvc3l4xpqqbzq2txpo",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
  ],
};
