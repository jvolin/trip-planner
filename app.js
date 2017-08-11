const express = require('express');
const app = express();
const db = require('./models');
const nunjucks = require('nunjucks');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

const morgan = require('morgan');
app.use(morgan('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const path = require('path');
app.use(express.static(path.join(__dirname, '/public')));

app.use(function (err, req, res, next) {
  res.render('error');
});

const PORT = 3000;

db.sync({force:true})
.then(() => {
  console.log('db synced!');
  app.listen(PORT, function () {
    console.log(`server listening on port ${PORT}`);
  });
});
