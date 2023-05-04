const app = require('./app');

const port = 8000;

app.listen(port, (err) => {
    if(err){
        console.log('error in creating the server');
        return;
    }

    console.log(`server is up and running on port ${port}`);

})