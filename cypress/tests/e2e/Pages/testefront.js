import testeapi from "../../api/Pages/testeapi";
import { faker } from '@faker-js/faker';

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

    fazerOCadastroDeUsuario(){
        this.acessarPaginaDeCadatro();
        this.cadastraUsuario();
    }

    acessarPaginaDeCadatro(){
        this.dadoQueSejaInseridoLoginESenhaValido();
        cy.get('a[data-testid="cadastrarUsuarios"]').click();
    }

    acessarPaginaDeListaUsuarios(){
        this.dadoQueSejaInseridoLoginESenhaValido();
        cy.get('a[data-testid="listarUsuarios"]').click();
    }

    cadastraUsuario(){
        const nome = faker.person.firstName();

        cy.get('input[data-testid="nome"]').type("Thiago Teste");
        cy.get('input[data-testid="email"]').type(nome+"@gdot.com");
        cy.get('input[data-testid="password"]').type("12345");
        cy.get('button[data-testid="cadastrarUsuario"]').click();
    }

    verificarCriaçãoDeUsuarios(){
        cy.get('.table').should('be.visible');
    }

    listarUsuários(){
        this.acessarPaginaDeListaUsuarios();
        this.verificarCriaçãoDeUsuarios();
    }

    verificarUmRegistro(){
        cy.get('tbody tr').eq(0).find('td').eq(1).should('contain', '.com.br');
    }
}

export default new TestFront()