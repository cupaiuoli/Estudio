const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

// Settings
app.set('puerto', process.env.PORT || 3000);

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

// Routes
app.use('/api/employees', require('./routes/employee.routes'));

// Iniciando el servidor
app.listen(app.get('puerto'), () => {
    console.log('Servidor en puerto', app.get('puerto'));
});
