/// <reference types="cypress" />

describe('test', () => {
    it('open page', () => {
        cy.visit('https://dev.events.home.cc/')
        cy.get('.css-o90e4g').click()
        cy.contains('Create an account')
        cy.get('.css-1ej691c > .MuiBox-root > .MuiTypography-root').should('contain', 'Tell us about yourself')
        cy.get('#firstname').type('adesuwa')
        cy.get('#firstname').clear()

        cy.contains('Sign in').click()

        cy.get('.PrivateSwitchBase-input').uncheck()

        cy.screenshot()
    })
})