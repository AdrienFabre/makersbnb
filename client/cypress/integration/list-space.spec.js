describe("List Spaces", () => {
  it("can click into the name field", () => {
    cy.pause();
    cy.visit("/spaces/create");
    cy.contains("Name:");
    cy.get("input[name=name]").type("mark zuckman");
  });
});
