import testefront from "../Pages/testefront"

describe('Testes E2E desafio Ambev', () => {

  beforeEach(() => {
    testefront.acessarPagina();
  });

  it('Login bem-sucedido como administrador', () => {
    testefront.dadoQueSejaInseridoLoginESenhaValido();
    testefront.entaoOPainelPrincipalEVisualizado();
  })

  it('Cadastrar novo usuário', () => {
    testefront.fazerOCadastroDeUsuario();
    testefront.verificarCriaçãoDeUsuarios();
  });

  it('Listar usuários', () => {
    testefront.listarUsuários();
    testefront.verificarUmRegistro();
  });
})