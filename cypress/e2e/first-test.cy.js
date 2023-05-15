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

    cy.get("button")
      .contains("Reset Counter")
      .click();

    cy.reload(true);

    cy.get("p")
      .contains("Flask server running on port")
      .should("contain", "1 time");
  });

  it("Counter should be larger than 1000", () => {
    // TBD outline
    // - Run the test. It succeeds
    //
    // - Visits the page manually, click reset counter
    // - Go to GitHub Pull Request action
    // - Re-run the test, it fails
    // - Go to data dashboard
    // - Roll back the database to a known good state
    // - Re-run the test, it should succeed

    cy.get("p")
      .contains("Flask server running on port")
      .then($countInfo => {
        const count = parseInt(
          $countInfo.text().match(/Pinged (\d+) time/)?.[1],
          10
        );
        expect(count).to.be.greaterThan(1000);
      });
  });
});
