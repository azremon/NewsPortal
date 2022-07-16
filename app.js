const express = require('express')
const morgan = require('morgan') //This is used to view the Method that is passing through
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const fs = require('fs')
require('dotenv/config');
const multer = require('multer')


const router = require('./routes');
// const upload = require('./uploadMiddleware');
const path = require('path');

const app = express();


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.slider_img + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });




app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true })) //To get given data by user as formatted
app.use(express.json()) //To get given data by user as json in terminal
const urlencodedParser = bodyParser.urlencoded({ extended: true }) //Body Parser
app.use(bodyParser.json());




//      Connecting Style with EJS
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/css', express.static(__dirname + 'public/owl.carousel.min.css'))




//    Setting View Engine
// app.set('views', './views/')
app.use(expressLayouts)
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs')
app.set('layout', './layouts/admin_layout')










app.use('/admin_home', router)
app.use('/breaking_news', router)
app.use('/latest_news', router)
app.use('/weeks_news', router)
app.use('/edit_contact', router)
app.use('/see_languages', router)




//////////////////////////Language Area //////////////////////////////
app.use('/insert_lang', router )
app.use('/delete_language/:id', router)








///////////////////// Breaking News ///////////////////
app.use('/create_breaking_news', router)
app.post('/create_single_breaking', urlencodedParser, router)   //UrlEncodedParser added for sending data from form
app.use('/delete_breaking/:id', router)
app.use('/edit_breaking/:id', router)
app.use('/update_single_breaking/:id', urlencodedParser, router)
app.use('single_breaking/:id', router)









///////////////////// Latest News ///////////////////
app.use('/create_latest_news', router)
// app.use('/create_single_breaking', router)
app.post('/create_single_latest', urlencodedParser, router)
app.use('/delete_latest/:id', router)
app.use('/edit_latest/:id', router)
app.use('/update_single_latest_news/:id', urlencodedParser, router)
app.use('single_latest/:id', router)









///////////////////// WEEKS News ///////////////////
app.use('/create_weeks_news', router)
// app.use('/create_single_breaking', router)
app.post('/create_single_weeks', urlencodedParser, router)
app.use('/save_address', router)
app.post('/save_address', urlencodedParser , router)

app.use('/update_address', router)
app.use('/update_address/:id', urlencodedParser, router)








app.use('/', router)

app.use('*', (req, res) => {
    res.send('Please use the Correct Routes')
})











// mongoose.connect('mongodb+srv://taniya:tanu123@news-cluster.avbt5.mongodb.net/News-Cluster?retryWrites=true&w=majority',{useNewUrlParser:true})
// mongoose.connect('mongodb+srv://tanu:taniya@247@cluster0.avbt5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser:true})
const PORT = process.env.PORT || 2200
mongoose.connect('mongodb+srv://Tanu:aspire5734Z@newsdatacluster.pmlf2.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log('Server is Running on PORT  ->  ', +PORT)
        })
    })
    .catch(e => {
        console.log(e)
    })


