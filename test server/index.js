const express = require('express');
const app = express();
const cors = require('cors');
const hbs = require('hbs')

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));



var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))
// app.use(cors);


// const products = require('./routes/Newproducts');
// app.use(products);

// const Categor = require('./routes/NewCategory');
// app.use(Categor);

// const bas = require('./routes/PrAndCat');
// app.use(bas);

const Games = require('./routes/Games');
app.use(Games);


app.use((req, res) => {
    res.send('<h1>Page not found</h1>')
})

app.listen(5000);



// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));