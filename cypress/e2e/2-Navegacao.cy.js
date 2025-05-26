describe("Teste de Navegação", () => {
  // Incluido beforeEach para efetuar a ação de visitar a página antes de cada teste.
  beforeEach(() => {
    cy.visit("https://meulivrodereceitas.vercel.app/home");
  });

  // Clicar no link Minhas receitas e verifica o redirecionmaneto para a home
  it("Deve redirecionar para o login ao clicar em Minhas receitas", () => {
    cy.contains("a", "Minhas receitas").click();
    cy.url().should("include", "/login");
  });
  // Clicar no link Meus favoritos e verifica e o redirecionado para home
  it("Deve recirecionar para o login ao clicar em Meus favoritos", () => {
    cy.contains("a", "Meus favoritos").click();
    cy.url().should("include", "/login");
  });
  // Clicar no link Minha conta e verifica e o redirecionado para home
  it("Deve recirecionar para o login ao clicar em Minha Conta", () => {
    cy.contains("a", "Minha conta").click();
    cy.url().should("include", "/login");
  });
});
