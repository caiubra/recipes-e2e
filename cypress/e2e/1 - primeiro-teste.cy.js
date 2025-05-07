describe('Deve visitar página de teste', () => {
    it('Deve visitar a página e se possui o /home', () => {
        cy.visit('https://meulivrodereceitas.vercel.app/')
        cy.url().should('include','/home')
    })

  })
