describe("SpaceId", () => {
  it("has the space title", () => {
    cy.visit("/spaces/id");
    cy.contains("A Beautiful Relaxing Space");
  });

  xit("displays date picker calender input", () => {
    cy.visit("/spaces/id");
    cy.contains("A Beautiful Relaxing Space");
  });

  it("can request booking", () => {
    cy.visit("/spaces/id");
    cy.contains("Request to Book").click();
  });
});
