const Author = require('./../models/author.js');
module.exports = {
    index: (req, res)=>{
        Author.find({}, (err, data)=>{
            if(err) {
                res.json(err);
            } 
            else {
                res.json(data);
    
            }
        })
    },
    show: (req, res)=>{
        Author.findOne({_id: req.params.id}, (err, data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data)
            }
        })
    },
    create: (req, res)=>{
        Author.create(req.body, (err, data)=>{
            if(err){
                console.log(err);
                res.json(err);
            }
            else{
                res.json(data)
            }
        })
    },
    delete: (req, res)=>{
        Author.findOneAndRemove({_id: req.params.id}, (err, data)=>{
            if(err){
                console.log(err);
                res.json(err)
            }
            else{
                console.log("Removed");
                res.json({removed: data})
            }
        })
    },
    update: (req, res)=>{
        Author.update({_id: req.params.id}, req.body, (err, data)=>{
            if(err){
                res.json(err)
            }
            else{
                res.json(data)
            } 
        })
    }
}