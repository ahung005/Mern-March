const mongoose = require("mongoose");
const dbName = "products3";

mongoose.connect(`mongodb://localhost/${ dbName }`, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log(`Established a connection to database: ${dbName}`))
.catch(err => console.log(`Something went wrong when connecting to database: ${dbName}`, err));