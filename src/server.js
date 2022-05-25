const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Settings (Configuraciones)
// ---------------------------------------------------------------
app.set('port', process.env.PORT || 4000);

// Allow origin HTTP
app.use(cors());

// Middlewares (Programas intermedios)
// ---------------------------------------------------------------
// Para ver las peticiones al servidor con un formateado de texto
app.use(morgan('dev'));
// Para verificar si los datos provienen en formato json
app.use(express.json());
// Para procesar solo datos en formato de texto
app.use(express.urlencoded({ extended: false }));

// Routes (Rutas)
// ---------------------------------------------------------------
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/services', require('./routes/service.routes'));
app.use('/api/tutors', require('./routes/tutor.routes'));

// Static files (Archivos estáticos)
// ---------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;