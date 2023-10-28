describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('We keep the world flying')
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get(':nth-child(6) > a').click()
    cy.get(':nth-child(4) > .nav-link').click()
    cy.get('.form-control').type("024147-000")
    cy.get('#button-addon2').click()
  })
})
