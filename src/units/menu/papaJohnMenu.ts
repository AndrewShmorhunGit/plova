interface papaJohnMenu {
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

export const papaJohnMenu = {
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
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Pizza 5 cheeses",
          description:
            "Alfredo sauce, mozzarella cheese, cheddar cheese, bergader cheese, feta cheese, parmesan cheese, almond flakes.",
          price: 4.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ww24z86cqeuzoev4vtny",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Pizza Americanoa",
          description:
            "Lush dough, Papa John sauce, Cheddar cheese, Mozzarella cheese, pepperoni, smoked chicken balyk, hunting sausages, corn, red onion, green onion, serve BBQ sauce to the sides.",
          price: 4.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/rl23a4gpxgl3x8xaelyv",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Bavarian pizza",
          description:
            "Barbecue sauce, mozzarella cheese, pepperoni sausage, hunting sausages, champignon mushrooms, red onions, mustard and honey sauce.",
          price: 4.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/nebjdblb0bjj8czb5pnj",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Carbonara Pizza",
          description:
            "Alfredo sauce, cheddar cheese, mozzarella cheese, ham, mushrooms, bacon, green onions.",
          price: 4.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/mebovypqi0efppvmi3nd",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Meat pizza with Dorbl cheese",
          description:
            "Papa John's sauce, mozzarella cheese, ham, pepperoni sausage, smoked chicken balyk, mushrooms, Dorblyu cheese, arugula.",
          price: 4.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/shepyfxsjqmkvhg3scyn",
          bonuses: "",
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
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Pizza 5 cheeses",
          description:
            "Alfredo sauce, mozzarella cheese, cheddar cheese, bergader cheese, feta cheese, parmesan cheese, almond flakes.",
          price: 4.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ww24z86cqeuzoev4vtny",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Pizza Americanoa",
          description:
            "Lush dough, Papa John sauce, Cheddar cheese, Mozzarella cheese, pepperoni, smoked chicken balyk, hunting sausages, corn, red onion, green onion, serve BBQ sauce to the sides.",
          price: 4.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/rl23a4gpxgl3x8xaelyv",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Bavarian pizza",
          description:
            "Barbecue sauce, mozzarella cheese, pepperoni sausage, hunting sausages, champignon mushrooms, red onions, mustard and honey sauce.",
          price: 4.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/nebjdblb0bjj8czb5pnj",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Carbonara Pizza",
          description:
            "Alfredo sauce, cheddar cheese, mozzarella cheese, ham, mushrooms, bacon, green onions.",
          price: 4.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/mebovypqi0efppvmi3nd",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Meat pizza with Dorbl cheese",
          description:
            "Papa John's sauce, mozzarella cheese, ham, pepperoni sausage, smoked chicken balyk, mushrooms, Dorblyu cheese, arugula.",
          price: 4.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/shepyfxsjqmkvhg3scyn",
          bonuses: "",
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
          bonuses: "",
        },
        {
          name: "Americano pizza and BBQ sauce to the sides (620/50g)",
          description:
            "Lush dough, Papa John sauce, Cheddar cheese, Mozzarella cheese, pepperoni, smoked chicken balyk, hunting sausages, corn, red onion, green onion, serve BBQ sauce to the sides.",
          price: 8.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/lfranue3t23vgkoomhzq",
          modifiers: "",
          bonuses: "",
        },
        {
          name: "Pizza 5 cheeses and Dor Blue sauce to the sides (570/50g)",
          description:
            "Lush dough, Alfredo sauce, Cheddar cheese, mozzarella cheese, ham, mushrooms, bacon, green onions, serve cheese sauce Dor blue to the sides.",
          price: 8.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/hscty21gc2pmsxmjgpcy",
          modifiers: "",
          bonuses: "",
        },
        {
          name: "Papa John's pizza and honey-mustard sauce for boots (630/50g)",
          description:
            "Lush dough, Papa John sauce, Mozzarella cheese, pepperoni, smoked chicken balyk, hunting sausages, bacon, sun-dried tomatoes, olives, chili peppers, arugula, Parmesan cheese, serve mustard-honey sauce to the sides.",
          price: 8.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/zw3vbeehh6ooilmostsp",
          modifiers: "",
          bonuses: "",
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
          bonuses: "",
        },
        {
          name: "Set #2 (820g)",
          description: "Mini pizzas: Bavarian, Carbonara, Americano.",
          price: 8,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/uqtscapjpdl8klgzzjxo",
          modifiers: "",
          bonuses: "",
        },
        {
          name: "Set #3 (840g)",
          description: "Mini pizzas: 5 cheeses, Hawaiian, Bavarian.",
          price: 8,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ymkigmvfjkksp79n0o4b",
          modifiers: "",
          bonuses: "",
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
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Lunch #2 (250/250/170g)",
          description:
            "Chicken broth, Hawaiian mini pizza, country style potatoes.",
          price: 5.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/dtualbbm3bt48oe48zns",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Lunch #3 (250/270/100/30g)",
          description:
            "Chicken broth, mini Americano pizza, small chicken nuggets.",
          price: 5.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/eim0zxmu0qrlb2qprfis",
          bonuses: "",
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
        },
        {
          name: "Cheese pieces with cranberry sauce",
          description: "Hard cheese in crispy breadcrumbs, cranberry sauce.",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/febixg3dfnktqroa3a7o",
          modifiers: "",
        },
        {
          name: "Chicken nuggets",
          description:
            "Juicy chicken fillet in crispy breadcrumbs, mustard-honey sauce.",
          price: 4.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/rs1pwezpaykspqa2ebkr",
          modifiers: "",
        },
        {
          name: "Hash brown with bacon and sour cream",
          description: "Potato pancakes, bacon, sour cream.",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/gbhde2nl9s2sgnug3uos",
          modifiers: "",
        },
        {
          name: "Gedza dumplings with duck",
          description: "Crispy dumplings with duck meat, Gede sauce.",
          price: 4.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/wwr4ustyqwaa6t1ihhxr",
          modifiers: "",
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
        },
        {
          name: "Chicken broth (250g)",
          description:
            "Hot broth with smoked chicken balyk, noodles, egg, herbs.",
          price: 2.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/udyqvtuh34kheaqstfdq",
          modifiers: "",
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
        },
        {
          name: "Greek salad (200/30g)",
          description:
            "Salad mix, tomato, bell pepper, cucumber, red onion, olives, feta cheese, olive oil with Provencal herbs.",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ltisloux8pcqfboeuqfe",
          modifiers: "",
        },
        {
          name: "Seaweed salad (100/40g)",
          description: "Seaweed, homodari sauce.",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/cpn0lq2fsa6alvm52nwg",
          modifiers: "",
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
        },
        {
          name: "Shawarma is a classic",
          description:
            "Lavash, Cocktail sauce, grilled chicken, cabbage, carrot, tomato, sour cream sauce, pickled red onion.",
          price: 3,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/kaz7w5sdw07akttaluyq",
          modifiers: "",
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
        },
        {
          name: "Combo set #2 (240/170/30/500g)",
          description:
            "Shawarma with chicken nuggets, peasant potatoes, sauce Cocktail and cola 0.5l",
          price: 6,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/b0kvi4b70ujp72upu0p0",
          modifiers: "",
        },
        {
          name: "Combo set #3 (490/190/30/500g)",
          description:
            "Papa John's pizza medium (30cm), barbecue chicken wings with cheese sauce and cola (0.5l)",
          price: 9,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/yxtu5kang3xu6vmuxvde",
          modifiers: "",
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
        },
        {
          name: "Leffe Brown (330ml)",
          description:
            "Color: Dark. Filtration: Filter pasteurized. Country: Belgium. Strength: 6.5%",
          price: 2.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/jzmscgtgnbqzr5qldgpo",
          modifiers: "",
        },
        {
          name: "Corona Extra (330ml)",
          description:
            "Color: Light. Filtration: Filter pasteurized. Country: Mexico. Strength: 4.5%",
          price: 2.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/fp8ih4y3gs16bk76tuth",
          modifiers: "",
        },
        {
          name: "Beer Stella Artois n/a (330ml)",
          description:
            "Color: Light. Filtration: Filter pasteurized. Country Ukraine. Strength: 0.5%",
          price: 2.3,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/tj2g5ivlzisamstidhbv",
          modifiers: "",
        },
        {
          name: "Stella Artois beer (500ml)",
          description:
            "Color: Light. Filtration: Filter pasteurized. Country Ukraine. Strength: 5.0%",
          price: 2,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/csb20cnchik0lorxwnnr",
          modifiers: "",
        },
        {
          name: "Hoegarden keg (1l)",
          description:
            "Color: Light. Filtration: Unfiltered, pasteurized. Country: Belgium. Strength: 4.9%",
          price: 6,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/pswersyscd63ewhl4swc",
          modifiers: "",
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
        },
        {
          name: "Cheesecakes with sour cream",
          description: "Tender cheesecakes with raisins, sour cream.",
          price: 2.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ylg7ma3bbsip7k0wkdzr",
          modifiers: "",
        },
        {
          name: "Napoleon (150g)",
          description: "Puff pastry cake with custard.",
          price: 3,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/aefonkeqru8fn7oyfore",
          modifiers: "",
        },
        {
          name: "Waffle cake with condensed milk and caramel (120g)",
          description:
            "Waffle cakes, butter, condensed milk, caramel, sugar, cream, salt.",
          price: 2.75,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/xuyg3oop0lb0lmmzr6n8",
          modifiers: "",
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
        },
        {
          name: "Coca-Cola (500ml)",
          description: "Plastic bottle 0.5l",
          price: 1.25,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/tanlkwdek9grhxv7awwn",
          modifiers: "",
        },
        {
          name: "Coca-Cola Zero (500ml)",
          description: "Glass bottle 0.5l",
          price: 1.25,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/e9ddokurvuxg5zztbsjj",
          modifiers: "",
        },
        {
          name: "Schweppes Bitter Lemon (250ml)",
          description: "Glass bottle 0.25l",
          price: 1.25,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ejfkrplflyl8e3qf3bcx",
          modifiers: "",
        },
        {
          name: "Schweppes Indian Tonic (250ml)",
          description: "Glass bottle 0.25l",
          price: 1.25,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/nmkzqd04awzcomvoenlu",
          modifiers: "",
        },
      ],
    },
  ],
};
