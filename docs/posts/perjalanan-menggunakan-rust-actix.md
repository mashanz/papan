# Kami Memilih Rust/Actix daripada Python/Flask/Django atau JavaScript/NodeJS Sebagai Codebase Project Baru yang Sedang Kami Kerjakan.

> 16 September 2023 

Beberapa waktu lalu saya diajak untuk membuat sebuah aplikasi. Ada beberapa tech stack yang kami pilih sebagai kandidat seperti NodeJS dan Python (Django). 

Setelah 7 tahun lebih menggunakan Python, saya mulai merasa bosan dan ingin mencari teknologi yang lebih “menarik”.

Di situ saya menemukan Rust. Membuat web menggunakan rust sangat menarik untuk saya ketimbang NodeJS dan Python. Berikut hal² yg menarik:

1. Project menggunakan Actix(Rust) memiliki struktur yg sederhana, mudah dipahami dan mirip dengan struktur Flask(Python)
2. Hello world Docker image Actix(Rust) untuk production memiliki ukuran kurang dari **30MB** 🤯 jauh lebih kecil dibandingkan dengan hello world NodeJS dan Flask(Python) yg ukurannya lebih dari **200MB** (Correct me if I am wrong on this part)
3. Compiled Binary Hello World Actix(Rust) hanya berukuran sekitar **3MB 🔥** dan langsung bisa di eksekusi tanpa Rust dependency (wajar sih, namanya juga compiled app) 😬 kalo interpreter seperti NodeJS/Python perlu install interpreter nya yg ukurannya sudah lebih dari **100MB.**
4. **Memory effisiensi** CPU dan RAM Project Actix(Rust) bisa puluhan hingga ratusan kalilipat lebih efisien dari bahasa/framework pemrograman lain. (I will put the source here if I am not lazy, but you can find it by your self on search engine)
5. Lebih menarik dari C dan C++ karena rust memiliki **Cargo** sebagai official package manager dan memory safety. Konfigurasi C/C++ dependency ga ada standard yang jelas antar dependency dan just wasting too much time untuk serup ini itu. (Yup,  4 years coding in C/C++ and I have this suck skill issue 😵‍💫)
6. Lebih menarik dan stabil dari Go karena banyak fitur yang sering saya gunakan di C/C++ ada di Rust dan tidak ada di Go, yaitu low level programing (hardware). Go sering kena sudden unknown hight memory spike. (source: [**https://medium.com/@siddharth.sabron/what-caused-discord-to-switch-from-go-to-rust-ccac28039d63**](https://medium.com/@siddharth.sabron/what-caused-discord-to-switch-from-go-to-rust-ccac28039d63) )
7. Learning curve jauh lebih mudah dari C/C++ dengan banyak nya opinioted standard dan juga cargo package manager. Apalagi dengan official [**https://rustlings.cool**](https://rustlings.cool/) dengan jalur belajar sambil praktek.

Project baru beberapa minggu sudah di tulis, and lets see whats going on. 🚀

Bagaimana dengan front end? Kami menggunakan **HTMX** + **AlpineJS** + **VanilaJS**. dan Ui Kit menggunakan **DaisyUI** karena fokus kami adalah fungsionalitas tanpa perlu menulis banyak kode JS.