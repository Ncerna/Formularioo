(function () {
	"use strict";

	var treeviewMenu = $('.app-menu');

	// Toggle Sidebar
	$('[data-toggle="sidebar"]').click(function (event) {
		event.preventDefault();
		$('.app').toggleClass('sidenav-toggled');
	});

	// Activate sidebar treeview toggle
	$("[data-toggle='treeview']").click(function (event) {
		event.preventDefault();
		if (!$(this).parent().hasClass('is-expanded')) {
			treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
		}
		$(this).parent().toggleClass('is-expanded');
	});

	// Set initial active toggle
	$("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');

	//Activate bootstrip tooltips
	$("[data-toggle='tooltip']").tooltip();



})();

const formulario = document.getElementById('formRegister');
const inputs = document.querySelectorAll('#formRegister input');

const expresiones = {
	numEmpleado: /^\d{3,4}$/,
	rfc: /^[a-zA-Z0-9]{4,12}$/,
	nombres: /^[a-zA-ZÀ-ÿ\s]{4,100}$/,
	apellidoPaterno: /^[a-zA-ZÀ-ÿ\s]{4,100}$/,
	apellidoMaterno: /^[a-zA-ZÀ-ÿ\s]{4,100}$/,
	fechaIngreso: /^.{4,12}$/,
	fechaBase: /^.{4,12}$/,
	fechaVacante: /^.{4,12}$/,
	puesto: /^[a-zA-ZÀ-ÿ\s]{4,100}$/,
	nivelCampo: /^\d{3,4}$/,
	plaza: /^[a-zA-ZÀ-ÿ\s]{4,120}$/,
	relacionLaboral: /^[a-zA-ZÀ-ÿ\s]{4,100}$/,
	departamentoArea: /^[a-zA-ZÀ-ÿ\s]{4,100}$/,
	municipio: /^[a-zA-ZÀ-ÿ\s]{4,100}$/,
	motivoVacante: /^[a-zA-ZÀ-ÿ\s]{4,50}$/,
	salarioMensual: /^.[0-9]{3,20}$/,
	desarrolloCapacitacion: /^.[0-9]{3,20}$/,
	previsionMultiple: /^.[0-9]{3,20}$/,
	laboresCondicionInsalubre: /^.[0-9]{3,20}$/,
	estimuloProductividad: /^.[0-9]{3,20}$/,
	primaAntiguedad: /^.[0-9]{3,20}$/,
	despensa: /^.[0-9]{3,20}$/,
	compensacion: /^.[0-9]{3,20}$/,
	percepcionesMensual: /^.[0-9]{3,20}$/,
	aguinaldoPrimera: /^.[0-9]{3,20}$/,
	aguinaldoSegunda: /^.[0-9]{3,20}$/,
	primaVacacional: /^.[0-9]{3,20}$/,
	bonoIncentivo: /^.[0-9]{3,20}$/,
	percepcionesAnual: /^.[0-9]{3,20}$/,
	nss: /^\d{8,11}$/,
	curp: /^[0-9A-Z]{4,20}$/,
	nombreCompleto: /^.[a-zA-ZÀ-ÿ\s]{6,120}$/,
	clave: /^[0-9a-zA-Z]{8,16}$/,
	netoEmpleado: /^.[0-9]{3,20}$/
}

const campos = {
	numEmpleado: false,
	rfc: false,
	nombres: false,
	apellidoPaterno: false,
	apellidoMaterno: false,
	fechaIngreso: false,
	fechaBase: false,
	fechaVacante: false,
	puesto: false,
	nivelCampo: false,
	plaza: false,
	relacionLaboral: false,
	departamentoArea: false,
	municipio: false,
	motivoVacante: false,
	salarioMensual: false,
	desarrolloCapacitacion: false,
	previsionMultiple: false,
	laboresCondicionInsalubre: false,
	estimuloProductividad: false,
	primaAntiguedad: false,
	despensa: false,
	compensacion: false,
	percepcionesMensual: false,
	aguinaldoPrimera: false,
	aguinaldoSegunda: false,
	primaVacacional: false,
	bonoIncentivo: false,
	percepcionesAnual: false,
	nss: false,
	curp: false,
	nombreCompleto: false,
	clave: false,
	netoEmpleado: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "NumEmpleado":
			validarCampo(expresiones.numEmpleado, e.target, 'numEmpleado');
			break;
		case "RFC":
			validarCampo(expresiones.rfc, e.target, 'rfc');
			break;

		case "FechaIngreso":
			validarCampo(expresiones.fechaIngreso, e.target, 'fechaIngreso');
			break;
		case "FechaBase":
			validarCampo(expresiones.fechaBase, e.target, 'fechaBase');
			break;
		case "FechaVacante":
			validarCampo(expresiones.fechaVacante, e.target, 'fechaVacante');
			break;
		case "ApellidoPaterno":
			validarCampo(expresiones.apellidoPaterno, e.target, 'apellidoPaterno');
			break;
		case "ApellidoMaterno":
			validarCampo(expresiones.apellidoMaterno, e.target, 'apellidoMaterno');
			break;
		case "RFC":
			validarCampo(expresiones.rfc, e.target, 'rfc');
			break;
		case "Genero":
			validarCampo(expresiones.genero, e.target, 'genero');
			break;
		case "Nombres":
			validarCampo(expresiones.nombres, e.target, 'nombres');
			break;
		case "Puesto":
			validarCampo(expresiones.puesto, e.target, 'puesto');
			break;
		case "NivelCampo":
			validarCampo(expresiones.nivelCampo, e.target, 'nivelCampo');
			break;
		case "Plaza":
			validarCampo(expresiones.plaza, e.target, 'plaza');
			break;

		case "RelacionLaboral":
			validarCampo(expresiones.relacionLaboral, e.target, 'relacionLaboral');
			break;
		case "DeparatmentoArea":
			validarCampo(expresiones.departamentoArea, e.target, 'departamentoArea');
			break;
		case "Municipio":
			validarCampo(expresiones.municipio, e.target, 'municipio');
			break;

		case "MotivoVacante":
			validarCampo(expresiones.motivoVacante, e.target, 'motivoVacante');
			break;
		case "SalarioMensual":
			validarCampo(expresiones.salarioMensual, e.target, 'salarioMensual');
			break;
		case "DesarrolloCapacitacion":
			validarCampo(expresiones.desarrolloCapacitacion, e.target, 'desarrolloCapacitacion');
			break;
		case "PrevisionMultiple":
			validarCampo(expresiones.previsionMultiple, e.target, 'previsionMultiple');
			break;
		case "LaboresCondicionInsalubre":
			validarCampo(expresiones.laboresCondicionInsalubre, e.target, 'laboresCondicionInsalubre');
			break;
		case "EstimuloProductividad":
			validarCampo(expresiones.estimuloProductividad, e.target, 'estimuloProductividad');
			break;
		case "PrimaAntiguedad":
			validarCampo(expresiones.primaAntiguedad, e.target, 'primaAntiguedad');
			break;
		case "Despensa":
			validarCampo(expresiones.despensa, e.target, 'despensa');
			break;
		case "Compensacion":
			validarCampo(expresiones.compensacion, e.target, 'compensacion');
			break;
		case "PercepcionesMensual":
			validarCampo(expresiones.percepcionesMensual, e.target, 'percepcionesMensual');
			break;
		case "AguinaldoPrimera":
			validarCampo(expresiones.aguinaldoPrimera, e.target, 'aguinaldoPrimera');
			break;
		case "AguinaldoSegunda":
			validarCampo(expresiones.aguinaldoSegunda, e.target, 'aguinaldoSegunda');
			break;
		case "PrimaVacacional":
			validarCampo(expresiones.primaVacacional, e.target, 'primaVacacional');
			break;
		case "BonoIncentivo":
			validarCampo(expresiones.bonoIncentivo, e.target, 'bonoIncentivo');
			break;
		case "PercepcionesAnual":
			validarCampo(expresiones.percepcionesAnual, e.target, 'percepcionesAnual');
			break;
		case "NSS":
			validarCampo(expresiones.nss, e.target, 'nss');
			break;
		case "CURP":
			validarCampo(expresiones.curp, e.target, 'curp');
			break;
		case "NombreCompleto":
			validarCampo(expresiones.nombreCompleto, e.target, 'nombreCompleto');
			break;
		case "Clave":
			validarCampo(expresiones.clave, e.target, 'clave');
			break;
		case "NetoEmpleado":
			validarCampo(expresiones.netoEmpleado, e.target, 'netoEmpleado');
			break;
	}
	//ejecutar la funcion para capturar los datos de los inputs
	CapturarDatos();
}

