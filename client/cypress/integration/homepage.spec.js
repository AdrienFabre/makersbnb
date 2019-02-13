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

  it("contains signup to makersbnb", () => {
    cy.visit("/");
    cy.contains("Sign up to Makers BnB"); 
  });

  it("contains a welcome message", () => {
    cy.visit("/");
    cy.contains("Feel at home, anywhere"); 
  });

  it("can complete into signup fields", () => {
    cy.visit("/");
    cy.get("input[name=email]").type("email");
    cy.get("input[name=password]").type("password");
    cy.get("input[name=passwordConfirm]").type("password");

  });
});
