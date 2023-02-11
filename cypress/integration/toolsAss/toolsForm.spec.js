/// <reference types = 'cypress' />

import regForm from "../../support/pageObjects/typeForm";
import regButton from "../../support/pageObjects/buttonForm";

const type = new regForm();
const button = new regButton();
const data = require ('../../fixtures/data.json')

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
    });
})