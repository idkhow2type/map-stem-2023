import express from 'express'
import fs from 'fs'
import cookie from 'cookie-parser';

const app: express.Application = express();

app.engine('html', (path, options, callback) => {
    fs.readFile(path, (err, content) => {
        if (err) return callback(err);
        const rendered = content.toString().replace(/{{(\w+)}}/g, (_, p1) => {
            return options[p1];
        });
        return callback(null, rendered);
    });
});

app.use(express.static('public'));
app.use(cookie());
app.use(express.json());
app.use(express.text());
app.set('views', './views');
app.set('view engine', 'html');


app.get('/', (req, res) => {
    res.render('index.html')
});

app.get('/maps', (req, res) => {
    res.render('maps.html')
});

app.get('/viewmap', (req, res) => {
    res.render('viewer.html')
});

app.get('*', (req, res) => {
    res.status(404).send('404 not found');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});