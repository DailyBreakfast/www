// spec.ts
describe('When Angular starting page is loaded', () => {
  beforeEach(() => {
    cy.viewport('macbook-16');
    cy.visit('/');
    cy.injectAxe();
  });

  it ('check a11y', () =>  {
    cy.checkA11y()
  });
  it('has app title, shows proper command by default and reacts on command changes', () => {
    cy.contains('DailyBreakfast');
    cy.contains('Login');
  });
  it('check routings', () => {
    cy.get('*[data-cyid="searchbutton"]').should('have.attr','routerlink');
    cy.get('*[data-cyid="start"]').should('have.attr','routerlink');
  });
  it('Toggle Menus', () => {
    // Toggle Menü
    cy.contains('menu').click();
    cy.get('.cdk-overlay-backdrop').click();
  });
  it('goto Lieferservice',() => {
    cy.get('*[data-cyid="searchbutton"]').click();
  })
  it('goto Lieferservice',() => {
    cy.get('*[data-cyid="start"]').click();
  })
});
