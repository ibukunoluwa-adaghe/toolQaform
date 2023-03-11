class customer {
    customerButton() {
        return cy.get('.borderM > :nth-child(1) > .btn').click({force: true})
    }

    nameDropdown() {
         return cy.get('#userSelect').select('Harry Potter')
    }

    login() {
        return cy.get('form.ng-valid > .btn').click()
    }
}

export default customer;