interface puzataHataMenu {
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

export const puzataHataMenu = {
  brandName: "Puzata Hata",
  headerBackgroundImage:
    "https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/e_blur:400/Stores/krpl5hjzxqiiv7jymyjy",
  deliveryTime1: 15,
  deliveryTime2: 25,
  deliveryPrice: 1,
  rate: 94,
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
          bonuses: "-10%",
          modifiers: "",
        },
        {
          name: "Chopped turkey Caprese",
          description: "155g",
          price: 2,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/11/02/9d26b8e0-3d72-48aa-b1cd-6581f745536c-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Olivie salad",
          description: "200g",
          price: 2,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2021/01/19/8aa67305-d050-4464-9831-1072a616bd89-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Salad with crab sticks",
          description: "200g",
          price: 2,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2021/05/11/8dff9f5d-f185-4f49-b339-68bd0ea71733-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Chicken meatballs in cheese",
          description: "180g",
          price: 2,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2021/05/11/8dff9f5d-f185-4f49-b339-68bd0ea71733-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Sauerkraut salad",
          description: "200g",
          price: 2,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2021/01/19/310e83d1-a277-4774-88a5-5dc9e914fd29-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Salad with feta and beets",
          description: "90g",
          price: 2,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/a815cbf1-34ca-4ea4-aab0-6569e83cfe2a-thumbnail-400x400-100.jpg",
          modifiers: "",
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
          bonuses: "-10%",
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
        },
        {
          name: "Homemade borsch with meat",
          description: "390g",
          price: 2,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/0af2ca6a-431a-4323-99dd-b379dc181daf-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Pea soup with croutons",
          description: "360/15g",
          price: 1.5,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/ebe530a3-0132-4462-b9b2-56600bd593b1-thumbnail-400x400-100.jpg",
          modifiers: "",
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
        },
        {
          name: "Pasta Carbonara",
          description: "200g",
          price: 2,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/11/01/0afddfbb-1e5a-45c7-a974-e6188dc3d333-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Chopped turkey Caprese",
          description: "155g",
          price: 2.5,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/11/02/9d26b8e0-3d72-48aa-b1cd-6581f745536c-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Chicken meatballs in cheese",
          description: "180g",
          price: 2,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/16f7107e-931d-4501-8d4b-a579614546ad-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Grilled chicken steak",
          description: "90g",
          price: 2,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/a815cbf1-34ca-4ea4-aab0-6569e83cfe2a-thumbnail-400x400-100.jpg",
          modifiers: "",
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
        },
        {
          name: "Vegetable stew with mushrooms",
          description: "150g",
          price: 1.5,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2021/01/18/ae1780ff-2ca9-48fa-9dfe-e69163b10875-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Rice with vegetables",
          description: "150g",
          price: 1.5,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/bfd1ffe1-024a-4438-a0f9-6d47f746412f-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Buckwheat",
          description: "150g",
          price: 1.5,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/50ebf0e8-4bc3-43dd-bf0b-74039e7d679f-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Mashed potatoes at home",
          description: "200g",
          price: 1.5,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/de123420-4a58-4c85-95d1-d4801062fc06-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Baked potatoes",
          description: "150g",
          price: 1.5,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/72c86a5b-6578-42e3-acb8-657a21762198-thumbnail-400x400-100.jpg",
          modifiers: "",
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
        },
        {
          name: "Salad with crab sticks",
          description: "200g",
          price: 2,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2021/05/11/8dff9f5d-f185-4f49-b339-68bd0ea71733-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Carrot and celery salad",
          description: "200g",
          price: 2,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2021/01/19/e15a53aa-cf71-410e-aad6-c6e6c8dfc211-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Salad with feta and beets",
          description: "200g",
          price: 2,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/10/07/5d353f9e-24b0-4236-9cec-a037fabba06b-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Herring under a fur coat",
          description: "165g",
          price: 1.5,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2021/09/27/f4ffef92-e80d-4e8a-ad47-b254f87d698c-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Lard with garlic",
          description: "40g",
          price: 0.5,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/08/8cd03201-b249-4810-83bb-2050e02654c9-thumbnail-400x400-100.jpg",
          modifiers: "",
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
        },
        {
          name: "Dumplings with meat",
          description: "200/20g",
          price: 2,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/511a12d1-fecf-4b23-9edb-7c6828f92d21-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Dumplings capital with chicken",
          description: "160/20g",
          price: 2,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/d76ce14f-1a62-4335-9d96-8be473838854-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Cheesecakes",
          description: "120/20g",
          price: 2,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/5e68dcb8-1b37-4bb1-8470-6c155b9bbf74-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Pancakes with plum and apple",
          description: "200/20g",
          price: 1.5,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/10/11/bcee1437-14bb-4150-b909-879018a419b2-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Pancakes with cherries",
          description: "190/20/2g",
          price: 1.5,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/07/4cd9ad2d-861e-47db-acf7-c190ac871d28-thumbnail-400x400-100.jpg",
          modifiers: "",
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
        },
        {
          name: "Cilantro sauce",
          description: "50g",
          price: 0.5,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/08/6ae5417b-e1b8-4e6c-a897-9640b11cbdfd-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Sour cream",
          description: "50g",
          price: 0.5,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/08/d08b8fde-fb49-49da-bc14-7666d2d1cbf6-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Tar-tar sauce",
          description: "50g",
          price: 0.5,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/08/d19dcd0e-975f-4180-a0b8-70b2d8a73d89-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Honey",
          description: "18g",
          price: 0.5,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2020/11/16/baa04915-b7c4-4380-baf7-4850c32887ea-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Cutlery is disposable",
          description: "piece",
          price: 0.1,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2020/11/16/f242bb77-2107-475c-b252-639138715e28-thumbnail-400x400-100.jpg",
          modifiers: "",
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
        },
        {
          name: "The bun is branded",
          description: "50g",
          price: 0.5,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2021/03/25/85f18886-61e2-4016-a366-9c2edb5fe33c-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Portioned white bread",
          description: "28g",
          price: 0.05,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2021/02/24/8ed544e8-284c-4481-b464-8b0537376801-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Portioned black bread",
          description: "28g",
          price: 0.05,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2021/02/24/b1b0873a-36b3-43aa-84d3-79725cf16b12-thumbnail-400x400-100.jpg",
          modifiers: "",
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
        },
        {
          name: "Compote",
          description: "500ml",
          price: 1.3,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2022/07/08/f67fe334-bf1b-4541-abec-64ac7aac5ed5-thumbnail-400x400-100.jpg",
          modifiers: "",
        },
        {
          name: "Drink Pepsi",
          description: "330 ml glass",
          price: 1,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2021/06/23/273bb7f8-e4fd-4a1e-b346-138cd21a500e-thumbnail-400x400.png",
          modifiers: "",
        },
        {
          name: "Cold tea Lipton green",
          description: "500ml",
          price: 1,
          image:
            "https://media.puzatahata.ua/__sized__/images/productosg/2021/06/23/96915d5a-7475-421a-8f7c-64f2bcfa9a3e-thumbnail-400x400.png",
          modifiers: "",
        },
      ],
    },
  ],
};
