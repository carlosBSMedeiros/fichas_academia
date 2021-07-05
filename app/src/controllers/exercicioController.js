module.exports = {

    async home(req, res){
        var {texto} = req.query
        res.status(200).json({'msg': `Oi! Essa rota de testes funcionou! você me mandou: ${texto}`})
    }

}