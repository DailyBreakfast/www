// spec.ts
describe('When Angular starting page is loaded', () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
    cy.visit('/');
    cy.injectAxe();
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
    cy.get('body').click();
  });
  it('goto Lieferservice',() => {
    cy.get('*[data-cyid="searchbutton"]').click();
  })
  it('goto Lieferservice',() => {
    cy.get('*[data-cyid="start"]').click();
  })
});
