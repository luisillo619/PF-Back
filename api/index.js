const app = require("./app.js");
let dotenv = require('dotenv');
dotenv.config();
const { connection } = require("./db.js");
const { loaderProducts, loaderCategories, loaderStatus } = require("./addDb");


// Carga unicamente los datos de Products a la base de datos(mongoDb)

// paso 2 se hace la conexion de la base de datos con el servidor, el servidor le proporciona los datos de products a mongo Atlas
const PORT = process.env.PORT || 3001

connection
  .syncIndexes({ force: true })
  .then(async () => {
    await loaderCategories();
    await loaderProducts();
    await loaderStatus() // paso 3
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT: ${PORT}`);
    });
  });

// En este punto tanto el servidor con la base de datos estan activos, por lo tanto se puede empezar a trabajar con los datos
