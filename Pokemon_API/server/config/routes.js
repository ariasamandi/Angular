module.exports = function(app){
    app.get('/tasks', (req, res)=>{
        task.index(req, res);
    })
}