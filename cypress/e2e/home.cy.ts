describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the site title", () => {
    cy.contains("Joseph A. Fogiato").should("be.visible");
  });

  it("should navigate to the About page when clicking the name", () => {
    cy.get("h1").click();
    cy.url().should("include", "/whoami");
  });

  it("should have a working bug report button", () => {
    cy.get('[title="Report a Bug / Request a Feature"]').should("be.visible");
  });
});