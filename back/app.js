// back/app.js

// Importaciones ES Modules
import createError  from 'http-errors';
import express      from 'express';
import path         from 'path';
import cookieParser from 'cookie-parser';
import logger       from 'morgan';
import session      from 'express-session';
import dotenv       from 'dotenv';
import contactRouter from './routes/contacto.js';
import cors from "cors" // Importar CORS


// Para usar __dirname en ESM:
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

// Importar pool de base de datos
import pool from './models/db.js';

// Importar rutas
import loginRouter    from './routes/admin/login.js';
import adminRouter from './routes/admin/novedades.js';
// import novedadesRouter from './routes/admin/novedades.js';
import indexRouter from './routes/index.js';

// Configuración de dotenv
dotenv.config();

const app = express();

// 1️⃣ Comprueba que este archivo efectivamente se está ejecutando:
console.log('▶️ routes/contacto.js cargado');

// 2️⃣ Comprueba que tienes tus credenciales en process.env:
console.log('   EMAIL_USER =', process.env.EMAIL_USER);
console.log('   EMAIL_PASS =', process.env.EMAIL_PASS);

// Configuración de CORS
app.use(
  cors({
    origin: "http://localhost:5173", // Reemplaza con la URL de tu frontend React
    credentials: true, // Permite cookies en solicitudes cross-origin
  }),
)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Middlewares
app.use(logger('dev'));                           // Registrar peticiones
app.use(express.json());                          // Parsear JSON
app.use(express.urlencoded({ extended: false })); // Parsear form data
app.use(cookieParser());                          // Parsear cookies
app.use(express.static(path.join(__dirname, 'public')));
app.use('/contacto', contactRouter);


app.use(session({
  secret: 'secvfjveneto',
  resave: false,
  saveUninitialized: true
}));

let secured = async (req, res, next) => {
  try {
    console.log(req.session.id_usuario);
    if (req.session.id_usuario) {
      next();
    } else{
      res.redirect ('admin/login');
    }
  } catch (error) {
    console.log(error);
  } 
}
  
// Rutas
//app.use('/', indexRouter);
// app.use('/admin/novedades', novedadesRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/novedades', adminRouter)

// // Ejemplo de consulta
pool.query("SELECT * FROM contactos")
  .then(resultados => console.log(resultados))
  .catch(err => console.error("Error al hacer query:", err));

// Rutas de sesion / ejemplos
app.get('/ejemplo', function (req, res) {
  if (req.session.nombre) {
    res.send('Hola ' + req.session.nombre);
  } else {
    res.send('No hay sesión iniciada');
  }
});

app.get('/', (req, res) => {
  const conocido = Boolean(req.session.nombre);
  res.render('index', { 
    title: 'Mi aplicación',
    conocido: conocido,
    nombre: req.session.nombre
  });
});

app.post('/ingresar', (req, res) => {
  if (req.body.nombre) {
    req.session.nombre = req.body.nombre;
  }
  res.redirect('/');
});

app.get('/salir', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error   = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

// Exporta la app como default para ESM
export default app;
