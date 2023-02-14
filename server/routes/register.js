const express = require('express')
const router = express.Router();
const db = require('../models')

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/registerBackend', async (req, res) => {
    console.log("registering an user")
    try {
        //scrape info from the header
        let {email, password, username} = req.body

        //create user in db
        let insertUser = await db.userinfo.create({
            username,
            email,
            password
        })
        console.log(insertUser);

        res.redirect('/login')
    } catch (error) {
        console.log(error);
        res.status(404).render('registration', {
            error: `Error: can't register username`
        })
    }

})