const IceCream = require("../models/iceCream.model");

module.exports.findAllIceCreams = (req, res) => {
    console.log("hey I'm finding the ice creams here, but in a new york accent");
    IceCream.find({})
        .then(allIceCreams => res.json({results: allIceCreams}))
        .catch(err => res.json({message: "that didn't quite work", error: err}))
}

module.exports.createIceCream = (req,res) => {
    IceCream.create(req.body)
        .then(newIceCream => res.json({iceCream: newIceCream}))
        .catch(err => res.json({message: "that didn't quite work", error: err}))
}

module.exports.findSingleIceCream = (req, res) => {
    IceCream.findOne({ _id: req.params._id })
        .then(oneSingleIceCream => res.json({ iceCream: oneSingleIceCream }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.updateExistingIceCream = (req, res) => {
    IceCream.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedIceCream => res.json({ iceCream: updatedIceCream }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.deleteAnExistingIceCream = (req, res) => {
    IceCream.deleteOne({ _id: req.params._id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.addTopping = (req,res) => {
    IceCream.updateOne(
        {_id: req.params._id},
        {$push: {toppings: req.body.topping}}
    )
        .then(result => res.json({result: result}))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}