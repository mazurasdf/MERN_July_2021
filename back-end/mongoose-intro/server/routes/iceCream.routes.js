const IceCreamController = require("../controllers/iceCream.controller");

module.exports = app => {
    app.get("/api/allIceCreams", IceCreamController.findAllIceCreams);
    app.post("/api/create", IceCreamController.createIceCream);
    app.get("/api/:_id/findOne/", IceCreamController.findSingleIceCream);
    app.patch("/api/:_id/update/", IceCreamController.updateExistingIceCream);
    app.delete("/api/:_id/delete/", IceCreamController.deleteAnExistingIceCream);
    app.put("/api/:_id/addTopping", IceCreamController.addTopping);
}