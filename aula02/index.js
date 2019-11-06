/*
0 Obter um usuário
1 Obter o numero de telefone de um usuário pelo ID
2 Obter o endereço do usuario pelo ID
*/

function obterUsuario(){
    // quando der problema -> reject(ERRO)
    // quando der sucess -> resolve
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function() {
        //    return reject(new Error('Deu ruim de verdade!'))
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })

        }, 1000)
    })
    
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


const usuarioPromise =  obterUsuario()
// para manipular o sucesso usamos a função .then
// para manipular erro usamos .catch

usuarioPromise
    .then(function (resultado) {
        console.log('resultado', resultado)
    })
    .catch(function (error){
        console.error('Deu ruim', error)
    })




// obterUsuario(function resolverUsuario(error, usuario) {
//     // null || "" || 0 === false
//         if(error) {
//             console.error('Deu ruim em Usuario', error)
//             return;
//         }

//         obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
//             if(error1) {
//                 console.error('Deu ruim em Telefone', error)
//                 return;
//             }

//             obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
//                 if(error2) {
//                     console.error('Deu ruim em Endereco', error)
//                     return;
//                 }
//                 console.log(`
//                     Nome: ${usuario.nome},
//                     Endereco: ${endereco.rua}, ${endereco.numero}
//                     Telefone: (${telefone.ddd})${telefone.telefone}
//                 `)
//             })
//         })
// })


// const telefone = obterTelefone(usuario.id)

// console.log('telefone', telefone)