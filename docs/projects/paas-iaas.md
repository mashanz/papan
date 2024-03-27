# Bikin PaaS/Iaas Buat Automate Deployment Rust, Python dan Go

Tiba tiba impulsive kepikiran ide untuk membuat PaaS/IaaS.

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

## Diagram Infrastructure

Ekspektasi trafik kemungkinan akan sangat tinggi, maka perlu menggunakan Deployment Orkestrator seperti Kubernetes dengan multiple Load Ballancer dan Multiple Nodes.

<iframe frameborder="0" style="width:100%;height:368px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=PaaS%2FIaaS#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1-LEL-ARMx0i2xQ_OdzyG2X75lTkBiC31%26export%3Ddownload"></iframe>

Diagram diatas menggambarkan ada Multiple Load Ballancer yang menjadi Public IP dan Nodes dengan internal IP serta Master Node terpisah.

> Tulisan belom beres, capek nulisnya. Nanti dilanjutin lagi.