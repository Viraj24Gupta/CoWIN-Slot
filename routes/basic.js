const express= require('express');
const router = express.Router();
const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

GLOBAL.document = new JSDOM(html).window.document;

//return data by id
router.get('/', async(req,res)=>{
    try{
        const return_data_id = await db.findById(req.params.data_id);
        await res.json(return_data_id);
    }
    catch (err) {
        await res.json({message: err});
    }
});

let dis = document.getElementById("district");
let dat = document.getElementById("date");


const url=  "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=".concat( dis , "&date=", dat);

(async ()=>{
   try {
        const response = await got(url);
        // await res.json(response.body);
       let data = response.body;
       router.get('/', (req, res)=> {
           res.render('home',{data : data});
       });
   }
   catch (err) {
       console.log(err);
   }
})();

router.get('/', (req, res)=> {
    res.render('home');
});

module.exports = router;