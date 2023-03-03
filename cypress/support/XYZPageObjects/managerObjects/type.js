class input {
    random() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        
            for (var i = 0; i < 10; i++)
              text += possible.charAt(Math.floor(Math.random() * possible.length));
        
            return text;
          
    }

    firstName(firstname) {
        return cy.get(':nth-child(1) > .form-control').type(firstname)
    }

    lastName(lastname) {
        return cy.get(':nth-child(2) > .form-control').type(lastname)
    }

    postCode(code) {
        return cy.get(':nth-child(3) > .form-control').type(code)
    }
}

export default input;