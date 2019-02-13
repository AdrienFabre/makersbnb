describe("Homepage", () => {

  it("has the site name", () => {
    cy.visit("/");
    cy.contains("Makers BnB");
  });

  it("can navigate to about", () => {
    cy.visit("/");
    cy.contains("About").click();
    });
    
    it("can navigate to spaces", () => {
        cy.visit("/");
        cy.contains("Spaces").click();
        cy.url().should("include", "/spaces");
    });

    it("can navigate to login", () => {
        cy.visit("/");
        cy.contains("Login").click();
        cy.url().should("include", "/login");
    });

});