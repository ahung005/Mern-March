const express = require('express');
const cors = require('cors')    /* This is new */
const app = express();

const port = 8000;

app.use(cors())                 /* This is new */
app.use(express.json());                           /* This is new and allows JSON Objects to be posted */
app.use(express.urlencoded({ extended: true }));   /* This is new and allows JSON Objects with strings and arrays*/

require('./config/mongoose.config');    /* This is new */
require('./routes/person.routes')(app);   // We're importing the routes export. 

// These two lines are the long-hand notation of the code above. They better show what's going on.
    // const personRoutes = require("./routes/person.routes");  <-- assign the exported function to a const
    // personRoutes(app);     <-- invoke the function and pass in the express "app" server

app.listen(port, () => console.log(`Listening on port: ${port}`) );
