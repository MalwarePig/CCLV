const express = require('express'); //guardar express en una variable de servidor
const router = express.Router(); //usar modulo de router de ex´press
 
const UserController = require('../Controllers/UserController');
 
/////////////////////////////////////////////////////////////////////////// USUARIOS /////////////////////////////////////////////////////////////////////////////////
//Acceder a login
var reinicio = router.get('/', (req, res) => {
	//res.send('holoo');
	res.render('Admin/Login.html');
});

var reinicio = router.get('/Home', (req, res) => {
	//res.send('holoo');
	res.render('Admin/dashboard.html');
});

//Iniciar logueo
router.post('/Login', UserController.login);
//Acceder formulario Registrar usuario

//Iniciar logueo
router.get('/Signup',  UserController.SignUp);
 
//Registrar usuario en db
router.post('/AddUser', UserController.save);

//Eliminar usuario en db
router.post('/EliminarUsuario', UserController.EliminarUsuario);

 

//Carga pagina principal
router.get('/home', UserController.HOME);
/////////////////////////////////////////////////////////////////////////// ALUMNOS ///////////////////////////////////////////////////////////////////////////////
var reinicio = router.get('/Alumnos', (req, res) => {
	//res.send('holoo');
	res.render('Alumnos/Alumnos.html');
});

/////////////////////////////////////////////////////////////////////////// Maestros ///////////////////////////////////////////////////////////////////////////////
var reinicio = router.get('/Maestro', (req, res) => {
	//res.send('holoo');
	res.render('Maestro/Maestros.html');
});
 
 
/////////////////////////////////////////////////////////////////////////// ENTRAR A HOME ///////////////////////////////////////////////////////////////////////////////



module.exports = router;

/*ESTA ES UNA VERSION DIRECTA SIN VERIFICAR LOGIN
router.get('/home', (req, res) => {
    //res.send('holoo');
    res.render('index.html',{title: 'Gemak'});
});*/

/*router.get('/Maquinas', (req, res) => {
    res.render('Maquinas.html',{title: 'Maquinas'});
});*/

/*
//rutas
app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname,'/views/index.html'));//Obtiene ruta de este archiv Js + ruta del archivo a mostrar
    //console.log(__dirname);//Muestra ruta generica de archivo que lo ejecuta
    //console.log(path.join(__dirname,'views/index.html'));
    res.render('index',{title: 'Gemak'});
});
*/