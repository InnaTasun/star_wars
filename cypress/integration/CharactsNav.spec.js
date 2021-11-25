/// <reference types="cypress" />

const waitingTime = 3000;

describe('Characters navigation', () => {
  it('from 1st film', () => {
    cy.visit('/films/1');

    cy.wait(waitingTime);

    cy.get('h3').should('contain.text', 'CHARACTERS');
    cy.get('.characts-list--character').should('contain.text', 'Obi-Wan Kenobi')
    cy.contains('Obi-Wan Kenobi').click()

    cy.wait(waitingTime);

    cy.get('img').should('have.class', 'character--logo');
    cy.get('section')
      .should('have.class', 'character--info')
      .and('contain.text', 'Obi-Wan Kenobi')
      .and('contain.text', 'J-type star skiff')
      .and('contain.text', 'Tribubble bongo');
    cy.get('h3').should('contain.text', 'MOVIES STARRING');
    cy.get('.starring-list--film')
      .should('be.visible')
      .and('have.length', 6)
  });

  it('from 2nd film', () => {
    cy.visit('/films/2');

    cy.wait(waitingTime);

    cy.get('h3').should('contain.text', 'CHARACTERS');
    cy.get('.characts-list--character').should('contain.text', 'Palpatine')
    cy.contains('Palpatine').click()

    cy.wait(waitingTime);

    cy.get('img').should('have.class', 'character--logo');
    cy.get('section')
      .should('have.class', 'character--info')
      .and('contain.text', 'Palpatine')
      .and('contain.text', 'Naboo')
    cy.get('h3').should('contain.text', 'MOVIES STARRING');
    cy.get('.starring-list--film')
      .should('be.visible')
      .and('have.length', 5)
  });

  it('from 3rd film', () => {
    cy.visit('/films/3');

    cy.wait(waitingTime);

    cy.get('h3').should('contain.text', 'CHARACTERS');
    cy.get('.characts-list--character').should('contain.text', 'Wicket Systri Warrick')
    cy.contains('Wicket Systri Warrick').click()

    cy.wait(waitingTime);

    cy.get('img').should('have.class', 'character--logo');
    cy.get('section')
      .should('have.class', 'character--info')
      .and('contain.text', 'Wicket Systri Warrick')
      .and('contain.text', 'Endor')
    cy.get('h3').should('contain.text', 'MOVIES STARRING');
    cy.get('.starring-list--film')
      .should('be.visible')
      .and('have.length', 1)
  });

  it('from 4th film', () => {
    cy.visit('/films/4');

    cy.wait(waitingTime);

    cy.get('h3').should('contain.text', 'CHARACTERS');
    cy.get('.characts-list--character').should('contain.text', 'Mace Windu')
    cy.contains('Mace Windu').click()

    cy.wait(waitingTime);

    cy.get('img').should('have.class', 'character--logo');
    cy.get('section')
      .should('have.class', 'character--info')
      .and('contain.text', 'Mace Windu')
      .and('contain.text', 'Haruun Kal')
    cy.get('h3').should('contain.text', 'MOVIES STARRING');
    cy.get('.starring-list--film')
      .should('be.visible')
      .and('have.length', 3)
  });

  it('from 5th film', () => {
    cy.visit('/films/5');

    cy.wait(waitingTime);

    cy.get('h3').should('contain.text', 'CHARACTERS');
    cy.get('.characts-list--character').should('contain.text', 'Zam Wesell')
    cy.contains('Zam Wesell').click()

    cy.wait(waitingTime);

    cy.get('img').should('have.class', 'character--logo');
    cy.get('section')
      .should('have.class', 'character--info')
      .and('contain.text', 'Zam Wesell')
      .and('contain.text', 'Zolan')
      .and('contain.text', 'Koro-2 Exodrive airspeeder')
    cy.get('h3').should('contain.text', 'MOVIES STARRING');
    cy.get('.starring-list--film')
      .should('be.visible')
      .and('have.length', 1)
  });

  it('from 6th film', () => {
    cy.visit('/films/6');

    cy.wait(waitingTime);

    cy.get('h3').should('contain.text', 'CHARACTERS');
    cy.get('.characts-list--character').should('contain.text', 'Chewbacca')
    cy.contains('Chewbacca').click()

    cy.wait(waitingTime);

    cy.get('img').should('have.class', 'character--logo');
    cy.get('section')
      .should('have.class', 'character--info')
      .and('contain.text', 'Chewbacca')
      .and('contain.text', 'Kashyyyk')
      .and('contain.text', 'YT-1300 light freighter')
      .and('contain.text', 'AT-ST')
    cy.get('h3').should('contain.text', 'MOVIES STARRING');
    cy.get('.starring-list--film')
      .should('be.visible')
      .and('have.length', 4)
  });
});
