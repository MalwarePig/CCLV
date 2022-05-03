const express = require('express'); //guardar express en una variable de servidor
const router = express.Router(); //usar modulo de router de ex´press
const usuariosControllers = require('../Controllers/usuariosControllers');

/////////////////////////////////////////////////////////////////////////// USUARIOS /////////////////////////////////////////////////////////////////////////////////
//Acceder a login
var reinicio = router.get('/', (req, res) => {
	//res.send('holoo');
	res.render('index.html');
	
});

//Iniciar logueo
router.post('/Login', usuariosControllers.registroMaestro);
 





module.exports = router;
