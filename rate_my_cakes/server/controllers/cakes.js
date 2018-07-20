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
    }
}