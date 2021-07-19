const express = require("express");
const app = express();
const port = 8000;

require("./server/config/mongoose.config.js");

app.use(express.json(), express.urlencoded({extended: true}));

require("./server/routes/iceCream.routes")(app);

app.listen(port, ()=>console.log(`running on port ${port} is a new way I like to be!!`));