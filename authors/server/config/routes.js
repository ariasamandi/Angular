const mongoose = require('mongoose');
const path = require('path');
const author = require('./../controllers/authors.js');
module.exports = function(app){
    app.get('/api/authors', (req, res)=>{
        author.index(req, res);
    })
    app.post('/api/create', (req, res)=>{
        author.create(req, res);
    })
    app.get('/api/author/:id', (req, res)=>{
        author.show(req, res);
    })
    app.delete('/api/delete/:id', (req, res)=>{
        author.delete(req, res);
    })
    app.put('/api/update/:id', (req, res)=>{
        author.update(req, res);
    })
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}