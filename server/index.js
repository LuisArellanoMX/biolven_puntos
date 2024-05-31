// Nuestras dependencias
const express = require('express');
const app = express();
const { Pool } = require('pg'); // Cambiado a PostgreSQL
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
import {
    DB_DATABASE,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT,
    DB_USER,
    FRONTEND_URL,
    PORT,
  } from "./config.js";
  
// Configuración de la base de datos (PostgreSQL)
const pool = new pg.Pool({
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
  });

app.use(express.json());
app.use(cors());


// Ruta para registrar un usuario
app.post('/asociado', (req, res) => {
    const { Email, UserName, Password, Code, DatosBan, Factor } = req.body;
    const SQL = 'INSERT INTO users (email, username, password, code, datos_bancarios, factor) VALUES ($1, $2, $3, $4, $5, $6)';
    const Values = [Email, UserName, Password, Code, DatosBan, Factor];

    pool.query(SQL, Values, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            console.log('Usuario insertado correctamente!');
            res.send({ message: 'Usuario insertado!' });
        }
    });
});

// Ruta para actualizar un usuario
app.put('/asociado/:id', (req, res) => {
    const { id } = req.params;
    const { Email, UserName, Password, Code, DatosBan, Factor } = req.body;
    const SQL = 'UPDATE users SET email = $1, username = $2, password = $3, code = $4, datos_bancarios = $5, factor = $6 WHERE id = $7';
    const Values = [Email, UserName, Password, Code, DatosBan, Factor, id];

    pool.query(SQL, Values, (err, results) => {
        if (err) {
            res.send(err);
        } else if (results.rowCount === 0) {
            res.status(404).send({ message: 'Usuario no encontrado!' });
        } else {
            console.log(`Usuario con ID ${id} actualizado correctamente!`);
            res.send({ message: `Usuario con ID ${id} actualizado!` });
        }
    });
});

// Ruta para obtener todos los usuarios
app.get('/asociado', (req, res) => {
    pool.query('SELECT * FROM users', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result.rows);
        }
    });
});

// Ruta para obtener un usuario por ID
app.get('/asociado/:id', (req, res) => {
    const { id } = req.params;
    const SQL = 'SELECT * FROM users WHERE id = $1';

    pool.query(SQL, [id], (err, result) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            res.status(500).send('Error al obtener el registro');
            return;
        }

        if (result.rows.length === 0) {
            res.status(404).send('Asociado no encontrado');
            return;
        }

        res.json(result.rows[0]);
    });
});

// Ruta para eliminar un usuario por ID
app.delete('/asociado/:id', (req, res) => {
    const { id } = req.params;
    const SQL = 'DELETE FROM users WHERE id = $1';

    pool.query(SQL, [id], (err, results) => {
        if (err) {
            res.send(err);
        } else if (results.rowCount === 0) {
            res.status(404).send({ message: 'Usuario no encontrado!' });
        } else {
            console.log(`Usuario con ID ${id} eliminado correctamente!`);
            res.send({ message: `Usuario con ID ${id} eliminado!` });
        }
    });
});


// Middleware para servir archivos estáticos
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Configuración de multer para guardar archivos en una carpeta local
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Endpoint para manejar la carga de la imagen
app.post('/upload', upload.single('image'), (req, res) => {
    const filePath = req.file.filename;
    const { id_solicitud, comentario } = req.body;

    const SQL = 'UPDATE solicitudes SET imagen = $1, comentario_respuesta = $2, estado_solicitud = 1 WHERE id_solicitud = $3';
    pool.query(SQL, [filePath, comentario, id_solicitud], (err, result) => {
        if (err) throw err;
        res.send('File uploaded and saved to database');
    });
});


// Configuración del servidor
app.listen(PORT, () => {
    console.log('Server is running on port '+PORT);
});