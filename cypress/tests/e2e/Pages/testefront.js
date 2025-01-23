import testeapi from "../../api/Pages/testeapi";

class TestFront {
    acessarPagina() {
        cy.visit('https://front.serverest.dev/')
    }

    dadoQueSejaInseridoLoginESenhaValido(){
        testeapi.retornarUsariosAdm().then((usuario) => {
            cy.get('input[data-testid="email"]').type(usuario.email);
            cy.get('input[data-testid="senha"]').type(usuario.password);
            cy.get('button[data-testid="entrar"]').click();
        });
    }

    entaoOPainelPrincipalEVisualizado(){
        cy.url().should('include', '/admin/home');
    }
}

export default new TestFront()