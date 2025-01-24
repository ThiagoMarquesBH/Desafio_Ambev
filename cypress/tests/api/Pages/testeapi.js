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





}

export default new TestApi()