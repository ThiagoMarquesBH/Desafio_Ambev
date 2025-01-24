import { faker } from '@faker-js/faker';

class TestApi{
    retornarUsariosAdm() {
        return cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios?administrador=true',
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('quantidade');
            expect(response.body.quantidade).to.be.greaterThan(0);
            const usuario = response.body.usuarios[0];
            expect(usuario).to.exist;
            return usuario
        });
    }

    realizarLogin(email = null, senha = null){
        return this.retornarUsariosAdm().then((usuario) => {
            const userEmail = email || usuario.email;
            const userPassword = senha || usuario.password;
            return cy.request({
                method: 'POST',
                url: 'https://serverest.dev/login',
                body: {
                    email: userEmail,
                    password: userPassword
                },
                failOnStatusCode: false,
            }).then((respLogin) => {
                return respLogin.body
            })
        })
    }

    validaRetornoLogin(respLogin){
        expect(respLogin.message).to.eq('Email e/ou senha inválidos');
    }

    retornarUsarioPorID() {
        return this.retornarUsariosAdm().then((usuario) => {
            return cy.request({
                method: 'GET',
                url: 'https://serverest.dev/usuarios/' + usuario._id,
            });
        }).then((resposta) => {
            return resposta
        })
    }
    
    validaRetornoUsuárioPorId(resposta) {
        expect(resposta.status).to.eq(200);
        expect(resposta.body).to.have.property('nome');
        cy.log('Nome do usuário:', resposta.body.nome);
        return this.retornarUsariosAdm().then((usuario) => {
            expect(resposta.body.nome).to.eq(usuario.nome);
            expect(resposta.body.email).to.eq(usuario.email);
            expect(resposta.body.password).to.eq(usuario.password);
            expect(resposta.body.administrador).to.eq(usuario.administrador);
            expect(resposta.body._id).to.eq(usuario._id);
        });
    }

    cadastrarProduto() {
        return this.realizarLogin().then((login) => {
            const nome = faker.person.firstName();
            const preco = faker.number.int({ min: 10, max: 50 });
            const qtd = faker.number.int({ min: 10, max: 50 });
    
            return cy.request({
                method: 'POST',
                url: 'https://serverest.dev/produtos',
                headers: {
                    Authorization: login.authorization,
                },
                body: {
                    nome: nome,
                    preco: preco,
                    descricao: 'Desafio Thiago',
                    quantidade: qtd,
                },
            });
        }).then((resposta) => {
            cy.log('Resposta do cadastro:', resposta.body);
            return cy.wrap(resposta); 
        });
    }
    

    verificarProdutoProdutoCadastrado(idProduto) {
        expect(idProduto.status).to.eq(201);
        expect(idProduto.body.message).to.eq('Cadastro realizado com sucesso');
    }
}

export default new TestApi()