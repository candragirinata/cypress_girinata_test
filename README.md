# How to run completely this script, please follow instructions below :

---

## **1. Clone Repository**
1. Pastikan Anda memiliki akses ke repository.
2. Buka terminal/command prompt dan jalankan perintah berikut:
   ```bash
   git clone <URL-repo>
   ```
   Contoh:
   ```bash
   git clone https://github.com/user/repo.git
   ```
3. Masuk ke folder repository:
   ```bash
   cd nama-folder-repo
   ```

---

## **2. Install Dependencies**
1. Pastikan Node.js sudah terinstall di sistem Anda (minimal versi 12.0.0 atau sesuai kebutuhan proyek).
2. Jalankan perintah berikut untuk menginstal semua dependency:
   ```bash
   npm install
   ```
3. Verifikasi bahwa file `package.json` sudah memuat dependency Cypress:
   ```json
   "devDependencies": {
       "cypress": "^13.17.0"
   }
   ```

---

## **3. Verifikasi Instalasi Cypress**
1. Pastikan Cypress terinstall dengan menjalankan perintah berikut:
   ```bash
   npx cypress verify
   ```
2. Jika berhasil, Anda akan melihat pesan seperti:
   ```
   Cypress verification completed successfully
   ```

---

## **4. Buka Cypress GUI**
1. Jalankan perintah berikut untuk membuka Cypress Test Runner:
   ```bash
   npx cypress open
   ```
2. Cypress GUI akan terbuka, dan Anda dapat memilih file test untuk dijalankan.

---

## **5. Konfigurasi Project**
1. Pastikan file konfigurasi Cypress (`cypress.config.js` atau `cypress.json`) sudah sesuai dengan kebutuhan proyek.
2. Cek folder `cypress/integration` (atau `cypress/e2e` pada versi terbaru Cypress) untuk memastikan file test yang ingin dijalankan tersedia.

---

## **6. Jalankan Test**
1. Untuk menjalankan semua test melalui CLI:
   ```bash
   npx cypress run
   ```
2. Untuk menjalankan test spesifik:
   ```bash
   npx cypress run --spec "path/to/your/spec-file.js"
   ```

---

## **7. Debugging dan Laporan**
1. Jika ada error, periksa log di terminal atau laporan error di Cypress GUI.
2. Hasil test (video dan screenshot) biasanya disimpan di folder berikut:
   - Video: `cypress/videos`
   - Screenshot: `cypress/screenshots`

---

Untuk detail tambahan atau kendala lain, silakan baca dokumentasi lebih lanjut di [Cypress Documentation](https://docs.cypress.io).
