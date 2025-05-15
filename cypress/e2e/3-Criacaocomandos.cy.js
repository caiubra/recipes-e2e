describe('Criação de Comandos personalizados', () => {
    it('Deve navegar até a home e pesquisar por uma receita', () => {
      cy.navegarParaHome()
      cy.pesquisarReceita('Macarons')
  
      cy.url().should('include', '/receita')
      cy.get('h1').should('contain','Macarons')
    })
  })
  