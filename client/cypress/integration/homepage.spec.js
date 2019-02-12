describe("Homepage", () => {
  it("can visit the homepage", () => {
    cy.visit("/");
  });

  it("has the site name", () => {
    cy.visit("/");
    cy.contains("Makers BnB");
  });

  it("can navigate to spaces", () => {
    cy.visit("/");
    cy.contains("Spaces").click();
    cy.url().should("include", "/spaces");
  });
});