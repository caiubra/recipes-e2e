describe("Deve visitar página de test e pesquisar por uma receita existente", () => {
  beforeEach(() => {
    cy.visit("https://meulivrodereceitas.vercel.app/");
  });

  it("Deve visitar a página", () => {
    cy.url().should("include", "/home");
  });

  it("Deve pesquisar uma receita existente, clicar na mesma e checar detalhes", () => {
    cy.get('input[placeholder="Procurar receitas ou ingredientes..."]').type(
      "macarons"
    );
    cy.contains("a", "Macarons").click();
    cy.contains("h2", "Modo de preparo").should("be.visible");
  });
});
