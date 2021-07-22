import express from 'express';
import fortunes from './data/fortunes.js';
import bodyParser from 'body-parser';

const PORT = process.env.PORT||5000

const app = express();
app.use(express.json()); 

// to get data
app.get('/fortunes', (req, res) => {
    res.send(fortunes);
});

app.get('/fortunes/random', (req, res) => {
    console.log('requesting random fortunes');

    const random_index = Math.floor(Math.random() * fortunes.length);
    const r_fortunes = fortunes[random_index];
    res.json(r_fortunes);
});

app.get('/fortunes/:id', (req, res) => {
    console.log(req.params);

    res.json(fortunes.find(f => f.id == req.params.id));
});


// to add new data
app.post('/fortunes', (req, res) => {
    console.log(req.body);
});

// to update data using id params
app.put('/fortunes', (req, res) => {

});

// to delete data using id params
app.delete('/fortunes', (req, res) => {

});

app.listen(PORT, () => console.log(`listening to ${PORT}`));