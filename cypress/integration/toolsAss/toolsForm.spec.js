/// <reference types = 'cypress' />

import regForm from "../../support/pageObjects/typeForm";
import regButton from "../../support/pageObjects/buttonForm";

const type = new regForm();
const button = new regButton();
const data = require ('../../fixtures/data.json')

beforeEach(() => {
    cy.viewport("iphone-8")
});

describe ('myForm Module', function(){
    it('My registration form', () => {
        cy.visit(Cypress.env('baseUrl'))

        type.firstNameField(data.validFormDetails.firstName)
        type.lastNameField(data.validFormDetails.lastName)
        type.emailField(data.validFormDetails.email)
        type.phoneNumberField(data.validFormDetails.phoneNumber)
        type.addressField(data.validFormDetails.address)
        button.genderRadioButton()
        button.hobbyCheckButton()
        //Select first subject
        type.subjectField(data.subjectList.subject1)
        button.subjectSelection()
        cy.wait(1000)
        // select second subject
        type.subjectField(data.subjectList.subject2)
        button.subjectSelection()

        button.stateDropdown()
        //select from statedropdown
        cy.get('.css-11unzgr').find('#react-select-3-option-1').click({force: true})

        button.cityDropdown()
        //select from city dropdown
        cy.get('.css-11unzgr').find('#react-select-4-option-0').click({force: true})

    });
})