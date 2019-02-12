describe('List Spaces', () => {
  it('can go to a create space page', () => {
    cy.visit('/spaces')
    cy.contains('List a Space').click()
    cy.url().should('include', '/spaces/create')
  })
})
