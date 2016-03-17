var jq = $(document);
var p = jq.find('p');

jq.find('#referencia').on('click', function() {
	try{
		var errorHandler = ErrorHandler();
		console.log(a);
	}catch(err) {
		p.html('');
		p.append(errorHandler.error(err));
	}
});
jq.find('#sintaxis').on('click', function() {
	try{
		var errorHandler = ErrorHandler();
		console.log(JSON.parse({id:9898}));
	}catch(err) {
		p.html('');
		p.append(errorHandler.error(err));
	}
});
jq.find('#rango').on('click', function() {
	try{
		var errorHandler = ErrorHandler();
		Array.apply(null, new Array(1000000)).map(Math.random);
		
	}catch(err) {
		p.html('');
		p.append(errorHandler.error(err));
	}
});
jq.find('#tipo').on('click', function() {
	try{
		var errorHandler = ErrorHandler();
		var foo = undefined;
		foo();
	}catch(err) {
		p.html('');
		p.append(errorHandler.error(err));
	}
});
jq.find('#eval').on('click', function() {
	try{
		var errorHandler = ErrorHandler();
		eval();
	}catch(err) {
		p.html('');
		p.append(errorHandler.error(err));
	}
});
jq.find('#uri').on('click', function() {
	try{
		var errorHandler = ErrorHandler();
		decodeURIComponent('a%AFc');
	}catch(err) {
		p.html('');
		p.append(errorHandler.error(err));
	}
});