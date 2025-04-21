describe("Blog Page", () => {
  beforeEach(() => {
    cy.visit("/blog");
  });

  it("should display the header correctly", () => {
    cy.get("h1").should("contain.text", "Blog.");
  });

  it("should display blog posts in a vertical list", () => {
    cy.get("article").should("exist");
    cy.get("article").should("have.length.at.least", 1);
  });

  it("should display correct information for each blog post", () => {
    cy.get("article")
      .first()
      .within(() => {
        cy.get("img").should("exist");
        cy.get("h2").should("exist");
        cy.get(".text-gray-600").should("exist");
        cy.get(".text-gray-800").should("exist");
      });
  });

  it("should navigate to individual blog post when clicked", () => {
    cy.get("article").first().click();
    cy.url().should("include", "/blog/");
  });

  it("should format dates correctly", () => {
    cy.get(".text-gray-600")
      .first()
      .should(($date) => {
        const dateText = $date.text();
        // Check for "Month Day, Year · X min read" format
        expect(dateText).to.match(/[A-Z][a-z]+ \d{1,2}, \d{4}.*·.*/);
      });
  });

  it("should have proper image attributes", () => {
    cy.get("img").first().should("have.attr", "alt").should("not.be.empty");

    cy.get("img")
      .first()
      .should("have.class", "object-cover")
      .and("have.class", "rounded-lg");
  });

  it("should apply hover styles to blog cards", () => {
    cy.get("article")
      .first()
      .parent()
      .trigger("mouseover")
      .within(() => {
        cy.get("h2").should("have.class", "group-hover:text-blue-600");
      });
  });

  it("should have proper article background and border", () => {
    cy.get("article")
      .first()
      .should("have.class", "bg-gray-50")
      .and("have.class", "border")
      .and("have.class", "border-gray-200");
  });
});
