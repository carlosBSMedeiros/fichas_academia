
module.exports = {

	validaCamposNulos(campos){

		var ret = [];
	
		// for (var campo in campos){
		// 	console.log(campo);
		// 	if(campos[campo] == null || campos[campo] == undefined || campos[campo] == ''){
		// 		ret.push(`O Campo ${campos} não pode ser nulo`);
		// 	}
		// }

		for (var [key, value] of Object.entries(campos)) {
			if(value == null || value == undefined || value == ''){
				ret.push(`O Campo ${key} não pode ser nulo`);
			}		
		}

		return ret;

	}


};