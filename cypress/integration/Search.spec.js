/// <reference types="cypress" />

const waitingTime = 5000;

describe('App', () => {
  it('has a searchbox', () => {
    cy.visit('/');

    cy.get('input').should('have.value', '');
    cy.get('img').should('have.class', 'search--btn');
  });

  it('search works with correct data (1)', () => {
    cy.get('input').type('re').should('have.value', 're');
    cy.get('.search--btn').click();
    cy.get('input').should('have.value', '')

    cy.wait(waitingTime);

    cy.get('h2').should('have.text', 'SEARCH RESULTS');
    cy.get('.results-list--result').should('have.length', 9)
    .and('contain.text', 'Greedo')
    .and('contain.text', 'Sly Moore')
  });

  it('search works with correct data (2)', () => {
    cy.get('input').type('ho').should('have.value', 'ho');
    cy.get('.search--btn').click();
    cy.get('input').should('have.value', '')

    cy.wait(waitingTime);

    cy.get('h2').should('have.text', 'SEARCH RESULTS');
    cy.get('.results-list--result').should('have.length', 2)
    .and('contain.text', 'Gregar Typho')
  });

  it('search works with incorrect data', () => {
    cy.get('input').type('lima').should('have.value', 'lima');
    cy.get('.search--btn').click();
    cy.get('input').should('have.value', '')

    cy.wait(waitingTime);

    cy.get('h2').should('have.text', 'SEARCH RESULTS');
    cy.get('.results-list--result').should('have.length', 0)
  });

});
