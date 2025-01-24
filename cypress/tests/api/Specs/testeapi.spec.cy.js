import testeapi from "../Pages/testeapi"

describe('Testes API desafio Ambev', () => {
    it('Buscar usuário por id', () => {
      testeapi.retornarUsarioPorID().then((resposta) => {
        testeapi.validaRetornoUsuárioPorId(resposta);
      });
    })

    it('Cadastrar novo produto', () => {
      testeapi.cadastrarProduto().then((produto) => {
        testeapi.verificarProdutoProdutoCadastrado(produto);
      });
    })

    // it('Realizar login com dados invalidos', () => {
    //   // Envie uma requisição POST /login com credenciais inválidas.
    //   // Valide o status 401 e a mensagem de erro retornada.
    // });
  })