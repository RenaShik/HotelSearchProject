///<reference types = "Cypress"/>

describe('The car tab test will verify the location and drop-off fields functionality', () => {

    const car_tab = '[data-cy="Car"]';
    const location_input = '[name="location"]';
    const drop_off_input = '[name=dropoff]';
    const car_group_list = '[name="car-group"]';
    const drivers_age_list = '[name="driver-age"]';

    before(() => {
        cy.visit('http://localhost:3000')
    })

    beforeEach(() => {
        cy.get(car_tab).click()

    })

    it('populates location field', () => {
        cy.get(location_input).type("Toronto").should('have.value', "Toronto")
    })

    it('populates drop-off date', () => {
        cy.get(drop_off_input).clear()
        cy.get(drop_off_input).type('10/10/2023').should('have.value', '10/10/2023')
    })

    it('chooses list of cars', () => {
        cy.get(car_group_list).should("be.visible")
        cy.get(car_group_list).select('Group 1', {force: true})
        cy.get('[title="Group 1"]').should("be.visible")

        cy.get(car_group_list).select('Group 2', {force: true})
        cy.get('[title="Group 2"]').should("be.visible")

        cy.get(car_group_list).select('Group 3', {force: true})
        cy.get('[title="Group 3"]').should("be.visible")
    })

    it('chooses drivers age', () => {
        cy.get(drivers_age_list).should("be.visible")
        cy.get(drivers_age_list).select('23', {force: true}).should('have.value', '23')
        cy.get(drivers_age_list).select('24', {force: true}).should('have.value', '24')
        cy.get(drivers_age_list).select('25', {force: true}).should('have.value', '25')
        cy.get(drivers_age_list).select('26', {force: true}).should('have.value', '26')
        



    })

})
