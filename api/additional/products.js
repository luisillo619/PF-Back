// tenemos que buscar el id de la categoria que coincida con el nombre de la categoria para ingresar el id y no el nombre como tal al modelo Products.
// Pero antes se tienen que crear los datos del modelo category
// let category = await Category.findOne({name: "name_of_category"})



const products = [
  // Mates
  {
    //: 1,
    name: "Mate gourd with Alpaca finish",
    price: 60.0,
    description:
      "Gourd mate hand wrapped and sewed in cow leather with alpaca finish around the opening.",
    image: "https://login.eltero.net/modules/products/uploads/product_1.jpeg",
    category: "Mates",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 2,
    name: "Mate gourd with alpaca colonial design.",
    price: 65.0,
    description:
      "Gourd mate hand wrapped and sewed in cow leather. The alpaca finish around the opening has a chiseled Real design.",
    image: "https://login.eltero.net/modules/products/uploads/product_2.jpeg",
    category: "Mates",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 3,
    name: "Mate with alpaca finish real",
    price: 65.0,
    description: "Gourd mate hand wrapped and sewed in cow leather.",
    image: "https://login.eltero.net/modules/products/uploads/product_3.jpeg",
    category: "Mates",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },

  {
    //: 5,
    name: "Mate with alpaca finish Colonial",
    price: 55.0,
    description:
      "Gourd mate with Alpaca opening with chiseled Colonial design.",
    image: "https://login.eltero.net/modules/products/uploads/product_5.jpeg",
    category: "Mates",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 6,
    name: "Mate with alpaca finish",
    price: 50.0,
    description:
      "Gourd mate with alpaca finish around the opening. The mate comes with a stand base of cow leather.",
    image: "https://login.eltero.net/modules/products/uploads/product_6.jpeg",
    category: "Mates",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 7,
    name: "Mate",
    price: 50.0,
    description:
      "Gourd mate from Corrientes, an Argentine province known from it´s mate culture.",
    image: "https://login.eltero.net/modules/products/uploads/product_7.jpeg",
    category: "Mates",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },

  // Bombillas
  {
    //: 8,
    name: "Bombilla Pasador and bomba esterillada",
    price: 52.0,
    description:
      "Alpaca Bombilla. It has a Pasador and bomba esterillada motifs and the coco is weld.",
    image: "https://login.eltero.net/modules/products/uploads/product_8.jpeg",
    category: "Bombillas",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 9,
    name: "Bombilla Pasador Esterillado",
    price: 48.0,
    description:
      "Alpaca Bombilla. It has a Pasador Esterillado motif and the coco is weld.",
    image: "https://login.eltero.net/modules/products/uploads/product_9.jpeg",
    category: "Bombillas",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 10,
    name: "Bombilla Pasador Real",
    price: 48.0,
    description:
      "Alpaca bombilla. It has a Pasador Real motif and the coco is weld.",
    image: "https://login.eltero.net/modules/products/uploads/product_10.jpeg",
    category: "Bombillas",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 11,
    name: "Bombilla Real",
    price: 45.0,
    description: "Alpaca bombilla. It has a Real motif and the coco is weld.",
    image: "https://login.eltero.net/modules/products/uploads/product_11.jpeg",
    category: "Bombillas",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 12,
    name: "Bombilla Bomba esterillada",
    price: 45.0,
    description: "Alpaca bombilla. It has a Real motif and the coco is weld.",
    image: "https://login.eltero.net/modules/products/uploads/product_12.jpeg",
    category: "Bombillas",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 13,
    name: "Bombilla Bomba",
    price: 45.0,
    description: "Alpaca Bombilla. It has a Bomba motifs and the coco is weld.",
    image: "https://login.eltero.net/modules/products/uploads/product_13.jpeg",
    category: "Bombillas",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 14,
    name: "Bombilla pasador ancho",
    price: 48.0,
    description: "Alpaca Bombilla. It has a Bomba motifs and the coco is weld.",
    image: "https://login.eltero.net/modules/products/uploads/product_14.jpeg",
    category: "Bombillas",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 15,
    name: "Bombilla Hojas",
    price: 45.0,
    description: "Alpaca Bombilla. It has a Bomba motifs and the coco is weld.",
    image: "https://login.eltero.net/modules/products/uploads/product_15.jpeg",
    category: "Bombillas",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 16,
    name: "Bombilla 'Bomba Galloneada'",
    price: 45.0,
    description:
      "Alpaca bombilla. It has a Bomba Galloneada motifs and the coco is weld. ",
    image: "https://login.eltero.net/modules/products/uploads/product_16.jpeg",
    category: "Bombillas",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 17,
    name: "Bombilla",
    price: 45.0,
    description: "Classic Alpaca bombilla. The coco is weld.",
    image: "https://login.eltero.net/modules/products/uploads/product_17.jpeg",
    category: "Bombillas",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },

  // Matepa
  {
    //: 18,
    name: "Matepa 'Boreal'",
    price: 50.0,
    description: "The Matepa is made of Alpaca, also known as german silver.",
    image: "https://login.eltero.net/modules/products/uploads/product_18.jpeg",
    category: "Matepa",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 19,
    name: "Matepa 'Hojas'",
    price: 50.0,
    description: "The Matepa is made of Alpaca, also known as german silver.",
    image: "https://login.eltero.net/modules/products/uploads/product_19.jpeg",
    category: "Matepa",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 20,
    name: "Matepa 'Flores'",
    price: 50.0,
    description: "The Matepa is made of Alpaca, also known as german silver. ",
    image: "https://login.eltero.net/modules/products/uploads/product_20.jpeg",
    category: "Matepa",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 21,
    name: "Matepa 'Real'",
    price: 50.0,
    description: "The Matepa is made of Alpaca, also known as german silver. ",
    image: "https://login.eltero.net/modules/products/uploads/product_21.jpeg",
    category: "Matepa",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 22,
    name: "Matepa 'Colonial'",
    price: 50.0,
    description: "The Matepa is made of Alpaca, also known as german silver. ",
    image: "https://login.eltero.net/modules/products/uploads/product_22.jpeg",
    category: "Matepa",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },

  // Materas
  {
    //: 23,
    name: "Tacuara",
    price: 50.0,
    description: "The Tacuara replaces the classic gaucho handbag.",
    image: "https://login.eltero.net/modules/products/uploads/product_23.jpeg",
    category: "Materas",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },

  // Yerberas
  {
    //: 24,
    name: "Yerbera 500g",
    price: 45.0,
    description: "A Yerbera is a leather bag use to fill it with yerba mate.",
    image: "https://login.eltero.net/modules/products/uploads/product_24.jpeg",
    category: "Yerberas",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 25,
    name: "Yerbera 300g",
    price: 40.0,
    description: "A Yerbera is a leather bag use to fill it with yerba mate. ",
    image: "https://login.eltero.net/modules/products/uploads/product_25.jpeg",
    category: "Yerberas",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },

  // Combos
  {
    //: 26,
    name: "Combo Rosillo",
    price: 140.0,
    description:
      "This combo has a gourd mate hand wrapped and sewed in cow leather, ",
    image: "https://login.eltero.net/modules/products/uploads/product_26.jpeg",
    category: "Combos",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 27,
    name: "Combo 'Bayo'",
    price: 115.0,
    description:
      "This combo has a gourd mate hand wrapped and sewed in cow leathe with alpaca finish around the opening. ",
    image: "https://login.eltero.net/modules/products/uploads/product_27.jpeg",
    category: "Combos",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 28,
    name: "Combo 'Gateado'",
    price: 110.0,
    description:
      "This combo has a gourd mate with Alpaca finish around the opening that has a Colonial design. ",
    image: "https://login.eltero.net/modules/products/uploads/product_28.jpeg",
    category: "Combos",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 29,
    name: "Combo 'Alazan'",
    price: 95.0,
    description:
      "This combo has a gourd mate with alpaca finish around the opening.",
    image: "https://login.eltero.net/modules/products/uploads/product_29.jpeg",
    category: "Combos",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 30,
    name: "Combo 'Overo'",
    price: 143.0,
    description:
      "This combo has a mate gourd, hand wrapped and sewed in cow leather. ",
    image: "https://login.eltero.net/modules/products/uploads/product_30.jpeg",
    category: "Combos",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 31,
    name: "Combo 'Pampa'",
    price: 143.0,
    description:
      "This combo has a gourd mate hand wrapped and sewed in cow leather.",
    image: "https://login.eltero.net/modules/products/uploads/product_31.jpeg",
    category: "Combos",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 32,
    name: "Combo 'Zaino'",
    price: 110.0,
    description:
      "This combo has a gourd mate with Alpaca finish around the opening that has a Real design.",
    image: "https://login.eltero.net/modules/products/uploads/product_32.jpeg",
    category: "Combos",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 33,
    name: "Combo Moro",
    price: 84.0,
    description:
      "This combo has a mate handwrapped and sewed in cow leather, it can be brown or black, with a bombillon of your choice.",
    image: "https://login.eltero.net/modules/products/uploads/product_33.jpeg",
    category: "Combos",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 34,
    name: "Combo Tostado",
    price: 55.0,
    description: "This combo has a gourd mate and a bombilla of your choosing.",
    image: "https://login.eltero.net/modules/products/uploads/product_34.jpeg",
    category: "Combos",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 35,
    name: "Combo Siete de Oro",
    price: 55.0,
    description:
      "This combo has a gourd mate with alpaca finish around the opening.",
    image: "https://login.eltero.net/modules/products/uploads/product_35.jpeg",
    category: "Combos",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 36,
    name: "Combo 'Viajero Boreal'",
    price: 71.0,
    description:
      "Gourd mate hand wrapped and sewed in cow leather with alpaca finish around the opening.",
    image: "https://login.eltero.net/modules/products/uploads/product_36.jpeg",
    category: "Combos",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 37,
    name: "Combo 'Viajero Flores'",
    price: 71.0,
    description:
      "Gourd mate hand wrapped and sewed in cow leather with alpaca finish around the opening.",
    image: "https://login.eltero.net/modules/products/uploads/product_37.jpeg",
    category: "Combos",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 38,
    name: "Combo Viajero Hojas",
    price: 71.0,
    description:
      "Gourd mate hand wrapped and sewed in cow leather with alpaca finish around the opening. ",
    image: "https://login.eltero.net/modules/products/uploads/product_38.jpeg",
    category: "Combos",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 39,
    name: "Combo 'Viajero' Real",
    price: 71.0,
    description:
      "Gourd mate hand wrapped and sewed in cow leather with alpaca finish around the opening. ",
    image: "https://login.eltero.net/modules/products/uploads/product_39.jpeg",
    category: "Combos",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },

  // Corkscrew
  {
    //: 40,
    name: "Corkscrew Hoja de Acanto",
    price: 95.0,
    description:
      "Our Corkscrew is made of Alpaca and quebracho colorado wood. ",
    image: "https://login.eltero.net/modules/products/uploads/product_47.png",
    category: "Corkscrew",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 41,
    name: "Corkscrew Gallonado",
    price: 95.0,
    description:
      "Our Corkscrew is made of Alpaca and quebracho colorado wood. It comes in a wooden box with velveteen interiors. ",
    image: "https://login.eltero.net/modules/products/uploads/product_48.png",
    category: "Corkscrew",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },

  // Wine set
  {
    //: 42,
    name: "Set Sommelier",
    price: 240.0,
    description:
      "This set contains two bottle savers, two wine bottle collars. ",
    image: "https://login.eltero.net/modules/products/uploads/product_49.png",
    category: "Wine set",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 43,
    name: "Wine Set",
    price: 135.0,
    description:
      "Wine Set that contains a Bottle saver, a wine bottle collar and a corkscrew. ",
    image: "https://login.eltero.net/modules/products/uploads/product_50.png",
    category: "Wine set",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 43,
    name: "Bottle saver and wine bottle collar set",
    price: 135.0,
    description:
      "This set comes with an alpaca wine bottle collar that has, in it´s interior, a felt lined to avoid wine spilling.",
    image: "https://login.eltero.net/modules/products/uploads/product_51.png",
    category: "Wine set",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },

  // Knives
  {
    //: 44,
    name: "Carving set 'Vizcacha'",
    price: 135.0,
    description:
      "Set of stainless steel knife and fork with Alpaca hilt. It has exclusively handcrafted designs. Blade: 12 cm. Handle: 10. Knife: 22.",
    image: "https://login.eltero.net/modules/products/uploads/product_55.png",
    category: "Knives",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 46,
    name: "Carving set 'Sombra'",
    price: 140.0,
    description:
      "Set of stainless steel knife and fork with Alpaca hilt. It has exclusively handcrafted designs. Blade: 12 cm. Handle: 10. Knife: 22.",
    image: "https://login.eltero.net/modules/products/uploads/product_56.png",
    category: "Knives",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 47,
    name: "Steak Set 'Martin Fierro'",
    price: 180.0,
    description:
      "Set of stainless steel knife and fork with Alpaca hilt. It has on it exclusively desing motifs. Blade: 20 cm. Hilt: 12,5 cm Knife: 32,5.",
    image: "https://login.eltero.net/modules/products/uploads/product_57.png",
    category: "Knives",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 48,
    name: "Steak Set 'Don Segundo Sombra'",
    price: 180.0,
    description:
      "Set of stainless steel knife and fork with Alpaca hilt. It has on it exclusively desing motifs. Blade: 20 cm. Hilt: 12,5 cm Knife: 32,5.",
    image: "https://login.eltero.net/modules/products/uploads/product_58.png",
    category: "Knives",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 49,
    name: "Steak Set 'Real'",
    price: 180.0,
    description:
      "Set of stainless steel knife and fork. Each one has a Quebracho Colorado rounded hilt with finishing touches of Alpaca.",
    image: "https://login.eltero.net/modules/products/uploads/product_59.png",
    category: "Knives",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 50,
    name: "Knife 'Sombra'",
    price: 115.0,
    description:
      "Set of stainless steel knife and fork. Each one has a Quebracho Colorado rounded hilt with finishing touches of Alpaca.",
    image: "https://login.eltero.net/modules/products/uploads/product_59.png",
    category: "Knives",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 51,
    name: "Knife 'Vizcacha'",
    price: 115.0,
    description:
      "Alpaca knife with stainless steel blade. The hilt´s desing, 'Vizcacha', it´s exclusively made.",
    image: "https://login.eltero.net/modules/products/uploads/product_61.png",
    category: "Knives",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },

  // Bottle saver gallonado
  {
    //: 52,
    name: "Bottle Saver Gallonado",
    price: 60.0,
    description:
      "Alpaca, also known as german silver, bottle saver with ﻿Gallonado motifs.",
    image: "https://login.eltero.net/modules/products/uploads/product_40.jpeg",
    category: "Bottle saver gallonado",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 53,
    name: "Bottle saver 'Flor Grande' Regular price",
    price: 60.0,
    description:
      "German silver bottle saver with Flor Grande motifs. It has a silicone stopper that expands to form a seal and keep the beverage fresh.",
    image: "https://login.eltero.net/modules/products/uploads/product_41.jpeg",
    category: "Bottle saver gallonado",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 54,
    name: "Bottle saver 'Flor Federal'",
    price: 60.0,
    description:
      "German silver bottle saver with Flor Grande motifs. It has a silicone stopper that expands to form a seal and keep the beverage fresh.",
    image: "https://login.eltero.net/modules/products/uploads/product_42.png",
    category: "Bottle saver gallonado",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 55,
    name: "Bottle saver 'Roseton'",
    price: 60.0,
    description:
      "Alpaca, also known as german silver, bottle saver with Roseton motifs.",
    image: "https://login.eltero.net/modules/products/uploads/product_43.png",
    category: "Bottle saver gallonado",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 56,
    name: "Bottle saver 'Liso con guarda'",
    price: 60.0,
    description:
      "Alpaca, also known as german silver, bottle saver with Liso con guarda motifs. It has a silicone stopper that expands to form a seal.",
    image: "https://login.eltero.net/modules/products/uploads/product_44.png",
    category: "Bottle saver gallonado",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 57,
    name: "Bottle saver 'Liso'",
    price: 60.0,
    description:
      "Alpaca, also known as german silver, bottle saver with Liso motifs.",
    image: "https://login.eltero.net/modules/products/uploads/product_45.png",
    category: "Bottle saver gallonado",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
  {
    //: 58,
    name: "Bottle saver 'Colonial'",
    price: 60.0,
    description:
      "German silver bottle saver with Colonial motifs. It has a silicone stopper that expands to form a seal and keep the beverage fresh.",
    image: "https://login.eltero.net/modules/products/uploads/product_46.png",
    category: "Bottle saver gallonado",
    stock: "",
    news: "",
    salesOff: {
      stock: 0,
      newPrice: 0,
      oldPrice: 0,
    },
    reviews: {
      comment: 0,
      rating: 0,
      userName: "",
    },
  },
];

module.exports = products;
