const Products = require('./models/Products');
const products = require('./products/products');

// paso 3, se agregan los productos al modelo dentro de mongoose y por lo tanto a mongo Atlas

// se actualiza automaticamente la base de datos
async function loader(){
    try {
    await Products.insertMany(products);
    console.log('products in mongo Atlas');
   
    } catch(err){
      console.log("Productos cargados anteriormente");
      return 
    }
};

// Products.remove({}, (err) => {
//   if (err) {
//       console.log(err);
//   } else {
//       console.log('All products removed successfully!');
//   }
// });

module.exports = loader;
