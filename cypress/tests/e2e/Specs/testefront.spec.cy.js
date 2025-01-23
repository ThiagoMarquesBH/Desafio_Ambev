import testefront from "../Pages/testefront"

describe('Testes E2E desafio Ambev', () => {

  beforeEach(() => {
    testefront.acessarPagina();
  });

  it('Login bem-sucedido como administrador', () => {
    testefront.dadoQueSejaInseridoLoginESenhaValido();
    testefront.entaoOPainelPrincipalEVisualizado();
  })

  // it('Cadastrar novo usuário', () => {
  //   // Navegue para a página de cadastro.
  //   // Preencha o formulário com dados válidos.
  //   // Verifique que o cadastro foi concluído com sucesso.
  // });

  // it('Listar usuários', () => {
  //   // Navegar até a página de listar usuários
  //   // Verificar se os usuários estão listados
  // });
})