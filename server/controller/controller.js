var customerdb = require('../model/models');

// create and save new user
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new user
    const customer = new customerdb({
        name : req.body.name,
        email : req.body.email,
        photo: req.body.photo,
        date : req.body.date,
    })

    // save user in the database
    customer
        .save(customer)
        .then(data => {
            res.send(data)
            // res.redirect('/add-customer');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}