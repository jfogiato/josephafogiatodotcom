describe("Blog Post Page", () => {
  beforeEach(() => {
    // Visit a known blog post
    cy.visit("/blog/how-i-got-here");
  });

  it("should display the blog post header and metadata", () => {
    cy.get("h1").should("exist");

    cy.get(".text-gray-500").should("exist").and("contain", "·");
  });

  it("should have working navigation links", () => {
    cy.get('a[href="/"]').should("exist").and("have.descendants", "svg");

    cy.get('a[href="/blog"]').should("exist").and("have.descendants", "svg");
  });

  it("should display the featured image", () => {
    cy.get("img").should("exist").and("have.attr", "alt").and("not.be.empty");
  });

  it("should render MDX content correctly", () => {
    cy.get(".prose").should("exist").and("not.be.empty");
  });

  it("should handle dark mode styles", () => {
    cy.get("html").invoke("addClass", "dark");

    cy.get(".prose").should("have.class", "dark:prose-invert");
    cy.get(".text-gray-500").should("have.class", "dark:text-gray-400");
  });

  it("should format dates correctly", () => {
    cy.get(".text-gray-500").should(($date) => {
      const dateText = $date.text();
      expect(dateText).to.match(/\d{1,2}\/\d{1,2}\/\d{4}/);
    });
  });

  it("should have proper image optimization attributes", () => {
    cy.get("img").should(($img) => {
      expect($img).to.have.attr("alt");
      expect($img).to.have.class("rounded-xl");
      expect($img).to.have.class("object-cover");
    });
  });

  it("should maintain responsive layout", () => {
    cy.viewport("iphone-x");
    cy.get(".max-w-4xl").should("be.visible");

    cy.viewport("macbook-15");
    cy.get(".max-w-4xl").should("be.visible");
  });
});
