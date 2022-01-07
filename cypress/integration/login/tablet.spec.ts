// spec.ts
describe('When Angular starting page is loaded', () => {
  beforeEach(() => {
    cy.viewport('ipad-2');
    cy.visit('/login');
    cy.injectAxe();
  });

  it('check a11y', () => {
    cy.checkA11y()
  });

});
