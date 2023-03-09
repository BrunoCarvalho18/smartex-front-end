describe('Login Test Suite', () => {

    let mass_data;

  //Use the cy.fixture() method to pull data from fixture file
  beforeEach(function () {
    cy.fixture('mass_data').then((data)=> {
      mass_data = data;
    })
  });

  it('login should be accessed sucessfully', () => {
       cy.login(mass_data.email,mass_data.password)
       cy.get("button[class='dropdown__toggle-button']").contains(mass_data.user)
  });

  it('login should  not be accessed sucessfully, because password or email is blank', () => {
    cy.login(mass_data.email," ")
    cy.get("li[class='form-error__list-item']").contains(mass_data.messageIncorrect)
  });

  it('login should  not be accessed sucessfully, because password or email is incorrect', () => {
    cy.login(mass_data.emailIncorrect,mass_data.password)
    cy.get("li[class='form-error__list-item']").contains(mass_data.messageIncorrect)
  });


})