// spec.ts
describe('When Angular starting page is loaded', () => {
  beforeEach(() => {
    cy.viewport('macbook-16');
    cy.visit('/lieferdienst-werden');
    cy.injectAxe();
  });

  it('check a11y', () => {
    cy.checkA11y()
  });

});
