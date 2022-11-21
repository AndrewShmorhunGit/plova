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

// const modifier = {};

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
          name: "RUN TEST MENU",
          description: "",
          price: 5.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/culr6ycqhiujdqizqur7",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "RUNNING POPPY MENU",
          description: "",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ctbkrla6vr1lpq0axaki",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "DOUBLE CHEESBURGER MENU",
          description: "",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/p30hhrwklbw4q0opvzs8",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "DOUBLE CHEESBURGER",
          description: "",
          price: 2,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/poq8z65gfsvnagmtv65n",
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
          name: "CHICKEN MACNAGETS 20PCS",
          description: "",
          price: 6,
          image:
            "https://d3tqkqn8yl74v5.cloudfront.net/TPO-cso_ua_2133_nuggets20B.png",
          modifiers: "",
          bonuses: "",
        },
        {
          name: "MACCHIKEN MENU",
          description: "",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/s1h8vsxtwaidni5njpqm",
          modifiers: "",
          bonuses: "",
        },
        {
          name: "CHICKEN MACNAGETS 9PCS",
          description: "",
          price: 2.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/lsthk00h9ok7rm5bdlqc",
          modifiers: "",
          bonuses: "",
        },
        {
          name: "CHICKEN MACNAGETS 6PCS",
          description: "",
          price: 2,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/wexol5zijsyuu4fpwahp",
          modifiers: "",
          bonuses: "",
        },
        {
          name: "CHICKEN MACNAGETS 4PCS",
          description: "",
          price: 1.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/qv6ksaqq3n2yjchndbqq",
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
          name: "RUN TEST MENU",
          description: "",
          price: 5.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/culr6ycqhiujdqizqur7",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "CHICKEN MACNAGETS 9PCS MENU",
          description: "",
          price: 4.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/tudtobdxa9nzbhrq7kby",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "RUNNING POPPY MENU",
          description: "",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ctbkrla6vr1lpq0axaki",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "MACCHIKEN MENU",
          description: "",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/s1h8vsxtwaidni5njpqm",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "DOUBLE CHEESBURGER MENU",
          description: "",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/p30hhrwklbw4q0opvzs8",
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
          name: "RUN TEST",
          description: "",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/yox61fkoqeif0lpnkp3k",
          modifiers: "",
        },
        {
          name: "BIG POPPY",
          description: "",
          price: 2.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/cdy3l6fgeamgmxvsqpt7",
          modifiers: "",
        },
        {
          name: "MACCHIKEN",
          description: "",
          price: 2,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ulcd5m4z3xy0mchih27b",
          modifiers: "",
        },
        {
          name: "DOUBLE CHEESBURGER",
          description: "",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/poq8z65gfsvnagmtv65n",
          modifiers: "",
        },
        {
          name: "CHEESEBURGER",
          description: "",
          price: 1.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/xw2vyhuganjgz0fy477y",
          modifiers: "",
        },
        {
          name: "HAMBURGER",
          description: "",
          price: 1.2,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ibwczijlydjqko4eubb1",
          modifiers: "",
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
        },
        {
          name: "HAPPY MEAL CHEESBURGER",
          description: "",
          price: 3.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/evek9s7bdwp8oc12lhxt",
          modifiers: "",
        },
        {
          name: "HAPPY MEAL CHICKEN MACNAGETS 4PCS",
          description: "",
          price: 3.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/vqicsj4y2adjwpjwtbuk",
          modifiers: "",
        },
        {
          name: "A TOY OR A BOOK",
          description: "",
          price: 1.5,
          image:
            "https://d3tqkqn8yl74v5.cloudfront.net/TPO-cso_ua_8080_ToyBook.png",
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
          name: "FRENCH FRIES",
          description: "",
          price: 1,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/qmihdlfhsud7ypt8lfs6",
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
          name: "MAKPIRIG CHERRY",
          description: "",
          price: 1,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/quqpna5iftzp7aqrgez4",
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
          name: "MOCCO",
          description: "295ml",
          price: 1.5,
          image:
            "https://d3tqkqn8yl74v5.cloudfront.net/TPO-cso_ua_7622_mocco1.png",
          modifiers: "",
        },
        {
          name: "CAPPUCCINO CLASSIC",
          description: "245ml",
          price: 1.3,
          image:
            "https://d3tqkqn8yl74v5.cloudfront.net/TPO-cso_ua_7605_cappuchino_large.png",
          modifiers: "",
        },
        {
          name: "LATE CLASSIC",
          description: "295ml",
          price: 1.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/xtono7p0wcaqjor8micv",
          modifiers: "",
        },
        {
          name: "AMERICANO WITH MILK CLASSIC",
          description: "295ml",
          price: 1.3,
          image:
            "https://d3tqkqn8yl74v5.cloudfront.net/TPO-cso_ua_7611_americano_milkL.png",
          modifiers: "",
        },
        {
          name: "MOCCO",
          description: "295ml",
          price: 1.3,
          image:
            "https://d3tqkqn8yl74v5.cloudfront.net/TPO-cso_ua_7622_mocco1.png",
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
          name: "ORANGE JUICE",
          description: "",
          price: 1,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/u5uxfgbv1oyh1hcinwec",
          modifiers: "",
        },
        {
          name: "COCA COLA",
          description: "",
          price: 0.7,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/vkarb6cwhzf1yvrp56sr",
          modifiers: "",
        },
        {
          name: "FANTA",
          description: "",
          price: 0.7,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/cqhvzpdxd6sxjq37bflw",
          modifiers: "",
        },
        {
          name: "SPRITE",
          description: "",
          price: 0.7,
          image:
            "https://d3tqkqn8yl74v5.cloudfront.net/TPO-cso_ua_7060_Sprite_025.png",
          modifiers: "",
        },
        {
          name: "APPLE JUICE",
          description: "200ml",
          price: 1,
          image:
            "https://d3tqkqn8yl74v5.cloudfront.net/TPO-cso_ua_7097_Juice_Galicia_Apple_Small_packed1.png",
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
          name: "MACFLEURY CAT CAT CHOCOLATE",
          description: "",
          price: 1.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/zfhxhqfags2qifk00ixz",
          modifiers: "",
        },
        {
          name: "MACFLEURY CAT CAT CARAMEL",
          description: "",
          price: 1.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/vlkylbowttgkfxgvn19h",
          modifiers: "",
        },
        {
          name: "MACFLEURY CAT CAT STRAWBERRY",
          description: "",
          price: 1.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/w16khldbdvolekd4eadz",
          modifiers: "",
        },
        {
          name: "MAXANDI CHOCOLATE IN A PLASTIC CUP",
          description: "",
          price: 1.4,
          image:
            "https://d3tqkqn8yl74v5.cloudfront.net/TPO-cso_ua_4010_SundaeChoco.png",
          modifiers: "",
        },
        {
          name: "MAXANDY CARAMEL IN A PLASTIC CUP",
          description: "",
          price: 1.4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/h3vcko66rjdhfwssfa4h",
          modifiers: "",
        },
        {
          name: "MAXANDY STRAWBERRY IN A PLASTIC CUP",
          description: "",
          price: 1.4,
          image:
            "https://d3tqkqn8yl74v5.cloudfront.net/TPO-cso_ua_4030_SundaeStrawberry.png",
          modifiers: "",
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
        },
        {
          name: "BARBECUE SAUCE",
          description: "",
          price: 0.4,
          image:
            "https://d3tqkqn8yl74v5.cloudfront.net/TPO-cso_ua_2230_Souce_BBQ.png",
          modifiers: "",
        },
        {
          name: "KETCHUP SAUCE",
          description: "",
          price: 0.4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/r7qtnuvy5hwfvu248ti1",
          modifiers: "",
        },
        {
          name: "MUSTARD SAUCE",
          description: "",
          price: 0.4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/n3lrpvjmdbohfgzff1og",
          modifiers: "",
        },
        {
          name: "SOUR-SWEET SAUCE",
          description: "",
          price: 0.4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/yi2anbmiwxr1ajans6h4",
          modifiers: "",
        },
        {
          name: "MAYONNAISE SAUCE",
          description: "",
          price: 0.4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/mhsygsssca29ramfmuyy",
          modifiers: "",
        },
      ],
    },
  ],
};
