const express = require('express');
const app = express();
require('ejs');

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});
app.get('/premium', (req, res) => {
    res.render('premium.ejs');
});

app.get('/invite', (req, res) => {
    res.redirect('https://discord.com/oauth2/authorize?client_id=1057043734526701589&permissions=2415938576&scope=bot%20applications.commands');
})

app.get('/support', (req, res) => {
    res.redirect('https://discord.gg/vanityroles');
})

app.listen(4829, () => console.log('http://localhost:4829'));