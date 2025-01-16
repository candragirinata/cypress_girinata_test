describe('Sign up & Login', () => {
  it('Test the user registration process with valid data.', () => {
    cy.visit('/register');
    cy.get('input[name="username"]').type('giri') // masukan username
    cy.get('input[name="email"]').type('coba@x.com') // memasukkan email yang belum terdaftar
    cy.get('input[name="password"]').type('chRReRhM8PJ2zB3')// memasukkan password
    cy.get('button.btn.btn-lg.btn-primary').click()//submit tombol login
    cy.url().should('contain', '/#') // cek apakah sudah berada di URL homepage 
    cy.get('body').should('contain', 'Your Feed') // cek apakah ada tab 'Your Feed' yang mengindikasi sudah login
  });
  it('Test the user registration process with invalid data.', () => {
    cy.visit('/register');
    cy.get('input[name="username"]').type('giri') // masukan username
    cy.get('input[name="email"]').type('x@x1') // memasukkan email yang tidak punya domain
    cy.get('input[name="password"]').type('x')// memasukkan password
    cy.get('button.btn.btn-lg.btn-primary').click()//submit tombol login
    cy.url().should('not.contain', '/#') // tidak bisa masuk login karena format email dan pssword tidak benar
    cy.get('body').should('not.contain', 'Your Feed') // memastikan tidak login akses
  });
  it('Verify the login functionality with valid credentials.', () => {
    cy.visit('/')
    cy.get('body').should('not.contain', 'Your Feed') // memastikan belum login 
    cy.get('a.nav-link[href="#/login"]').click().should('have.attr', 'href', '#/login') //klik menu login
    cy.get('input[name="email"]').type('coba@x.com') // memasukkan email
    cy.get('input[name="password"]').type('chRReRhM8PJ2zB3')// memasukkan password
    cy.get('button.btn.btn-lg.btn-primary').click() //submit tombol login
    cy.url().should('contain', '/#') // cek apakah sudah berada di URL homepage 
    cy.get('body').should('contain', 'Your Feed') // cek apakah ada tab 'Your Feed' yang mengindikasi sudah login 

  })
  it('Verify the login functionality with invalid credentials.', () => {
    cy.visit('/')
    cy.get('a.nav-link[href="#/login"]').click().should('have.attr', 'href', '#/login') //klik menu login
    cy.get('input[name="email"]').type('coba@x.com')// masukkan email yang terdaftar
    cy.get('input[name="password"]').type('123456') // memasukkan password yang salah
    cy.get('button.btn.btn-lg.btn-primary').click() //submit tombol login
    cy.get('.error-messages').should('contain', 'Wrong email/password combination') // memastikan validasi login muncul
    cy.get('input[name="email"]').clear().type('x@gmail.com')// memasukkan email yang salah	
    cy.get('input[name="password"]').clear().type('chRReRhM8PJ2zB3') // memasukkan password
    cy.get('button.btn.btn-lg.btn-primary').click() //submit tombol login
    cy.get('.error-messages').should('contain', 'Email not found sign up first') // memastikan validasi login muncul
  });
})