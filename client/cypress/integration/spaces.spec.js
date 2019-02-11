describe("Spaces", () => {
  it("has the page hero title", () => {
    cy.visit("/spaces");
    cy.contains("Book a Space");
  });

  it("displays a space listing", () => {
    cy.visit("/spaces");
    cy.contains("Beautiful Relaxing Space");
  });
});