const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		document.getElementById(`txt__${campo}`).classList.remove('is-invalid');
		document.getElementById(`txt__${campo}`).classList.add('is-valid');
		campos[campo] = true;
	} else {
		document.getElementById(`txt__${campo}`).classList.add('is-invalid');
		document.getElementById(`txt__${campo}`).classList.remove('is-valid');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if (campos.numEmpleado && campos.rfc && campos.nombres && campos.apellidoPaterno && campos.apellidoMaterno && campos.puesto && campos.nivelCampo && campos.plaza && campos.relacionLaboral && campos.departamentoArea && campos.municipio && campos.motivoVacante && campos.salarioMensual
		&& campos.desarrolloCapacitacion && campos.previsionMultiple && campos.laboresCondicionInsalubre && campos.estimuloProductividad
		&& campos.primaAntiguedad && campos.despensa && campos.compensacion && campos.percepcionesMensual && campos.aguinaldoPrimera
		&& campos.aguinaldoSegunda && campos.primaVacacional && campos.bonoIncentivo && campos.percepcionesAnual && campos.nss &&
		campos.curp && campos.nombreCompleto && campos.clave && campos.netoEmpleado && campos.fechaIngreso && campos.fechaBase &&
		campos.fechaVacante
	) {
		formulario.reset();


		//Eejcutar la funcion para enviar los datos al backend
		//SaveData();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');

		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');


		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 8000);

	}
});


