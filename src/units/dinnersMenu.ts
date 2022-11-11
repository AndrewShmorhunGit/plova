interface dinnersMenu {
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

export const dinnersMenu = {
  brandName: "Dinner's",
  headerBackgroundImage:
    "https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/e_blur:400/Stores/r2gtlvid07hxkcf9n4mr",
  deliveryTime1: 25,
  deliveryTime2: 35,
  deliveryPrice: 1,
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
          name: "Set Imperial",
          description:
            "Philadelphia with salmon, Philadelphia with eel, Philadelphia with shrimp, Philadelphia with tuna in sesame, California with crab mix in caviar, California with eel in sesame, California tempura, roll with salmon and cucumber, crunch with shrimp, tender with salmon...",
          price: 55,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/wixzwitohm7zjd6rynv2",
          bonuses: "-20%",
          modifiers: "",
        },
        {
          name: "Same Te Set",
          description:
            "Philadelphia Salmon, California Sesame Salmon, California Tempura, Salmon Maki, Shrimp Crunch, Baked Shrimp",
          price: 27.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ynkvxm5za0vvekexhhhv",
          bonuses: "-20%",
          modifiers: "",
        },
        {
          name: "Maldives Set",
          description:
            "Tender with salmon, California tempura, tempura roll with salmon, baked with shrimp, baked with tuna (spicy)",
          price: 25,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/enskro6baes50oqpoblr",
          bonuses: "-10%",
          modifiers: "",
        },
        {
          name: "Set Fusion",
          description:
            "Tender with salmon, tempura roll with salmon, tempura roll with tuna, baked with shrimp",
          price: 25,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/igjnyqbucjzykoi1kwas",
          bonuses: "-10%",
          modifiers: "",
        },
        {
          name: "Seth Sakura",
          description:
            "Philadelphia with salmon, Philadelphia with eel in sesame, Felix roll with tuna, California with crab mix in sesame",
          price: 20,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/gtwgkxchjmbheoilwn66",
          bonuses: "-10%",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Networks",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/wzmzy5os4hbnz0phoahz",
        bonus: "-20%",
      },
      products: [
        {
          name: "Set Imperial",
          description:
            "Philadelphia with salmon, Philadelphia with eel, Philadelphia with shrimp, Philadelphia with tuna in sesame, California with crab mix in caviar, California with eel in sesame, California tempura, roll with salmon and cucumber, crunch with shrimp, tender with salmon..",
          price: 55,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/wixzwitohm7zjd6rynv2",
          bonuses: "-20%",
          modifiers: "",
        },
        {
          name: "Set Favorite",
          description:
            "Philadelphia with salmon, Philadelphia with shrimp, Philadelphia with tuna, Philadelphia with tuna in sesame, crunch with shrimp, futomaki with salmon (spicy), baked with crab mix, tempura roll with salmon, tempura roll with tuna..",
          price: 25,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/apsb3tvorjwfjbfbidbr",
          bonuses: "-10%",
          modifiers: "",
        },
        {
          name: "Set All Inclusive",
          description:
            "Philadelphia with salmon, Philadelphia with eel, Philadelphia with shrimp, Philadelphia with salmon in sesame, California with eel in sesame, roll with salmon and cucumber, crunch with shrimp, futomaki with shrimp in tempura..",
          price: 25,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/d5q13kkzfwhq9zpwsctg",
          bonuses: "-10%",
          modifiers: "",
        },
        {
          name: "Seth Hokku",
          description:
            "Philadelphia with salmon, Philadelphia with shrimp, Philadelphia with tuna, Philadelphia with eel in sesame, crunch with shrimp, Felix roll with smoked salmon, sushi nigiri with salmon, sushi nigiri with shrimp..",
          price: 22.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/zeytvsvvx6hm5ydcvosg",
          bonuses: "-10%",
          modifiers: "",
        },
        {
          name: "Family Set",
          description:
            "Philadelphia with salmon, Philadelphia with shrimp, California with salmon in sesame, California tempura, crunch with shrimp, maki with salmon, maki with shrimp, felix roll with tuna, tender with salmon..",
          price: 20,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/hk7or7rpu5zehs3c6gab",
          bonuses: "-25%",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Roles",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/yl6hbozhvayntmedpi03",
        bonus: "-20%",
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
        {
          name: "Rol Golden Dragon",
          description:
            "Rice, eel, avocado, cucumber, sesame, crab mix, unagi sauce, nori",
          price: 7.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/m8glwqiz6fptjinwvuys",
          bonuses: "-20%",
          modifiers: "",
        },
        {
          name: "Red Dragon Roll",
          description:
            "Rice, salmon, avocado, cucumber, mayonnaise, crab mix, tobiko caviar, nori",
          price: 7.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/gc3n7u166xepl4xkgdeb",
          bonuses: "-20%",
          modifiers: "",
        },
        {
          name: "Philadelphia roll with tuna",
          description: "Rice, salmon, eel, tobiko caviar, cream cheese, nori",
          price: 7.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/lfzjrfl4veaxqfggigig",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Philadelphia roll with salmon",
          description: "Rice, salmon, cream cheese, avocado, cucumber, nori",
          price: 5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/yl6hbozhvayntmedpi03",
          bonuses: "-20%",
          modifiers: "",
        },
        {
          name: "Roll Baked with shrimp",
          description:
            "Rice, tempura shrimp, iceberg lettuce, cheese sauce, bell pepper, sesame, cucumber, nori",
          price: 6,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/wxmcd9qd1ixsbm186aaa",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Appetizer",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/j52mtl4ksheknwfozzym",
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
        {
          name: "Mozzarella fries",
          description: "Mozzarella fries",
          price: 3.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/j52mtl4ksheknwfozzym",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Chicken strips",
          description: "Chicken strips",
          price: 3.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/iyk23ksl1bpo7pvqdlu4",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Rice chips",
          description: "Rice chips",
          price: 1.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/j71jrjorzffppwwpnjmf",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Soups and Udons",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/ttcnkykdmqeb3owovxfg",
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
        {
          name: "Udon noodles with chicken",
          description:
            "Udon noodles, chicken fillet, carrots, broccoli, bell pepper, oyster sauce, onion",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/w0ujtwgkfgefbiqfuuba",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Miso soup with salmon",
          description:
            "Miso broth, salmon, tofu, wakame, sesame seeds, green onions",
          price: 2.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/don90hv9r9tuhyag2wpu",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Miso classic soup",
          description: "Miso broth, tofu, wakame, sesame seeds, green onions",
          price: 1.7,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ttcnkykdmqeb3owovxfg",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Top sellers",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/jfxxpnxnspq61u27c1ki",
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
          bonuses: "-20%",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Desserts",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/dbzqftoxmuxsvtzxgmkv",
        bonus: "-20%",
      },
      products: [
        {
          name: "Cherry tart",
          description: "Cherry tart",
          price: 2,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/dbzqftoxmuxsvtzxgmkv",
          bonuses: "-20%",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Addition",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/df48wzjtigugjn6sylul",
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
        {
          name: "Nut Sauce Supplement",
          description:
            "Cashew nut, sesame, onion, rice vinegar, soy sauce, vegetable oil, apple, garlic",
          price: 0.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/xoulc99n9voavwykr9hu",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Kimchi sauce (spicy)",
          description: "Chili pepper, vinegar, sugar, salt",
          price: 0.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/p191vlhvs0kwlkgwrgc6",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Wasabi supplement",
          description: "Wasabi",
          price: 0.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/bjwnjhwh80bkrdycvnwm",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Chopsticks",
          description: "Chopsticks",
          price: 0.1,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/m0x5rklavjtmpbg5vy1z",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Locker for sticks",
          description: "Locker",
          price: 0.05,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/hdelxmtocabjoefpzxhl",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
  ],
};
