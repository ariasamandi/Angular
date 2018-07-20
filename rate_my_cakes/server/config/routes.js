const cake = require('./../controllers/cakes.js');
module.exports = function(app){
    app.post('/create', (req, res)=>{
        cake.create(req, res);
    })
    app.get('/cakes', (req, res)=>{
        cake.index(req, res);
    })
    app.get('/show', (req, res)=>{
        cake.show(req, res);
    })
}