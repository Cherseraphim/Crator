const ToddlerAmenity = require('../support/menuPages/toddlerAmenity.js')


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test because of Cross-origin resource issue
  return false
})


describe('The Amenities Page', () => {

  before(() => {
    
    cy.visit('/')
    cy.login(Cypress.env('username'),Cypress.env('password'))
    
  })

  

  it('successfully books a toddler amenity ', () => {
    const toddlerInstance = new ToddlerAmenity()
    toddlerInstance.bookAmmenity()  
  })



})


