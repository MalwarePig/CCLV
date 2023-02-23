const Controller = {};
const OS = require("os");
/////////////////////////////////////////////////////////////////////--------------- REGISTRO ----------------------/////////////////////////////////////////////////////////////////////
Controller.save = (req, res) => {
    const data = req.body;
    const nombre = req.body.Planta;
    req.getConnection((err, conn) => {

        console.log(data)

        conn.query('INSERT INTO usuarios set ?', [data], (err, ot) => {
            if (err) {
                console.log(err)
            } else {
                res.redirect('/Signup');
            }

        });
    })
    /* console.log(req.body);//se obtienen los datos del formulario a traves del req.body
     res.send('works');*/
}


Controller.EliminarUsuario = (req, res) => {
    const data = req.body;
    const nombre = req.body.Planta;
    req.getConnection((err, conn) => {

        var id = Object.values(data)[0].id;

        conn.query("delete from usuarios WHERE id = '" + id + "'", (err, ot) => {
            res.json(true);
        });
    })
    /* console.log(req.body);//se obtienen los datos del formulario a traves del req.body
     res.send('works');*/
}

/////////////////////////////////////////////////////////////////////--------------- LOGIN ----------------------/////////////////////////////////////////////////////////////////////
Controller.login = (req, res) => {
    console.log(req.body)
    const Usuario = req.body.data.Usuario;
    const Contrasena = req.body.data.Contrasena;
    req.getConnection((err, conn) => {
        console.log(Usuario + " - " + Contrasena)

        conn.query('SELECT * FROM usuarios WHERE usuario = ? AND pass = ?', [Usuario, Contrasena], (error, results, fields) => {
            if (error) {
                console.log(error);
                res.redirect('/');
                console.log('error en query' + error);
            }
            else if (Object.keys(results).length > 0)//si contiene almenso 1 resultado entra
            {
                const id = results[0].id//Obtener contraseña de la consulta 
                const Nivel = results[0].Nivel//Obtener nivel de la consulta 
                const Nombre = results[0].Nombre//Obtener nivel de la consulta
                const pass = results[0].Nombre//Obtener nivel de la consulta
                if (Contrasena == pass) {//si las contraseñas coinciden entran
                    req.session.loggedin = true;
                    req.session.idDB = id;
                    req.session.Nivel = Nivel;
                    req.session.Nombre = Nombre;
                    //req.session.nombre = OS.hostname(); 
                    //let ip = req.connection.remoteAddres;

                    res.json(true)
                } else {//si las contraseñas no coinciden
                    res.redirect('/');
                }
            } else //sin resultados
            {
                res.redirect('/');
                console.log('Error usaurio o contraseña' + error);
            }
            //response.end();
        });

    })
}

/////////////////////////////////////////////////////////////////////--------------- SignUp ----------------------/////////////////////////////////////////////////////////////////////
Controller.SignUp = (req, res) => {
    req.getConnection((err, conn) => {
        if (req.session.loggedin) {
            conn.query('SELECT * FROM usuarios', [], (error, results, fields) => {
                if (error) {
                    console.log(error);
                    res.redirect('/');
                    console.log('error en query');
                }
                else if (Object.keys(results).length > 0)//si contiene almenso 1 resultado entra
                {
                    res.render('Admin/dashboard.html', {
                        data: results
                    });
                }
            });
        } else {
            res.redirect('/');
        }
    })
}

/////////////////////////////////////////////////////////////////////--------------- HOME ----------------------/////////////////////////////////////////////////////////////////////
Controller.HOME = (req, res) => {
    req.getConnection((err, conn) => {
        if (req.session.loggedin) {
            console.log("EN home");
            conn.query("SELECT * FROM usuarios WHERE usuario = '" + req.session.username + "'", (err, user) => {
                if (err) {
                    console.log('Error de lectura');
                }
                console.log(user);
                res.render('index.html', {
                    data: user
                });
            });
        } else {
            res.redirect('/');
        }
    })
}




module.exports = Controller;