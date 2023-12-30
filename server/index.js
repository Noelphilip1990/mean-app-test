const express = require('express');
const cors = require('cors');
const app = express();


// code exection

app.use(cors());

app.get('/', (req, res) => {
    const test = [
        'test1', 'test2'
    ]
    
    res.send(test);
});


app.listen(3000, () => {

});