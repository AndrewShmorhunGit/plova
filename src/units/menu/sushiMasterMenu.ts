interface sushiMasterMenu {
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

export const sushiMasterMenu = {
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
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Chicken breast su-vid with vegetables",
          description:
            "Chicken breast su-vid baked zucchini and baby carrots 170/180g",
          price: 5,
          image:
            "https://api.getorder.biz/product/44340/image/44/700/700/2000040459.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Chicken chop and mashed potatoes",
          description:
            "Fried chicken chop. Served with mashed potatoes and butter 100/160g",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/jfxxpnxnspq61u27c1ki",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Caesar salad with chicken",
          description:
            "Chicken breast, bacon, cherry tomatoes, lettuce, Parmesan cheese, cream, mustard, sunflower oil, ground black pepper, salt, soy sauce, wheat bread, sugar, garlic 180g",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/uxjkyokjtoq8961ty9z2",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Solyanka",
          description:
            "Aromatic soup with smoked meats, olives and lemon. Served with sour cream, lemon, capers and sourdough bread 300/15/30g",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/anz7xlfg1tqrberxo2mh",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
    {
      category: {
        categoryName: "Combo menu",
        // categoryImage: "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
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
          bonuses: "-20%",
        },
        {
          name: "Pate with caramelized apple",
          description:
            "Chicken liver pate, caramelized apple. Served with bread. 180/60g",
          price: 2,
          image:
            "https://api.getorder.biz/product/26216/image/44/700/700/2000040204.webp",
          modifiers: "",
          bonuses: "-20%",
        },
        {
          name: "Baked vegetables",
          description: "Baked eggplant, zucchini and bell pepper 180g",
          price: 4.5,
          image:
            "https://api.getorder.biz/product/38711/image/44/700/700/2000040346.webp",
          modifiers: "",
          bonuses: "-20%",
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
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Omelet with chicken",
          description:
            "Chicken eggs, spices, mayonnaise, butter, salad mix, grilled chicken fillet, grilled eggplant and tomatoes, baked baby carrots. Served with sourdough bread 270g",
          price: 3,
          image:
            "https://api.getorder.biz/product/38781/image/44/700/700/2000040339.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Scrambled eggs with chicken",
          description:
            "Chicken eggs (2 pcs.), spices, grilled chicken fillet, grilled eggplant and tomatoes, mixed salad. Served with sourdough bread 215g",
          price: 3,
          image:
            "https://api.getorder.biz/product/38790/image/44/700/700/2000040336.webp",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Pancakes with strawberry jam",
          description:
            "Pancakes, strawberry jam, vanilla sauce, powdered sugar, strawberries. 250 g",
          price: 2,
          image:
            "https://api.getorder.biz/product/38784/image/44/700/700/2000040335.webp",
          bonuses: "",
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
        },
        {
          name: "Set Borscht, Kiev cutlet with mashed potatoes and Olivier salad",
          description:
            "Kiev cutlet, 140g & Mashed potatoes, 160g & Olivier salad with chicken, 180g & Borscht with sour cream, 330/30g. Total: 840g",
          price: 8,
          image:
            "https://api.getorder.biz/product/38767/image/44/700/700/2000040370.webp",
          modifiers: "",
        },
        {
          name: "Set Fried hake in batter, mashed potatoes and cabbage and cucumber salad",
          description:
            "Fried hake in batter, 130g & Mashed potatoes, 160g & Cabbage and cucumber salad, 180g. Total: 470g",
          price: 5,
          image:
            "https://api.getorder.biz/product/38774/image/44/700/700/2000040389.webp",
          modifiers: "",
        },
        {
          name: "Borscht set, dumplings with potatoes and mushrooms and cabbage salad",
          description:
            "Borscht with sour cream, 330/30g & Dumplings with potatoes and mushrooms, 200/30g & Cabbage and cucumber salad, 180g. Total: 770g",
          price: 5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/kjxk4dhqw6nt7nvxlkzf",
          modifiers: "",
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
        },
        {
          name: "Turkey fricassee with buckwheat and chicken broth",
          description:
            "Turkey fricassee in cream sauce, 160g & Buckwheat porridge, 180g & Chicken broth with egg and homemade noodles, 300/30/10g. Total: 680g",
          price: 5,
          image:
            "https://api.getorder.biz/product/38738/image/44/700/700/2000040368.webp",
          modifiers: "",
        },
        {
          name: "Pea soup and potato dumplings with mushrooms and egg",
          description:
            "Pea soup with smoked meats and crackers, 300/30g & Potato dumplings with mushrooms and egg, 200/30g. Total: 560g",
          price: 5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/oecwt7z2poczgsnmojag",
          modifiers: "",
        },
        {
          name: "Turkey fricassee with buckwheat and chicken broth",
          description:
            "Turkey fricassee in cream sauce, 160g & Buckwheat porridge, 180g & Chicken broth with egg and homemade noodles, 300/30/10g. Total: 680g",
          price: 5,
          image:
            "https://api.getorder.biz/product/38738/image/44/700/700/2000040368.webp",
          modifiers: "",
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
        },
        {
          name: "Mushroom cream soup",
          description:
            "Mushroom cream soup, cream, spices. Served with sourdough bread 300/30g",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/tgxtcrkomzoroo1jqlwe",
          modifiers: "",
        },
        {
          name: "Chicken broth with egg and homemade noodles",
          description:
            "Chicken meat, chicken eggs, homemade egg noodles, carrots, onions, parsley, water, celery, salt, ground black pepper, bay leaf. Served with sourdough bread 300/30/10g",
          price: 2.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ln7npvmvtmrzsuydlbhl",
          modifiers: "",
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
        },
        {
          name: "Pancake with cheese and raisins, 1pc.",
          description:
            "Pancake based on wheat flour and milk, filled with homemade cheese and raisins 85/30g",
          price: 2,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ztkigcvechyhgl9pkcny",
          modifiers: "",
        },
        {
          name: "Pancake with chicken and mushrooms, 1pc.",
          description:
            "Pancake based on wheat flour and milk, filling with chicken fillet, mushrooms and cream, butter 85/30g",
          price: 2,
          image:
            "https://api.getorder.biz/product/26232/image/44/700/700/2000040207.webp",
          modifiers: "",
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
        },
        {
          name: "Dumplings with cherries",
          description:
            "Dumplings with cherry filling, sugar, butter. Served with sour cream 200/30g",
          price: 2,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/kyonyp896pmj3wjryuzz",
          modifiers: "",
        },
        {
          name: "Dumplings with potatoes",
          description:
            "Dumplings stuffed with potatoes, onions, spices, butter. Served with sour cream 200/30g",
          price: 2,
          image:
            "https://api.getorder.biz/product/38705/image/44/700/700/2000040289.webp",
          modifiers: "",
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
        },
        {
          name: "Napoleon cake",
          description: "Sugar, egg, flour, butter, milk, puff pastry",
          price: 2,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/mfux6nm7g2kzjs4wud4s",
          modifiers: "",
        },
        {
          name: "Ant cake",
          description:
            "Flour, walnuts, butter, condensed milk, sour cream, sugar, chicken egg, powdered sugar, chocolate glaze",
          price: 2,
          image:
            "https://api.getorder.biz/product/18369/image/44/700/700/2000039264.webp",
          modifiers: "",
        },
        {
          name: "Waffle cake",
          description: "Waffle cakes, condensed milk, butter",
          price: 1.5,
          image:
            "https://api.getorder.biz/product/18366/image/44/700/700/2000037890.webp",
          modifiers: "",
        },
        {
          name: "Mr. cherry cat",
          description: "Cherry, cream, milk, cherry juice, sugar, gelatin",
          price: 1.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/xjjrw9w6z31s8eae98t9",
          modifiers: "",
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
        },
        {
          name: "Currant juice",
          description: "250ml",
          price: 0.7,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/gfpgd5yfpxgsmvyqc9hs",
          modifiers: "",
        },
        {
          name: "Bonaqua water (sparkling)",
          description: "500ml",
          price: 0.7,
          image:
            "https://api.getorder.biz/product/50408/image/44/700/700/2000040801.webp",
          modifiers: "",
        },
        {
          name: "Bonaqua water (still)",
          description: "500ml",
          price: 0.7,
          image:
            "https://api.getorder.biz/product/50409/image/44/700/700/2000040804.webp",
          modifiers: "",
        },
      ],
    },
  ],
};
