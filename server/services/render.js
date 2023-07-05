exports.homeRoutes = (req, res) =>{
    res.render('index',{customer: "New Data"});
}


exports.add_customer = (req, res) =>{
    res.render('add_customer');
}

exports.update_customer = (req, res) =>{
    res.render('update_customer');
}