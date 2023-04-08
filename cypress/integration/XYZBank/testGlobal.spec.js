/// <reference types = 'cypress' />

import customer from "../../support/XYZPageObjects/customerObjects/button";
import manager from "../../support/XYZPageObjects/managerObjects/button";
import input from "../../support/XYZPageObjects/managerObjects/type";

const cbutton = new customer();
const mbutton = new manager();
const minput = new input();

const code = '110119'
const firstname = minput.random()
        const lastname = minput.random()
        const fullname = firstname + ' ' + lastname

// beforeEach(() => {
//     cy.visit(Cypress.env("XYZbaseUrl"))
// });

describe ('Customer Profile', () => {
    it ('Verify user can select name', () => {
        cy.visit(Cypress.env("XYZbaseUrl"))
        cbutton.buttonObject('Customer Login')
        cbutton.nameDropdown()
        cy.wait(1000)
        cbutton.buttonObject('Login')
    });
    it ('Verify user can view customer options', () => {
        cy.get('[ng-class="btnClass1"]').should('contain.text','Transactions')
        cy.get('[ng-class="btnClass2"]').should('contain.text','Deposit')
        cy.get('[ng-class="btnClass3"]').should('contain.text','Withdrawl')
        cy.wait(2000)
    })
})

   
describe ('Bank Manager Profile', () => {
    it ('Verify Bank Manager can login', () => {
        cy.visit(Cypress.env("XYZbaseUrl"))
        mbutton.buttonObject('Bank Manager Login')
        cy.wait(1000)
    });
    it ('Verify new customer can be added', () => {
        // click add customer section
        mbutton.buttonObject('Add Customer')
        cy.wait(1000)

        minput.firstName(firstname)
        cy.wait(1000)

        minput.lastName(lastname)
        cy.wait(1000)

        minput.postCode(code)
        cy.wait(1000)

        mbutton.addCustomerButton()
        cy.wait(1000)
    });
    it ('Verify account can be opened for new user', () => {
        // click open account section
        mbutton.buttonObject('Open Account')
        cy.wait(1000)

        // select input from dropdown
        cy.get('#userSelect').select(fullname)

        //select item from dropdown
        mbutton.currencyDropdown()

        //click process button
        mbutton.buttonObject('Process')
        cy.wait(1000)
    });
    it ('Verify new user is visible on customers list page', () => {
    // click customers section
    mbutton.customers()
    cy.get('tr[class="ng-scope"]').should('contain.text',firstname)
    cy.get('tr[class="ng-scope"]').should('contain.text',lastname)
    cy.wait(1000)
    });
    it ('Verify bank manager can search by users', () => {
        minput.searchBar().type(firstname)
        cy.get('tr.ng-scope > :nth-child(1)').should('have.text',firstname)
        cy.wait(1000)
        minput.searchBar().clear()

        minput.searchBar().type(lastname)
        cy.get('tr.ng-scope > :nth-child(2)').should('have.text',lastname)
        cy.wait(1000)
        minput.searchBar().clear()

        minput.searchBar().type(code)
        cy.get('tr.ng-scope > :nth-child(3)').should('have.text',code)
        cy.wait(1000)
        minput.searchBar().clear()
    });    
    it ('Verify user can be deleted from customers list', () => {
    // delete new entry
    mbutton.deleteButton()
    cy.get('tr[class="ng-scope"]').should('not.contain.text',firstname)
    cy.get('tr[class="ng-scope"]').should('not.contain.text',lastname)
    })
})