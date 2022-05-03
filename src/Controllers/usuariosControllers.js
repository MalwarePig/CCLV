const Controller = {};
const OS = require("os");
/////////////////////////////////////////////////////////////////////--------------- REGISTRO ----------------------/////////////////////////////////////////////////////////////////////


Controller.registroMaestro = (req,res) =>{
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO usuarios set ?',[data], (err, ot) =>{
            res.redirect('/Signup');
        });
    })
     /* console.log(req.body);//se obtienen los datos del formulario a traves del req.body
    res.send('works');*/
}

module.exports = Controller;