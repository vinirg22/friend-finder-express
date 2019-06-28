
const express = require("express");
const path = require("path");



// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ROUTER


require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);




// The below code effectively "starts" our server
app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});
