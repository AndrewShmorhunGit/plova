interface sushiyaMenu {
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

export const sushiyaMenu = {
  brandName: "Sushiya",
  headerBackgroundImage:
    "https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/e_blur:400/Stores/l4hgrbhxd6ognfnly6ri",
  deliveryTime1: 0,
  deliveryTime2: 0,
  deliveryPrice: 0.5,
  rate: 96,
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
          name: "RUN TEST MENU",
          description: "",
          price: 5.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/culr6ycqhiujdqizqur7",
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
          name: "CHICKEN MACNAGETS 20PCS",
          description: "",
          price: 6,
          image:
            "https://d3tqkqn8yl74v5.cloudfront.net/TPO-cso_ua_2133_nuggets20B.png",
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
          name: "RUN TEST MENU",
          description: "",
          price: 5.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/culr6ycqhiujdqizqur7",
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
          name: "RUN TEST",
          description: "",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/yox61fkoqeif0lpnkp3k",
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
          name: "HAPPY MEAL HAMBURGER",
          description: "",
          price: 3.5,
          image:
            "https://d3tqkqn8yl74v5.cloudfront.net/TPO-chf_ua_2302_HM_Hamburger.png",
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
        categoryName: "Shaurma",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/i9ohzqznbouybk5umygn",
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
        categoryName: "Combo Sets",
        categoryImage:
          "https://res.cloudinary.com/glovoapp/w_150,c_thumb,f_auto,q_auto:best/dpr_auto/Products/yrspxtjdq6lorck6aszo",
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
          name: "ORANGE JUICE",
          description: "",
          price: 1,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/u5uxfgbv1oyh1hcinwec",
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
          name: "MACFLEURY CAT CAT CHOCOLATE",
          description: "",
          price: 1.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/zfhxhqfags2qifk00ixz",
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
          name: "KETCHUP SAUCE",
          description: "",
          price: 0.4,
          image:
            "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/r7qtnuvy5hwfvu248ti1",
          modifiers: "",
        },
      ],
    },
  ],
};
