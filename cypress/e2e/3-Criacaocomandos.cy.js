describe('Criação de Comandos personalizados', () => {
    it('Deve navegar até a home e pesquisar por uma receita', () => {
      cy.navegarParaHome()
      cy.pesquisarReceita('macarons')
  
      cy.url().should('include', '/receita')
      cy.contains('macarons').should('exist')
    })
  })
  