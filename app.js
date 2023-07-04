const express = require('express');
const morgan = require('morgan')

const app = express();

app.set('view engine', 'ejs')

app.listen(3000);

app.use(morgan('tiny'));

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index',{ title: 'ABNB Insurance'})
  });

  app.get('/addcustomer', (req, res) => {
    res.render('addcustomer',{ title: 'ABNB Insurance'})
  });

app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});