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

    it('Realizar login com dados invalidos', () => {
      testeapi.realizarLogin('goiaba@personalbar.com.br', 'ArrozFeijão').then((login) => {
        testeapi.validaRetornoLogin(login);
      });
    });
  })