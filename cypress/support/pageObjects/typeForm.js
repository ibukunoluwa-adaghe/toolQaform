class regForm {
    firstNameField(firstName) {
        return cy.get('#firstName').type(firstName)
    }
    lastNameField(lastName) {
        return cy.get('#lastName').type(lastName)
    }
    emailField(email) {
        return cy.get('#userEmail').type(email)
    }
    phoneNumberField(phoneNumber) {
        return cy.get('#userNumber').type(phoneNumber)
    }
    addressField(address) {
        return cy.get('#currentAddress').type(address)
    }
    // subjectField(subject) {
    //     return cy.get('.subjects-auto-complete__value-container').type(subject)
    // }
}
export default regForm;