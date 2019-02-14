describe("Spaces", () => {
  it("has the page hero title", () => {
    cy.visit("/spaces");
    cy.contains("Book a Space");
  });

  it("displays a space listing", () => {
    cy.visit("/spaces");
    cy.contains("A Beautiful Relaxing Space");
  });

  it("can go to a create space page", () => {
    cy.visit("/spaces");
    cy.contains("List a Space").click();
    cy.url().should("include", "/spaces/create");
  });
});
