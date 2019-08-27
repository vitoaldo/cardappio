exports.post = async(repository, validationContratc, req, res) => {
    try {
        let data = req.body;
        if(!validationContratc.isValid()){
            res.status(400).send({message: 'Há dados errados em sua requisição', validation: validationContratc.error}).end();
            return;
        }

        let resultado = await repository.create(data);
        res.satus(201).send(resultado);
    } catch (error) {
       console.log('Metodo POST com erro!', error);
       res.status(500).send({message: 'Erro no processamento do metodo POST'}) 
    }
}
exports.put = async(repository, validationContratc, req, res) => {
    try {
        let data = await repository.update();
        res.status(200).send(data);
    } catch (error) {
        
    }
}
exports.get = async(repository, req, res) => {
    try {
        let data = await repository.get();
        res.status(200).send(data);
    } catch (error) {
        console.log('Metodo GET com erro!', error);
        res.status(500).send({message: 'Erro no processamento do metodo GET'}) 
    }
}
exports.getById = async(repository, req, res) => {
    try {
        if(req.params.id){
            let data = await repository.getById(req.params.id);
            res.status(200).send(data);
        }
    } catch (error) {
        
    }
}
exports.delete = async(repository, req, res) => {
    try {
        let data = await repository.delete(req.params.id);
        res.status(200).send(data);
    } catch (error) {
        console.log('Metodo DELETE com erro!', error);
        res.status(500).send({message: 'Erro no processamento do metodo DELETE'});
    }
}