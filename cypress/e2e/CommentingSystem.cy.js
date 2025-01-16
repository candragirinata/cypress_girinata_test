describe('Commenting System', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('body').should('not.contain', 'Your Feed')
    cy.get('a.nav-link[href="#/login"]').click().should('have.attr', 'href', '#/login')
    cy.get('input[name="email"]').type('coba@x.com')
    cy.get('input[name="password"]').type('chRReRhM8PJ2zB3')
    cy.get('button.btn.btn-lg.btn-primary').click()
    cy.url().should('contain', '/#')
    cy.get('body').should('contain', 'Your Feed') // validasi proses login berhasil
  })

  it('Test adding and deleting comments on an article.', () => {
    cy.get('.nav-link').contains('Global Feed').click(); // melihat isi global artikel
    cy.get('.preview-link').first().click(); // klik content html yang mengarahkan ke halaman artikel
    cy.get('textarea.form-control').type('Saya Komentar') // menulis komentar
    cy.get('.btn').contains('Post Comment').click() // submit komentar
    cy.get('.ion-trash-a').last().click() // menghapus komentar
  });

  it('Validate character limits, formatting, and error handling', () => {
    cy.get('.nav-link').contains('Global Feed').click(); // melihat isi global artikel
    cy.get('.preview-link').first().click(); // klik content html yang mengarahkan ke halaman artikel
    cy.get('textarea.form-control').invoke('val', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(2000)) // menulis komentar lebih > 100000 karakter
    cy.get('.btn').contains('Post Comment').click() // submit komentar
    cy.get('.ion-trash-a').last().click() // menghapus komentar
  });
})