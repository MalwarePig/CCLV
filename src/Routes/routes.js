const express = require('express'); //guardar express en una variable de servidor
const router = express.Router(); //usar modulo de router de ex´press
const usuariosControllers = require('../Controllers/usuariosControllers');
const alumnosControllers = require('../Controllers/alumnosControllers');
/////////////////////////////////////////////////////////////////////////// USUARIOS /////////////////////////////////////////////////////////////////////////////////
//Acceder a Home
 router.get('/', (req, res) => {
	//res.send('holoo');
	res.render('index.html'); 
});
 

//Iniciar logueo
router.post('/Login', usuariosControllers.registroMaestro);
 

/////////////////////////////////////////////////////////////////////////// ALUMNOS /////////////////////////////////////////////////////////////////////////////////
router.get('/MenuAlumnos', (req, res) => {
	//res.send('holoo');
	res.render('../Views/Alumnos/MenuTab.html'); 
});

router.post('/RegistrarAlumno', alumnosControllers.RegistrarAlumno);
router.get('/BuscarAlumno/:data', alumnosControllers.BuscarAlumno);
router.post('/EliminarAlumno', alumnosControllers.EliminarAlumno);
router.post('/AtualizarAlumno', alumnosControllers.AtualizarAlumno);


module.exports = router;
