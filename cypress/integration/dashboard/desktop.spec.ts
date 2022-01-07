// spec.ts
describe('When Angular starting page is loaded', () => {
  beforeEach(() => {
    cy.viewport('macbook-16');
    cy.visit('/login/dashboard');
    cy.injectAxe();
  });

  it('check a11y', () => {
    cy.checkA11y()
  });

});
