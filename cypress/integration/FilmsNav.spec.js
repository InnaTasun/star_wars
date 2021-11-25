/// <reference types="cypress" />

const waitingTime = 3000;

describe('Films navigation', () => {
  it('main page dunloads', () => {
    cy.visit('/');

    cy.wait(waitingTime);

    cy.get('img').should('have.class', 'main-logo--img');
    cy.get('h3').should('contain.text', 'MOVIES');
    cy.get('.films-list--film').should('be.visible').and('have.length', 6);
  });

  it('nav to the 1st film and back', () => {
    cy.get('.films-list--film:nth-child(1)').click();

    cy.wait(waitingTime);

    cy.get('img').should('have.class', 'film--logo');
    cy.get('section')
      .should('have.class', 'film--info')
      .and('contain.text', 'A New Hope');
    cy.get('h3').should('contain.text', 'CHARACTERS');
    cy.get('.characts-list--character')
      .should('be.visible')
      .and('have.length', 18)
      .and('contain.text', 'Greedo')

    cy.go('back');

    cy.wait(waitingTime);

    cy.get('img').should('have.class', 'main-logo--img');
    cy.get('h3').should('contain.text', 'MOVIES');
    cy.get('.films-list--film').should('be.visible').and('have.length', 6);
  });

  it('nav to the 2nd film and back', () => {
    cy.get('.films-list--film:nth-child(2)').click();

    cy.wait(waitingTime);

    cy.get('img').should('have.class', 'film--logo');
    cy.get('section')
      .should('have.class', 'film--info')
      .and('contain.text', 'The Empire Strikes Back');
    cy.get('h3').should('contain.text', 'CHARACTERS');
    cy.get('.characts-list--character')
      .should('be.visible')
      .and('have.length', 16)
      .and('contain.text', 'IG-88')

      cy.go('back');

      cy.wait(waitingTime);
  
      cy.get('img').should('have.class', 'main-logo--img');
      cy.get('h3').should('contain.text', 'MOVIES');
      cy.get('.films-list--film').should('be.visible').and('have.length', 6);
  });

  it('nav to the 3rd film and back', () => {
    cy.get('.films-list--film:nth-child(3)').click();

    cy.wait(waitingTime);

    cy.get('img').should('have.class', 'film--logo');
    cy.get('section')
      .should('have.class', 'film--info')
      .and('contain.text', 'Return of the Jedi');
    cy.get('h3').should('contain.text', 'CHARACTERS');
    cy.get('.characts-list--character')
      .should('be.visible')
      .and('have.length', 20)
      .and('contain.text', 'Nien Nunb')

      cy.go('back');

      cy.wait(waitingTime);
  
      cy.get('img').should('have.class', 'main-logo--img');
      cy.get('h3').should('contain.text', 'MOVIES');
      cy.get('.films-list--film').should('be.visible').and('have.length', 6);
  });

  it('nav to the 4th film and back', () => {
    cy.get('.films-list--film:nth-child(4)').click();

    cy.wait(waitingTime);

    cy.get('img').should('have.class', 'film--logo');
    cy.get('section')
      .should('have.class', 'film--info')
      .and('contain.text', 'The Phantom Menace');
    cy.get('h3').should('contain.text', 'CHARACTERS');
    cy.get('.characts-list--character')
      .should('be.visible')
      .and('have.length', 34)
      .and('contain.text', 'Ben Quadinaros')

      cy.go('back');

      cy.wait(waitingTime);
  
      cy.get('img').should('have.class', 'main-logo--img');
      cy.get('h3').should('contain.text', 'MOVIES');
      cy.get('.films-list--film').should('be.visible').and('have.length', 6);
  });

  it('nav to the 5th film and back', () => {
    cy.get('.films-list--film:nth-child(5)').click();

    cy.wait(waitingTime);

    cy.get('img').should('have.class', 'film--logo');
    cy.get('section')
      .should('have.class', 'film--info')
      .and('contain.text', 'Attack of the Clones');
    cy.get('h3').should('contain.text', 'CHARACTERS');
    cy.get('.characts-list--character')
      .should('be.visible')
      .and('have.length', 40)
      .and('contain.text', 'Wat Tambor')

      cy.go('back');

      cy.wait(waitingTime);
  
      cy.get('img').should('have.class', 'main-logo--img');
      cy.get('h3').should('contain.text', 'MOVIES');
      cy.get('.films-list--film').should('be.visible').and('have.length', 6);
  });

  it('nav to the 6th film and back', () => {
    cy.get('.films-list--film:nth-child(6)').click();

    cy.wait(waitingTime);

    cy.get('img').should('have.class', 'film--logo');
    cy.get('section')
      .should('have.class', 'film--info')
      .and('contain.text', 'Revenge of the Sith');
    cy.get('h3').should('contain.text', 'CHARACTERS');
    cy.get('.characts-list--character')
      .should('be.visible')
      .and('have.length', 34)
      .and('contain.text', 'Tion Medon')

      cy.go('back');

      cy.wait(waitingTime);
  
      cy.get('img').should('have.class', 'main-logo--img');
      cy.get('h3').should('contain.text', 'MOVIES');
      cy.get('.films-list--film').should('be.visible').and('have.length', 6);
  });
});
