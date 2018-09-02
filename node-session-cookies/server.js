const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const MONGO_URL = 'mongodb://localhost:27017/test-sessions';
const app = express();

app.use(session({
  secret: 'SECRET KEY',
  resave: true,
  saveUninitializer: true,
  store: new MongoStore({
    url: MONGO_URL,
    autoReconnect: true
  })
}))

app.listen(3000, () => {
  console.log('Listening on port 3000');
});


app.get('/', (req, res) => {
  console.log(req.session.counter);
  req.session.counter = req.session.counter ? req.session.counter + 1 : 1;
  res.send(`Accessed ${req.session.counter} times`);
})
