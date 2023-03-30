const PersonController = require('../controllers/person.controller');  //Import the code from Code Block 1

module.exports = (app) => {
    app.get('/api', PersonController.index);
    app.post('/api/people', PersonController.createPerson);     /* This is new */
    app.get('/api/people', PersonController.getAllPeople); 
        //can be the same route as POST as long as we have a different http verb
    app.get('/api/people/:id', PersonController.getPerson);
}