///<reference types = "Cypress"/>

describe('The elements test suite for travel site', () => {

    it('verify search button', () => {
        cy.visit('http://localhost:3000')
        cy.contains('search').should("be.visible")
        cy.get('#tab1 > form > .btn-submit').should("have.text", "search")
    })

    it('verify check-in and check-out button', () => {
        cy.visit('http://localhost:3000')
        cy.get('#tab1 > form > .row > :nth-child(1) > .input-group').should("be.visible")
        cy.get('#tab1 > form > .row > :nth-child(1) > .input-group > .label').should("have.text", "check-in")
        cy.get('#tab1 > form > .row > :nth-child(2) > .input-group').should("be.visible")
        cy.get('#tab1 > form > .row > :nth-child(2) > .input-group > .label').should("have.text", "check-out")
    })

    it('verify travellers list', () => {
        cy.visit('http://localhost:3000')
        cy.get('#tab1 > form > :nth-child(3)').should("be.visible")
        cy.get(':nth-child(3) > .label').should("have.text", "travellers")
    })

    it('verify add checkboxes', () => {
        cy.visit('http://localhost:3000')
        cy.get('[type = "checkbox"]')
        cy.get('.checkbox-row > .m-r-45').should('contain.text', 'Add a flight')
        cy.get('.checkbox-row > :nth-child(2)').should('contain.text', 'Add a car')
    })

    it('verify address box', () => {
        cy.visit('http://localhost:3000')
        cy.get('#tab1 > form > :nth-child(1)').should("be.visible")
        cy.get('#tab1 > form > :nth-child(1) > .label').should("have.text", "Going to")
    })
})
