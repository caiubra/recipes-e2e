describe('Deve visitar página de test e pesquisar por uma receita existente', () => {
    beforeEach(() => {
        cy.visit('https://meulivrodereceitas.vercel.app/')
    })
    
    it('Deve visitar a página', () => {
        cy.url().should('include','/home')
    })
    
    it('Deve pesquisar uma receita existente', () => {
        cy.get('input[placeholder="Procurar receitas ou ingredientes..."]').type('macaron{enter}')
  })
})
