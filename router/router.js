const express = require('express');
const path = require('path');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
    res.render("index");
})

router.post('/getdata', (req, res) => {
    const data = req.body.data;
    if(data === 'people' || data === 'planets' || data === 'starships') {
        res.redirect(data);
    } else {
        res.send("Unable to get data");
    }
})

router.get('/people', (req, res) => {
    axios
        .get('http://swapi.dev/api/people/')
        .then(({data}) => {
            console.log(data);
            res.render("people", {
                msg: data
            });
        })
        .catch((err) => {
            res.send("Unable to get data.");
        })
})

router.get('/planets', (req, res) => {
    axios
        .get('http://swapi.dev/api/planets/')
        .then(({data}) => {
            res.render("planets", {
                msg: data
            })
        })
        .catch((err) => {
            res.send("Unable to get data.")
        })
})

router.get('/starships', (req, res) => {
    axios
        .get('http://swapi.dev/api/starships/')
        .then(({data}) => {
            res.render("starships", {
                msg: data
            })
        })
        .catch((err) => {
            res.send("Unable to get data.")
        })
})

module.exports = router;