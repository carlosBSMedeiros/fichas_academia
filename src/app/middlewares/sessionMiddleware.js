
const isAutenticado = (req, res, next) => {
	if(req.session.isAuth){
		next();
	} else{
		return res.status(403).json({msg: 'usuario não autenticado'});
	}
	if (!('idAcad' in req.cookies)){
		return res.status(403).json({msg: 'cookie \'idAcad\' não encontrado'});
	}
};

module.exports = isAutenticado;