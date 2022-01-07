// spec.ts
describe('When Angular starting page is loaded', () => {
  beforeEach(() => {
    cy.viewport('macbook-16');
    cy.visit('/impressum');
    cy.injectAxe();
  });

  it('check a11y', () => {
    cy.checkA11y()
  });

});
