const express= require('express');
const router = express.Router();
const got = require('got');

(async ()=>{
    try {
        const response = await got(url);
        // await res.json(response.body);
        let data = response.body;
        router.get('/result', (req, res)=> {
            res.render('result',{data : data});
        });
    }
    catch (err) {
        console.log(err);
    }
})();

module.exports = router ;