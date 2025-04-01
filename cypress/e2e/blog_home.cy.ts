describe("Blog Page", () => {
  beforeEach(() => {
    cy.visit("/blog");
  });

  it("should display the header correctly", () => {
    cy.get("h1").should("contain.text", "Blog.");
  });

  it("should display blog posts in a grid", () => {
    cy.get(".grid").should("exist");
    cy.get(".grid").children().should("have.length.at.least", 1);
  });

  it("should display correct information for each blog post", () => {
    cy.get(".grid > a")
      .first()
      .within(() => {
        cy.get("img").should("exist");
        cy.get("h2").should("exist");
        cy.get(".text-gray-600").should("exist");
        cy.get(".text-gray-800").should("exist");
      });
  });

  it("should navigate to individual blog post when clicked", () => {
    cy.get(".grid > a").first().click();
    cy.url().should("include", "/blog/");
  });

  it("should truncate long descriptions", () => {
    cy.get(".text-gray-800").each(($desc) => {
      expect($desc.text().length).to.be.at.most(153);
    });
  });

  it("should format dates correctly", () => {
    cy.get(".text-gray-600")
      .first()
      .should(($date) => {
        const dateText = $date.text();
        expect(dateText).to.match(/\d{1,2}\/\d{1,2}\/\d{4}.*·.*/);
      });
  });

  it("should have proper image attributes", () => {
    cy.get("img").first().should("have.attr", "alt").should("not.be.empty");
  });

  it("should apply hover effects to blog cards", () => {
    cy.get(".grid > a")
      .first()
      .trigger("mouseover")
      .should("have.class", "hover:shadow-2xl");
  });
});
