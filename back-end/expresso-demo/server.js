const express = require("express");
const app = express();
const port = 8000;
var faker = require('faker');

class Order{
    constructor(){
        //bases, sweetener, milk additives, ice(boolean), toppings, extra shots of espresso
        const bases = ["dark roast","expresso", "medium roast", "french roast", "light roast", "black tea", "chai tea", "green tea"];
        const sweetener = ["sugar", "splenda", "stevia", "chocolate syrup", "caramel", "vanilla syrup", "brown sugar", "honey", "nails", "oil fire"];
        const additives = ["protein powder", "cinnamon", "powdered sugar", "breab", "everything bagel seasoning", "coconut flakes", "milk", "oat milk", "water", "butter", "coconut milk", "cream", "condensed milk", "half n half", "hot cocoa mix", "whiskey"]

        this.base = bases[Math.floor(Math.random() * bases.length)]
        this.sweetener = sweetener[Math.floor(Math.random() * sweetener.length)]
        this.additive = additives[Math.floor(Math.random() * additives.length)]
        this.iced = Math.floor(Math.random() * 2) ? true : false
        this.baristaName = faker.name.findName();
        this.baristaFace = faker.internet.avatar();
        this.coffeeShop = `${faker.company.companyName()} Coffee Roasters`;
        this.price = `$${faker.finance.amount()}`;
        this.phrase = `Thanks for ordering from us! ${faker.company.catchPhrase()}`
    }
}

app.get("/test", (req,res)=>{
    res.json({message: "hey it's me!"})
})

app.get("/order", (req,res) => {
    res.json(new Order())
})

app.listen(port, () => console.log(`running on port ${port}!!!!!`));