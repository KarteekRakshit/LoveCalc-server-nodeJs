const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000;;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/test', (req, res) => res.send('Hello World!'))
app.post('/calculate', (req, res) => {
    console.log(req.body.user, req.body.crush)
    let userArr = req.body.user.split("");
    let crushArr = req.body.crush.split("");
    let userTotal = 0
    let crushTotal = 0

    userArr.forEach(element => {
        let val = parseInt(element.charCodeAt(0))
        userTotal += (val / 2 == 0) ? val / 2 : val;
    });
    crushArr.forEach(element => {
        let val = parseInt(element.charCodeAt(0))
        crushTotal += (val / 2 == 0) ? val * 2 : val;
    });
    let loveTotal = (userTotal * crushTotal)/100
    console.log(loveTotal)
    if (loveTotal < 100) {//99
        let val = Math.abs(loveTotal)
        let fval = val - Math.floor(val)
        console.log(1, val, fval)
        res.send({
            user: req.body.user,
            crush: req.body.crush,
            value: fval
        })
    } else if (loveTotal >= 100 && loveTotal < 1000) {
        let val = Math.abs((loveTotal / 10) - 10)
        let fval = val - Math.floor(val)
        console.log(2, val, fval)
        res.send({
            user: req.body.user,
            crush: req.body.crush,
            value: fval
        })
    } else if (loveTotal >= 1000 && loveTotal < 10000) {
        let val = Math.abs(loveTotal / 100)
        let fval = val - Math.floor(val)
        console.log(3, val, fval)
        res.send({
            user: req.body.user,
            crush: req.body.crush,
            value: fval
        })
    } else {
        console.log(4)
        res.send({
            user: req.body.user,
            crush: req.body.crush,
            value: 0.09000000000000341
        })
    }
})

console.log('port:', port)
app.listen(port, () => console.log(`LoveCalc app listening on port ${port}!`))