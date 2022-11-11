interface mcMenu {
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

export const mcMenu = {
  brandName: "McDonalds",
  headerBackgroundImage:
    "https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/e_blur:400/Stores/u10ljmkdwmemxjfnuh9r",
  deliveryTime1: 35,
  deliveryTime2: 45,
  deliveryPrice: 1,
  rate: 100,
  message: `You can find detailed information about the products on the official McDonald's website www.mcdonalds.ua and in the "Consumer Information" file in the application. By confirming the order, you agree to the General Terms of Use.`,
  menu: [
    {
      category: {
        categoryName: "Top sellers",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/f2kzp8sqy7eyhiikuvdr",
        bonus: "",
      },
      products: [
        {
          name: "Borscht with sour cream and shawarma with chicken",
          description:
            "Borscht with sour cream, 330/30g & Shawarma with chicken, not spicy, 360g, total: 720 g",
          price: 5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/hkwlvj1but2mwjbink9o",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Chicken",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/rime4w0hx9h9ft1vg5m2",
        bonus: "",
      },
      products: [
        {
          name: "Pork loin su-vid and roasted vegetables",
          description:
            "Pork loin on the bone sous vide. Served with baked vegetables (zucchini, eggplant, bell pepper). 220/180g",
          price: 4.5,
          image:
            "https://api.getorder.biz/product/38757/image/44/700/700/2000040324.webp",
          modifiers: "",
          bonuses: "",
        },
      ],
    },
    {
      category: {
        categoryName: "McMenu",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/f2kzp8sqy7eyhiikuvdr",
        bonus: "",
      },
      products: [
        {
          name: "American breakfast",
          description:
            "Fried eggs, french fries, bacon, fresh tomatoes, ketchup, spices 350g",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/alvam8bj97alif8gew8v",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Burgers",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/akw93khk1sc0hzndonq3",
        bonus: "",
      },
      products: [
        {
          name: "Set Baked salmon, steamed vegetables, boiled egg and Caesar salad",
          description:
            "Baked salmon, 100g & Steamed vegetables, 130g & Uzvar, 250ml & Caesar salad with chicken, 180g. Total: 660g",
          price: 10,
          image:
            "https://api.getorder.biz/product/38772/image/44/700/700/2000040384.webp",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Happy Mill",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/lyzfxrwl4aqpkqic01xg",
        bonus: "",
      },
      products: [
        {
          name: "Duck leg with couscous and Caesar salad",
          description:
            "Duck leg with pineapple, 200g & Couscous with butter, 180g & Caesar salad with chicken, 180g. Total: 560g",
          price: 10,
          image:
            "https://api.getorder.biz/product/38736/image/44/700/700/2000040361.webp",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Potato",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/fkwvkrkcehcfwtsxrooa",
        bonus: "",
      },
      products: [
        {
          name: "Solyanka",
          description:
            "Aromatic soup with smoked meats, olives and lemon. Served with sour cream, lemon, capers and sourdough bread 300/15/30g",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/anz7xlfg1tqrberxo2mh",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Snacks",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/v9qlmupyfap3qctak4j6",
        bonus: "-20%",
      },
      products: [
        {
          name: "Cheesecakes with sour cream, 3pcs",
          description: "Cheesecakes, powdered sugar, butter, sour cream 140g",
          price: 2.5,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2021/02/25/015d863d-4e24-4a20-a524-5d8d971fe205-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Desserts",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/pzw4eofgpwxjtbjzvgvw",
        bonus: "",
      },
      products: [
        {
          name: "Dumplings with beef and pork",
          description:
            "Pork and beef filling, butter, spices Served with sour cream 200/30g",
          price: 3,
          image:
            "https://api.getorder.biz/product/26229/image/44/700/700/2000040210.webp",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Hot drinks",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/r2pevj4entushjjib8g8",
        bonus: "",
      },
      products: [
        {
          name: "Cheesecake with salted caramel",
          description:
            "Flour, powdered sugar, chicken eggs, butter, baking powder, ground cinnamon, Philadelphia cheese, cream, sour milk cheese, vanilla sugar, salt, sugar",
          price: 2.5,
          image:
            "https://api.getorder.biz/product/18370/image/44/700/700/2000038385.webp",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Cold drinks",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/njwobxt02xd6qrfyzpjp",
        bonus: "",
      },
      products: [
        {
          name: "Stewed fruit",
          description: "Dried fruits, honey, sugar, lemon, water 250ml",
          price: 0.7,
          image:
            "https://api.getorder.biz/product/18418/image/44/700/700/2000038729.webp",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Cold Desserts",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/bbirro7okb3spprqtllc",
        bonus: "",
      },
      products: [
        {
          name: "Stewed fruit",
          description: "Dried fruits, honey, sugar, lemon, water 250ml",
          price: 0.7,
          image:
            "https://api.getorder.biz/product/18418/image/44/700/700/2000038729.webp",
          modifiers: "",
        },
      ],
    },
  ],
};
