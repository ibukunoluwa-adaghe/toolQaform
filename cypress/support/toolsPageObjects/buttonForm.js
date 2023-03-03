class regButton {
    genderRadioButton() {
        return cy.get('#gender-radio-2.custom-control-input').click({force: true})
    }
    hobbyCheckButton() {
        return cy.get('#hobbies-checkbox-3.custom-control-input').click({force: true})
    }
    subjectSelection() {
        return cy.get('#react-select-2-option-0').click()
    }
    stateDropdown() {
        return cy.get('#state > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click({force: true})
    }
    cityDropdown() {
        return cy.get('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r').click({force: true})
    }

} 
export default regButton;

