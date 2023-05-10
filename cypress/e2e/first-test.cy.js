describe("shipyard flask react example app", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    const urlToVisit = "/" + "?shipyard_token=" + Cypress.env("BYPASS_TOKEN");
    cy.visit(urlToVisit);
  });

  it("Displays the logo with correct alt text", () => {
    cy.get(".makeStyles-img-4")
      .first()
      .should("have.attr", "alt", "Shipyard logo");
  });
});
