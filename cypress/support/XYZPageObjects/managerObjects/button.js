class manager {
    // managerButton() {
    //     return cy.get(':nth-child(3) > .btn').click({force: true})
    // }

    // addCustomerSection() {
    //     return cy.get('[ng-class="btnClass1"]').click({force: true})
    // }

    // openAccount() {
    //     return cy.get('[ng-class="btnClass2"]').click({force: true})
    // }

    customers() {
        return cy.get('[ng-class="btnClass3"]').click({force: true})
    }

    addCustomerButton() {
        return cy.get('button[type="submit"]').contains('Add Customer').click({force: true})
    }

    // processButton() {
    //     return cy.get('form.ng-dirty > button').click()
    // }

    currencyDropdown() {
        return cy.get('#currency').select('Dollar')
    }

    deleteButton() {
        return cy.get('button').last().contains('Delete').click({force: true})
    }

    buttonObject(btn) {
        return cy.get('button').contains(btn).click({force: true})
    }

}

export default manager;