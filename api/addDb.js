const Products = require("./models/Products"); //modelo
const products = require("./additional/products"); // datos

const categories = require("./additional/categories"); // datos
const Categories = require("./models/Categories"); // datos

// paso 3, se agregan los productos al modelo dentro de mongoose y por lo tanto a mongo Atlas

async function loaderCategories() {
  try {
    //Insert products
    await Categories.insertMany(categories);
    console.log("categories in mongo Atlas");
  } catch (err) {
    console.log("categories cargados anteriormente");
    return;
  }
}

// se hace la relacion PRODUCTS-CATEGORY Y SE INSERTAN LOS DATOS A LA TABLA PRODUCTS
async function loaderProducts() {
  try {
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

    console.log(products)

    await Products.insertMany(products);
    // const relacionadas = await Products.find({}).populate("category").exec();
    // console.log(relacionadas);

    console.log("products in mongo Atlas");
  } catch (err) {
    console.log("Productos cargados anteriormente");
    return;
  }
}

// reinician la base de datos
Products.remove({}, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("All products removed successfully!");
  }
});

Categories.remove({}, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("All products removed successfully!");
  }
});

module.exports = { loaderProducts, loaderCategories };
