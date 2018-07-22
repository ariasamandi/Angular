const Cake = require('./../models/cake.js');
module.exports = {
    create: (req, res)=>{
        console.log(req.body);
        Cake.create(req.body, (err, data)=>{
            if(err){
                console.log(err);
                res.json(err);
            }
            else{
                console.log("this is the create method");
                console.log(data);
                res.json({data: data})
            }
        })
    },
    index: (req, res)=>{
        Cake.find({}, (err, cakes)=>{
            if(err){
                console.log(err);
                res.json(err);
            }
            else{
                res.json(cakes)
            }
        })
    },
    show: (req, res)=>{
        Cake.findOne({_id: req.params.id}, (err, data)=>{
           if(err){
               res.json(err);
           } 
           else{
               res.json(data);
           }
        })
    },
    rating: (req, res)=>{
        Cake.findOne({_id: req.params.id}, (err, data)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(data);
                Cake.update(data, {$push: {rating: {rating: req.body.rating, comment: req.body.comment}}}, (err, rating)=>{
                    if(err){
                        console.log('didnt work bruh');
                    }
                    else{
                        console.log(rating);
                        console.log("UPDATED!");
                        console.log(data);
                        res.json(data);
                        
                    }
                })
            }
        })
    }
}