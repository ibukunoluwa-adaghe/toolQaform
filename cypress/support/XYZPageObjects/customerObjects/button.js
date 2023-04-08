class customer {
    //click customer section on home page
    // customerButton() {
    //     // button=tag name
    //     //return cy.get('button[class="btn btn-primary btn-lg"]').contains('Customer Login').click({force: true})
    //     return cy.get('button').contains('Customer Login').click({force: true})
    //     //return cy.get('.borderM > :nth-child(1) > .btn').click({force: true}) CORRECT
    // }

    nameDropdown() {
         //return cy.get('#userSelect').select('Harry Potter')
         return cy.get('select[name="userSelect"]').select('Harry Potter')
    }

    // login() {
    //     return cy.get('form.ng-valid > .btn').click()
    // }

    buttonObject(btn) {
        return cy.get('button').contains(btn).click({force: true})
    }
}

export default customer;