/*
0 Obter um usuário
1 Obter o numero de telefone de um usuário pelo ID
2 Obter o endereço do usuario pelo ID
*/

function obterUsuario(callback){
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(function () {
        return callback(null, {
           telefone: '992916580',
           ddd: 31
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000)
}

function resolverUsuario(error, usuario) {
    console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario(error, usuario) {
    // null || "" || 0 === false
        if(error) {
            console.error('Deu ruim em Usuario', error)
            return;
        }

        obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
            if(error1) {
                console.error('Deu ruim em Telefone', error)
                return;
            }

            obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
                if(error2) {
                    console.error('Deu ruim em Endereco', error)
                    return;
                }
                console.log(`
                    Nome: ${usuario.nome},
                    Endereco: ${endereco.rua}, ${endereco.numero}
                    Telefone: (${telefone.ddd})${telefone.telefone}
                `)
            })
        })
})


// const telefone = obterTelefone(usuario.id)

// console.log('telefone', telefone)