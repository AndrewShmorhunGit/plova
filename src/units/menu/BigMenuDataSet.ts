interface product {
  name: string;
  description: string;
  price: number;
  image: string;
  bonus: string;
  modifiers: string;
}

interface category {
  category: {
    categoryName: string;
    categoryImage: string;
    bonus: string;
  };
  products: Array<product>;
}

interface menuUnit {
  id: number;
  slug: string;
  brandName: string;
  headerBackgroundImage: string;
  deliveryTime1: number;
  deliveryTime2: number;
  deliveryPrice: number;
  rate: number;
  message: string;
  menu: Array<category>;
}

export const menuGlobal: Array<menuUnit> = [
  {
    id: 32338,
    slug: "chaikhona-basar-g",
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
            bonus: "",
            modifiers: "",
          },
          {
            name: "Wheat noodles with seafood (410g)",
            description:
              "Wheat noodles with shrimp in the company of squid and mussels. With sweet peppers, carrots, green beans, wood mushroom, tomato, egg, chili pepper, green onions and spicy chili sauce.",
            price: 5.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/3751788978",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Wheat noodles with veal (380g)",
            description:
              "Wheat noodles in combination with fresh veal, sweet peppers, carrots, green beans, wood mushrooms, tomatoes and eggs. Season with chili pepper, green onions and kimchi sauce.",
            price: 5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/3751788979",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Tom yam grove with chicken (390g)",
            description:
              "Spicy broth with coconut milk combined with tender chicken fillet Sous-vide. Fresh tomatoes, spring onion, wood mushroom, cilantro, a piece of lime to emphasize the taste.",
            price: 5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/3751788968",
            bonus: "",
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
            bonus: "",
            modifiers: "",
          },
          {
            name: "Autumn salad with mozzarella cheese and pumpkin (220g)",
            description:
              "Mix of greens, pumpkin, tomatoes, Mozzarella cheese, Pesto sauce.",
            price: 5.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/vb6fazidwywjeynqeq3n",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Veal with baked seasonal vegetables (270g)",
            description:
              "Baked carrots, beets, pumpkin; rotisserie beef, tomato, pesto sauce, microgreen peas.",
            price: 5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/flf6azmo9m3evc5gxi8k",
            bonus: "",
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
            bonus: "",
            modifiers: "",
          },
          {
            name: "Spaghetti with sausages and ketchup (225/40g)",
            description:
              "Spaghetti made of whole grain flour, TM YATRAN' sausages for children (Ingredients: meat - 90% (semi-fat pork, first and highest grade beef), Pesto sauce, ketchup, cherry tomatoes.",
            price: 3.75,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/uccrdhwp2vincgrerrgp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Spaghetti Nest with chicken and scrambled eggs (220g)",
            description:
              "Spaghetti from whole grain flour, chicken fillet, bacon, cream, parmesan, quail egg, dill.",
            price: 4.25,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/rzajpdqqwhq0eezvjrk8",
            bonus: "",
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
            bonus: "",
            modifiers: "",
          },
          {
            name: "Ramen si fu (seafood) (490g)",
            description:
              "A company of fresh shrimp, tender squid, mussels and Sei broth. In addition - delicious noodles, egg, wood mushroom, Chinese cabbage, chili peppers, green onions and sesame seeds. Everything for a unique taste!",
            price: 7.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/3751788972",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Peking ramen with chicken (450g)",
            description:
              "Spicy broth with coconut milk combined with tender chicken fillet Su-vid. Fresh tomatoes, marsh onion, wood mushroom, cilantro, chili pepper and a slice of lime to emphasize the taste.",
            price: 3.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/3751788963",
            bonus: "",
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
            bonus: "",
            modifiers: "",
          },
          {
            name: "Wheat noodles with veal (380g)",
            description:
              "Wheat noodles in combination with fresh veal, sweet peppers, carrots, green beans, wood mushrooms, tomatoes and eggs. Season with chili pepper, green onions and kimchi sauce.",
            price: 5.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/3751788979",
            bonus: "",
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
            bonus: "",
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
            bonus: "",
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
            bonus: "",
            modifiers: "",
          },
          {
            name: "Passion fruit mousse (150g)",
            description:
              "Chocolate, coconut cream, cream 26%, passion fruit, sugar.",
            price: 2.75,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/v3el5dt4pbmmmza0lpwv",
            bonus: "",
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
            bonus: "",
            modifiers: "",
          },
          {
            name: "Smoothie Slim spinach (250ml)",
            description:
              "Juices of apple, banana, pear, peach, spinach and orange. Add avocado and lemon juice to charge you with energy.",
            price: 2.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/3751789018",
            bonus: "",
            modifiers: "",
          },
        ],
      },
    ],
  },
  {
    id: 302106,
    slug: "chornomorka-kie",
    brandName: "Chornomorka",
    headerBackgroundImage:
      "https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/e_blur:400/Stores/qprs47ketu5mtzh6lrcz",
    deliveryTime1: 25,
    deliveryTime2: 35,
    deliveryPrice: 1,
    rate: 98,
    message: "",
    menu: [
      {
        category: {
          categoryName: "Top sellers",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/uwdcegnubecatfbu7efr",
          bonus: "",
        },
        products: [
          {
            name: "Fried tiger prawn tails in butter(200g)",
            description:
              "Fried tiger prawn tails in butter with the addition of fragrant herbs and spices, prepared in a sauce of your choice",
            price: 12,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/bocxzqf3vwbydh9qo2is",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Risotto with seafood (300g)",
            description:
              "Arborio rice with the addition of Atlantic squid fried in butter with thyme, garlic and rosemary, mussel meat and baby octopus. Garnish with fried tiger prawns and grated Parmesan cheese.",
            price: 6.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/uwdcegnubecatfbu7efr",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Spaghetti with seafood (350g)",
            description:
              "Spaghetti al dente, stewed in butter and wine sauce, with chopped onions, garlic, chili peppers, capers and seafood: mussels, Atlantic squid, baby octopus and shrimp. Sprinkle with grated Parmesan cheese.",
            price: 6,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/zfxev34mqwyjmen3zol9g",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Salmon and pike perch puree fish cutlets (130/150 / 75g)",
            description:
              "Two fried minced meatballs based on salmon and pike perch fillets. Served with mashed potatoes and barrel tomatoes.",
            price: 6,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/dvxbpwsebsngrxmzzwss",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Fish cutlets from perch and shrimp from puree (130/150 / 75g)",
            description:
              "Two fried minced meatballs based on shrimp fillet and minced krill. Served with mashed potatoes and barrel tomatoes.",
            price: 6,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/zqjpio4wls89djfrhewf",
            modifiers: "",
            bonus: "",
          },
          {
            name: "'Olivier' tiger prawns (250g)",
            description:
              "Boiled potatoes, egg, carrot, add green apple, peas and base - tiger prawn. Season with homemade mayonnaise.",
            price: 6,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/djvu6sciheahlz2dbg7e",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Provencal salad with red tuna (350g)",
            description:
              "The salad mix with cherry tomatoes, fried potato pieces, boiled egg, olives and lightly fried tuna slices is topped with Nisuaz sauce (anchovies, oil, soy sauce).",
            price: 6,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/iwqh0g3iakvnxojglpks",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Appetizer",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/ud0xvxyss4xbbbihbdjc",
          bonus: "",
        },
        products: [
          {
            name: "Salmon tartare with pike caviar (130 / 45g)",
            description:
              "Fresh salmon fillet with branded sauce (wasabi, mayonnaise, soy sauce) with the addition of pike caviar. Served with arugula leaves, balsamic cream and croutons.",
            price: 8,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/x7u5h6h7l8jk317brqco",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Tuna tartare with avocado puree (190g)",
            description:
              "Fresh tuna fillet with olive oil sauce. Served with avocado puree, arugula leaves, balsamic sauce and croutons.",
            price: 8,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/uo8qjbsnq4hifkhju5fq",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Assorted bruschettas (with salmon, anchovies, herring, sprats) (350g)",
            description:
              "Lightly salted herring with mustard sauce and onions & Slightly salted anchovies with mustard sauce and green onions & Sprats (herring) with spicy tomato sauce, pickle and boiled egg & Gravlax salmon with Caesar sauce, arugula and capers",
            price: 6,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/ud0xvxyss4xbbbihbdjc",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Forshmak Odessa-style herring matias (100/50 / 25g)",
            description:
              "Matthias herring fillet, with the addition of green apple and butter. Served with green onions, butter, lemon and light baguette croutons.",
            price: 3,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/yralwggk1qdaizf14svg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Weak salt tulle with boiled potatoes (70 / 100g)",
            description:
              "Low-salt tulle is served with boiled potatoes, seasoned with butter, and sprinkled with green onions.",
            price: 3,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/in1e0wqtisiyyuyngh3n",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Salads",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/eumv73yfvp5slp63hjp7",
          bonus: "",
        },
        products: [
          {
            name: "Warm salad with seafood (300g)",
            description:
              "Fried in butter tails of tiger prawns, Atlantic squid and Black Sea mussels with garlic, thyme and rosemary, Served with mixed salad, cherry tomatoes, avocado and Parmesan cheese. Season with Dijon sauce.",
            price: 7,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/adgcerrypltp39yyxkiv",
            modifiers: "",
            bonus: "",
          },
          {
            name: "'Olivier' with salmon (250g)",
            description:
              "Boiled potatoes, egg, carrots, add green apple, peas and base - lightly salted salmon. Season with homemade mayonnaise.",
            price: 5,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/yfa9g1wzq0pfxzyo6nj5",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Salad with tomatoes and cheese of our goats (80g / 150g / 30g)",
            description:
              "Goat cheese is placed on tomato pieces, seasoned with olive oil and basil sauce. Decorated with fresh basil leaves.",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/npxa0lohcpdf0p6r4edz",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Provencal salad with red tuna (350g)",
            description:
              "The salad mix with cherry tomatoes, fried potato pieces, boiled egg, olives and lightly fried tuna slices is topped with Nisuaz sauce (anchovies, oil, soy sauce).",
            price: 5,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/iwqh0g3iakvnxojglpks",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Hot meals",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/qovnpn4x3vpxdxnoelmo",
          bonus: "",
        },
        products: [
          {
            name: "Rapan meat with mushrooms and cherry tomatoes (250g)",
            description:
              "Rapan meat, fried with mushrooms, onions, cherry tomatoes, and stewed in a gentle creamy sauce.",
            price: 6.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/qovnpn4x3vpxdxnoelmo  ",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Risotto with seafood (300g)",
            description:
              "Arborio rice with the addition of Atlantic squid fried in butter with thyme, garlic and rosemary, mussel meat and baby octopus. Garnish with fried tiger prawns and grated Parmesan cheese.",
            price: 6,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/uwdcegnubecatfbu7efr",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Spaghetti with seafood (350g)",
            description:
              "Spaghetti al dente, stewed in butter and wine sauce, with chopped onions, garlic, chili peppers, capers and seafood: mussels, Atlantic squid, baby octopus and shrimp. Sprinkle with grated Parmesan cheese.",
            price: 0.4,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/zfxev34mqwyjmen3zol9",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "courses",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/bbiiidj6aiviyxq3aabn",
          bonus: "",
        },
        products: [
          {
            name: "Grilled vegetables (250g)",
            description:
              "Grilled vegetables in garlic marinade, namely zucchini, eggplant, bell peppers, tomatoes, mushrooms, onions.",
            price: 2,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/hjvoq0tlu4hnfe1qrlcg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "A mixture of wild rice and basmati (200g)",
            description:
              "Boiled wild rice and basmati with spices, garlic and greens.",
            price: 1.2,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/bbiiidj6aiviyxq3aabn",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Fried potatoes (200g)",
            description: "Fried potatoes with garlic and greens.",
            price: 1.2,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/ofkdysncfm9rqucb6mqm",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Puree (200g)",
            description:
              "Boiled potatoes with butter are mashed to a puree with herbs.",
            price: 1,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/hgabblip2ldbedsysrhf",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "first courses",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/wvhiafzaomxuyigggnlu",
          bonus: "",
        },
        products: [
          {
            name: "Fish brine (350g)",
            description:
              "Solyanka based on tomato fish broth, with the addition of tomatoes, pickles, onions, capers, lemon and olives from assorted fish fillets: hot smoked salmon, pike perch and sturgeon. Served with sour cream.",
            price: 7,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/n50ifxvcpmrn3mnygquq",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Black Sea soup (350 g)",
            description:
              "Soup based on fish broth, with the addition of vegetables (potatoes, carrots, onions) and assorted fish fillets. The soup is topped with garlic, fresh herbs and butter.",
            price: 2,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/wvhiafzaomxuyigggnlu",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Fried potatoes (200g)",
            description: "Fried potatoes with garlic and greens.",
            price: 1.2,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/ofkdysncfm9rqucb6mqm",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Puree (200g)",
            description:
              "Boiled potatoes with butter are mashed to a puree with herbs.",
            price: 1,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/hgabblip2ldbedsysrhf",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Sauces",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/ykwwqockkqrrhksxdazd",
          bonus: "",
        },
        products: [
          {
            name: "mayonnaise sauce",
            description: "",
            price: 0.4,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/bp7d9a3ktgrlyoydhpcm",
            modifiers: "",
            bonus: "",
          },
          {
            name: "ketchup sauce",
            description: "",
            price: 0.4,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/8.%20Ketchup.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "mustard sauce",
            description: "",
            price: 0.4,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/qtbp79l7myyxns1circf",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Mango chili sauce",
            description: "",
            price: 0.4,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/czrqs1br9okmmvzngm4b",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Cheese sauce",
            description: "",
            price: 0.4,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/iptg2cgyzkl04gjrszeb",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Barbecue sauce",
            description: "",
            price: 0.4,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/d7n5u91nm4pcb1xr8hgt",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Sweet and sour sauce",
            description: "",
            price: 0.4,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/rceplgybxfaybcfyoo95",
            modifiers: "",
            bonus: "",
          },
        ],
      },
    ],
  },
  {
    id: 160608,
    slug: "dinners-kie-hrinchenka",
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
            bonus: "-20%",
            modifiers: "",
          },
          {
            name: "Same Te Set",
            description:
              "Philadelphia Salmon, California Sesame Salmon, California Tempura, Salmon Maki, Shrimp Crunch, Baked Shrimp",
            price: 27.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ynkvxm5za0vvekexhhhv",
            bonus: "-20%",
            modifiers: "",
          },
          {
            name: "Maldives Set",
            description:
              "Tender with salmon, California tempura, tempura roll with salmon, baked with shrimp, baked with tuna (spicy)",
            price: 25,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/enskro6baes50oqpoblr",
            bonus: "-10%",
            modifiers: "",
          },
          {
            name: "Set Fusion",
            description:
              "Tender with salmon, tempura roll with salmon, tempura roll with tuna, baked with shrimp",
            price: 25,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/igjnyqbucjzykoi1kwas",
            bonus: "-10%",
            modifiers: "",
          },
          {
            name: "Seth Sakura",
            description:
              "Philadelphia with salmon, Philadelphia with eel in sesame, Felix roll with tuna, California with crab mix in sesame",
            price: 20,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/gtwgkxchjmbheoilwn66",
            bonus: "-10%",
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
            bonus: "-20%",
            modifiers: "",
          },
          {
            name: "Set Favorite",
            description:
              "Philadelphia with salmon, Philadelphia with shrimp, Philadelphia with tuna, Philadelphia with tuna in sesame, crunch with shrimp, futomaki with salmon (spicy), baked with crab mix, tempura roll with salmon, tempura roll with tuna..",
            price: 25,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/apsb3tvorjwfjbfbidbr",
            bonus: "-10%",
            modifiers: "",
          },
          {
            name: "Set All Inclusive",
            description:
              "Philadelphia with salmon, Philadelphia with eel, Philadelphia with shrimp, Philadelphia with salmon in sesame, California with eel in sesame, roll with salmon and cucumber, crunch with shrimp, futomaki with shrimp in tempura..",
            price: 25,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/d5q13kkzfwhq9zpwsctg",
            bonus: "-10%",
            modifiers: "",
          },
          {
            name: "Seth Hokku",
            description:
              "Philadelphia with salmon, Philadelphia with shrimp, Philadelphia with tuna, Philadelphia with eel in sesame, crunch with shrimp, Felix roll with smoked salmon, sushi nigiri with salmon, sushi nigiri with shrimp..",
            price: 22.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/zeytvsvvx6hm5ydcvosg",
            bonus: "-10%",
            modifiers: "",
          },
          {
            name: "Family Set",
            description:
              "Philadelphia with salmon, Philadelphia with shrimp, California with salmon in sesame, California tempura, crunch with shrimp, maki with salmon, maki with shrimp, felix roll with tuna, tender with salmon..",
            price: 20,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/hk7or7rpu5zehs3c6gab",
            bonus: "-25%",
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
            bonus: "",
            modifiers: "",
          },
          {
            name: "Rol Golden Dragon",
            description:
              "Rice, eel, avocado, cucumber, sesame, crab mix, unagi sauce, nori",
            price: 7.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/m8glwqiz6fptjinwvuys",
            bonus: "-20%",
            modifiers: "",
          },
          {
            name: "Red Dragon Roll",
            description:
              "Rice, salmon, avocado, cucumber, mayonnaise, crab mix, tobiko caviar, nori",
            price: 7.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/gc3n7u166xepl4xkgdeb",
            bonus: "-20%",
            modifiers: "",
          },
          {
            name: "Philadelphia roll with tuna",
            description: "Rice, salmon, eel, tobiko caviar, cream cheese, nori",
            price: 7.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/lfzjrfl4veaxqfggigig",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Philadelphia roll with salmon",
            description: "Rice, salmon, cream cheese, avocado, cucumber, nori",
            price: 5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/yl6hbozhvayntmedpi03",
            bonus: "-20%",
            modifiers: "",
          },
          {
            name: "Roll Baked with shrimp",
            description:
              "Rice, tempura shrimp, iceberg lettuce, cheese sauce, bell pepper, sesame, cucumber, nori",
            price: 6,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/wxmcd9qd1ixsbm186aaa",
            bonus: "",
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
            bonus: "",
            modifiers: "",
          },
          {
            name: "Mozzarella fries",
            description: "Mozzarella fries",
            price: 3.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/j52mtl4ksheknwfozzym",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Chicken strips",
            description: "Chicken strips",
            price: 3.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/iyk23ksl1bpo7pvqdlu4",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Rice chips",
            description: "Rice chips",
            price: 1.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/j71jrjorzffppwwpnjmf",
            bonus: "",
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
            bonus: "",
            modifiers: "",
          },
          {
            name: "Udon noodles with chicken",
            description:
              "Udon noodles, chicken fillet, carrots, broccoli, bell pepper, oyster sauce, onion",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/w0ujtwgkfgefbiqfuuba",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Miso soup with salmon",
            description:
              "Miso broth, salmon, tofu, wakame, sesame seeds, green onions",
            price: 2.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/don90hv9r9tuhyag2wpu",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Miso classic soup",
            description: "Miso broth, tofu, wakame, sesame seeds, green onions",
            price: 1.7,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ttcnkykdmqeb3owovxfg",
            bonus: "",
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
            bonus: "-20%",
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
            bonus: "-20%",
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
            bonus: "",
            modifiers: "",
          },
          {
            name: "Nut Sauce Supplement",
            description:
              "Cashew nut, sesame, onion, rice vinegar, soy sauce, vegetable oil, apple, garlic",
            price: 0.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/xoulc99n9voavwykr9hu",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Kimchi sauce (spicy)",
            description: "Chili pepper, vinegar, sugar, salt",
            price: 0.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/p191vlhvs0kwlkgwrgc6",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Wasabi supplement",
            description: "Wasabi",
            price: 0.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/bjwnjhwh80bkrdycvnwm",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Chopsticks",
            description: "Chopsticks",
            price: 0.1,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/m0x5rklavjtmpbg5vy1z",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Locker for sticks",
            description: "Locker",
            price: 0.05,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/hdelxmtocabjoefpzxhl",
            bonus: "",
            modifiers: "",
          },
        ],
      },
    ],
  },
  {
    id: 315185,
    slug: "il-molino-kie",
    brandName: "Il Molino",
    headerBackgroundImage:
      "https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/e_blur:400/Stores/h7srxokglcv5t6oymyxk",
    deliveryTime1: 35,
    deliveryTime2: 55,
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
            bonus: "",
            modifiers: "",
          },
          {
            name: "Polo Con Formaggi",
            description:
              "Chicken fillet, pickled bell peppers, cream, fresh basil, mozzarella and feta cheese. Allergens: cereals, lactose, sesame.",
            price: 8,
            image:
              "https://api.getorder.biz/product/12418/image/29/700/700/c26473dc-a6f9-4e80-bfa4-08d95c238f00.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Il Maceliano",
            description:
              "Grated tomatoes, mozzarella, prosciutto cotto, sausages, salami on your choice - with hot pepper or not. Allergens: cereals, lactose.",
            price: 7.75,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/loxeikxxpgkpffm6niok",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Il Maceliano",
            description:
              "Grated tomatoes, mozzarella, prosciutto cotto, sausages, salami on your choice - with hot pepper or not. Allergens: cereals, lactose.",
            price: 7.75,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/loxeikxxpgkpffm6niok",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Emilia Romagna",
            description:
              "Grated tomatoes, mozzarella, Parma ham, arugula, Parmesan. Allergens: cereals, lactose.",
            price: 7.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/vjcrlcy1necydk0oxtbb",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Bavaria",
            description:
              "Grated tomatoes, mozzarella, hunting and Munich sausages, mustard, fresh mushrooms. Allergens: cereals, lactose, mustard.",
            price: 9,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ofmdpceenvtx9t0bgjt2",
            bonus: "",
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
            name: "Prosecco frizzante, canti",
            description: "Sparkling white dry wine.",
            price: 10.5,
            image:
              "https://api.getorder.biz/product/12258/image/29/700/700/cbc70c7e-5fa4-4edc-c01d-08d95c238f00.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Chianti gentilesco, bonacchi",
            description: "Red dry wine.",
            price: 7.5,
            image:
              "https://api.getorder.biz/product/12260/image/29/700/700/5213afd5-36ac-43ea-c012-08d95c238f00.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Pinot grigio veneto rose, canti",
            description: "Semi-dry pink wine.",
            price: 7.5,
            image:
              "https://api.getorder.biz/product/12261/image/29/700/700/3781d249-8c4c-4412-c01e-08d95c238f00.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Pinot grigio, cesari",
            description: "White dry wine.",
            price: 7.5,
            image:
              "https://api.getorder.biz/product/12263/image/29/700/700/8b18b101-0e64-4115-c020-08d95c238f00.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Borjomi",
            description: "",
            price: 2,
            image:
              "https://api.getorder.biz/product/12267/image/29/700/700/16dfff4b-8399-4471-bfd4-08d95c238f00.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Lime lemonade",
            description: "",
            price: 2,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/cygk8lpaibk1wwrzm7q3",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Coca Cola",
            description: "",
            price: 1,
            image:
              "https://api.getorder.biz/product/12276/image/29/700/700/90058921-a3f9-430b-c0c8-08d95c238f00.webp",
            bonus: "",
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
            name: "Salmon",
            description:
              "Salmon, mozzarella, ricotta, parmesan, red caviar, arugula. Allergens: cereals, lactose, fish.",
            price: 9.75,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/oysxnmd1sj5hfieg7fvu",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Polo Con Formaggi",
            description:
              "Chicken fillet, pickled bell peppers, cream, fresh basil, mozzarella and feta cheese. Allergens: cereals, lactose, sesame.",
            price: 8,
            image:
              "https://api.getorder.biz/product/12418/image/29/700/700/c26473dc-a6f9-4e80-bfa4-08d95c238f00.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Sylvia",
            description:
              "Dough of wholemeal flour, grated tomatoes, mozzarella, Parma ham, sun-dried tomatoes, ricotta and basil. Allergens: cereals, lactose.",
            price: 8,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/s5blazbtc8xplsyvonzt",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Tuscany",
            description:
              "Mozzarella, porcini mushrooms, ricotta, parmesan. Allergens: cereals, lactose.",
            price: 7.75,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/mpnvvfyet0omj6dypbci",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Di Pollo",
            description:
              "Mozzarella, smoked chicken fillet, mini tomatoes, Crimean onion, egg, cream. Allergens: cereals, lactose, egg.",
            price: 7.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/t6womz1occsh1oyhmhnf",
            bonus: "",
            modifiers: "",
          },
          {
            name: "American",
            description:
              "Grated tomatoes, mozzarella, corn, sausages, french fries. Allergens: cereals, lactose.",
            price: 7.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/s66co6eszzcovajangwr",
            bonus: "",
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
            name: "Set of tutu bene + Coca-Cola 1 liter",
            description:
              "Coca-Cola 1 liter as a gift! Pizza Quatro Formaggi (mozzarella, gorgonzola, parmesan, provolone. 340 g), pizza Sylvia (wholemeal dough, grated tomatoes, mozzarella, Parma ham, sun-dried tomatoes, ricotta and basil. 530 g).",
            price: 15,
            image:
              "https://api.getorder.biz/product/12402/image/29/700/700/750426c6-c73a-4017-c006-08d95c238f00.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Set of preferito + Coca-Cola 1 liter",
            description:
              "Coca-Cola 1 liter as a gift! Bavarian pizza (grated tomatoes, mozzarella, hunting and Munich sausages, mustard, fresh mushrooms. 520 g), Pepperoni pizza (grated tomatoes, mozzarella, spicy salami pepperoni. 420 g).",
            price: 14,
            image:
              "https://api.getorder.biz/product/12399/image/29/700/700/c8abe034-e04a-4ccf-c005-08d95c238f00.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Fiesta set + Coca-Cola 1 liter",
            description:
              "Coca-Cola 1 liter as a gift! Koto Bene pizza (wholemeal dough, grated tomatoes, mozzarella, ricotta, prosciutto, oregano, basil and almond flakes. 480 g).",
            price: 14,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/wko3qqmeoezplvacyiii",
            bonus: "",
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
            name: "Assorted hot snacks",
            description:
              "Cheese balls, chicken nuggets, deep-fried crispy ravioli, french fries. Served with three types of sauces: garlic, ketchup, Caesar. Allergens: lactose, cereals, fish, eggs.",
            price: 9,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/drr6ipcfv7dro95vwcek",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Fresh salmon carpaccio",
            description:
              "Served with parmesan, capers, arugula leaves, concase tomatoes and lemon in olive sauce. Allergens: fish, lactose.",
            price: 6,
            image:
              "https://api.getorder.biz/product/12304/image/29/700/700/ea795e6d-3c7f-4661-bf1e-08d95c238f00.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Apetito wings",
            description:
              "Juicy wings in orange-soy sauce. Allergens: citrus, sesame",
            price: 4.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/jhxctqwn7bviixpkxikp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Trio bruschetta novelty",
            description:
              "A traditional Italian appetizer with a mix of mushrooms on soft cream cheese, prosciutto, Parma, sun-dried tomatoes, pickled peppers, arugula, and balsamic cream. Served on crispy ciabatta.",
            price: 3.5,
            image:
              "https://api.getorder.biz/product/49649/image/29/700/700/da9a94c9-a7d9-4d17-ad08-08daa2b47f55.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Salmon, perch and parmesan balls",
            description:
              "Crispy balls of salmon, perch and parmesan. Serve with gorgonzola sauce.",
            price: 3.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/iyk4hxpvpnzdlelssm5u",
            bonus: "",
            modifiers: "",
          },
          {
            name: "The Bruschetta Trio",
            description:
              "A traditional Italian snack of tomatoes, fresh herbs, feta, parmesan and Parma ham, served with crispy ciabatta.",
            price: 3,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/jta5egh3wjkpoadtnc3q",
            bonus: "",
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
            name: "Fried potatoes",
            description: "",
            price: 2,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/kzi1wgakxybaa9ocrad8",
            bonus: "",
            modifiers: "",
          },
          {
            name: "French fries",
            description: "",
            price: 2,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ite8i2rrduyx4dhyydcl",
            bonus: "",
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
            name: "Lemon custard",
            description:
              "Delicate lemon dessert with raspberry sauce. Allergens: cereals, lactose, nuts.",
            price: 21,
            image:
              "https://api.getorder.biz/product/12324/image/29/700/700/ccac2cd4-0f79-4892-c0ce-08d95c238f00.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Waffle cake",
            description:
              "Cake with condensed milk and hazelnuts. Allergens: lactose, cereals, nuts.",
            price: 14,
            image:
              "https://api.getorder.biz/product/12319/image/29/700/700/4c7bd1f7-5f7a-4990-bff7-08d95c238f00.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Tiramisu",
            description:
              "Traditional Italian dessert. Allergens: lactose, cereals, eggs.",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ilytligyik2ikh1wovpd",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Pistachio tiramisu",
            description: "raditional Italian dessert with pistachio paste.",
            price: 4,
            image:
              "https://api.getorder.biz/product/49650/image/29/700/700/e9ddd0a1-8f7d-4ed4-ad06-08daa2b47f55.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Chocolate fondant",
            description:
              "Cake with warm chocolate inside. Allergens: cereals, lactose, eggs.",
            price: 3,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/jkbizmlk2yscwlpegxzk",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Lemon custard",
            description:
              "Delicate lemon dessert with raspberry sauce. Allergens: cereals, lactose, nuts.",
            price: 2.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/axdkhqpm3zvybjnqolfw",
            bonus: "",
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
            name: "Salmon with grilled vegetables",
            description:
              "Tender baked salmon fillet. Served with grilled vegetables with unagi sauce.",
            price: 8,
            image:
              "https://api.getorder.biz/product/49986/image/29/700/700/e0ce1532-986d-4eec-99d0-08daa5d5f9e7.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Chicken breast with eggplant",
            description:
              "Juicy chicken breast marinated in herbs with spices and grilled. Served with eggplant fries with fresh tomatoes and herbs. Season with citrus-sesame sauce. Allergens: cereals, sesame seeds, soybeans.",
            price: 5.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ykjfskkh9vecxxsbbwri",
            bonus: "",
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
            name: "Tagliatelle with porcini mushrooms and shrimps",
            description:
              "Pasta with cuttlefish ink, porcini mushrooms, shrimps in creamy garlic and soy sauces. Decorate with basil leaves.",
            price: 6,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/yo2xweemow8gyucxqqqx",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Pappardelle with porcini mushrooms",
            description:
              "Durum wheat pasta with aromatic Italian herbs and porcini mushrooms in a creamy sauce. Garnished with Parmesan and basil. Allergens: cereals, lactose, eggs, soybeans.",
            price: 5.75,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/zmva2omwd1d7b3cjhzzb",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Lasagna with veal",
            description:
              "Traditional Italian dish in tomato-meat bolognese sauce with mushrooms and onions. Baked under mozzarella cheese and garnished with parsley. Allergens: cereals, lactose, eggs, celery.",
            price: 5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/v9olbhvwovqhsnded4ow",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Pasta Quattro Formaggi",
            description:
              "Durum wheat pasta in a creamy sauce with parmesan, gorgonzola, provolone and mozzarella. Garnish with basil. Allergens: cereals, lactose, eggs.",
            price: 4.5,
            image:
              "https://api.getorder.biz/product/24418/image/29/700/700/7f233cd2-ac4f-4f47-d81f-08da669ebb38.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Spaghetti carbonara",
            description:
              "Spaghetti with bacon in a creamy sauce. Served with egg yolk and parmesan. Allergens: cereals, lactose, eggs.",
            price: 4.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/xkgfsog7rujktx5lutbs",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Ravioli teneri",
            description:
              "Durum wheat ravioli with turkey meat in a gentle creamy sauce with capers. Garnish with parmesan and basil leaves. Allergens: cereals, lactose, eggs.",
            price: 4.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/nrwcsy1g4yj3oaep6ygz",
            bonus: "",
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
            name: "Green salad with shrimp",
            description:
              "Salad mix with mini tomatoes, shrimp, avocado, Parmesan cheese, almond flakes and olive-balsamic dressing. Allergens: nuts, lactose, crustaceans, honey.",
            price: 7.5,
            image:
              "https://api.getorder.biz/product/12341/image/29/700/700/e3f510b5-dab9-45d9-bf29-08d95c238f00.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Caesar salad with shrimp",
            description:
              "Iceberg lettuce, quail eggs, mini tomatoes, parmesan, garlic croutons with Caesar sauce. Serve with fried shrimp.",
            price: 7.5,
            image:
              "https://api.getorder.biz/product/49983/image/29/700/700/b1c092d2-bc37-48f9-99d4-08daa5d5f9e7.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Caesar salad with lightly salted salmon",
            description:
              "Iceberg lettuce, quail eggs, mini tomatoes, parmesan, garlic croutons with Caesar sauce. Served with lightly salted salmon. Allergens: lactose, mustard, eggs, fish, soybeans, cereals.",
            price: 7,
            image:
              "https://api.getorder.biz/product/12340/image/29/700/700/c3920763-94dc-49ac-bff5-08d95c238f00.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Nisuaz salad",
            description:
              "Tuna, quail eggs, salad mix, cherry tomatoes, artichokes, capers, blue onion, lemon. Season with mustard-honey sauce.",
            price: 7.5,
            image:
              "https://api.getorder.biz/product/12339/image/29/700/700/6e9310b0-cd8a-492a-bff6-08d95c238f00.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Green salad",
            description:
              "Salad mix with mini tomatoes, avocado, Parmesan cheese, almond flakes and olive-balsamic dressing. Allergens: nuts, lactose, honey.",
            price: 4,
            image:
              "https://api.getorder.biz/product/12342/image/29/700/700/91c4f6b5-f1e4-419f-bf28-08d95c238f00.webp",
            bonus: "",
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
            name: "Spicy pepper sauce",
            description: "",
            price: 1,
            image:
              "https://api.getorder.biz/product/12353/image/29/700/700/4f80788c-7498-4b2c-c09f-08d95c238f00.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Ketchup",
            description: "",
            price: 0.75,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/vj4mgq95mpepsfvqzzea",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Mayonnaise",
            description: "",
            price: 0.75,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/el1be8o9oih2muhg0szd",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Garlic sauce",
            description:
              "Buko cheese, lemon, mayonnaise, olive oil, a mixture of dried herbs and garlic",
            price: 0.75,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/jd9w9yphshxy9jjgcq30",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Mustard",
            description: "Spicy mustard",
            price: 0.75,
            image:
              "https://api.getorder.biz/product/12349/image/29/700/700/8796c96b-3d0d-4361-bf30-08d95c238f00.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Sesame sauce",
            description:
              "Unagi sauce, olive oil, wine vinegar, sesame seeds, lemon juice, orange peel. Allergens: sesame, fish.",
            price: 1,
            image:
              "https://api.getorder.biz/product/12354/image/29/700/700/1f1e5908-a301-4a98-c0d0-08d95c238f00.webp",
            bonus: "",
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
            name: "Tender vegetable cream soup with bacon",
            description:
              "Potatoes, carrots, onions, celery stalk, milk, olive oil. Garnish with bacon chips, arugula and truffle oil",
            price: 2.25,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/wxsudz44pekshsdcxssk",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Hot tomato soup",
            description:
              "Grated tomato soup with grated mozzarella cheese. Allergens: lactose, celery.",
            price: 2.25,
            image:
              "https://api.getorder.biz/product/12355/image/29/700/700/26e02bbb-5882-439a-c04f-08d95c238f00.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Chicken soup with pasta",
            description:
              "Chicken broth with chicken, pasta, carrots, celery and parsley. Allergens: cereals, celery.",
            price: 2.25,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/trmtjoqdffa6topkaytz",
            bonus: "",
            modifiers: "",
          },
        ],
      },
    ],
  },
  {
    id: 24594,
    slug: "kfc-kiev",
    brandName: "KFC",
    headerBackgroundImage:
      "https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/e_blur:400/Stores/szzdemcat83pqf3hyyrd",
    deliveryTime1: 20,
    deliveryTime2: 35,
    deliveryPrice: 1.5,
    rate: 92,
    message: "",
    menu: [
      {
        category: {
          categoryName: "Buckets",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Collections/rv34joejo6tqueqkjcdp",
          bonus: "",
        },
        products: [
          {
            name: "Bucket L",
            description: "",
            price: 10,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/L_Bucket_30_HW_out.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Bucket M",
            description: "",
            price: 8,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/M_Bucket_22_HW_out.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Bucket S",
            description: "",
            price: 6,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/M_Bucket_22_HW_out.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Bucket S spicy",
            description: "",
            price: 6,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/M_Bucket_22_HW_out.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Bucket Duet",
            description: "",
            price: 5,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/5.%20Baket%20Duet.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Bucket Duet spicy",
            description: "",
            price: 5,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/5.%20Baket%20Duet.png",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Yammy Chicken",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Collections/f3wjygxlb22osceb0zwz",
          bonus: "",
        },
        products: [
          {
            name: "Bucket L",
            description: "",
            price: 10,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/L_Bucket_30_HW_out.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Bucket M",
            description: "",
            price: 8,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/M_Bucket_22_HW_out.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Bucket S",
            description: "",
            price: 6,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/M_Bucket_22_HW_out.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Bucket S spicy",
            description: "",
            price: 6,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/M_Bucket_22_HW_out.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Bucket Duet",
            description: "",
            price: 5,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/5.%20Baket%20Duet.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Bucket Duet spicy",
            description: "",
            price: 5,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/5.%20Baket%20Duet.png",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Burgers",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Collections/hplrskmxrtnt8uh4cavi",
          bonus: "",
        },
        products: [
          {
            name: "BoxMaster spicy",
            description: "",
            price: 3,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/ibvvwb1fm7ydynosvgto",
            modifiers: "",
            bonus: "",
          },
          {
            name: "BoxMaster original",
            description: "",
            price: 3,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/ibvvwb1fm7ydynosvgto",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Double chicken",
            description: "",
            price: 2.5,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/double_chicken.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Double chicken spicy",
            description: "",
            price: 2.5,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/double_chicken.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Roll",
            description: "",
            price: 2,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/chef_roll.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Roll spicy",
            description: "",
            price: 2,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/chef_roll.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Chicken Burger",
            description: "",
            price: 2,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/jkwo6lh2etupwowyifbm",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Chicken Burger spicy",
            description: "",
            price: 2,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/jkwo6lh2etupwowyifbm",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Cheeseburger",
            description: "",
            price: 1.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/kgcfpck6pamtepbe4s7d",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Ukrainian toast",
            description: "",
            price: 1,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/tost_ukr.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Toast 2 cheeses",
            description: "",
            price: 1,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/1.%20Tost%202%20Sura.png",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Sauces",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Collections/svehfxcntbwih67tnhjx",
          bonus: "",
        },
        products: [
          {
            name: "mayonnaise sauce",
            description: "",
            price: 0.4,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/bp7d9a3ktgrlyoydhpcm",
            modifiers: "",
            bonus: "",
          },
          {
            name: "ketchup sauce",
            description: "",
            price: 0.4,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/8.%20Ketchup.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "mustard sauce",
            description: "",
            price: 0.4,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/qtbp79l7myyxns1circf",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Mango chili sauce",
            description: "",
            price: 0.4,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/czrqs1br9okmmvzngm4b",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Cheese sauce",
            description: "",
            price: 0.4,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/iptg2cgyzkl04gjrszeb",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Barbecue sauce",
            description: "",
            price: 0.4,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/d7n5u91nm4pcb1xr8hgt",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Sweet and sour sauce",
            description: "",
            price: 0.4,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/rceplgybxfaybcfyoo95",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Desserts",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Collections/uthdeftbqdhxznhjfc8m",
          bonus: "",
        },
        products: [
          {
            name: "Donut salted caramel",
            description: "",
            price: 1.2,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/512x512_DonatNUT.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Donut strawberry",
            description: "",
            price: 1.2,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/512x512_Kiosk_17_12_2019_1.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Donut strawberry",
            description: "",
            price: 1.2,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/512x512_Kiosk_17_12_2019_1.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Cherry pie",
            description: "",
            price: 1,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/e3hktma56r7r8wubtxe2",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Muffin with currants",
            description: "",
            price: 1,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/9.%20Mafin_Smorodina.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Chocolate muffin",
            description: "",
            price: 1,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/9.%20Mafin_Shoco.png",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Cold drinks",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Collections/kzyck66la6exnggphlmv",
          bonus: "",
        },
        products: [
          {
            name: "Pepsi 0,5 l",
            description: "",
            price: 1,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/ptqmefujc1699ruh0w1a",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Mirinda 0,33 l",
            description: "",
            price: 1,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/512_Mirinda_0.3.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "7 Up 0,33 l",
            description: "",
            price: 1,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/512_7up_0.3.png",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Coffee",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Collections/k1a49nunckoycbem7uce",
          bonus: "",
        },
        products: [
          {
            name: "Cappuccino",
            description: "",
            price: 1.3,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/11.%20Capuchino%2004.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Latte",
            description: "",
            price: 1.3,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/11.%20Late%2004.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Raspberry tea",
            description: "",
            price: 1.2,
            image:
              "https://kfc-images.s3.eu-west-1.amazonaws.com/img/512x512_KFC_Punch_20201215.png",
            modifiers: "",
            bonus: "",
          },
        ],
      },
    ],
  },
  {
    id: 32495,
    slug: "mcdonald-s-kie",
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
            name: "RUN TEST MENU",
            description: "",
            price: 5.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/culr6ycqhiujdqizqur7",
            bonus: "",
            modifiers: "",
          },
          {
            name: "RUNNING POPPY MENU",
            description: "",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ctbkrla6vr1lpq0axaki",
            bonus: "",
            modifiers: "",
          },
          {
            name: "DOUBLE CHEESBURGER MENU",
            description: "",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/p30hhrwklbw4q0opvzs8",
            bonus: "",
            modifiers: "",
          },
          {
            name: "DOUBLE CHEESBURGER",
            description: "",
            price: 2,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/poq8z65gfsvnagmtv65n",
            bonus: "",
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
            name: "CHICKEN MACNAGETS 20PCS",
            description: "",
            price: 6,
            image:
              "https://d3tqkqn8yl74v5.cloudfront.net/TPO-cso_ua_2133_nuggets20B.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "MACCHIKEN MENU",
            description: "",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/s1h8vsxtwaidni5njpqm",
            modifiers: "",
            bonus: "",
          },
          {
            name: "CHICKEN MACNAGETS 9PCS",
            description: "",
            price: 2.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/lsthk00h9ok7rm5bdlqc",
            modifiers: "",
            bonus: "",
          },
          {
            name: "CHICKEN MACNAGETS 6PCS",
            description: "",
            price: 2,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/wexol5zijsyuu4fpwahp",
            modifiers: "",
            bonus: "",
          },
          {
            name: "CHICKEN MACNAGETS 4PCS",
            description: "",
            price: 1.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/qv6ksaqq3n2yjchndbqq",
            modifiers: "",
            bonus: "",
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
            name: "RUN TEST MENU",
            description: "",
            price: 5.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/culr6ycqhiujdqizqur7",
            bonus: "",
            modifiers: "",
          },
          {
            name: "CHICKEN MACNAGETS 9PCS MENU",
            description: "",
            price: 4.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/tudtobdxa9nzbhrq7kby",
            bonus: "",
            modifiers: "",
          },
          {
            name: "RUNNING POPPY MENU",
            description: "",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ctbkrla6vr1lpq0axaki",
            bonus: "",
            modifiers: "",
          },
          {
            name: "MACCHIKEN MENU",
            description: "",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/s1h8vsxtwaidni5njpqm",
            bonus: "",
            modifiers: "",
          },
          {
            name: "DOUBLE CHEESBURGER MENU",
            description: "",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/p30hhrwklbw4q0opvzs8",
            bonus: "",
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
            name: "RUN TEST",
            description: "",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/yox61fkoqeif0lpnkp3k",
            modifiers: "",
            bonus: "",
          },
          {
            name: "BIG POPPY",
            description: "",
            price: 2.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/cdy3l6fgeamgmxvsqpt7",
            modifiers: "",
            bonus: "",
          },
          {
            name: "MACCHIKEN",
            description: "",
            price: 2,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ulcd5m4z3xy0mchih27b",
            modifiers: "",
            bonus: "",
          },
          {
            name: "DOUBLE CHEESBURGER",
            description: "",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/poq8z65gfsvnagmtv65n",
            modifiers: "",
            bonus: "",
          },
          {
            name: "CHEESEBURGER",
            description: "",
            price: 1.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/xw2vyhuganjgz0fy477y",
            modifiers: "",
            bonus: "",
          },
          {
            name: "HAMBURGER",
            description: "",
            price: 1.2,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ibwczijlydjqko4eubb1",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Happy Meal",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/lyzfxrwl4aqpkqic01xg",
          bonus: "",
        },
        products: [
          {
            name: "HAPPY MEAL HAMBURGER",
            description: "",
            price: 3.5,
            image:
              "https://d3tqkqn8yl74v5.cloudfront.net/TPO-chf_ua_2302_HM_Hamburger.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "HAPPY MEAL CHEESBURGER",
            description: "",
            price: 3.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/evek9s7bdwp8oc12lhxt",
            modifiers: "",
            bonus: "",
          },
          {
            name: "HAPPY MEAL CHICKEN MACNAGETS 4PCS",
            description: "",
            price: 3.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/vqicsj4y2adjwpjwtbuk",
            modifiers: "",
            bonus: "",
          },
          {
            name: "A TOY OR A BOOK",
            description: "",
            price: 1.5,
            image:
              "https://d3tqkqn8yl74v5.cloudfront.net/TPO-cso_ua_8080_ToyBook.png",
            modifiers: "",
            bonus: "",
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
            name: "FRENCH FRIES",
            description: "",
            price: 1,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/qmihdlfhsud7ypt8lfs6",
            modifiers: "",
            bonus: "",
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
            name: "MAKPIRIG CHERRY",
            description: "",
            price: 1,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/quqpna5iftzp7aqrgez4",
            modifiers: "",
            bonus: "",
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
            name: "MOCCO",
            description: "295ml",
            price: 1.5,
            image:
              "https://d3tqkqn8yl74v5.cloudfront.net/TPO-cso_ua_7622_mocco1.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "CAPPUCCINO CLASSIC",
            description: "245ml",
            price: 1.3,
            image:
              "https://d3tqkqn8yl74v5.cloudfront.net/TPO-cso_ua_7605_cappuchino_large.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "LATE CLASSIC",
            description: "295ml",
            price: 1.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/xtono7p0wcaqjor8micv",
            modifiers: "",
            bonus: "",
          },
          {
            name: "AMERICANO WITH MILK CLASSIC",
            description: "295ml",
            price: 1.3,
            image:
              "https://d3tqkqn8yl74v5.cloudfront.net/TPO-cso_ua_7611_americano_milkL.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "MOCCO",
            description: "295ml",
            price: 1.3,
            image:
              "https://d3tqkqn8yl74v5.cloudfront.net/TPO-cso_ua_7622_mocco1.png",
            modifiers: "",
            bonus: "",
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
            name: "ORANGE JUICE",
            description: "",
            price: 1,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/u5uxfgbv1oyh1hcinwec",
            modifiers: "",
            bonus: "",
          },
          {
            name: "COCA COLA",
            description: "",
            price: 0.7,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/vkarb6cwhzf1yvrp56sr",
            modifiers: "",
            bonus: "",
          },
          {
            name: "FANTA",
            description: "",
            price: 0.7,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/cqhvzpdxd6sxjq37bflw",
            modifiers: "",
            bonus: "",
          },
          {
            name: "SPRITE",
            description: "",
            price: 0.7,
            image:
              "https://d3tqkqn8yl74v5.cloudfront.net/TPO-cso_ua_7060_Sprite_025.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "APPLE JUICE",
            description: "200ml",
            price: 1,
            image:
              "https://d3tqkqn8yl74v5.cloudfront.net/TPO-cso_ua_7097_Juice_Galicia_Apple_Small_packed1.png",
            modifiers: "",
            bonus: "",
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
            name: "MACFLEURY CAT CAT CHOCOLATE",
            description: "",
            price: 1.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/zfhxhqfags2qifk00ixz",
            modifiers: "",
            bonus: "",
          },
          {
            name: "MACFLEURY CAT CAT CARAMEL",
            description: "",
            price: 1.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/vlkylbowttgkfxgvn19h",
            modifiers: "",
            bonus: "",
          },
          {
            name: "MACFLEURY CAT CAT STRAWBERRY",
            description: "",
            price: 1.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/w16khldbdvolekd4eadz",
            modifiers: "",
            bonus: "",
          },
          {
            name: "MAXANDI CHOCOLATE IN A PLASTIC CUP",
            description: "",
            price: 1.4,
            image:
              "https://d3tqkqn8yl74v5.cloudfront.net/TPO-cso_ua_4010_SundaeChoco.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "MAXANDY CARAMEL IN A PLASTIC CUP",
            description: "",
            price: 1.4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/h3vcko66rjdhfwssfa4h",
            modifiers: "",
            bonus: "",
          },
          {
            name: "MAXANDY STRAWBERRY IN A PLASTIC CUP",
            description: "",
            price: 1.4,
            image:
              "https://d3tqkqn8yl74v5.cloudfront.net/TPO-cso_ua_4030_SundaeStrawberry.png",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Sauces",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/r7qtnuvy5hwfvu248ti1",
          bonus: "",
        },
        products: [
          {
            name: "KETCHUP SAUCE",
            description: "",
            price: 0.4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/r7qtnuvy5hwfvu248ti1",
            modifiers: "",
            bonus: "",
          },
          {
            name: "BARBECUE SAUCE",
            description: "",
            price: 0.4,
            image:
              "https://d3tqkqn8yl74v5.cloudfront.net/TPO-cso_ua_2230_Souce_BBQ.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "KETCHUP SAUCE",
            description: "",
            price: 0.4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/r7qtnuvy5hwfvu248ti1",
            modifiers: "",
            bonus: "",
          },
          {
            name: "MUSTARD SAUCE",
            description: "",
            price: 0.4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/n3lrpvjmdbohfgzff1og",
            modifiers: "",
            bonus: "",
          },
          {
            name: "SOUR-SWEET SAUCE",
            description: "",
            price: 0.4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/yi2anbmiwxr1ajans6h4",
            modifiers: "",
            bonus: "",
          },
          {
            name: "MAYONNAISE SAUCE",
            description: "",
            price: 0.4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/mhsygsssca29ramfmuyy",
            modifiers: "",
            bonus: "",
          },
        ],
      },
    ],
  },
  {
    id: 24682,
    slug: "murakami",
    brandName: "Murakami",
    headerBackgroundImage:
      "https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/e_blur:400/Stores/syqoksxrgus6ixacdxge",
    deliveryTime1: 25,
    deliveryTime2: 35,
    deliveryPrice: 1.5,
    rate: 96,
    message: "",
    menu: [
      {
        category: {
          categoryName: "Menu",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/jfxxpnxnspq61u27c1ki",
          bonus: "",
        },
        products: [
          {
            name: "Golden Dragon Roll (260g)",
            description:
              "Rice, nori, unagi sauce, cucumber, white sesame, omega omega, masago caviar, eel.",
            price: 5,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/hklk7ztlyt6fnl4wixqz",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Green Dragon Roll (280g)",
            description:
              "Rice, nori, unagi sauce, cucumber, white sesame, masago caviar, avocado, eel.",
            price: 4.75,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/ecofxxwhvcupbx8yzi1x",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Unagi Philadelphia Roll (235g)",
            description:
              "Rice, nori, cream cheese, unagi sauce, cucumber, sesame white, eel.",
            price: 4.7,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/tthq6qvujyyqcpqe3h44",
            bonus: "",
            modifiers: "",
          },
          {
            name: "California Roll with Shrimp Tempura (225g)",
            description:
              "Rice, nori, cucumber, spice mayonnaise, masago caviar, tempura, tiger prawn.",
            price: 4.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/hftegmg2bjmcpmsvneaf",
            bonus: "",
            modifiers: "",
          },
          {
            name: "California with oily fish (210g)",
            description:
              "Rice, nori, tobiko red caviar, mayonnaise, cucumber, green onions, oily fish.",
            price: 4.25,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/kwouqm30hmj4o2mah0da",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Philadelphia Roll with Smoked Salmon (240g)",
            description:
              "Rice, nori, cream cheese, cucumber, masago caviar, smoked salmon.",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/g7sb0bjhxkwy6eknvtvx",
            bonus: "",
            modifiers: "",
          },
          {
            name: "California Roll with Salmon (205g)",
            description:
              "Rice, nori, cucumber, masago caviar, mayonnaise, fresh salmon.",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/ravsbo7ufhw2sszfx8q0",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Futomaki with shrimp (210g)",
            description:
              "Rice, nori, spice mayonnaise, red tobiko caviar, iceberg lettuce, cucumber, masago caviar, eel.",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/qghpao1mpzzmch5r87iq",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Spicy roll with tuna (260g)",
            description:
              "Rice, nori, cream cheese, black sesame, cucumber, avocado, tuna, masago caviar, eel.",
            price: 3.9,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/sl4qjcnirtspl2dsqopz",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Cheese roll with eel (235g)",
            description:
              "Rice, nori, cream cheese, unagi sauce, cucumber, sesame white, eel.",
            price: 3.85,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/kcc7t4uwicdwblwgyu2w",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Roll with eel tempura (225g)",
            description:
              "Rice, nori, cream cheese, Unagi sauce, cucumber, tempura, eel.",
            price: 3.8,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/jr2ig1dsvxutf6b8tbpr",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Roll from the Chef (240g)",
            description:
              "Rice, nori, unagi sauce, white sesame seeds, feta cheese, smoked salmon, toast cheese, salmon.",
            price: 3.75,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/ccsrrnbmxhufqapdletk",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Salmon Cheese Roll (250g)",
            description:
              "ice, nori, cucumber, toast, fresh salmon, cream cheese, sweet and sour sauce, masago caviar, eel.",
            price: 3.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/kd3c6lulipk8jzvxxl6e",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Philadelphia Roll with Oil Fish (230g)",
            description:
              "Rice, nori, cream cheese, cucumber, black sesame, oily fish.",
            price: 3.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/kv5h09ncnwm7nph9eajm",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Philadelphia Roll with Avocado (230g)",
            description: "Rice, nori, cream cheese, avocado, fresh salmon.",
            price: 3.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/obvkzh1uqb754qa4qf0e",
            bonus: "",
            modifiers: "",
          },
        ],
      },
    ],
  },
  {
    id: 49364,
    slug: "papa-john-kie",
    brandName: "Papa John",
    headerBackgroundImage:
      "https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/e_blur:400/Stores/mc4lxofr66b9ry6wkzn3",
    deliveryTime1: 0,
    deliveryTime2: 0,
    deliveryPrice: 1.5,
    rate: 95,
    message: ``,
    menu: [
      {
        category: {
          categoryName: "Top sellers",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/j4l5trpg4d2wn8qpowwz",
          bonus: "",
        },
        products: [
          {
            name: "Papa John's Pizza",
            description:
              "Papa John's sauce, mozzarella cheese, pepperoni sausage, smoked chicken balyk, hunting sausages, bacon, sun-dried tomatoes, olives, chili peppers, arugula, Parmesan cheese.",
            price: 4.75,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/j4l5trpg4d2wn8qpowwz",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Pizza 5 cheeses",
            description:
              "Alfredo sauce, mozzarella cheese, cheddar cheese, bergader cheese, feta cheese, parmesan cheese, almond flakes.",
            price: 4.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ww24z86cqeuzoev4vtny",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Pizza Americanoa",
            description:
              "Lush dough, Papa John sauce, Cheddar cheese, Mozzarella cheese, pepperoni, smoked chicken balyk, hunting sausages, corn, red onion, green onion, serve BBQ sauce to the sides.",
            price: 4.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/rl23a4gpxgl3x8xaelyv",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Bavarian pizza",
            description:
              "Barbecue sauce, mozzarella cheese, pepperoni sausage, hunting sausages, champignon mushrooms, red onions, mustard and honey sauce.",
            price: 4.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/nebjdblb0bjj8czb5pnj",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Carbonara Pizza",
            description:
              "Alfredo sauce, cheddar cheese, mozzarella cheese, ham, mushrooms, bacon, green onions.",
            price: 4.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/mebovypqi0efppvmi3nd",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Meat pizza with Dorbl cheese",
            description:
              "Papa John's sauce, mozzarella cheese, ham, pepperoni sausage, smoked chicken balyk, mushrooms, Dorblyu cheese, arugula.",
            price: 4.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/shepyfxsjqmkvhg3scyn",
            bonus: "",
            modifiers: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Pizza",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/shepyfxsjqmkvhg3scyn",
          bonus: "",
        },
        products: [
          {
            name: "Papa John's Pizza",
            description:
              "Papa John's sauce, mozzarella cheese, pepperoni sausage, smoked chicken balyk, hunting sausages, bacon, sun-dried tomatoes, olives, chili peppers, arugula, Parmesan cheese.",
            price: 4.75,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/j4l5trpg4d2wn8qpowwz",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Pizza 5 cheeses",
            description:
              "Alfredo sauce, mozzarella cheese, cheddar cheese, bergader cheese, feta cheese, parmesan cheese, almond flakes.",
            price: 4.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ww24z86cqeuzoev4vtny",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Pizza Americanoa",
            description:
              "Lush dough, Papa John sauce, Cheddar cheese, Mozzarella cheese, pepperoni, smoked chicken balyk, hunting sausages, corn, red onion, green onion, serve BBQ sauce to the sides.",
            price: 4.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/rl23a4gpxgl3x8xaelyv",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Bavarian pizza",
            description:
              "Barbecue sauce, mozzarella cheese, pepperoni sausage, hunting sausages, champignon mushrooms, red onions, mustard and honey sauce.",
            price: 4.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/nebjdblb0bjj8czb5pnj",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Carbonara Pizza",
            description:
              "Alfredo sauce, cheddar cheese, mozzarella cheese, ham, mushrooms, bacon, green onions.",
            price: 4.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/mebovypqi0efppvmi3nd",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Meat pizza with Dorbl cheese",
            description:
              "Papa John's sauce, mozzarella cheese, ham, pepperoni sausage, smoked chicken balyk, mushrooms, Dorblyu cheese, arugula.",
            price: 4.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/shepyfxsjqmkvhg3scyn",
            bonus: "",
            modifiers: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Pizza on a great dough",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/w2pitnsflgoge4ruczvx",
          bonus: "",
        },
        products: [
          {
            name: "Pizza 5 cheeses and Dor Blue sauce to the sides (570/50g)",
            description:
              "Lush dough, Alfredo sauce, Mozzarella cheese, Cheddar cheese, Bergader cheese, Feta cheese, Parmesan, almond flakes, serve Dor Blue cheese sauce to the sides.",
            price: 8.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/u00889w9ae0knrryso3a",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Americano pizza and BBQ sauce to the sides (620/50g)",
            description:
              "Lush dough, Papa John sauce, Cheddar cheese, Mozzarella cheese, pepperoni, smoked chicken balyk, hunting sausages, corn, red onion, green onion, serve BBQ sauce to the sides.",
            price: 8.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/lfranue3t23vgkoomhzq",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Pizza 5 cheeses and Dor Blue sauce to the sides (570/50g)",
            description:
              "Lush dough, Alfredo sauce, Cheddar cheese, mozzarella cheese, ham, mushrooms, bacon, green onions, serve cheese sauce Dor blue to the sides.",
            price: 8.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/hscty21gc2pmsxmjgpcy",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Papa John's pizza and honey-mustard sauce for boots (630/50g)",
            description:
              "Lush dough, Papa John sauce, Mozzarella cheese, pepperoni, smoked chicken balyk, hunting sausages, bacon, sun-dried tomatoes, olives, chili peppers, arugula, Parmesan cheese, serve mustard-honey sauce to the sides.",
            price: 8.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/zw3vbeehh6ooilmostsp",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Mini Set Pizza",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/ymkigmvfjkksp79n0o4b",
          bonus: "",
        },
        products: [
          {
            name: "Set #1 (810g)",
            description: "Mini pizzas: 5 cheeses, Hawaiian, Bavarian.",
            price: 8,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ymkigmvfjkksp79n0o4b",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Set #2 (820g)",
            description: "Mini pizzas: Bavarian, Carbonara, Americano.",
            price: 8,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/uqtscapjpdl8klgzzjxo",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Set #3 (840g)",
            description: "Mini pizzas: 5 cheeses, Hawaiian, Bavarian.",
            price: 8,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ymkigmvfjkksp79n0o4b",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Lunches",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/oqp5deeqmkk29cmdoayj",
          bonus: "",
        },
        products: [
          {
            name: "Lunch #1 (250/250/200/30g)",
            description: "Chicken broth, Margherita mini pizza, Greek salad.",
            price: 5.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/oqp5deeqmkk29cmdoayj",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Lunch #2 (250/250/170g)",
            description:
              "Chicken broth, Hawaiian mini pizza, country style potatoes.",
            price: 5.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/dtualbbm3bt48oe48zns",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Lunch #3 (250/270/100/30g)",
            description:
              "Chicken broth, mini Americano pizza, small chicken nuggets.",
            price: 5.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/eim0zxmu0qrlb2qprfis",
            bonus: "",
            modifiers: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Appetizer",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/eontug544d18s7drkczh",
          bonus: "",
        },
        products: [
          {
            name: "Barbecue chicken wings with cheese sauce",
            description:
              "Chicken wings fried in barbecue sauce, Dorblu cheese sauce.",
            price: 4.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ctxsmri8gut6kdyqkwow",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Cheese pieces with cranberry sauce",
            description: "Hard cheese in crispy breadcrumbs, cranberry sauce.",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/febixg3dfnktqroa3a7o",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Chicken nuggets",
            description:
              "Juicy chicken fillet in crispy breadcrumbs, mustard-honey sauce.",
            price: 4.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/rs1pwezpaykspqa2ebkr",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Hash brown with bacon and sour cream",
            description: "Potato pancakes, bacon, sour cream.",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/gbhde2nl9s2sgnug3uos",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Gedza dumplings with duck",
            description: "Crispy dumplings with duck meat, Gede sauce.",
            price: 4.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/wwr4ustyqwaa6t1ihhxr",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Soups",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/udyqvtuh34kheaqstfdq",
          bonus: "",
        },
        products: [
          {
            name: "Mushroom cream soup with croutons (250/10g)",
            description:
              "Champignon mushrooms, onions, cream, garlic, crackers with garlic.",
            price: 3,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/wbnbhgfvgvqotqpl6yuc",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Chicken broth (250g)",
            description:
              "Hot broth with smoked chicken balyk, noodles, egg, herbs.",
            price: 2.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/udyqvtuh34kheaqstfdq",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Salads",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/ltisloux8pcqfboeuqfe",
          bonus: "",
        },
        products: [
          {
            name: "Caesar salad with chicken (180/30g)",
            description:
              "Iceberg lettuce, tomato, chicken thigh, bacon, chicken egg, crackers, Parmesan cheese, Caesar sauce.",
            price: 4.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/gvdfdj0imaoxwlsdqzgb",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Greek salad (200/30g)",
            description:
              "Salad mix, tomato, bell pepper, cucumber, red onion, olives, feta cheese, olive oil with Provencal herbs.",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ltisloux8pcqfboeuqfe",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Seaweed salad (100/40g)",
            description: "Seaweed, homodari sauce.",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/cpn0lq2fsa6alvm52nwg",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Shaurma",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/i9ohzqznbouybk5umygn",
          bonus: "",
        },
        products: [
          {
            name: "Shawarma with chicken nuggets",
            description:
              "Lavash, Cheddar cheese sauce, Cheddar cheese, chicken nuggets, iceberg lettuce, tomato, Bavarian sauce.",
            price: 3.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/kaz7w5sdw07akttaluyq",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Shawarma is a classic",
            description:
              "Lavash, Cocktail sauce, grilled chicken, cabbage, carrot, tomato, sour cream sauce, pickled red onion.",
            price: 3,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/kaz7w5sdw07akttaluyq",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Combo Sets",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/yrspxtjdq6lorck6aszo",
          bonus: "",
        },
        products: [
          {
            name: "Combo set #1 (240/170/30/500g)",
            description:
              "Classic shawarma, peasant potatoes, cocktail sauce and 0.5l of cola.",
            price: 5.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/yrspxtjdq6lorck6aszo",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Combo set #2 (240/170/30/500g)",
            description:
              "Shawarma with chicken nuggets, peasant potatoes, sauce Cocktail and cola 0.5l",
            price: 6,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/b0kvi4b70ujp72upu0p0",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Combo set #3 (490/190/30/500g)",
            description:
              "Papa John's pizza medium (30cm), barbecue chicken wings with cheese sauce and cola (0.5l)",
            price: 9,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/yxtu5kang3xu6vmuxvde",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Beer",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/csb20cnchik0lorxwnnr",
          bonus: "",
        },
        products: [
          {
            name: "Leffe Blonde (330ml)",
            description:
              "Color: Light. Filtration: Filter pasteurized. Country: Belgium. Strength: 6.6%",
            price: 2.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/bxu9patnebobfk3yfsj8",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Leffe Brown (330ml)",
            description:
              "Color: Dark. Filtration: Filter pasteurized. Country: Belgium. Strength: 6.5%",
            price: 2.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/jzmscgtgnbqzr5qldgpo",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Corona Extra (330ml)",
            description:
              "Color: Light. Filtration: Filter pasteurized. Country: Mexico. Strength: 4.5%",
            price: 2.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/fp8ih4y3gs16bk76tuth",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Beer Stella Artois n/a (330ml)",
            description:
              "Color: Light. Filtration: Filter pasteurized. Country Ukraine. Strength: 0.5%",
            price: 2.3,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/tj2g5ivlzisamstidhbv",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Stella Artois beer (500ml)",
            description:
              "Color: Light. Filtration: Filter pasteurized. Country Ukraine. Strength: 5.0%",
            price: 2,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/csb20cnchik0lorxwnnr",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Hoegarden keg (1l)",
            description:
              "Color: Light. Filtration: Unfiltered, pasteurized. Country: Belgium. Strength: 4.9%",
            price: 6,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/pswersyscd63ewhl4swc",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Desserts",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/aefonkeqru8fn7oyfore",
          bonus: "",
        },
        products: [
          {
            name: "Salted caramel cheesecake (160g)",
            description: "hortcrust pastry, creamy mousse, caramel.",
            price: 3.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/gybbwo5buhjm5kcfvagl",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Cheesecakes with sour cream",
            description: "Tender cheesecakes with raisins, sour cream.",
            price: 2.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ylg7ma3bbsip7k0wkdzr",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Napoleon (150g)",
            description: "Puff pastry cake with custard.",
            price: 3,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/aefonkeqru8fn7oyfore",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Waffle cake with condensed milk and caramel (120g)",
            description:
              "Waffle cakes, butter, condensed milk, caramel, sugar, cream, salt.",
            price: 2.75,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/xuyg3oop0lb0lmmzr6n8",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Beverages",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/lqhrsmdl8ol6eqqjr3hn",
          bonus: "",
        },
        products: [
          {
            name: "Borjomi (500ml)",
            description: "Glass bottle 0.5l",
            price: 2.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/lqhrsmdl8ol6eqqjr3hn",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Coca-Cola (500ml)",
            description: "Plastic bottle 0.5l",
            price: 1.25,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/tanlkwdek9grhxv7awwn",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Coca-Cola Zero (500ml)",
            description: "Glass bottle 0.5l",
            price: 1.25,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/e9ddokurvuxg5zztbsjj",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Schweppes Bitter Lemon (250ml)",
            description: "Glass bottle 0.25l",
            price: 1.25,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ejfkrplflyl8e3qf3bcx",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Schweppes Indian Tonic (250ml)",
            description: "Glass bottle 0.25l",
            price: 1.25,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/nmkzqd04awzcomvoenlu",
            modifiers: "",
            bonus: "",
          },
        ],
      },
    ],
  },
  {
    id: 25693,
    slug: "puzata-hata-kie",
    brandName: "Puzata Hata",
    headerBackgroundImage:
      "https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/e_blur:400/Stores/krpl5hjzxqiiv7jymyjy",
    deliveryTime1: 15,
    deliveryTime2: 25,
    deliveryPrice: 1,
    rate: 94,
    message:
      "Disposable utensils are not included in the price of meals. If necessary, order additionally.",
    menu: [
      {
        category: {
          categoryName: "Top sellers",
          categoryImage:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/943a6add-d09d-4fa6-b4d9-ae7ad60f52c0-thumbnail-400x400-100.jpg",
          bonus: "",
        },
        products: [
          {
            name: "Zaluzhny's combo menu is delicious here",
            description: "725g",
            price: 5,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2021/02/25/015d863d-4e24-4a20-a524-5d8d971fe205-thumbnail-400x400-100.jpg",
            bonus: "-10%",
            modifiers: "",
          },
          {
            name: "Chopped turkey Caprese",
            description: "155g",
            price: 2,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/11/02/9d26b8e0-3d72-48aa-b1cd-6581f745536c-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Olivie salad",
            description: "200g",
            price: 2,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2021/01/19/8aa67305-d050-4464-9831-1072a616bd89-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Salad with crab sticks",
            description: "200g",
            price: 2,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2021/05/11/8dff9f5d-f185-4f49-b339-68bd0ea71733-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Chicken meatballs in cheese",
            description: "180g",
            price: 2,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2021/05/11/8dff9f5d-f185-4f49-b339-68bd0ea71733-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Sauerkraut salad",
            description: "200g",
            price: 2,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2021/01/19/310e83d1-a277-4774-88a5-5dc9e914fd29-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Salad with feta and beets",
            description: "90g",
            price: 2,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/a815cbf1-34ca-4ea4-aab0-6569e83cfe2a-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Combo menu",
          categoryImage:
            "https://media.puzatahata.ua/__sized__/images/productosg/2021/02/25/015d863d-4e24-4a20-a524-5d8d971fe205-thumbnail-400x400-100.jpg",
          bonus: "",
        },
        products: [
          {
            name: "Zaluzhny's combo menu is delicious here",
            description: "725g",
            price: 6,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2021/02/25/015d863d-4e24-4a20-a524-5d8d971fe205-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "-10%",
          },
        ],
      },
      {
        category: {
          categoryName: "First courses",
          categoryImage:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/989b6d9c-5f21-4d59-9522-bad299b22467-thumbnail-400x400-100.jpg",
          bonus: "",
        },
        products: [
          {
            name: "Solyanka meat",
            description: "360/30/4.5g",
            price: 2,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/989b6d9c-5f21-4d59-9522-bad299b22467-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Homemade borsch with meat",
            description: "390g",
            price: 2,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/0af2ca6a-431a-4323-99dd-b379dc181daf-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Pea soup with croutons",
            description: "360/15g",
            price: 1.5,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/ebe530a3-0132-4462-b9b2-56600bd593b1-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Second courses",
          categoryImage:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/a815cbf1-34ca-4ea4-aab0-6569e83cfe2a-thumbnail-400x400-100.jpg",
          bonus: "",
        },
        products: [
          {
            name: "Beefsteak natural chopped",
            description: "200g",
            price: 3,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2021/05/15/c386c550-c0ea-4154-94a9-061827aacf59-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Pasta Carbonara",
            description: "200g",
            price: 2,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/11/01/0afddfbb-1e5a-45c7-a974-e6188dc3d333-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Chopped turkey Caprese",
            description: "155g",
            price: 2.5,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/11/02/9d26b8e0-3d72-48aa-b1cd-6581f745536c-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Chicken meatballs in cheese",
            description: "180g",
            price: 2,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/16f7107e-931d-4501-8d4b-a579614546ad-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Grilled chicken steak",
            description: "90g",
            price: 2,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/a815cbf1-34ca-4ea4-aab0-6569e83cfe2a-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Side dishes",
          categoryImage:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/bd0e22e8-6831-4e69-af0a-524111dc6cb0-thumbnail-400x400-100.jpg",
          bonus: "",
        },
        products: [
          {
            name: "Vegetables are blanched",
            description: "200g",
            price: 1.5,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/bd0e22e8-6831-4e69-af0a-524111dc6cb0-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Vegetable stew with mushrooms",
            description: "150g",
            price: 1.5,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2021/01/18/ae1780ff-2ca9-48fa-9dfe-e69163b10875-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Rice with vegetables",
            description: "150g",
            price: 1.5,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/bfd1ffe1-024a-4438-a0f9-6d47f746412f-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Buckwheat",
            description: "150g",
            price: 1.5,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/50ebf0e8-4bc3-43dd-bf0b-74039e7d679f-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Mashed potatoes at home",
            description: "200g",
            price: 1.5,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/de123420-4a58-4c85-95d1-d4801062fc06-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Baked potatoes",
            description: "150g",
            price: 1.5,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/72c86a5b-6578-42e3-acb8-657a21762198-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Salads",
          categoryImage:
            "https://media.puzatahata.ua/__sized__/images/productosg/2021/01/19/e15a53aa-cf71-410e-aad6-c6e6c8dfc211-thumbnail-400x400-100.jpg",
          bonus: "",
        },
        products: [
          {
            name: "Olivie salad",
            description: "200g",
            price: 2,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2021/01/19/8aa67305-d050-4464-9831-1072a616bd89-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Salad with crab sticks",
            description: "200g",
            price: 2,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2021/05/11/8dff9f5d-f185-4f49-b339-68bd0ea71733-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Carrot and celery salad",
            description: "200g",
            price: 2,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2021/01/19/e15a53aa-cf71-410e-aad6-c6e6c8dfc211-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Salad with feta and beets",
            description: "200g",
            price: 2,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/10/07/5d353f9e-24b0-4236-9cec-a037fabba06b-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Herring under a fur coat",
            description: "165g",
            price: 1.5,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2021/09/27/f4ffef92-e80d-4e8a-ad47-b254f87d698c-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Lard with garlic",
            description: "40g",
            price: 0.5,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/08/8cd03201-b249-4810-83bb-2050e02654c9-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Dumplings and pancakes",
          categoryImage:
            "https://media.puzatahata.ua/__sized__/images/productosg/2021/07/29/a754532e-a086-4303-9b52-d8e306f65336-thumbnail-400x400.png",
          bonus: "",
        },
        products: [
          {
            name: "Belly cheesecake with blueberries",
            description: "180g",
            price: 2,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2021/07/29/a754532e-a086-4303-9b52-d8e306f65336-thumbnail-400x400.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Dumplings with meat",
            description: "200/20g",
            price: 2,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/511a12d1-fecf-4b23-9edb-7c6828f92d21-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Dumplings capital with chicken",
            description: "160/20g",
            price: 2,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/d76ce14f-1a62-4335-9d96-8be473838854-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Cheesecakes",
            description: "120/20g",
            price: 2,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/5e68dcb8-1b37-4bb1-8470-6c155b9bbf74-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Pancakes with plum and apple",
            description: "200/20g",
            price: 1.5,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/10/11/bcee1437-14bb-4150-b909-879018a419b2-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Pancakes with cherries",
            description: "190/20/2g",
            price: 1.5,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/4cd9ad2d-861e-47db-acf7-c190ac871d28-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "To the dishes",
          categoryImage:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/08/5d70f15a-7af3-4267-99cb-8c55e1e89328-thumbnail-400x400-100.jpg",
          bonus: "",
        },
        products: [
          {
            name: "Mustard-lemon sauce",
            description: "50g",
            price: 0.5,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/08/5d70f15a-7af3-4267-99cb-8c55e1e89328-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Cilantro sauce",
            description: "50g",
            price: 0.5,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/08/6ae5417b-e1b8-4e6c-a897-9640b11cbdfd-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Sour cream",
            description: "50g",
            price: 0.5,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/08/d08b8fde-fb49-49da-bc14-7666d2d1cbf6-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Tar-tar sauce",
            description: "50g",
            price: 0.5,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/08/d19dcd0e-975f-4180-a0b8-70b2d8a73d89-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Honey",
            description: "18g",
            price: 0.5,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2020/11/16/baa04915-b7c4-4380-baf7-4850c32887ea-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Cutlery is disposable",
            description: "piece",
            price: 0.1,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2020/11/16/f242bb77-2107-475c-b252-639138715e28-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Bread",
          categoryImage:
            "https://media.puzatahata.ua/__sized__/images/productosg/2021/02/24/8ed544e8-284c-4481-b464-8b0537376801-thumbnail-400x400-100.jpg",
          bonus: "",
        },
        products: [
          {
            name: "Ukrainian bun",
            description: "50g",
            price: 0.5,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2021/03/25/85f18886-61e2-4016-a366-9c2edb5fe33c-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "The bun is branded",
            description: "50g",
            price: 0.5,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2021/03/25/85f18886-61e2-4016-a366-9c2edb5fe33c-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Portioned white bread",
            description: "28g",
            price: 0.05,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2021/02/24/8ed544e8-284c-4481-b464-8b0537376801-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Portioned black bread",
            description: "28g",
            price: 0.05,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2021/02/24/b1b0873a-36b3-43aa-84d3-79725cf16b12-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Cold drinks",
          categoryImage:
            "https://media.puzatahata.ua/__sized__/images/productosg/2021/06/23/1024ad11-64ac-4ce7-a1c8-afffaa068fc0-thumbnail-400x400.png",
          bonus: "",
        },
        products: [
          {
            name: "Mineral water Carpathian spring highly carbonated",
            description: "500ml (glass)",
            price: 1.3,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2021/06/23/1024ad11-64ac-4ce7-a1c8-afffaa068fc0-thumbnail-400x400.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Compote",
            description: "500ml",
            price: 1.3,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/08/f67fe334-bf1b-4541-abec-64ac7aac5ed5-thumbnail-400x400-100.jpg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Drink Pepsi",
            description: "330 ml glass",
            price: 1,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2021/06/23/273bb7f8-e4fd-4a1e-b346-138cd21a500e-thumbnail-400x400.png",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Cold tea Lipton green",
            description: "500ml",
            price: 1,
            image:
              "https://media.puzatahata.ua/__sized__/images/productosg/2021/06/23/96915d5a-7475-421a-8f7c-64f2bcfa9a3e-thumbnail-400x400.png",
            modifiers: "",
            bonus: "",
          },
        ],
      },
    ],
  },
  {
    id: 24599,
    brandName: "Sushiya",
    slug: "sushiya-kiev",
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
            bonus: "",
            modifiers: "",
          },
          {
            name: "Vzumi Set",
            description:
              "The category 'Sushi sets' is an offer at a special (reduced) price. The takeaway discount does not apply to the offer of sushi and roll sets. 3 pieces of soy sauce and 30 g of ginger and 10 g of wasabi are added to this sushi set for free.",
            price: 15.5,
            image:
              "https://api.getorder.biz/product/45015/image/109/700/700/5356301100389.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Roll Philadelphia De Luxe with eel",
            description:
              "Each roll comes with 1 soy sauce for free, as well as 10 g of ginger and 3 g of wasabi, which are packaged together.",
            price: 10,
            image:
              "https://api.getorder.biz/product/44712/image/109/700/700/5022036723567.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Roll Philadelphia De Luxe with salmon and eel",
            description:
              "Each roll comes with 1 soy sauce for free, as well as 10 g of ginger and 3 g of wasabi, which are packaged together",
            price: 8.5,
            image:
              "https://api.getorder.biz/product/44707/image/109/700/700/5602176697869.webp",
            bonus: "",
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
            bonus: "",
          },
          {
            name: "Maxi King Lukhuri De Luxe set",
            description:
              "The category 'Sushi sets' is an offer at a special (reduced) price. The takeaway discount does not apply to the offer of sushi and roll sets. 3 pieces of soy sauce, 30 g of ginger and 10 g of wasabi are added to this sushi set for free.",
            price: 32.5,
            image:
              "https://api.getorder.biz/product/44594/image/109/700/700/5688301974289.webp",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Nichosi set",
            description:
              "The category 'Sushi sets' is an offer at a special (reduced) price. The takeaway discount does not apply to the offer of sushi and roll sets. 3 pieces of soy sauce, 30 g of ginger and 10 g of wasabi are added to this sushi set for free",
            price: 27.5,
            image:
              "https://api.getorder.biz/product/44598/image/109/700/700/5317301087865.webp",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Parti set",
            description:
              "The category 'Sushi sets' is an offer at a special (reduced) price.The takeaway discount does not apply to the offer of sushi and roll sets. 3 pieces of soy sauce, 30 g of ginger and 10 g of wasabi are added to this sushi set for free.",
            price: 22,
            image:
              "https://api.getorder.biz/product/44593/image/109/700/700/5087301094018.webp",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Vzumi set",
            description:
              "The category 'Sushi sets' is an offer at a special (reduced) price. The takeaway discount does not apply to the offer of sushi and roll sets. 3 pieces of soy sauce and 30 g of ginger and 10 g of wasabi are added to this sushi set for free.",
            price: 16,
            image:
              "https://api.getorder.biz/product/45015/image/109/700/700/5356301100389.webp",
            modifiers: "",
            bonus: "",
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
            bonus: "",
            modifiers: "",
          },
          {
            name: "Fresh orange",
            description: "",
            price: 3,
            image:
              "https://api.getorder.biz/product/44648/image/109/700/700/5323317524249.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Borjomi glass 0.5l",
            description: "",
            price: 2.25,
            image:
              "https://api.getorder.biz/product/45116/image/109/700/700/5319209250945.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Classic lemonade with mint",
            description: "",
            price: 1.5,
            image:
              "https://api.getorder.biz/product/44624/image/109/700/700/5847149667078.webp",
            bonus: "",
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
            bonus: "",
          },
          {
            name: "Golden Dragon Roll",
            description:
              "Each roll comes with 1 soy sauce for free, as well as 10 g of ginger and 3 g of wasabi, which are packaged together.",
            price: 9,
            image:
              "https://api.getorder.biz/product/44691/image/109/700/700/5712341375413.webp",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Roll Philadelphia De Luxe with salmon and eel",
            description:
              "Each roll comes with 1 soy sauce for free, as well as 10 g of ginger and 3 g of wasabi, which are packaged together.",
            price: 8.5,
            image:
              "https://api.getorder.biz/product/44707/image/109/700/700/5602176697869.webp",
            modifiers: "",
            bonus: "",
          },
          {
            name: "oll Philadelphia De Luxe with eel, salmon and smoked cheese",
            description:
              "Each roll comes with 1 soy sauce for free, as well as 10 g of ginger and 3 g of wasabi, which are packaged together.",
            price: 8.5,
            image:
              "https://api.getorder.biz/product/45123/image/109/700/700/5971216927823.webp",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Roll Philadelphia De Luxe with Ebi shrimp",
            description:
              "Each roll comes with 1 soy sauce for free, as well as 10 g of ginger and 3 g of wasabi, which are packaged together.",
            price: 7.25,
            image:
              "https://api.getorder.biz/product/45351/image/109/700/700/5605231689571.webp",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Roll Philadelphia De Luxe with fresh salmon",
            description:
              "Each roll comes with 1 soy sauce for free, as well as 10 g of ginger and 3 g of wasabi, which are packaged together.",
            price: 7.25,
            image:
              "https://api.getorder.biz/product/44701/image/109/700/700/5921898918855.webp",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Roll Philadelphia De Luxe with salmon and mango",
            description:
              "Each roll comes with 1 soy sauce for free, as well as 10 g of ginger and 3 g of wasabi, which are packaged together.",
            price: 7.25,
            image:
              "https://api.getorder.biz/product/44701/image/109/700/700/5921898918855.webp",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Roll Double Fish",
            description:
              "Each roll comes with 1 soy sauce for free, as well as 10 g of ginger and 3 g of wasabi, which are packaged together.",
            price: 7.25,
            image:
              "https://api.getorder.biz/product/44689/image/109/700/700/5716335461229.webp",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Philadelphia with aburi salmon and tuna",
            description:
              "Each roll comes with 1 soy sauce for free, as well as 10 g of ginger and 3 g of wasabi, which are packaged together.",
            price: 7.25,
            image:
              "https://api.getorder.biz/product/44731/image/109/700/700/5173300229053.webp",
            modifiers: "",
            bonus: "",
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
            bonus: "",
          },
          {
            name: "Bowl with salmon and rice",
            description: "",
            price: 5.5,
            image:
              "https://api.getorder.biz/product/45117/image/109/700/700/5352203405140.webp",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Spring roll with salmon sashimi",
            description: "",
            price: 5,
            image:
              "https://api.getorder.biz/product/44764/image/109/700/700/5642205021746.webp",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Spring roll with tuna",
            description: "",
            price: 4.5,
            image:
              "https://api.getorder.biz/product/44765/image/109/700/700/5820205021861.webp",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Spring roll with crab mix and hiyashi",
            description: "",
            price: 3.5,
            image:
              "https://api.getorder.biz/product/44762/image/109/700/700/5815205021362.webp",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Hiyashi seaweed salad with sesame",
            description: "",
            price: 2.25,
            image:
              "https://api.getorder.biz/product/44757/image/109/700/700/5112341668339.webp",
            modifiers: "",
            bonus: "",
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
            bonus: "",
          },
          {
            name: "Pear cake",
            description: "",
            price: 2.5,
            image:
              "https://api.getorder.biz/product/45360/image/109/700/700/5214261854929.webp",
            modifiers: "",
            bonus: "",
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
            bonus: "",
          },
          {
            name: "Sushi salmon",
            description: "",
            price: 1,
            image:
              "https://api.getorder.biz/product/44825/image/109/700/700/5231342554820.webp",
            modifiers: "",
            bonus: "",
          },
        ],
      },
    ],
  },
  {
    id: 32211,
    slug: "sushi-master-kie",
    brandName: "Sushi Master",
    headerBackgroundImage:
      "https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/e_blur:400/Stores/r2gtlvid07hxkcf9n4mr",
    deliveryTime1: 25,
    deliveryTime2: 35,
    deliveryPrice: 1,
    rate: 97,
    message: "",
    menu: [
      {
        category: {
          categoryName: "Top sellers",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/mmp6jrwkwvpmhaaqrj5f",
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
            modifiers: "",
            bonus: "",
          },
          {
            name: "Chicken breast su-vid with vegetables",
            description:
              "Chicken breast su-vid baked zucchini and baby carrots 170/180g",
            price: 5,
            image:
              "https://api.getorder.biz/product/44340/image/44/700/700/2000040459.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Chicken chop and mashed potatoes",
            description:
              "Fried chicken chop. Served with mashed potatoes and butter 100/160g",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/jfxxpnxnspq61u27c1ki",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Caesar salad with chicken",
            description:
              "Chicken breast, bacon, cherry tomatoes, lettuce, Parmesan cheese, cream, mustard, sunflower oil, ground black pepper, salt, soy sauce, wheat bread, sugar, garlic 180g",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/uxjkyokjtoq8961ty9z2",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Solyanka",
            description:
              "Aromatic soup with smoked meats, olives and lemon. Served with sour cream, lemon, capers and sourdough bread 300/15/30g",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/anz7xlfg1tqrberxo2mh",
            bonus: "",
            modifiers: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Combo menu",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/uhhepmodv6bmtmegza8t",
          bonus: "-20%",
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
            bonus: "-20%",
          },
          {
            name: "Pate with caramelized apple",
            description:
              "Chicken liver pate, caramelized apple. Served with bread. 180/60g",
            price: 2,
            image:
              "https://api.getorder.biz/product/26216/image/44/700/700/2000040204.webp",
            modifiers: "",
            bonus: "-20%",
          },
          {
            name: "Baked vegetables",
            description: "Baked eggplant, zucchini and bell pepper 180g",
            price: 4.5,
            image:
              "https://api.getorder.biz/product/38711/image/44/700/700/2000040346.webp",
            modifiers: "",
            bonus: "-20%",
          },
        ],
      },
      {
        category: {
          categoryName: "Breakfasts",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Collections/pgp02jcatqufodyin0en",
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
            bonus: "",
            modifiers: "",
          },
          {
            name: "Omelet with chicken",
            description:
              "Chicken eggs, spices, mayonnaise, butter, salad mix, grilled chicken fillet, grilled eggplant and tomatoes, baked baby carrots. Served with sourdough bread 270g",
            price: 3,
            image:
              "https://api.getorder.biz/product/38781/image/44/700/700/2000040339.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Scrambled eggs with chicken",
            description:
              "Chicken eggs (2 pcs.), spices, grilled chicken fillet, grilled eggplant and tomatoes, mixed salad. Served with sourdough bread 215g",
            price: 3,
            image:
              "https://api.getorder.biz/product/38790/image/44/700/700/2000040336.webp",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Pancakes with strawberry jam",
            description:
              "Pancakes, strawberry jam, vanilla sauce, powdered sugar, strawberries. 250 g",
            price: 2,
            image:
              "https://api.getorder.biz/product/38784/image/44/700/700/2000040335.webp",
            bonus: "",
            modifiers: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Networks",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Collections/fodcdgpzox0pitfosxqn",
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
            bonus: "",
          },
          {
            name: "Set Borscht, Kiev cutlet with mashed potatoes and Olivier salad",
            description:
              "Kiev cutlet, 140g & Mashed potatoes, 160g & Olivier salad with chicken, 180g & Borscht with sour cream, 330/30g. Total: 840g",
            price: 8,
            image:
              "https://api.getorder.biz/product/38767/image/44/700/700/2000040370.webp",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Set Fried hake in batter, mashed potatoes and cabbage and cucumber salad",
            description:
              "Fried hake in batter, 130g & Mashed potatoes, 160g & Cabbage and cucumber salad, 180g. Total: 470g",
            price: 5,
            image:
              "https://api.getorder.biz/product/38774/image/44/700/700/2000040389.webp",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Borscht set, dumplings with potatoes and mushrooms and cabbage salad",
            description:
              "Borscht with sour cream, 330/30g & Dumplings with potatoes and mushrooms, 200/30g & Cabbage and cucumber salad, 180g. Total: 770g",
            price: 5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/kjxk4dhqw6nt7nvxlkzf",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Combo menu",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Collections/gnucnonxotk6znqzbwhe",
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
            bonus: "",
          },
          {
            name: "Turkey fricassee with buckwheat and chicken broth",
            description:
              "Turkey fricassee in cream sauce, 160g & Buckwheat porridge, 180g & Chicken broth with egg and homemade noodles, 300/30/10g. Total: 680g",
            price: 5,
            image:
              "https://api.getorder.biz/product/38738/image/44/700/700/2000040368.webp",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Pea soup and potato dumplings with mushrooms and egg",
            description:
              "Pea soup with smoked meats and crackers, 300/30g & Potato dumplings with mushrooms and egg, 200/30g. Total: 560g",
            price: 5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/oecwt7z2poczgsnmojag",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Turkey fricassee with buckwheat and chicken broth",
            description:
              "Turkey fricassee in cream sauce, 160g & Buckwheat porridge, 180g & Chicken broth with egg and homemade noodles, 300/30/10g. Total: 680g",
            price: 5,
            image:
              "https://api.getorder.biz/product/38738/image/44/700/700/2000040368.webp",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "First courses",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Collections/x8cbunznhdt4da4txtqy",
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
            bonus: "",
          },
          {
            name: "Mushroom cream soup",
            description:
              "Mushroom cream soup, cream, spices. Served with sourdough bread 300/30g",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/tgxtcrkomzoroo1jqlwe",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Chicken broth with egg and homemade noodles",
            description:
              "Chicken meat, chicken eggs, homemade egg noodles, carrots, onions, parsley, water, celery, salt, ground black pepper, bay leaf. Served with sourdough bread 300/30/10g",
            price: 2.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ln7npvmvtmrzsuydlbhl",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Pancakes and cheesecakes",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/image_preview_card/arrow.svg",
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
            bonus: "",
          },
          {
            name: "Pancake with cheese and raisins, 1pc.",
            description:
              "Pancake based on wheat flour and milk, filled with homemade cheese and raisins 85/30g",
            price: 2,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ztkigcvechyhgl9pkcny",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Pancake with chicken and mushrooms, 1pc.",
            description:
              "Pancake based on wheat flour and milk, filling with chicken fillet, mushrooms and cream, butter 85/30g",
            price: 2,
            image:
              "https://api.getorder.biz/product/26232/image/44/700/700/2000040207.webp",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Dumplings and dumplings",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/kyonyp896pmj3wjryuzz",
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
            bonus: "",
          },
          {
            name: "Dumplings with cherries",
            description:
              "Dumplings with cherry filling, sugar, butter. Served with sour cream 200/30g",
            price: 2,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/kyonyp896pmj3wjryuzz",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Dumplings with potatoes",
            description:
              "Dumplings stuffed with potatoes, onions, spices, butter. Served with sour cream 200/30g",
            price: 2,
            image:
              "https://api.getorder.biz/product/38705/image/44/700/700/2000040289.webp",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Desserts",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Collections/dq6jzvuz67nhjiuzgwvu",
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
            bonus: "",
          },
          {
            name: "Napoleon cake",
            description: "Sugar, egg, flour, butter, milk, puff pastry",
            price: 2,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/mfux6nm7g2kzjs4wud4s",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Ant cake",
            description:
              "Flour, walnuts, butter, condensed milk, sour cream, sugar, chicken egg, powdered sugar, chocolate glaze",
            price: 2,
            image:
              "https://api.getorder.biz/product/18369/image/44/700/700/2000039264.webp",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Waffle cake",
            description: "Waffle cakes, condensed milk, butter",
            price: 1.5,
            image:
              "https://api.getorder.biz/product/18366/image/44/700/700/2000037890.webp",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Mr. cherry cat",
            description: "Cherry, cream, milk, cherry juice, sugar, gelatin",
            price: 1.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/xjjrw9w6z31s8eae98t9",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Drinks",
          categoryImage:
            "https://api.getorder.biz/product/18418/image/44/700/700/2000038729.webp",
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
            bonus: "",
          },
          {
            name: "Currant juice",
            description: "250ml",
            price: 0.7,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/gfpgd5yfpxgsmvyqc9hs",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Bonaqua water (sparkling)",
            description: "500ml",
            price: 0.7,
            image:
              "https://api.getorder.biz/product/50408/image/44/700/700/2000040801.webp",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Bonaqua water (still)",
            description: "500ml",
            price: 0.7,
            image:
              "https://api.getorder.biz/product/50409/image/44/700/700/2000040804.webp",
            modifiers: "",
            bonus: "",
          },
        ],
      },
    ],
  },
  {
    id: 35591,
    slug: "this-is-pivbar-kie",
    brandName: "Sushi Master",
    headerBackgroundImage:
      "https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/e_blur:400/Stores/fii2q2stdieccwgmixaf",
    deliveryTime1: 35,
    deliveryTime2: 45,
    deliveryPrice: 1,
    rate: 100,
    message: "",
    menu: [
      {
        category: {
          categoryName: "Top sellers",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/tn07jvne327cbire6vrg",
          bonus: "",
        },
        products: [
          {
            name: "Topic L №4 About Burgers and Wings (1240g)",
            description:
              "Two signature Chicago Bulls burgers, Buffalo chicken wings in BBQ sauce (250 g), Country style fries (250 g), Comes with sauces: BBQ, spicy Thai and cheese.",
            price: 18,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/tbnw8jv6nqhl8lyhk7yo",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Tom Yam frying pan (470g)",
            description:
              "Spicy or medium spicy (at the guest's choice) seafood pan in spicy Tom Yam sauce with white wine. Carry with dried slices of ciabatta.",
            price: 9,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/d1yjolvbyjruwlrgjpfw",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Burger with turkey (350g)",
            description:
              "Juicy cutlet of turkey fillet and butter, Iceberg lettuce, yogurt sauce with a slight taste of garlic and dill, sweet mustard, cheddar cheese, fresh tomato and onion jam with chili peppers; rustic potatoes with Kansas sauce.",
            price: 8,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/dddjgnfjkf1xzorwxjs9",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Double Burger - Trouble (360g)",
            description:
              "Burger with 2 pork and beef cutlets, fresh cucumbers, tomatoes, iceberg lettuce, cheese and anchovy sauce, Aioli and spicy American mustard.",
            price: 7,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/tn07jvne327cbire6vrg",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Shrimp and avocado salad (225g)",
            description:
              "Fresh mixed greens with caramelized tiger prawns in spicy Pho sauce, avocado, cherry tomatoes and mango dressing.",
            price: 7,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/jwsgxbxzbf1u3ufzftu4",
            bonus: "",
            modifiers: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Main dishes",
          categoryImage: "",
          bonus: "",
        },
        products: [
          {
            name: "Bazar-Mangal Aga (1000/150/50g)",
            description:
              "Meat board, which includes: chicken sausages, Italian sausages, pork neck, chicken skewers, grilled potatoes. Comes with three sauces: homemade adjika, barbecue and garlic sauce.",
            price: 23,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/p74fyhzr7sftcctqh3nb",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Great Rozkovbas (720/235/80g)",
            description:
              "Assorted four types of sausages: Chorizo, Bavarian sausages, 3-D sausages, Frankfurt sausages with fried potato slices and fresh vegetables. Served with tomato-pomegranate and mustard sauces",
            price: 17,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ly1fwtzu8a9rzn8bxlzg",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Duck You Very Much (145/70/75/30g)",
            description:
              "Duck leg with a crispy crust. Comes with warm steamed dumplings and sauerkraut.",
            price: 7,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/gz41hnsm9kbvripmolen",
            modifiers: "",
            bonus: "",
          },
          {
            name: "American sausages with two mustards (180/100/50g)",
            description:
              "Baked pork and beef sausages with two types of mustard, delivered with stewed cabbage with bacon.",
            price: 7,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/utr2bmjra8jcr21vgyaq",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Frying pan Three meats (300g)",
            description:
              "Pork, chicken, veal, french fries and mozzarella fried in pepper sauce.",
            price: 8,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/uyuiqnrvey9friil2csg",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "This is a burger",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Collections/pgp02jcatqufodyin0en",
          bonus: "-20%",
        },
        products: [
          {
            name: "Burger with turkey (350g)",
            description:
              "Juicy cutlet of turkey fillet and butter, Iceberg lettuce, yogurt sauce with a slight taste of garlic and dill, sweet mustard, cheddar cheese, fresh tomato and onion jam with chili peppers; rustic potatoes with Kansas sauce.",
            price: 8,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/dddjgnfjkf1xzorwxjs9",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Double Burger - Trouble (360g)",
            description:
              "Burger with 2 pork and beef cutlets, fresh cucumbers, tomatoes, iceberg lettuce, cheese and anchovy sauce, Aioli and spicy American mustard.",
            price: 7,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/tn07jvne327cbire6vrg",
            bonus: "",
            modifiers: "",
          },
          {
            name: "Chicago Bulls Burger (270g)",
            description: "Branded burger cooked on the grill.",
            price: 5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/yuvinpxndvlzfe5re8av",
            bonus: "",
            modifiers: "",
          },
        ],
      },
      {
        category: {
          categoryName: "This is a salad",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Collections/fodcdgpzox0pitfosxqn",
          bonus: "",
        },
        products: [
          {
            name: "Shrimp and avocado salad (225g)",
            description:
              "Fresh mixed greens with caramelized tiger prawns in spicy Pho sauce, avocado, cherry tomatoes and mango dressing.",
            price: 7,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/jwsgxbxzbf1u3ufzftu4",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Caesar with shrimp (250g)",
            description:
              "Sea Caesar with tiger prawns, romaine, egg and grilled croutons. Serve with anchovy sauce.",
            price: 6.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/yp3u3wzsj7ybyrauiciy",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Caesar with chicken (250g)",
            description:
              "A real Caesar without extra decorations. Just romaine, chicken fillet, grilled croutons and anchovy sauce.",
            price: 5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/yqxkzjvidqww62b5hzx5",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "This is soup",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Collections/gnucnonxotk6znqzbwhe",
          bonus: "",
        },
        products: [
          {
            name: "Curignon broth (250/60g)",
            description:
              "Aromatic broth, cooked from poultry, with the addition of branded noodles.",
            price: 3,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/jgeqrtwq1fvxag8nfneb",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Our dear borscht (250/70/20g)",
            description: "Ukrainian borsch with donuts.",
            price: 3.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/qqggvagyuvzyfo8fypov",
            modifiers: "",
            bonus: "",
          },
          {
            name: "White bread (4pcs/100g)",
            description: "4 pcs",
            price: 0.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/2378741704",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Black bread (4pcs/100g)",
            description: "4 pcs",
            price: 0.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/2378741731",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "This is deied meat/diried fish",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Collections/x8cbunznhdt4da4txtqy",
          bonus: "",
        },
        products: [
          {
            name: "Bulk of dried meat (200g)",
            description: "Brezaola, veal, beef scout, hunting.",
            price: 10,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/jxhiarsoy9carrbcik4b",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Salmon (50g)",
            description: "Brezaola, veal, beef scout, hunting.",
            price: 7,
            image: "Self-dried salmon.",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Smoked Bull (50g)",
            description:
              "Smoked and dried beef tenderloin with the best texture in town.",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/oju4ohlbfakbqy9akrlf",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Catfish (50g)",
            description:
              "Dried catfish fillet with chili flakes, Furikake spice and Molden salt.",
            price: 2.5,
            bonus: "",
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/m6x8kync9yfwd5kx9cpm",
            modifiers: "",
          },
          {
            name: "Cologne Bull (30g)",
            description: "Beef Scout. Homemade veal with fragrant herbs.",
            price: 3,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/vppycgrsvrr9otd1ibps",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "This is for beer ",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/nlmvecjjvjnd75puarp6",
          bonus: "",
        },
        products: [
          {
            name: "Atlantic shrimps in spicy chili sauce (200g)",
            description: "200g",
            price: 7.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/gj18guv82pxzbzrxxotq",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Buffalo wing (200/80/50g)",
            description:
              "Chicken wings baked in barbecue sauce, with vegetable sticks and cheese sauce.",
            price: 5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/nlmvecjjvjnd75puarp6",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Garlic croutons (100g)",
            description:
              "Toasts from natural Borodino bread made from custard dough with malt, flavored after frying in oil with dill and salt.",
            price: 2,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/e3hqacirbsttcmzhhlnh",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "This is a taste",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/kyonyp896pmj3wjryuzz",
          bonus: "",
        },
        products: [
          {
            name: "Dumplings with beef and pork",
            description: "Classic cheesecake with orange jam.",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/wlevfmxy01qtjnmvjmo1",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Waffle cake (110g)",
            description:
              "Proven pleasure from boiled condensed milk and crispy waffles decorated with almonds.",
            price: 2.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/jx8kow07flgazv9jbxbz",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "Bottle beer",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Collections/dq6jzvuz67nhjiuzgwvu",
          bonus: "",
        },
        products: [
          {
            name: "Varvar Golden Ale (1l)",
            description:
              "Ukrainian craft. Light Belgian spruce in which the dense malty body is balanced by citrus-tropical hop bitterness.",
            price: 7.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/2378741677",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Varvar Milk stout (1l)",
            description:
              "Ukrainian craft. Dark stout. A mixture of oat and rye malts, caramel and well-roasted barley, gives the beer a luxurious chocolate flavor with a slight bitterness.",
            price: 7.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/2378741705",
            modifiers: "",
            bonus: "",
          },
          {
            name: "This is Lager (1l)",
            description:
              "Ukrainian craft. Camp of golden color with pronounced hop bitterness. Based on Ukrainian ingredients.",
            price: 6,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/2378741818",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Lviv Dunkel (1l)",
            description: "Ukraine. Dark filtered camp.",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/uydxwampnmi25bcofjfd",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Lviv White Lion (1l)",
            description: "Ukraine. Bright unfiltered camp.",
            price: 4,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/kbxwyk9cydi3zzwibicd",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Hoegaarden White (1l)",
            description:
              "Belgium. Wheat ale with citrus aroma and pleasant sourness.",
            price: 7.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/tvspyjsxruz0vsirxywd",
            modifiers: "",
            bonus: "",
          },
        ],
      },
      {
        category: {
          categoryName: "This is beverages",
          categoryImage:
            "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/pebyecoogth7acdvxnh3",
          bonus: "",
        },
        products: [
          {
            name: "Compote (1l)",
            description: "1l",
            price: 4.5,
            image:
              "https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/vw2jbwnuutu0nvwpgcqk",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Mango-Orange Lemonade, 250ml",
            description: "250ml",
            price: 2.5,
            image:
              "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/y1wxlyfqapdma30dly5z",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Non-carbonated Morshyn (0.5l)",
            description: "500 ml",
            price: 1.2,
            image:
              "https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/ustvr3rtfhqbvmzusce1",
            modifiers: "",
            bonus: "",
          },
          {
            name: "Morshyn low-carbonated (0.5 l)",
            description: "500 ml",
            price: 1.2,
            image:
              "https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/gnkcpexjxgh419x4lcmy",
            modifiers: "",
            bonus: "",
          },
        ],
      },
    ],
  },
];
