const express = require('express');
const app = express();

const mbti = require('./mbti.js');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(8080, () => {
    console.log('Express app listening on port 3000');
});

app.get('/mbti', (req, res) => {
    const sortedKeys = Object.keys(req.query).sort();

    const sortedArray = sortedKeys.map(function (key) {
        return parseInt(req.query[key]);
    });

    score = mbti(sortedArray)

    const n1 = score.I > score.E ? "I": "E"
    const n2 = score.N > score.S ? "N" : "S"
    const n3 = score.F > score.T ? "F" : "T"
    const n4 = score.P > score.J ? "P" : "J"

    const data = {
        mbti : `${n1}${n2}${n3}${n4}`,
        mbti_score : score
    }

    //res.send(`${n1}${n2}${n3}${n4}`);
    res.render('template', data);
});