//Variable para almacenar objetos de los inputs
var CapturarObjetoInputs;

//Funcion para Guardar los objetos de los inputs
const CapturarDatos = function () {
	CapturarObjetoInputs = {
		id: $("#txtId").val(),
		numEmpleado: $("#txt__numEmpleado").val(),
		rfc: $("#txt__rfc").val(),
		nombres: $("#txt__nombres").val(),
		genero: $("#txt__genero").val(),
		status: $("#txt__status").val(),
		apellidoPaterno: $("#txt__apellidoPaterno").val(),
		apellidoMaterno: $("#txt__apellidoMaterno").val(),
		fechaIngreso: $("#txt__fechaIngreso").val(),
		fechaBase: $("#txt__fechaBase").val(),
		fechaVacante: $("#txt__fechaVacante").val(),
		puesto: $("#txt__puesto").val(),
		nivelCampo: $("#txt__nivelCampo").val(),
		plaza: $("#txt__plaza").val(),
		relacionLaboral: $("#txt__relacionLaboral").val(),
		departamentoArea: $("#txt__departamentoArea").val(),
		municipio: $("#txt__municipio").val(),
		motivoVacante: $("#txt__motivoVacante").val(),
		salarioMensual: $("#txt__salarioMensual").val(),
		desarrolloCapacitacion: $("#txt__desarrolloCapacitacion").val(),
		previsionMultiple: $("#txt__previsionMultiple").val(),
		laboresCondicionInsalubre: $("#txt__laboresCondicionInsalubre").val(),
		estimuloProductividad: $("#txt__estimuloProductividad").val(),
		primaAntiguedad: $("#txt__primaAntiguedad").val(),
		despensa: $("#txt__despensa").val(),
		compensacion: $("#txt__compensacion").val(),
		percepcionesMensual: $("#txt__percepcionesMensual").val(),
		aguinaldoPrimera: $("#txt__aguinaldoPrimera").val(),
		aguinaldoSegunda: $("#txt__aguinaldoSegunda").val(),
		primaVacacional: $("#txt__primaVacacional").val(),
		bonoIncentivo: $("#txt__bonoIncentivo").val(),
		percepcionesAnual: $("#txt__percepcionesAnual").val(),
		nss: $("#txt__nss").val(),
		curp: $("#txt__curp").val(),
		nombreCompleto: $("#txt__nombreCompleto").val(),
		clave: $("#txt__clave").val(),
		netoEmpleado: $("#txt__netoEmpleado").val(),
		plazaExtra: $("#txt__plazaExtra").val()
	}
}


//Funcion para enviar los objetos al backend
const SaveData = function () {
	$.ajax({
		url: "Registrar",
		data: CapturarObjetoInputs,
		type: 'POST'
	}).done(function (resp) {
		swal({
			type: "success",
			title: "Registo exitoso",
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