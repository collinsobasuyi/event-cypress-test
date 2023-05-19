/// <reference types="cypress" />



describe('example to-do app', () => {
  beforeEach(() => {

    cy.visit('https://example.cypress.io/todo')
  })

  it('displays two todo items by default', () => {

    cy.get('.todo-list li').should('have.length', 2)


    cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  })

  it('can add new todo items', () => {

    const newItem = 'Feed the cat'


    cy.get('[class="new-todo"]').type(`${newItem}{enter}`)

 
    cy.get('.todo-list li')
      .should('have.length', 4)
      .last()
      .should('have.text', newItem)
  })

})
