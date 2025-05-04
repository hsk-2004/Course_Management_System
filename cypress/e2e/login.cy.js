describe('Login Page Tests', () => {

  // Test case: Visit the login page
  it('should visit the login page', () => {
    cy.visit('http://localhost:3000/login'); // Change URL if needed
    cy.contains('LOGIN', { timeout: 10000 }).should('be.visible'); // Check if the login title is visible
  });

  // Test case: Check if the login form exists
  it('should have a login form with email and password fields', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[type="email"]').should('exist'); // Check if email input is visible
    cy.get('input[type="password"]').should('exist'); // Check if password input is visible
    cy.get('button[type="submit"]').should('exist'); // Check if submit button exists
  });

  // Test case: Try logging in with invalid credentials
  it('should show an error message with invalid credentials', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[type="email"]').type('invaliduser@example.com'); // Type invalid email
    cy.get('input[type="password"]').type('wrongpassword'); // Type wrong password
    cy.get('button[type="submit"]').click(); // Submit the form

    // You may want to adjust based on your UI or test alert instead
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Invalid email or password! Please try again.');
    });
  });

  // Test case: Successful login
  it('should log in successfully with valid credentials', () => {
    // Mocking a valid user stored in localStorage
    const user = {
      email: 'user@example.com',
      password: 'password123',
      role: 'student', // Adjust as needed for testing different roles
    };
    cy.visit('http://localhost:3000/login');
    window.localStorage.setItem('user', JSON.stringify(user)); // Mock user in localStorage
    
    cy.get('input[type="email"]').type('user@example.com'); // Type valid email
    cy.get('input[type="password"]').type('password123'); // Type valid password
    cy.get('button[type="submit"]').click(); // Submit the form

    // Check if the user is redirected to the appropriate dashboard
    cy.url().should('include', '/student-dashboard'); // Check for student dashboard
    cy.contains('Student Dashboard').should('be.visible'); // Ensure the student dashboard title is visible
  });

});
