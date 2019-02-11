describe('Spaces', () => {

  it('has the page hero title', () => {
    cy.visit('/spaces')
    cy.contains('Book a Space')
  })

})
