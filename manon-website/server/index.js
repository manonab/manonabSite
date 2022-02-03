require('dotenv').config();
const cors = require('cors');

const http = require('http');
const express = require('express');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}))

const PORT = process.env.PORT || 4000
//nodemailer part
const nodemailer = require('nodemailer');

app.get('/', cors(), async(req,res) => {
    res.send('this is working')
});

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
});

app.post('/post_name', async (req, res) => {
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'abelcoindozm@gmail.com',
            pass:'mikyyjiyacfidlaf'
        }
    });

    let {name, company, content, email } = req.body;
    
    let details = {
        subject:`Message de ${name} et qui bosse à ${company}`,
        text:`${content + " ." + " Adresse pour les contacter : " + email}`,
        to:`abelcoindozm@gmail.com`,
        from:`${email}`
    }
    transporter.sendMail(details, (err) => {
        if(err){
            res.send(err)
        }else{
            res.send('message sent !')
        }
    })

})