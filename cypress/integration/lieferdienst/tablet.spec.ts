// spec.ts
describe('When Angular starting page is loaded', () => {
  beforeEach(() => {
    cy.viewport('ipad-2');
    cy.visit('/lieferdienst-werden');
    cy.injectAxe();
  });

  it('check a11y', () => {
    cy.checkA11y()
  });

});
