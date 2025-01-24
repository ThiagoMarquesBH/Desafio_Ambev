import testeapi from "../Pages/testeapi"

describe('Testes API desafio Ambev', () => {
    it('Buscar usuário por id', () => {
      testeapi.retornarUsarioPorID().then((resposta) => {
        testeapi.validaRetornoUsuárioPorId(resposta);
      });
    })

    // it('Cadastrar novo usuário', () => {
    //   // Envie uma requisição POST /usuarios com dados válidos.
    //   // Valide o status 201 e que o novo usuário foi criado.
    // });

    // it('Realizar login com dados invalidos', () => {
    //   // Envie uma requisição POST /login com credenciais inválidas.
    //   // Valide o status 401 e a mensagem de erro retornada.
    // });
  })