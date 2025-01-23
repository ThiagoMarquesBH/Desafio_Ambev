class TestFront {
    acessarPagina() {
        cy.visit('https://front.serverest.dev/')
    }
}

export default new TestFront()