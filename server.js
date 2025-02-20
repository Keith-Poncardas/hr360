const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const minifyHTML = require("express-minify-html");

const app = express();
const PORT = 3000;

app.use(
  minifyHTML({
    override: true,
    htmlMinifier: {
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
    },
  })
);

app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);

const { getDashboard } = require('./controller/mainController');

app.get('/', getDashboard);
app.use('/hr', require('./routes/mainRoutes'));

app.listen(PORT, () => console.log(`Server is running and connected to http://localhost:${PORT} ✅`));