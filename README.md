Panduan Instalasi dan Penggunaan Aplikasi Node.js & React.js
1. Persyaratan Sistem
Pastikan Anda telah menginstal:
•	Node.js (Disarankan versi terbaru) -> Download di sini
•	MySQL (Untuk database) -> Download di sini
 
2. Instalasi Backend (Node.js + Express)
1.	Clone Repository
2.	git clone https://github.com/alenprastyaa/Test-Be
3.	Instal Dependensi
npm install
Dependensi yang akan terinstal:
o	express
o	mysql
o	dotenv
o	cors
4.	Konfigurasi Environment (.env) Buat file .env di folder backend dan tambahkan:
5.	DB_HOST=localhost
6.	DB_USER=root
7.	DB_PASSWORD=””
8.	DB_NAME=test_app “test_app”
PORT=5000
9.	Menjalankan Server Backend
Nodemon index
Server akan berjalan di http://localhost:5000
 
3. Instalasi Frontend (React.js + React Bootstrap)
1.	Masuk ke Direktori Frontend
cd ../frontend
2.	Instal Dependensi
npm install
Dependensi yang akan terinstal:
o	react-bootstrap
o	axios
o	react-router-dom
3.	Menjalankan Aplikasi React
npm start
Aplikasi akan berjalan di http://localhost:3000
 
 
4. Catatan Tambahan
•	Pastikan MySQL berjalan sebelum menjalankan backend.
•	Jika terjadi error, pastikan dependensi sudah terinstal dengan benar.
•	Untuk pengelolaan database, gunakan tools seperti phpMyAdmin atau MySQL Workbench.
![image](https://github.com/user-attachments/assets/e5d41f0d-50a1-4028-8a68-844142605735)
