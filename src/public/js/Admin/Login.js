function Login() {
    let Usuario = document.getElementById("Usuario").value
    let Contrasena = document.getElementById("Contrasena").value
    let data = {
        Usuario: Usuario,
        Contrasena: Contrasena
    }
    console.log("Usuario: " + Usuario + " Contrasena: " + Contrasena);
    console.log(data);

    $.post("/Login", // url
        {
            data
        }, // data to be submit
        function (objeto, estatus) { // success callback
            console.log("objeto: " + objeto + "Estatus: " + estatus);
            if (objeto == true) {
                setTimeout("location.href='Home'", 500);
            }else{
                alert("Error")
            }
        });
}

 
