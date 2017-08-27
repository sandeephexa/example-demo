module.exports = function(app){
    var students = require('./students');
    app.get('/students', students.findAll);
    
    
}