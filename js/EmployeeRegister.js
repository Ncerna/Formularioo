$(".btn-register").click(function () {

    if ($("#txt__numEmpleado").val() != "" && $("#txt___rfc").val() != "" && $("#txt__nombres").val() != "" && $("#txt___genero").val() != "" &&
        $("#txt__status").val() != "" && $("#txt__apellidoPaterno").val() != "" && $("#txt__apellidoMaterno").val() != "" && $("txt__fechaIngreso").val() != "" && $("txt__fechaBase").val() != ""
        && $("txt__fechaVacante").val() != "" && $("txt__puesto").val() != "" && $("txt__nivelCampo").val() != "" && $("txt__plaza").val() != "" && $("txt__relacionLaboral").val() != ""
        && $("txt__departamentoArea").val() != "" && $("txt__municipio").val() != "" && $("txt__motivoVacante").val() != "" && $("txt__salarioMensual").val() != "" &&
        $("txt__desarrolloCapacitacion").val() !== "" && $("txt__previsionMultiple").val() != "" && $("txt__laboresCondicionInsalubre").val() != "" &&
        $("txt__estimuloProductividad").val() != "" && $("txt__primaAntiguedad").val() != "" && $("txt__despensa").val() != "" && $("txt__compensacion").val() != "" &&
        $("txt__percepcionMensual").val() != "" && $("txt__aguinaldoPrimera").val() != "" && $("txt__aguinaldoSegunda").val() != "" && $("txt__primaVacacional").val() != "" &&
        $("txt__bonoIncentivo").val() != "" && $("txt__percepcionesAnual").val() != "" && $("txt__nss").val() != "" && $("txt__curp").val() != "" && $("txt__nombreCompleto").val() != "" &&
        $("txt__clave").val() != "" && $("txt__netoEmpleado").val() != "" && $("#txt__plazaExtra").val() != "") {

        $.ajax({
            url: "Registrar",
            data: {

                numEmpleado: $("txt__numEmpleado").val(),
                rfc: $("txt__rfc").val(),
                nombres: $("txt__nombres").val(),
                genero: $("txt__genero").val(),
                status: $("txt__status").val(),
                apellidoPaterno: $("txt__apellidoPaterno").val(),
                apellidoMaterno: $("txt__apellidoMaterno").val(),
                fechaIngreso: $("txt__fechaIngreso").val(),
                fechaBase: $("txt__fechaBase").val(),
                fechaVacante: $("txt__fechaVacante").val(),
                puesto: $("txt__puesto").val(),
                nivelCampo: $("txt__nivelCampo").val(),
                plaza: $("txt__plaza").val(),
                relacionLaboral: $("txt__relacionLaboral").val(),
                departamentoArea: $("txt__departamentoArea").val(),
                municipio: $("txt__municipio").val(),
                motivoVacante: $("txt__motivoVacante").val(),
                salarioMensual: $("txt__salarioMensual").val(),
                desarrolloCapacitacion: $("txt__desarrolloCapacitacion").val(),
                previsionMultiple: $("txt__previsionMultiple").val(),
                laboresCondicionInsalubre: $("txt__laboresCondicionInsalubre").val(),
                estimuloProductividad: $("txt__estimuloProductividad").val(),
                primaAntiguedad: $("txt__primaAntiguedad").val(),
                despensa: $("txt__despensa").val(),
                compensacion: $("txt__compensacion").val(),
                percepcionMensual: $("txt__percepcionMensual").val(),
                aguinaldoPrimera: $("txt__aguinaldoPrimera").val(),
                aguinaldoSegunda: $("txt__aguinaldoSegunda").val(),
                primaVacacional: $("txt__primaVacacional").val(),
                bonoIncentivo: $("txt__bonoIncentivo").val(),
                percepcionesAnual: $("txt__percepcionesAnual").val(),
                nss: $("txt__nss").val(),
                curp: $("txt__curp").val(),
                nombreCompleto: $("txt__nombreCompleto").val(),
                clave: $("txt__clave").val(),
                netoEmpleado: $("txt__netoEmpleado").val(),
                plazaExtra: $("txt__plazaExtra").val(),

            },
            type: 'POST'

        }).done(function (resp) {
            swal({
                type: "success",
                title: "Registro Exitoso",
                showConfirmButton: true,
                confirmButtonText: "Cerrar",
                closeOnConfirm: false
            }).then(function (result) {
                if (result.value) {
                    window.location = "/";
                }
            });
        });

    }
});