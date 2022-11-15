interface chaikhonaBazar {
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

export const chaikhonaBazar = {
  brandName: "Chaikhona Bazar",
  headerBackgroundImage:
    "https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/e_blur:400/Stores/umja8kenssym2wouyqoo",
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
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/3751788974",
        bonus: "",
      },
      products: [
        {
          name: "Tom yam kung with shrimp (375g)",
          description:
            "We are preparing a spicy broth for you. Add coconut milk and fresh shrimp. We complement the dish with fresh tomatoes, wood mushroom, spring onion, cilantro, a piece of lime.",
          price: 7.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/3751788970",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Wheat noodles with seafood (410g)",
          description:
            "Wheat noodles with shrimp in the company of squid and mussels. With sweet peppers, carrots, green beans, wood mushroom, tomato, egg, chili pepper, green onions and spicy chili sauce.",
          price: 5.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/3751788978",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Wheat noodles with veal (380g)",
          description:
            "Wheat noodles in combination with fresh veal, sweet peppers, carrots, green beans, wood mushrooms, tomatoes and eggs. Season with chili pepper, green onions and kimchi sauce.",
          price: 5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/3751788979",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Tom yam grove with chicken (390g)",
          description:
            "Spicy broth with coconut milk combined with tender chicken fillet Sous-vide. Fresh tomatoes, spring onion, wood mushroom, cilantro, a piece of lime to emphasize the taste.",
          price: 5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/3751788968",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Season menu",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/flf6azmo9m3evc5gxi8k",
        bonus: "",
      },
      products: [
        {
          name: "Autumn salad with veal and pumpkin (230g)",
          description:
            "Mix of greens, pumpkin, tomatoes, roast beef, Parmesan cheese, honey-mustard sauce.",
          price: 6,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/e4hqcarhnpalwpzkdbxt",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Autumn salad with mozzarella cheese and pumpkin (220g)",
          description:
            "Mix of greens, pumpkin, tomatoes, Mozzarella cheese, Pesto sauce.",
          price: 5.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/vb6fazidwywjeynqeq3n",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Veal with baked seasonal vegetables (270g)",
          description:
            "Baked carrots, beets, pumpkin; rotisserie beef, tomato, pesto sauce, microgreen peas.",
          price: 5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/flf6azmo9m3evc5gxi8k",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Children's menu",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/ndjvth3dpgl9a8bievf1",
        bonus: "",
      },
      products: [
        {
          name: "Spaghetti Nest with chicken and scrambled eggs (220g)",
          description:
            "Spaghetti from whole grain flour, chicken fillet, bacon, cream, parmesan, quail egg, dill.",
          price: 4.25,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/rzajpdqqwhq0eezvjrk8",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Spaghetti with sausages and ketchup (225/40g)",
          description:
            "Spaghetti made of whole grain flour, TM YATRAN' sausages for children (Ingredients: meat - 90% (semi-fat pork, first and highest grade beef), Pesto sauce, ketchup, cherry tomatoes.",
          price: 3.75,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/uccrdhwp2vincgrerrgp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Spaghetti Nest with chicken and scrambled eggs (220g)",
          description:
            "Spaghetti from whole grain flour, chicken fillet, bacon, cream, parmesan, quail egg, dill.",
          price: 4.25,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/rzajpdqqwhq0eezvjrk8",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Soups",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/3751788963",
        bonus: "",
      },
      products: [
        {
          name: "Tom yam kung with shrimp (375g)",
          description:
            "We are preparing a spicy broth for you. Add coconut milk and fresh shrimp. We complement the dish with fresh tomatoes, wood mushroom, spring onion, cilantro, a piece of lime.",
          price: 7.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/3751788970",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Ramen si fu (seafood) (490g)",
          description:
            "A company of fresh shrimp, tender squid, mussels and Sei broth. In addition - delicious noodles, egg, wood mushroom, Chinese cabbage, chili peppers, green onions and sesame seeds. Everything for a unique taste!",
          price: 7.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/3751788972",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Peking ramen with chicken (450g)",
          description:
            "Spicy broth with coconut milk combined with tender chicken fillet Su-vid. Fresh tomatoes, marsh onion, wood mushroom, cilantro, chili pepper and a slice of lime to emphasize the taste.",
          price: 3.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/3751788963",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Noodles",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/3751788974",
        bonus: "",
      },
      products: [
        {
          name: "Wheat noodles with seafood (410g)",
          description:
            "Wheat noodles with shrimp in the company of squid and mussels. With sweet peppers, carrots, green beans, wood mushroom, tomato, egg, chili pepper, green onions and spicy chili sauce.",
          price: 5.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/3751788978",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Wheat noodles with veal (380g)",
          description:
            "Wheat noodles in combination with fresh veal, sweet peppers, carrots, green beans, wood mushrooms, tomatoes and eggs. Season with chili pepper, green onions and kimchi sauce.",
          price: 5.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/3751788979",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Salads",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/3751788994",
        bonus: "",
      },
      products: [
        {
          name: "Hiyashi Wakame with nut sauce (100/25g)",
          description:
            "To make Hiyashi Wakame seaweed even tastier, add sesame seeds and nut sauce.",
          price: 3,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/3751788994",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Godza",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/3751789001",
        bonus: "",
      },
      products: [
        {
          name: "Gyoza with shrimp and nut sauce (100/40g)",
          description:
            "Prepare the dough for gyoza and wrap it in tender shrimp. Add raisins to the dish - ginger, garlic. And for complete harmony - a delicious sauce!",
          price: 4.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/3751789001",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Desserts",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/mpxqy049gzz8wszpn3lq",
        bonus: "",
      },
      products: [
        {
          name: "Three chocolates (150g)",
          description:
            "Wheat flour, kefir 2.5%, eggs, sugar, dark chocolate, white chocolate, milk chocolate, cream 26%, cream 30%.",
          price: 3,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ola2qqcwumwnq2g0zpwi",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Passion fruit mousse (150g)",
          description:
            "Chocolate, coconut cream, cream 26%, passion fruit, sugar.",
          price: 2.75,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/v3el5dt4pbmmmza0lpwv",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Immune Bar",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/3751789018",
        bonus: "",
      },
      products: [
        {
          name: "Smooth Strawberry Smoothies (250ml)",
          description:
            "All the flavors of summer come together for your enjoyment: tender strawberry and banana puree, apple juice and black currant berries. Pleasure that can be tasted.",
          price: 2.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/3751789019",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Smoothie Slim spinach (250ml)",
          description:
            "Juices of apple, banana, pear, peach, spinach and orange. Add avocado and lemon juice to charge you with energy.",
          price: 2.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/3751789018",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
  ],
};
