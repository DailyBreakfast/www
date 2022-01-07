// spec.ts
describe('When Angular starting page is loaded', () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
    cy.visit('/kontakt');
    cy.injectAxe();
  });

  it('check a11y', () => {
    cy.checkA11y()
  });

});
