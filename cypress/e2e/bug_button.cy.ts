describe("Bug Button", () => {
  it("should be visible and functional across different pages", () => {
    // Test homepage
    cy.visit("/");
    cy.get("#bug-report-button").should("be.visible");
    cy.get("#bug-report-button").click();
    cy.window().then((win) => {
      cy.url().should("include", "https://github.com/jfogiato/josephafogiatodotcom/issues/new");
    });
    
    // Test about page
    cy.visit("/about");
    cy.get("#bug-report-button").should("be.visible");
    cy.get("#bug-report-button").click();
    cy.window().then((win) => {
      cy.url().should("include", "https://github.com/jfogiato/josephafogiatodotcom/issues/new");
    });
    
    // Test projects page
    cy.visit("/projects");
    cy.get("#bug-report-button").should("be.visible");
    cy.get("#bug-report-button").click();
    cy.window().then((win) => {
      cy.url().should("include", "https://github.com/jfogiato/josephafogiatodotcom/issues/new");
    });
  });
});
