//second submission of the final assighnment for module 5

///<reference types = "Cypress"/>

describe('The elements test suite for travel site front page', () => {

    it('verify search button is visible and contains correct text', () => {
        cy.visit('http://localhost:3000')
        cy.contains('search').should("be.visible")

    })

    it('verify check-in box is visible and contains correct text', () => {
        cy.visit('http://localhost:3000')
        cy.get('#input-start').should("be.visible")
        cy.get('.label').contains('check-in').should("have.text", "check-in")

    })

    it('verify check-out box is visible and contains correct text', () => {
        cy.visit('http://localhost:3000')
        cy.get('#input-end').should("be.visible")
        cy.get('.label').contains('check-out').should("have.text", "check-out")

    })

    it('verify travellers list field is visible and contains correct text', () => {
        cy.visit('http://localhost:3000')
        cy.get('#info').should("be.visible")
        cy.get('.label').contains('traveller').should("have.text", "travellers")
    })

    it('verify add a flight checkbox is visible and conteins correct text', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-cy="flight_chk"]').should("be.visible")
        cy.contains('Add a flight').should("be.visible")

    })

    it('verify add a car checkbox is visible and conteins correct text', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-cy="cars_chk"]').should("be.visible")
        cy.contains('Add a car').should("be.visible")
    })
    
   
    it('verify address box is visible and contains correct text', () => {
        cy.visit('http://localhost:3000')
        cy.get('[name=address').should("be.visible")
        cy.contains('Going to').should("be.visible")
    })
 

})
