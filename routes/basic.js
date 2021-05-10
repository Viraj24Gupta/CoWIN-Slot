const express= require('express');
const router = express.Router();
const got = require('got');
const ejs = require('ejs');

let dist;
let dat;

router.get('/', (req, res)=> {
    res.render('home');
});


router.post('/', async(req,res)=>{
    try{
        dist = req.body.district;
        dat = (req.body.date).toString().split("-").reverse().join("-");

        console.log(dist,dat);
    }
    catch (err) {
        await res.json({message: err});
    }
    let url=  "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=" + String(dist) + "&date=" + String(dat);
    console.log(url);
    (async ()=>{
        try {
            const response = await got(url);
            // await res.json(response.body);
            let data = response.body;
            res.render('result',{data : data});
        }
        catch (err) {
            console.log(err);
        }
    })();
});

module.exports = router;