describe("Appointments", () => {
  // common behaviour
  beforeEach(() => {
   cy.request("GET", "/api/debug/reset");
 
   cy.visit("/");
 
   cy.contains("Monday");
  });
 
  it("should book an interview", () => {
    
   // clicks on the "Add" button 
   cy.get("[alt=Add]")
    .first()
    .click();
 
   // enters the name
   cy.get("[data-testid=student-name-input]").type("Lydia Miller-Jones");

   // chooses an interviewer
   cy.get('[alt="Sylvia Palmer"]').click();
 
   // clicks the save button
   cy.contains("Save").click();
 
   // sees the booked appointment
   cy.contains(".appointment__card--show", "Lydia Miller-Jones");
   cy.contains(".appointment__card--show", "Sylvia Palmer");
  });


  it("should edit an interview", () => {
    cy.get("[alt=Edit]")
      .first()
      .click({ force: true });
  
    cy.get("[data-testid=student-name-input]").clear().type("Lydia Miller-Jones");
    cy.get("[alt='Tori Malcolm']").click();
  
    cy.contains("Save").click();
  
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });

  
  it("should cancel an interview", () => {
    cy.get("[alt=Delete]")
      .click({ force: true });
  
    cy.contains("Confirm").click();
  
    cy.contains("Deleting").should("exist");
    cy.contains("Deleting").should("not.exist");
  
    cy.contains(".appointment__card--show", "Archie Cohen")
      .should("not.exist");
  });


 });
