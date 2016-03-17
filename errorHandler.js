// Create my Literal Object

ErrorHandler = function ErrorHandler() {
	
	return {
		
		ajaxError: function ajaxError(jqXHR, textStatus, errorThrown) {
			// jqXHR jqXHR, String textStatus, String errorThrown
			
			// will save the message to return 
			var message = "";
			
			// check the status of the request
			switch(jqXHR.status) {
				case 0:
					message = "Error al tratar de conectarse con el servidor. Por favor revise tenga acceso a internet.";
					break;
				case 404:
					message = "La página que solicito no esta disponible o bien ya no existe.";
					break;
				case 500:
					message = "Error interno del servidor. Intentelo nuevamente";
					break;
				default:
					message = "Error desconocido: " +jqXHR.responseText;
			}
			// check the text status for more Errors
			switch(textStatus) {
				case 'parsererror':
					message += "Error al tratar de realizar la conversion JSON - Objeto o bien Objeto - JSON. Revise el formato del mismo.";
					break
				case 'timeout':
					message += "Error en el tiempo de espera de respuesta de la solicitud al servidor.";
					break;
				case 'abort':
					message += "Se aborto la petición AJAX.";
					break;
				case 'error':
					message += "Se produjo un error interno del servidor.";
					break;
					
			}
			
			return message;
		}
		,error: function error(err) {
			var message = "";
			
			switch(err.name) {
				case 'EvalError':
					message = 'Error en el tipo de dato. Chequee sea un string la variable o expresión a evaluar.';
					break;
				case 'RangeError':
					message = 'El valor no está dentro del rango permitido. O el valor esta fuera del rango permitido.';
					break;
				case 'ReferenceError':
					message = 'El objeto al que hace referencia no existe. Favor inicialice los objetos antes de utilizarlos.';
					break;
				case 'SyntaxError':
					
					if (err.message.indexOf('JSON.parse:') !== -1) {
						message = 'Carácter inesperado al tratar de realizar la conversión a JSON.';
					}
					else {
						message = 'Error de sintaxis en el código fuente.';
					}
					break;
				case 'TypeError':
					message = 'El valor del objeto no hace referencia a su tipo. Declare el objeto correctamente.';
					break;
				case 'URIError':
					message = 'URI incorrecta.';
					break;
				default:
					message = err.message;
			};
			return message;
		}
	}
};