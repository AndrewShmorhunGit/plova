interface murakamiMenu {
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

export const murakamiMenu = {
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
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Green Dragon Roll (280g)",
          description:
            "Rice, nori, unagi sauce, cucumber, white sesame, masago caviar, avocado, eel.",
          price: 4.75,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/ecofxxwhvcupbx8yzi1x",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Unagi Philadelphia Roll (235g)",
          description:
            "Rice, nori, cream cheese, unagi sauce, cucumber, sesame white, eel.",
          price: 4.7,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/tthq6qvujyyqcpqe3h44",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "California Roll with Shrimp Tempura (225g)",
          description:
            "Rice, nori, cucumber, spice mayonnaise, masago caviar, tempura, tiger prawn.",
          price: 4.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/hftegmg2bjmcpmsvneaf",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "California with oily fish (210g)",
          description:
            "Rice, nori, tobiko red caviar, mayonnaise, cucumber, green onions, oily fish.",
          price: 4.25,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/kwouqm30hmj4o2mah0da",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Philadelphia Roll with Smoked Salmon (240g)",
          description:
            "Rice, nori, cream cheese, cucumber, masago caviar, smoked salmon.",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/g7sb0bjhxkwy6eknvtvx",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "California Roll with Salmon (205g)",
          description:
            "Rice, nori, cucumber, masago caviar, mayonnaise, fresh salmon.",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/ravsbo7ufhw2sszfx8q0",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Futomaki with shrimp (210g)",
          description:
            "Rice, nori, spice mayonnaise, red tobiko caviar, iceberg lettuce, cucumber, masago caviar, eel.",
          price: 4,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/qghpao1mpzzmch5r87iq",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Spicy roll with tuna (260g)",
          description:
            "Rice, nori, cream cheese, black sesame, cucumber, avocado, tuna, masago caviar, eel.",
          price: 3.9,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/sl4qjcnirtspl2dsqopz",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Cheese roll with eel (235g)",
          description:
            "Rice, nori, cream cheese, unagi sauce, cucumber, sesame white, eel.",
          price: 3.85,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/kcc7t4uwicdwblwgyu2w",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Roll with eel tempura (225g)",
          description:
            "Rice, nori, cream cheese, Unagi sauce, cucumber, tempura, eel.",
          price: 3.8,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/jr2ig1dsvxutf6b8tbpr",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Roll from the Chef (240g)",
          description:
            "Rice, nori, unagi sauce, white sesame seeds, feta cheese, smoked salmon, toast cheese, salmon.",
          price: 3.75,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/ccsrrnbmxhufqapdletk",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Salmon Cheese Roll (250g)",
          description:
            "ice, nori, cucumber, toast, fresh salmon, cream cheese, sweet and sour sauce, masago caviar, eel.",
          price: 3.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/kd3c6lulipk8jzvxxl6e",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Philadelphia Roll with Oil Fish (230g)",
          description:
            "Rice, nori, cream cheese, cucumber, black sesame, oily fish.",
          price: 3.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/kv5h09ncnwm7nph9eajm",
          bonuses: "",
          modifiers: "",
        },
        {
          name: "Philadelphia Roll with Avocado (230g)",
          description: "Rice, nori, cream cheese, avocado, fresh salmon.",
          price: 3.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/obvkzh1uqb754qa4qf0e",
          bonuses: "",
          modifiers: "",
        },
      ],
    },
  ],
};
