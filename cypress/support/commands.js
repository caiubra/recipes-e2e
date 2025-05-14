// Comando para visitar home e validar a URL
Cypress.Commands.add('navegarParaHome', () => {
    cy.visit('https://meulivrodereceitas.vercel.app/')
    cy.url().should('include', '/home')
  })
  
// Comando para pesquisar uma receita e clicar no primeiro item relacionado

  Cypress.Commands.add('pesquisarReceita', (termo) => {
    cy.get('input[placeholder*="Procurar receitas"]').type(termo)
    cy.get('a')
      .contains(termo)
      .should('be.visible')
      .click()
  })