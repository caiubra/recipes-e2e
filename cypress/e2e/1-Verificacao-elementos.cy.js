describe("Verificação de elementos básicos da página", () => {
  beforeEach(() => {
    cy.visit("https://meulivrodereceitas.vercel.app/");
  });
  it("Deve exibir o titulo correto da página", () => {
    cy.get(".container > h1").should("have.text", "my recipe book");
  });
  it("Deve verificar se o menu de navegação está presente", () => {
    cy.contains("a", "Home").should("be.visible");
    cy.contains("a", "Minhas receitas").should("be.visible");
    cy.contains("a", "Meus favoritos").should("be.visible");
    cy.contains("a", "Minha conta").should("be.visible");
  });
  it("Deve verificar se a barra de pesquisa está presente", () => {
    cy.get('input[placeholder="Procurar receitas ou ingredientes..."]');
  });
});
