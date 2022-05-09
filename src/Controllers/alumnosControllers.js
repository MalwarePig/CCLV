const Controller = {};
const OS = require("os");

Controller.RegistrarAlumno = (req, res) => {

    req.getConnection((err, conn) => {
        const data = req.body; //TRAE TODO EL OBJETO 

        let N_Nombres = Object.values(data)[0].N_Nombres;
        let N_Paterno = Object.values(data)[0].N_Paterno;
        let N_Materno = Object.values(data)[0].N_Materno;
        let N_FechaNacimiento = Object.values(data)[0].N_FechaNacimiento;
        let N_Sexo = Object.values(data)[0].N_Sexo;
        let N_FechaRegistro = Object.values(data)[0].N_FechaRegistro;
        let N_Turno = Object.values(data)[0].N_Turno;
        /* 
                conn.query("INSERT INTO Alumnos(Nombres,Paterno,Materno,FechaNacimiento,Sexo,FechaRegistro,Turno)VALUES" +
                    "('" + N_Nombres + "','" + N_Paterno + "','" + N_Materno + "','" + N_FechaNacimiento + "','" + N_Sexo + "','" + N_FechaRegistro + "','" + N_Turno + "')", (err, data) => {
                        if (err) {
                            console.log('Error de lectura' + err);
                            res.json(false);
                        } else {
                            console.log('Listo')
                            res.json(true);
                        }
                    });
         */
        conn.query("call RegistrarAlumno('" + N_Nombres + "','" + N_Paterno + "','" + N_Materno + "','" + N_FechaNacimiento + "','" + N_Sexo + "','" + N_Turno + "')", true, (err, rows, fields) => {
            if (err) {
                res.json(err);
                console.log('Error al actualizar accesorio' + err);
            } else {
                console.table(rows[0])
                res.json(true)
            }
        });





    });
};


///////// == SALIDA == ////////////////////////////// == SALIDA == ////////////////////////////// == SALIDA == ////////////////////////// == SALIDA == //////////////////// == SALIDA == ///////////////////// == SALIDA == ///////////////////////////////////////////////////////////////

Controller.BuscarAlumno = (req, res) => {

    //res.send('Metodo Get list');
    req.getConnection((err, conn) => {
        const {
            data
        } = req.params;

        console.log("data " + data);
        conn.query("SELECT * FROM Alumnos WHERE Nombres LIKE '%" + data + "%' OR Matricula = '" + data + "'", (err, resultados) => {
            if (err) {
                res.json("Error json: " + err);
                console.log('Error de lectura');
            }
            console.log(resultados)
            res.json(resultados)
        });

    });
};

///////// == ELIMINAR == ////////////////////////////// == ELIMINAR == ////////////////////////////// == ELIMINAR == ////////////////////////// == ELIMINAR == //////////////////// == ELIMINAR == ///////////////////// == ELIMINAR == ///////////////////////////////////////////////////////////////

Controller.EliminarAlumno = (req, res) => {

    req.getConnection((err, conn) => {
        const data = req.body; //TRAE TODO EL OBJETO 

        let matricula = Object.values(data)[0].matricula;

        conn.query("DELETE FROM Alumnos WHERE Matricula = '" + matricula + "'", (err, data) => {
            if (err) {
                console.log('Error de lectura' + err);
                res.json(false);
            } else {
                console.log('Listo')
                res.json(true)
            }
        });
    });
};



Controller.AtualizarAlumno = (req, res) => {

    req.getConnection((err, conn) => {
        const data = req.body; //TRAE TODO EL OBJETO 

        let Edit_Turno = Object.values(data)[0].Edit_Turno;
        let Edit_Nombres = Object.values(data)[0].Edit_Nombres;
        let Edit_Paterno = Object.values(data)[0].Edit_Paterno;
        let Edit_Materno = Object.values(data)[0].Edit_Materno;
        let Edit_FechaNacimiento = Object.values(data)[0].Edit_FechaNacimiento;
        let Edit_Sexo = Object.values(data)[0].Edit_Sexo; 

        conn.query("UPDATE Alumnos SET Nombres = '"+Edit_Nombres+"',Paterno = '"+Edit_Paterno+"',Materno = '"+Edit_Materno+"',FechaNacimiento = '"+Edit_FechaNacimiento+"',Turno = '"+Edit_Turno+"',Sexo = '"+Edit_Sexo+"'", (err, data) => {
                if (err) {
                    console.log('Error de lectura' + err);
                    res.json(false);
                } else {
                    console.log('Listo')
                    res.json(true);
                }
            });
    });
};
                                                                     yhgggggggggggggggggggggfn.,lñw1200                                                                                                                                                                                                                                                                                                                                                   v                                                                                                                                                                                                                                                                                          mn bn ,b 


module.exports = Controller;