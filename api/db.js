const mongoose = require('mongoose');
const dotenv = require ('dotenv');
//prueba andres

dotenv.config();

// paso 1, todos los modelos se sincronizan con mongo Atlas(base de datos en la nube)
mongoose
.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then (()=>{
    console.log('DB connected');
})
.catch(err=> console.log(err));

module.exports = {connection: mongoose}