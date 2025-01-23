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
}

export default new TestApi()