const express= require('express');
const router = express.Router();

let dist;
let dat;

router.get('/', (req, res)=> {
    res.render('home');
});


router.post('/', async(req,res)=>{
    try{
        dist = req.body.district;
        dat = (req.body.date).toString().split("-").reverse().join("-");
        console.log(dist);
        console.log(dat);
    }
    catch (err) {
        await res.json({message: err});
    }
});

let url=  "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=" + dist + "&date=" + dat;


module.exports = router;