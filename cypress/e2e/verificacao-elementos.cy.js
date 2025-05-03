describe('Verificação de elementos básicos da página', () => {
  beforeEach(() => {
    cy.visit('https://meulivrodereceitas.vercel.app/')
})
  it('Deve exibir o titulo correto da página', () => {
    cy.get('.container > h1').should('have.text','my recipe book')
})
  it('Deve verificarse o menu de navegação está presente', () => {
cy.get('nav').should('be.visible')
})
  it('Deve verificar se a barra de pesquisa está presente', () => {
  cy.get('.p-inputtext').should('be.visible')
})

})