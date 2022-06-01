const path = require('path');
const express = require('express');
// Express session to handle session cookies
const session = require('express-session');
// Handlebars template engine for front-end
const exphbs = require('express-handlebars');
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Begins session and connects to Sequelize db
const sess = {
  secret: 'Super secret secret',
  cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
    db: sequelize,
  })
};
// Instructs app to use Express Session for the session handling
app.use(session(sess));

const hbs = exphbs.create({ helpers });
// Set handlebars as the template engine for the server
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}.`
    )
  );
});
