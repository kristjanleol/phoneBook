const date= require('../generateDate.js');
const mongoose = require('mongoose');
const Phone = mongoose.model('Phone');


exports.getItems = (req, res)=>{
    //let day= date.getDate();
    Phone.find((error, phoneList) =>{
       if(!error){
        res.render("index.ejs", {items: phoneList});
       } else {
           console.log("Could not retrieve data: ", error);
       }
    });
};

exports.postItems = (req, res)=>{
    const item = req.body.name;
    const phone_number = req.body.phone;
    let newPhone = new Phone();
    newPhone.name = item;
    newPhone.phone = phone_number;

    newPhone.save((error, response)=> {
        if(!error){
            res.redirect('/');
        } else {
            console.log(error);
        }
    });
};
exports.deleteItems = (req, res)=>{
    console.log("Delete",req.body.checkbox);
    //debugger;
    const checkedItemId = req.body.checkbox;

    Phone.findByIdAndRemove(checkedItemId, function(error) {
        if(!error){
            console.log("Item deleted");
            res.redirect("/");
        } else {
            console.log(error);
        }
    });
}