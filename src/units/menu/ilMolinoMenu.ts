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
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Polo Con Formaggi",
          description:
            "Chicken fillet, pickled bell peppers, cream, fresh basil, mozzarella and feta cheese. Allergens: cereals, lactose, sesame.",
          price: 8,
          image:
            "https://api.getorder.biz/product/12418/image/29/700/700/c26473dc-a6f9-4e80-bfa4-08d95c238f00.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Il Maceliano",
          description:
            "Grated tomatoes, mozzarella, prosciutto cotto, sausages, salami on your choice - with hot pepper or not. Allergens: cereals, lactose.",
          price: 7.75,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/loxeikxxpgkpffm6niok",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Il Maceliano",
          description:
            "Grated tomatoes, mozzarella, prosciutto cotto, sausages, salami on your choice - with hot pepper or not. Allergens: cereals, lactose.",
          price: 7.75,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/loxeikxxpgkpffm6niok",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Emilia Romagna",
          description:
            "Grated tomatoes, mozzarella, Parma ham, arugula, Parmesan. Allergens: cereals, lactose.",
          price: 7.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/vjcrlcy1necydk0oxtbb",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Bavaria",
          description:
            "Grated tomatoes, mozzarella, hunting and Munich sausages, mustard, fresh mushrooms. Allergens: cereals, lactose, mustard.",
          price: 9,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ofmdpceenvtx9t0bgjt2",
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
          name: "Prosecco frizzante, canti",
          description: "Sparkling white dry wine.",
          price: 10.5,
          image:
            "https://api.getorder.biz/product/12258/image/29/700/700/cbc70c7e-5fa4-4edc-c01d-08d95c238f00.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Chianti gentilesco, bonacchi",
          description: "Red dry wine.",
          price: 7.5,
          image:
            "https://api.getorder.biz/product/12260/image/29/700/700/5213afd5-36ac-43ea-c012-08d95c238f00.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Pinot grigio veneto rose, canti",
          description: "Semi-dry pink wine.",
          price: 7.5,
          image:
            "https://api.getorder.biz/product/12261/image/29/700/700/3781d249-8c4c-4412-c01e-08d95c238f00.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Pinot grigio, cesari",
          description: "White dry wine.",
          price: 7.5,
          image:
            "https://api.getorder.biz/product/12263/image/29/700/700/8b18b101-0e64-4115-c020-08d95c238f00.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Borjomi",
          description: "",
          price: 2,
          image:
            "https://api.getorder.biz/product/12267/image/29/700/700/16dfff4b-8399-4471-bfd4-08d95c238f00.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Lime lemonade",
          description: "",
          price: 2,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/cygk8lpaibk1wwrzm7q3",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Coca Cola",
          description: "",
          price: 1,
          image:
            "https://api.getorder.biz/product/12276/image/29/700/700/90058921-a3f9-430b-c0c8-08d95c238f00.webp",
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
          name: "Salmon",
          description:
            "Salmon, mozzarella, ricotta, parmesan, red caviar, arugula. Allergens: cereals, lactose, fish.",
          price: 9.75,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/oysxnmd1sj5hfieg7fvu",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Polo Con Formaggi",
          description:
            "Chicken fillet, pickled bell peppers, cream, fresh basil, mozzarella and feta cheese. Allergens: cereals, lactose, sesame.",
          price: 8,
          image:
            "https://api.getorder.biz/product/12418/image/29/700/700/c26473dc-a6f9-4e80-bfa4-08d95c238f00.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Sylvia",
          description:
            "Dough of wholemeal flour, grated tomatoes, mozzarella, Parma ham, sun-dried tomatoes, ricotta and basil. Allergens: cereals, lactose.",
          price: 8,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/s5blazbtc8xplsyvonzt",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Tuscany",
          description:
            "Mozzarella, porcini mushrooms, ricotta, parmesan. Allergens: cereals, lactose.",
          price: 7.75,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/mpnvvfyet0omj6dypbci",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Di Pollo",
          description:
            "Mozzarella, smoked chicken fillet, mini tomatoes, Crimean onion, egg, cream. Allergens: cereals, lactose, egg.",
          price: 7.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/t6womz1occsh1oyhmhnf",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "American",
          description:
            "Grated tomatoes, mozzarella, corn, sausages, french fries. Allergens: cereals, lactose.",
          price: 7.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/s66co6eszzcovajangwr",
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
          name: "Set of tutu bene + Coca-Cola 1 liter",
          description:
            "Coca-Cola 1 liter as a gift! Pizza Quatro Formaggi (mozzarella, gorgonzola, parmesan, provolone. 340 g), pizza Sylvia (wholemeal dough, grated tomatoes, mozzarella, Parma ham, sun-dried tomatoes, ricotta and basil. 530 g).",
          price: 15,
          image:
            "https://api.getorder.biz/product/12402/image/29/700/700/750426c6-c73a-4017-c006-08d95c238f00.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Set of preferito + Coca-Cola 1 liter",
          description:
            "Coca-Cola 1 liter as a gift! Bavarian pizza (grated tomatoes, mozzarella, hunting and Munich sausages, mustard, fresh mushrooms. 520 g), Pepperoni pizza (grated tomatoes, mozzarella, spicy salami pepperoni. 420 g).",
          price: 14,
          image:
            "https://api.getorder.biz/product/12399/image/29/700/700/c8abe034-e04a-4ccf-c005-08d95c238f00.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Fiesta set + Coca-Cola 1 liter",
          description:
            "Coca-Cola 1 liter as a gift! Koto Bene pizza (wholemeal dough, grated tomatoes, mozzarella, ricotta, prosciutto, oregano, basil and almond flakes. 480 g).",
          price: 14,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/wko3qqmeoezplvacyiii",
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
          name: "Assorted hot snacks",
          description:
            "Cheese balls, chicken nuggets, deep-fried crispy ravioli, french fries. Served with three types of sauces: garlic, ketchup, Caesar. Allergens: lactose, cereals, fish, eggs.",
          price: 9,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/drr6ipcfv7dro95vwcek",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Fresh salmon carpaccio",
          description:
            "Served with parmesan, capers, arugula leaves, concase tomatoes and lemon in olive sauce. Allergens: fish, lactose.",
          price: 6,
          image:
            "https://api.getorder.biz/product/12304/image/29/700/700/ea795e6d-3c7f-4661-bf1e-08d95c238f00.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Apetito wings",
          description:
            "Juicy wings in orange-soy sauce. Allergens: citrus, sesame",
          price: 4.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/jhxctqwn7bviixpkxikp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Trio bruschetta novelty",
          description:
            "A traditional Italian appetizer with a mix of mushrooms on soft cream cheese, prosciutto, Parma, sun-dried tomatoes, pickled peppers, arugula, and balsamic cream. Served on crispy ciabatta.",
          price: 3.5,
          image:
            "https://api.getorder.biz/product/49649/image/29/700/700/da9a94c9-a7d9-4d17-ad08-08daa2b47f55.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Salmon, perch and parmesan balls",
          description:
            "Crispy balls of salmon, perch and parmesan. Serve with gorgonzola sauce.",
          price: 3.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/iyk4hxpvpnzdlelssm5u",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "The Bruschetta Trio",
          description:
            "A traditional Italian snack of tomatoes, fresh herbs, feta, parmesan and Parma ham, served with crispy ciabatta.",
          price: 3,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/jta5egh3wjkpoadtnc3q",
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
          name: "Fried potatoes",
          description: "",
          price: 2,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/kzi1wgakxybaa9ocrad8",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "French fries",
          description: "",
          price: 2,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ite8i2rrduyx4dhyydcl",
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
          name: "Lemon custard",
          description:
            "Delicate lemon dessert with raspberry sauce. Allergens: cereals, lactose, nuts.",
          price: 21,
          image:
            "https://api.getorder.biz/product/12324/image/29/700/700/ccac2cd4-0f79-4892-c0ce-08d95c238f00.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Waffle cake",
          description:
            "Cake with condensed milk and hazelnuts. Allergens: lactose, cereals, nuts.",
          price: 14,
          image:
            "https://api.getorder.biz/product/12319/image/29/700/700/4c7bd1f7-5f7a-4990-bff7-08d95c238f00.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Tiramisu",
          description:
            "Traditional Italian dessert. Allergens: lactose, cereals, eggs.",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ilytligyik2ikh1wovpd",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Pistachio tiramisu",
          description: "raditional Italian dessert with pistachio paste.",
          price: 4,
          image:
            "https://api.getorder.biz/product/49650/image/29/700/700/e9ddd0a1-8f7d-4ed4-ad06-08daa2b47f55.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Chocolate fondant",
          description:
            "Cake with warm chocolate inside. Allergens: cereals, lactose, eggs.",
          price: 3,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/jkbizmlk2yscwlpegxzk",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Lemon custard",
          description:
            "Delicate lemon dessert with raspberry sauce. Allergens: cereals, lactose, nuts.",
          price: 2.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/axdkhqpm3zvybjnqolfw",
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
          name: "Salmon with grilled vegetables",
          description:
            "Tender baked salmon fillet. Served with grilled vegetables with unagi sauce.",
          price: 8,
          image:
            "https://api.getorder.biz/product/49986/image/29/700/700/e0ce1532-986d-4eec-99d0-08daa5d5f9e7.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Chicken breast with eggplant",
          description:
            "Juicy chicken breast marinated in herbs with spices and grilled. Served with eggplant fries with fresh tomatoes and herbs. Season with citrus-sesame sauce. Allergens: cereals, sesame seeds, soybeans.",
          price: 5.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ykjfskkh9vecxxsbbwri",
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
          name: "Tagliatelle with porcini mushrooms and shrimps",
          description:
            "Pasta with cuttlefish ink, porcini mushrooms, shrimps in creamy garlic and soy sauces. Decorate with basil leaves.",
          price: 6,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/yo2xweemow8gyucxqqqx",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Pappardelle with porcini mushrooms",
          description:
            "Durum wheat pasta with aromatic Italian herbs and porcini mushrooms in a creamy sauce. Garnished with Parmesan and basil. Allergens: cereals, lactose, eggs, soybeans.",
          price: 5.75,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/zmva2omwd1d7b3cjhzzb",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Lasagna with veal",
          description:
            "Traditional Italian dish in tomato-meat bolognese sauce with mushrooms and onions. Baked under mozzarella cheese and garnished with parsley. Allergens: cereals, lactose, eggs, celery.",
          price: 5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/v9olbhvwovqhsnded4ow",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Pasta Quattro Formaggi",
          description:
            "Durum wheat pasta in a creamy sauce with parmesan, gorgonzola, provolone and mozzarella. Garnish with basil. Allergens: cereals, lactose, eggs.",
          price: 4.5,
          image:
            "https://api.getorder.biz/product/24418/image/29/700/700/7f233cd2-ac4f-4f47-d81f-08da669ebb38.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Spaghetti carbonara",
          description:
            "Spaghetti with bacon in a creamy sauce. Served with egg yolk and parmesan. Allergens: cereals, lactose, eggs.",
          price: 4.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/xkgfsog7rujktx5lutbs",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Ravioli teneri",
          description:
            "Durum wheat ravioli with turkey meat in a gentle creamy sauce with capers. Garnish with parmesan and basil leaves. Allergens: cereals, lactose, eggs.",
          price: 4.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/nrwcsy1g4yj3oaep6ygz",
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
          name: "Green salad with shrimp",
          description:
            "Salad mix with mini tomatoes, shrimp, avocado, Parmesan cheese, almond flakes and olive-balsamic dressing. Allergens: nuts, lactose, crustaceans, honey.",
          price: 7.5,
          image:
            "https://api.getorder.biz/product/12341/image/29/700/700/e3f510b5-dab9-45d9-bf29-08d95c238f00.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Caesar salad with shrimp",
          description:
            "Iceberg lettuce, quail eggs, mini tomatoes, parmesan, garlic croutons with Caesar sauce. Serve with fried shrimp.",
          price: 7.5,
          image:
            "https://api.getorder.biz/product/49983/image/29/700/700/b1c092d2-bc37-48f9-99d4-08daa5d5f9e7.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Caesar salad with lightly salted salmon",
          description:
            "Iceberg lettuce, quail eggs, mini tomatoes, parmesan, garlic croutons with Caesar sauce. Served with lightly salted salmon. Allergens: lactose, mustard, eggs, fish, soybeans, cereals.",
          price: 7,
          image:
            "https://api.getorder.biz/product/12340/image/29/700/700/c3920763-94dc-49ac-bff5-08d95c238f00.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Nisuaz salad",
          description:
            "Tuna, quail eggs, salad mix, cherry tomatoes, artichokes, capers, blue onion, lemon. Season with mustard-honey sauce.",
          price: 7.5,
          image:
            "https://api.getorder.biz/product/12339/image/29/700/700/6e9310b0-cd8a-492a-bff6-08d95c238f00.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Green salad",
          description:
            "Salad mix with mini tomatoes, avocado, Parmesan cheese, almond flakes and olive-balsamic dressing. Allergens: nuts, lactose, honey.",
          price: 4,
          image:
            "https://api.getorder.biz/product/12342/image/29/700/700/91c4f6b5-f1e4-419f-bf28-08d95c238f00.webp",
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
          name: "Spicy pepper sauce",
          description: "",
          price: 1,
          image:
            "https://api.getorder.biz/product/12353/image/29/700/700/4f80788c-7498-4b2c-c09f-08d95c238f00.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Ketchup",
          description: "",
          price: 0.75,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/vj4mgq95mpepsfvqzzea",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Mayonnaise",
          description: "",
          price: 0.75,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/el1be8o9oih2muhg0szd",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Garlic sauce",
          description:
            "Buko cheese, lemon, mayonnaise, olive oil, a mixture of dried herbs and garlic",
          price: 0.75,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/jd9w9yphshxy9jjgcq30",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Mustard",
          description: "Spicy mustard",
          price: 0.75,
          image:
            "https://api.getorder.biz/product/12349/image/29/700/700/8796c96b-3d0d-4361-bf30-08d95c238f00.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Sesame sauce",
          description:
            "Unagi sauce, olive oil, wine vinegar, sesame seeds, lemon juice, orange peel. Allergens: sesame, fish.",
          price: 1,
          image:
            "https://api.getorder.biz/product/12354/image/29/700/700/1f1e5908-a301-4a98-c0d0-08d95c238f00.webp",
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
          name: "Tender vegetable cream soup with bacon",
          description:
            "Potatoes, carrots, onions, celery stalk, milk, olive oil. Garnish with bacon chips, arugula and truffle oil",
          price: 2.25,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/wxsudz44pekshsdcxssk",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Hot tomato soup",
          description:
            "Grated tomato soup with grated mozzarella cheese. Allergens: lactose, celery.",
          price: 2.25,
          image:
            "https://api.getorder.biz/product/12355/image/29/700/700/26e02bbb-5882-439a-c04f-08d95c238f00.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Chicken soup with pasta",
          description:
            "Chicken broth with chicken, pasta, carrots, celery and parsley. Allergens: cereals, celery.",
          price: 2.25,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/trmtjoqdffa6topkaytz",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
  ],
};
