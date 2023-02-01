const Products = require("./models/Products"); //modelo
const products = require("./additional/ProductsDB"); // datos

const categories = require("./additional/categories"); // datos
const Categories = require("./models/Categories"); // datos

const Status = require("./models/Status");
const status = require("./additional/StatusDB");

const Users = require("./models/Users");
const Favorites = require("./models/Favorites");
const Address = require("./models/Address.js");
const Comments = require("./models/Comments");

const Order = require("./models/Order")

// paso 3, se agregan los productos al modelo dentro de mongoose y por lo tanto a mongo Atlas

async function loaderCategories() {
  try {
    const count = await Categories.countDocuments();
    if (count > 0) {
      console.log("categories cargadas anteriormente");
      return;
    }
    await Categories.insertMany(categories);
    console.log("categories in mongo Atlas");
  } catch (err) {
    console.log(err);
    return;
  }
}

async function loaderStatus() {
  try {
    const count = await Status.countDocuments();
    if (count > 0) {
      console.log("Status cargados anteriormente");
      return;
    }
    await Status.insertMany(status);
    console.log("Status in mongo Atlas");
  } catch (err) {
    console.log(err);
    return;
  }
}

// se hace la relacion PRODUCTS-CATEGORY Y SE INSERTAN LOS DATOS A LA TABLA PRODUCTS
async function loaderProducts() {
  try {
    const count = await Products.countDocuments();
    if (count > 0) {
      console.log("Productos cargados anteriormente");
      return;
    }

    const promesas = products.map((e) => {
      return Categories.findOne({ category: e.category }).exec();
    });

    const ids = await Promise.all(promesas);
    // console.log(ids)
    const idSolos = ids.map((e) => [e._id].join("")); //["12312","3123"]
    //    console.log(idSolos)
    for (let i = 0; i < products.length; i++) {
      //    console.log(ids[i].category)
      // console.log(products[i].category)
      if (products[i].category === ids[i].category) {
        products[i].category = idSolos[i];
      }
    }

    // console.log(products)

    await Products.insertMany(products);
    // const relacionadas = await Products.find({}).populate("category").exec();
    // console.log(relacionadas);

    console.log("products in mongo Atlas");
  } catch (err) {
    console.log(err);
    return;
  }
}

//reinician la base de datos
// Products.remove({}, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("All products removed successfully!");
//   }
// });

// Categories.remove({}, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("All Categories removed successfully!");
//   }
// });

//  Users.remove({}, (err) => {
//    if (err) {
//      console.log(err);
//    } else {
//      console.log("All Users removed successfully!");
//    }
//  });

// Favorites.remove({}, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("All Favorites removed successfully!");
//   }
// });

// Address.remove({}, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("All Address removed successfully!");
//   }
// });

// Comments.remove({}, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("All Comments removed successfully!");
//   }
// });

// Status.remove({}, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("All Status removed successfully!");
//   }
// });

//  Order.remove({}, (err) => {
//   if (err) {
//      console.log(err);
//    } else {
//     console.log("All Order removed successfully!");
//    }
//  })

module.exports = { loaderProducts, loaderCategories,loaderStatus };
