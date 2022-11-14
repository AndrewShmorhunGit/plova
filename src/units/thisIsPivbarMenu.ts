interface thisIsPivbarMenu {
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

export const thisIsPivbarMenu = {
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
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Tom Yam frying pan (470g)",
          description:
            "Spicy or medium spicy (at the guest's choice) seafood pan in spicy Tom Yam sauce with white wine. Carry with dried slices of ciabatta.",
          price: 9,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/d1yjolvbyjruwlrgjpfw",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Burger with turkey (350g)",
          description:
            "Juicy cutlet of turkey fillet and butter, Iceberg lettuce, yogurt sauce with a slight taste of garlic and dill, sweet mustard, cheddar cheese, fresh tomato and onion jam with chili peppers; rustic potatoes with Kansas sauce.",
          price: 8,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/dddjgnfjkf1xzorwxjs9",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Double Burger - Trouble (360g)",
          description:
            "Burger with 2 pork and beef cutlets, fresh cucumbers, tomatoes, iceberg lettuce, cheese and anchovy sauce, Aioli and spicy American mustard.",
          price: 7,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/tn07jvne327cbire6vrg",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Shrimp and avocado salad (225g)",
          description:
            "Fresh mixed greens with caramelized tiger prawns in spicy Pho sauce, avocado, cherry tomatoes and mango dressing.",
          price: 7,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/jwsgxbxzbf1u3ufzftu4",
          bonuses: "",
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
          bonuses: "",
        },
        {
          name: "Great Rozkovbas (720/235/80g)",
          description:
            "Assorted four types of sausages: Chorizo, Bavarian sausages, 3-D sausages, Frankfurt sausages with fried potato slices and fresh vegetables. Served with tomato-pomegranate and mustard sauces",
          price: 17,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ly1fwtzu8a9rzn8bxlzg",
          modifiers: "",
          bonuses: "",
        },
        {
          name: "Duck You Very Much (145/70/75/30g)",
          description:
            "Duck leg with a crispy crust. Comes with warm steamed dumplings and sauerkraut.",
          price: 7,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/gz41hnsm9kbvripmolen",
          modifiers: "",
          bonuses: "",
        },
        {
          name: "American sausages with two mustards (180/100/50g)",
          description:
            "Baked pork and beef sausages with two types of mustard, delivered with stewed cabbage with bacon.",
          price: 7,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/utr2bmjra8jcr21vgyaq",
          modifiers: "",
          bonuses: "",
        },
        {
          name: "Frying pan Three meats (300g)",
          description:
            "Pork, chicken, veal, french fries and mozzarella fried in pepper sauce.",
          price: 8,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/uyuiqnrvey9friil2csg",
          modifiers: "",
          bonuses: "",
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
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Double Burger - Trouble (360g)",
          description:
            "Burger with 2 pork and beef cutlets, fresh cucumbers, tomatoes, iceberg lettuce, cheese and anchovy sauce, Aioli and spicy American mustard.",
          price: 7,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/tn07jvne327cbire6vrg",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Chicago Bulls Burger (270g)",
          description: "Branded burger cooked on the grill.",
          price: 5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/yuvinpxndvlzfe5re8av",
          bonuses: "",
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
        },
        {
          name: "Caesar with shrimp (250g)",
          description:
            "Sea Caesar with tiger prawns, romaine, egg and grilled croutons. Serve with anchovy sauce.",
          price: 6.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/yp3u3wzsj7ybyrauiciy",
          modifiers: "",
        },
        {
          name: "Caesar with chicken (250g)",
          description:
            "A real Caesar without extra decorations. Just romaine, chicken fillet, grilled croutons and anchovy sauce.",
          price: 5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/yqxkzjvidqww62b5hzx5",
          modifiers: "",
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
        },
        {
          name: "Our dear borscht (250/70/20g)",
          description: "Ukrainian borsch with donuts.",
          price: 3.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/qqggvagyuvzyfo8fypov",
          modifiers: "",
        },
        {
          name: "White bread (4pcs/100g)",
          description: "4 pcs",
          price: 0.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/2378741704",
          modifiers: "",
        },
        {
          name: "Black bread (4pcs/100g)",
          description: "4 pcs",
          price: 0.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/2378741731",
          modifiers: "",
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
        },
        {
          name: "Salmon (50g)",
          description: "Brezaola, veal, beef scout, hunting.",
          price: 7,
          image: "Self-dried salmon.",
          modifiers: "",
        },
        {
          name: "Smoked Bull (50g)",
          description:
            "Smoked and dried beef tenderloin with the best texture in town.",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/oju4ohlbfakbqy9akrlf",
          modifiers: "",
        },
        {
          name: "Catfish (50g)",
          description:
            "Dried catfish fillet with chili flakes, Furikake spice and Molden salt.",
          price: 2.5,
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
        },
        {
          name: "Buffalo wing (200/80/50g)",
          description:
            "Chicken wings baked in barbecue sauce, with vegetable sticks and cheese sauce.",
          price: 5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/nlmvecjjvjnd75puarp6",
          modifiers: "",
        },
        {
          name: "Garlic croutons (100g)",
          description:
            "Toasts from natural Borodino bread made from custard dough with malt, flavored after frying in oil with dill and salt.",
          price: 2,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/e3hqacirbsttcmzhhlnh",
          modifiers: "",
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
        },
        {
          name: "Waffle cake (110g)",
          description:
            "Proven pleasure from boiled condensed milk and crispy waffles decorated with almonds.",
          price: 2.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/jx8kow07flgazv9jbxbz",
          modifiers: "",
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
        },
        {
          name: "Varvar Milk stout (1l)",
          description:
            "Ukrainian craft. Dark stout. A mixture of oat and rye malts, caramel and well-roasted barley, gives the beer a luxurious chocolate flavor with a slight bitterness.",
          price: 7.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/2378741705",
          modifiers: "",
        },
        {
          name: "This is Lager (1l)",
          description:
            "Ukrainian craft. Camp of golden color with pronounced hop bitterness. Based on Ukrainian ingredients.",
          price: 6,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/2378741818",
          modifiers: "",
        },
        {
          name: "Lviv Dunkel (1l)",
          description: "Ukraine. Dark filtered camp.",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/uydxwampnmi25bcofjfd",
          modifiers: "",
        },
        {
          name: "Lviv White Lion (1l)",
          description: "Ukraine. Bright unfiltered camp.",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/kbxwyk9cydi3zzwibicd",
          modifiers: "",
        },
        {
          name: "Hoegaarden White (1l)",
          description:
            "Belgium. Wheat ale with citrus aroma and pleasant sourness.",
          price: 7.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/tvspyjsxruz0vsirxywd",
          modifiers: "",
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
        },
        {
          name: "Mango-Orange Lemonade, 250ml",
          description: "250ml",
          price: 2.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/y1wxlyfqapdma30dly5z",
          modifiers: "",
        },
        {
          name: "Non-carbonated Morshyn (0.5l)",
          description: "500 ml",
          price: 1.2,
          image:
            "https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/ustvr3rtfhqbvmzusce1",
          modifiers: "",
        },
        {
          name: "Morshyn low-carbonated (0.5 l)",
          description: "500 ml",
          price: 1.2,
          image:
            "https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/gnkcpexjxgh419x4lcmy",
          modifiers: "",
        },
      ],
    },
  ],
};
