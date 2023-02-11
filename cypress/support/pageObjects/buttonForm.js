class regButton {
    genderRadioButton() {
        return cy.get('#gender-radio-2.custom-control-input').click({force: true})
    }
    hobbyCheckButton() {
        return cy.get('#hobbies-checkbox-3.custom-control-input').click({force: true})
    }

}
export default regButton;