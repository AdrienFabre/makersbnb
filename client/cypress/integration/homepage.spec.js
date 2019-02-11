describe('Homepage', () => {
  it('can visit the homepage', () => {
    cy.visit('/')
  })

  it('has the site name', () => {
    cy.visit('/')
    cy.contains('Makers BnB')
  })
})
