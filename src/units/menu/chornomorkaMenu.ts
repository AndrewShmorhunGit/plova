interface chornomorkaMenu {
  brandName: string;
  headerBackgroundImage: string;
  deliveryTime1: number;
  deliveryTime2: number;
  deliveryPrice: number;
  rate: number;
  message: string;
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

export const chornomorkaMenu = {
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
        },
        {
          name: "Risotto with seafood (300g)",
          description:
            "Arborio rice with the addition of Atlantic squid fried in butter with thyme, garlic and rosemary, mussel meat and baby octopus. Garnish with fried tiger prawns and grated Parmesan cheese.",
          price: 6.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/uwdcegnubecatfbu7efr",
          modifiers: "",
        },
        {
          name: "Spaghetti with seafood (350g)",
          description:
            "Spaghetti al dente, stewed in butter and wine sauce, with chopped onions, garlic, chili peppers, capers and seafood: mussels, Atlantic squid, baby octopus and shrimp. Sprinkle with grated Parmesan cheese.",
          price: 6,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/zfxev34mqwyjmen3zol9g",
          modifiers: "",
        },
        {
          name: "Salmon and pike perch puree fish cutlets (130/150 / 75g)",
          description:
            "Two fried minced meatballs based on salmon and pike perch fillets. Served with mashed potatoes and barrel tomatoes.",
          price: 6,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/dvxbpwsebsngrxmzzwss",
          modifiers: "",
        },
        {
          name: "Fish cutlets from perch and shrimp from puree (130/150 / 75g)",
          description:
            "Two fried minced meatballs based on shrimp fillet and minced krill. Served with mashed potatoes and barrel tomatoes.",
          price: 6,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/zqjpio4wls89djfrhewf",
          modifiers: "",
        },
        {
          name: "'Olivier' tiger prawns (250g)",
          description:
            "Boiled potatoes, egg, carrot, add green apple, peas and base - tiger prawn. Season with homemade mayonnaise.",
          price: 6,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/djvu6sciheahlz2dbg7e",
          modifiers: "",
        },
        {
          name: "Provencal salad with red tuna (350g)",
          description:
            "The salad mix with cherry tomatoes, fried potato pieces, boiled egg, olives and lightly fried tuna slices is topped with Nisuaz sauce (anchovies, oil, soy sauce).",
          price: 6,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/iwqh0g3iakvnxojglpks",
          modifiers: "",
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
        },
        {
          name: "Tuna tartare with avocado puree (190g)",
          description:
            "Fresh tuna fillet with olive oil sauce. Served with avocado puree, arugula leaves, balsamic sauce and croutons.",
          price: 8,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/uo8qjbsnq4hifkhju5fq",
          modifiers: "",
        },
        {
          name: "Assorted bruschettas (with salmon, anchovies, herring, sprats) (350g)",
          description:
            "Lightly salted herring with mustard sauce and onions & Slightly salted anchovies with mustard sauce and green onions & Sprats (herring) with spicy tomato sauce, pickle and boiled egg & Gravlax salmon with Caesar sauce, arugula and capers",
          price: 6,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/ud0xvxyss4xbbbihbdjc",
          modifiers: "",
        },
        {
          name: "Forshmak Odessa-style herring matias (100/50 / 25g)",
          description:
            "Matthias herring fillet, with the addition of green apple and butter. Served with green onions, butter, lemon and light baguette croutons.",
          price: 3,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/yralwggk1qdaizf14svg",
          modifiers: "",
        },
        {
          name: "Weak salt tulle with boiled potatoes (70 / 100g)",
          description:
            "Low-salt tulle is served with boiled potatoes, seasoned with butter, and sprinkled with green onions.",
          price: 3,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/in1e0wqtisiyyuyngh3n",
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
        },
        {
          name: "'Olivier' with salmon (250g)",
          description:
            "Boiled potatoes, egg, carrots, add green apple, peas and base - lightly salted salmon. Season with homemade mayonnaise.",
          price: 5,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/yfa9g1wzq0pfxzyo6nj5",
          modifiers: "",
        },
        {
          name: "Salad with tomatoes and cheese of our goats (80g / 150g / 30g)",
          description:
            "Goat cheese is placed on tomato pieces, seasoned with olive oil and basil sauce. Decorated with fresh basil leaves.",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/npxa0lohcpdf0p6r4edz",
          modifiers: "",
        },
        {
          name: "Provencal salad with red tuna (350g)",
          description:
            "The salad mix with cherry tomatoes, fried potato pieces, boiled egg, olives and lightly fried tuna slices is topped with Nisuaz sauce (anchovies, oil, soy sauce).",
          price: 5,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/iwqh0g3iakvnxojglpks",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Hot meals",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/qovnpn4x3vpxdxnoelmo",
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
        },
        {
          name: "Risotto with seafood (300g)",
          description:
            "Arborio rice with the addition of Atlantic squid fried in butter with thyme, garlic and rosemary, mussel meat and baby octopus. Garnish with fried tiger prawns and grated Parmesan cheese.",
          price: 6,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/uwdcegnubecatfbu7efr",
          modifiers: "",
        },
        {
          name: "Spaghetti with seafood (350g)",
          description:
            "Spaghetti al dente, stewed in butter and wine sauce, with chopped onions, garlic, chili peppers, capers and seafood: mussels, Atlantic squid, baby octopus and shrimp. Sprinkle with grated Parmesan cheese.",
          price: 0.4,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/zfxev34mqwyjmen3zol9",
          modifiers: "",
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
        },
        {
          name: "A mixture of wild rice and basmati (200g)",
          description:
            "Boiled wild rice and basmati with spices, garlic and greens.",
          price: 1.2,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/bbiiidj6aiviyxq3aabn",
          modifiers: "",
        },
        {
          name: "Fried potatoes (200g)",
          description: "Fried potatoes with garlic and greens.",
          price: 1.2,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/ofkdysncfm9rqucb6mqm",
          modifiers: "",
        },
        {
          name: "Puree (200g)",
          description:
            "Boiled potatoes with butter are mashed to a puree with herbs.",
          price: 1,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/hgabblip2ldbedsysrhf",
          modifiers: "",
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
        },
        {
          name: "Black Sea soup (350 g)",
          description:
            "Soup based on fish broth, with the addition of vegetables (potatoes, carrots, onions) and assorted fish fillets. The soup is topped with garlic, fresh herbs and butter.",
          price: 2,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/wvhiafzaomxuyigggnlu",
          modifiers: "",
        },
        {
          name: "Fried potatoes (200g)",
          description: "Fried potatoes with garlic and greens.",
          price: 1.2,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/ofkdysncfm9rqucb6mqm",
          modifiers: "",
        },
        {
          name: "Puree (200g)",
          description:
            "Boiled potatoes with butter are mashed to a puree with herbs.",
          price: 1,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/hgabblip2ldbedsysrhf",
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
        },
        {
          name: "ketchup sauce",
          description: "",
          price: 0.4,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/8.%20Ketchup.png",
          modifiers: "",
        },
        {
          name: "mustard sauce",
          description: "",
          price: 0.4,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/qtbp79l7myyxns1circf",
          modifiers: "",
        },
        {
          name: "Mango chili sauce",
          description: "",
          price: 0.4,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/czrqs1br9okmmvzngm4b",
          modifiers: "",
        },
        {
          name: "Cheese sauce",
          description: "",
          price: 0.4,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/iptg2cgyzkl04gjrszeb",
          modifiers: "",
        },
        {
          name: "Barbecue sauce",
          description: "",
          price: 0.4,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/d7n5u91nm4pcb1xr8hgt",
          modifiers: "",
        },
        {
          name: "Sweet and sour sauce",
          description: "",
          price: 0.4,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/rceplgybxfaybcfyoo95",
          modifiers: "",
        },
      ],
    },
  ],
};
