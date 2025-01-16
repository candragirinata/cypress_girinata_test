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
2. Cypress GUI akan terbuka, pilih `E2E Testing` 
3. Pilih `Chrome` sebagai browser 
4. Klik tombol `Start E2E Testing in Chrome`
5. Anda dapat memilih file test untuk dijalankan.

---
