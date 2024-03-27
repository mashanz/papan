# Bikin PaaS/Iaas Buat Automate Deployment Rust, Python dan Go

Automation Deployment Github Repository ke PaaS atau IaaS. Mirip Heroku, Vercel dan Netlify, tapi untuk `Python`, `Rust` dan `Go`.

## Idea
1. Source Code web app tersimpan di Github
2. Source Code tersync dengan PaaS/IaaS
3. Setiap ada perubahan di Github, maka PaaS/IaaS akan melakukan build dan deploy otomatis
4. PaaS/IaaS akan memberikan informasi build dan deploy ke user
5. PaaS/IaaS akan memberikan informasi error jika build dan deploy gagal
6. Deployment menggunakan Container dengan Limit Resources
7. Setiap deployment akan diberikan subdomain yang unik untuk deployment tersebut
8. Setiap deployment akan diberikan SSL secara otomatis (Cloudflare?)
9. Untuk Proxy dan Load Ballancer menggunakan Pingora
10. Infrastructure orkestrasi menggunakan Kubernetes