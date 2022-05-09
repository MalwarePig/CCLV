/* registrar alumno */
function RegistrarAlumno() {
    let data = {
        N_FechaRegistro: document.getElementById("N_FechaRegistro").value,
        N_Turno: document.getElementById("N_Turno").value,
        N_Nombres: document.getElementById("N_Nombres").value,
        N_Paterno: document.getElementById("N_Paterno").value,
        N_Materno: document.getElementById("N_Materno").value,
        N_FechaNacimiento: document.getElementById("N_FechaNacimiento").value,
        N_Sexo: document.getElementById("N_Sexo").value
    }

    console.log(data)

    $.post("/RegistrarAlumno", // inicia la lista de ot en el flujo de produccion
        {
            data
        }, // data to be submit
        function (objeto, estatus) { // success callback
            //console.log("objeto: " + objeto + "Estatus: " + estatus);
            if (objeto == true) {
                alert("Registro correcto");

            } else {
                alert("Error al registrar!");
                $('#Formulario')[0].reset();
            }
        });

    $('#Formulario')[0].reset();
}

//CONSULTAR data -- BOTON BUSCAR    
function BuscarAlumno() {
    var barAlumnoBuscar = document.getElementById("barAlumnoBuscar").value;
    $.ajax({
        url: '/BuscarAlumno/' + barAlumnoBuscar,
        success: function (data) {
            console.log(data)
            var Arreglo = [];
            //Limpiar tabla 
            var TablaEliminarAlumno = document.getElementById('TablaEliminarAlumno').getElementsByTagName('tbody')[0];
            var limite = TablaEliminarAlumno.rows.length;
            for (var i = 0; i < limite; i++) {
                $("#Rows").remove(); //elimina los elementos con id Rows
            }
            if (data.length == 0) {
                $("#Vacio").modal();
            }
            for (var i = 0; i < data.length; i++) {
                var Nombres = data[i].Nombres;
                var Paterno = data[i].Paterno;
                var Materno = data[i].Materno;
                var Matricula = data[i].Matricula;
                let nombreCompleto = Nombres + " " + Paterno + " " + Materno;
                Arreglo = [Matricula, nombreCompleto];

                var TablaEliminarAlumno = document.getElementById('TablaEliminarAlumno').getElementsByTagName('tbody')[0];
                // inserta una fila al final de la tabla
                var newRow = TablaEliminarAlumno.insertRow(TablaEliminarAlumno.rows.length);
                for (var x = 0; x < Arreglo.length; x++) {
                    // inserta una celda en el indice 0
                    var newCell = newRow.insertCell(x);
                    newRow.setAttribute("id", "Rows"); //se asigna id al incrementar cada fila +1 para contar el encabezado
                    // adjuntar el texto al nodo
                    var newText = document.createTextNode(Arreglo[x]);
                    newCell.appendChild(newText);

                    if (x == 1) { //Si termina de registrar datos crear el boton
                        var newCell = newRow.insertCell(2); //CREAR CELDA
                        newCell.innerHTML = '<button id="BorrarAlumno' + i + '" class="btn btn-danger" name="btn" onclick=EliminarAlumno(' + (Matricula) + ')> <i class="fas fa-backspace"></i> </button>';
                    }
                } //fin de for de columnas
            } //fin de for de filas
        } //Funcion success
    }); //Ajax
} //Evento clic

/* EliminarAlumno alumno */
function EliminarAlumno(matricula) {
    let data = {
        matricula: matricula
    }

    console.log(data)

    $.post("/EliminarAlumno", // inicia la lista de ot en el flujo de produccion
        {
            data
        }, // data to be submit
        function (objeto, estatus) { // success callback
            //console.log("objeto: " + objeto + "Estatus: " + estatus);
            if (objeto == true) {
                BuscarAlumno()
            } else {
                alert("Error al registrar!");
                $('#Formulario')[0].reset();
            }
        });

    $('#Formulario')[0].reset();
}




//CONSULTAR data -- BOTON BUSCAR    
function BuscarAlumnoEdit() {
    var barAlumnoBuscar = document.getElementById("barAlumnoEditBuscar").value;
    $.ajax({
        url: '/BuscarAlumno/' + barAlumnoBuscar,
        success: function (data) {
            console.log(data)
            document.getElementById("Edit_Nombres").value = data[0].Nombres;
            document.getElementById("Edit_Paterno").value = data[0].Paterno;
            document.getElementById("Edit_Materno").value = data[0].Materno;

            //Cargar Horario
            if (data[0].Turno == 'Matutino') {
                document.getElementById('Edit_Turno').selectedIndex = 0;
            } else if (data[0].Turno == 'Vespertino') {
                document.getElementById('Edit_Turno').selectedIndex = 1;
            } else {
                $("#Edit_Turno").val($("#Edit_Turno").data("default-value")); //Resetear select list
            }

            //Cargar Sexo
            if (data[0].Sexo == 'Femenino') {
                document.getElementById('Edit_Sexo').selectedIndex = 0;
            } else if (data[0].Sexo == 'Masculino') {
                document.getElementById('Edit_Sexo').selectedIndex = 1;
            } else if (data[0].Sexo == 'Otro') {
                document.getElementById('Edit_Sexo').selectedIndex = 2;
            }else {
                $("#Edit_Sexo").val($("#Edit_Sexo").data("default-value")); //Resetear select list
            }

            document.getElementById("Edit_FechaRegistro").value = moment(data[0].FechaRegistro).format('DD/MM/YYYY');
            document.getElementById("Edit_FechaNacimiento").value = moment(data[0].FechaNacimiento).format('DD/MM/YYYY');

        } //Funcion success
    }); //Ajax
} //Evento clic



/* atualizar alumno */
function AtualizarAlumno() {
    let data = { 
        Edit_Turno: document.getElementById("Edit_Turno").value,
        Edit_Nombres: document.getElementById("Edit_Nombres").value,
        Edit_Paterno: document.getElementById("Edit_Paterno").value,
        Edit_Materno: document.getElementById("Edit_Materno").value,
        Edit_FechaNacimiento: document.getElementById("Edit_FechaNacimiento").value,
        Edit_Sexo: document.getElementById("Edit_Sexo").value
    }

    console.log(data)

    $.post("/AtualizarAlumno", // inicia la lista de ot en el flujo de produccion
        {
            data
        }, // data to be submit
        function (objeto, estatus) { // success callback
            //console.log("objeto: " + objeto + "Estatus: " + estatus);
            if (objeto == true) {
                alert("Registro correcto");

            } else {
                alert("Error al registrar!");
                $('#Formulario')[0].reset();
            }
        });

    $('#Formulario')[0].reset();
}