describe("E2E Tests", () => {
  it("Basic Flow", () => {
    cy.visit("/");

    // Check if the page is loaded correctly
    cy.get("details").should("have.length", 5);

    // Check if the details are working correctly
    cy.get("details").each((detail) => {
      cy.wrap(detail).should("not.have.attr", "open");
      cy.wrap(detail).click();
      cy.wrap(detail).should("have.attr", "open");
      cy.wrap(detail).should("contain.text", "Status");
      cy.wrap(detail).click();
    });

    const object = {
      command: crypto.randomUUID(),
      sample: crypto.randomUUID(),
      user: crypto.randomUUID(),
      group: crypto.randomUUID(),
      status: crypto.randomUUID(),
      date: crypto.randomUUID(),
      completedDate: crypto.randomUUID(),
    };

    // Add a new job
    cy.request("POST", "http://backend:3000/api/jobs", object).then(
      ({ body: id }) => {
        cy.reload();

        // Check if the new job is added
        cy.get("details").should("have.length", 6);
        cy.get("details").last().should("contain.text", object.command);

        // Update the new job
        cy.request("PUT", `http://backend:3000/api/jobs/${id}`, {
          status: "Running",
        });
        cy.reload();

        // Check if the job is updated
        cy.get("details").last().should("contain.text", "Running");

        // Delete the new job
        cy.request("DELETE", `http://backend:3000/api/jobs/${id}`);
        cy.reload();

        // Check if the job is deleted
        cy.get("details").should("have.length", 5);
      }
    );
  });
});
