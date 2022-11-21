interface menuKFC {
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

export const menuKFC = {
  brandName: "KFC",
  headerBackgroundImage:
    "https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/e_blur:400/Stores/szzdemcat83pqf3hyyrd",
  deliveryTime1: 20,
  deliveryTime2: 35,
  deliveryPrice: 1.5,
  rate: 92,
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
        },
        {
          name: "Bucket M",
          description: "",
          price: 8,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/M_Bucket_22_HW_out.png",
          modifiers: "",
        },
        {
          name: "Bucket S",
          description: "",
          price: 6,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/M_Bucket_22_HW_out.png",
          modifiers: "",
        },
        {
          name: "Bucket S spicy",
          description: "",
          price: 6,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/M_Bucket_22_HW_out.png",
          modifiers: "",
        },
        {
          name: "Bucket Duet",
          description: "",
          price: 5,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/5.%20Baket%20Duet.png",
          modifiers: "",
        },
        {
          name: "Bucket Duet spicy",
          description: "",
          price: 5,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/5.%20Baket%20Duet.png",
          modifiers: "",
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
        },
        {
          name: "Bucket M",
          description: "",
          price: 8,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/M_Bucket_22_HW_out.png",
          modifiers: "",
        },
        {
          name: "Bucket S",
          description: "",
          price: 6,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/M_Bucket_22_HW_out.png",
          modifiers: "",
        },
        {
          name: "Bucket S spicy",
          description: "",
          price: 6,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/M_Bucket_22_HW_out.png",
          modifiers: "",
        },
        {
          name: "Bucket Duet",
          description: "",
          price: 5,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/5.%20Baket%20Duet.png",
          modifiers: "",
        },
        {
          name: "Bucket Duet spicy",
          description: "",
          price: 5,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/5.%20Baket%20Duet.png",
          modifiers: "",
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
        },
        {
          name: "BoxMaster original",
          description: "",
          price: 3,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/ibvvwb1fm7ydynosvgto",
          modifiers: "",
        },
        {
          name: "Double chicken",
          description: "",
          price: 2.5,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/double_chicken.png",
          modifiers: "",
        },
        {
          name: "Double chicken spicy",
          description: "",
          price: 2.5,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/double_chicken.png",
          modifiers: "",
        },
        {
          name: "Roll",
          description: "",
          price: 2,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/chef_roll.png",
          modifiers: "",
        },
        {
          name: "Roll spicy",
          description: "",
          price: 2,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/chef_roll.png",
          modifiers: "",
        },
        {
          name: "Chicken Burger",
          description: "",
          price: 2,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/jkwo6lh2etupwowyifbm",
          modifiers: "",
        },
        {
          name: "Chicken Burger spicy",
          description: "",
          price: 2,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/jkwo6lh2etupwowyifbm",
          modifiers: "",
        },
        {
          name: "Cheeseburger",
          description: "",
          price: 1.5,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/kgcfpck6pamtepbe4s7d",
          modifiers: "",
        },
        {
          name: "Ukrainian toast",
          description: "",
          price: 1,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/tost_ukr.png",
          modifiers: "",
        },
        {
          name: "Toast 2 cheeses",
          description: "",
          price: 1,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/1.%20Tost%202%20Sura.png",
          modifiers: "",
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
        },
        {
          name: "Donut strawberry",
          description: "",
          price: 1.2,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/512x512_Kiosk_17_12_2019_1.png",
          modifiers: "",
        },
        {
          name: "Donut strawberry",
          description: "",
          price: 1.2,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/512x512_Kiosk_17_12_2019_1.png",
          modifiers: "",
        },
        {
          name: "Cherry pie",
          description: "",
          price: 1,
          image:
            "https://res.cloudinary.com/glovoapp/w_96,h_96,c_thumb,f_auto,q_auto:best/dpr_auto/Products/e3hktma56r7r8wubtxe2",
          modifiers: "",
        },
        {
          name: "Muffin with currants",
          description: "",
          price: 1,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/9.%20Mafin_Smorodina.png",
          modifiers: "",
        },
        {
          name: "Chocolate muffin",
          description: "",
          price: 1,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/9.%20Mafin_Shoco.png",
          modifiers: "",
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
        },
        {
          name: "Mirinda 0,33 l",
          description: "",
          price: 1,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/512_Mirinda_0.3.png",
          modifiers: "",
        },
        {
          name: "7 Up 0,33 l",
          description: "",
          price: 1,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/512_7up_0.3.png",
          modifiers: "",
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
        },
        {
          name: "Latte",
          description: "",
          price: 1.3,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/11.%20Late%2004.png",
          modifiers: "",
        },
        {
          name: "Raspberry tea",
          description: "",
          price: 1.2,
          image:
            "https://kfc-images.s3.eu-west-1.amazonaws.com/img/512x512_KFC_Punch_20201215.png",
          modifiers: "",
        },
      ],
    },
  ],
};
