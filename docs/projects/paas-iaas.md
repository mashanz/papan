# Bikin PaaS/Iaas Buat Automate Deployment Rust, Python dan Go

> 27 Maret 2024 

Tiba tiba impulsive kepikiran ide untuk membuat PaaS/IaaS.

<iframe src="https://giphy.com/embed/KT3TNkhNexOWVsMIw8" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/buzzfeed-party-happy-new-year-years-KT3TNkhNexOWVsMIw8">via GIPHY</a></p>

Automation Deployment Github Repository ke PaaS atau IaaS. Mirip Heroku, Vercel dan Netlify, tapi untuk `Python`, `Rust` dan `Go`.

## Behind Story
> kenapa ini gue dokumentasiin?

Ketriger tulisan tim Govtech nya mas <a href="https://x.com/ibamarief">@ibamarief</a> gue juga coba ikut nulis hal serupa di salah satu kementrian yg load trafik nya mirip mirip dengan Govtech.

Tapi karena belom dapet ACC untuk bikin tulisan, gue pake use case side project aja untuk bikin PaaS/IaaS yang kurang lebih sama untuk handle massives incomming traffict (Expected 1 Juta concurent users 200K RPS / 200K QPS Read/Write Queries)

::: tip Trafik
Ya sekitar 500 Miliar Request Perhari
:::

Di sini gue akan ngebahas gimana planning nya, pemilihan tech dan cost estimation.

usecase di sini tidak menggunakan managed service seperti GCP/AWS yg setup load ballancing dan distribution service nya cukup mudah, 

::: tip Usecase
tapi gue coba bikin versi fully from scratch VPS atau baremetal.
:::

dan karena gue yg males nulis, akhir nya gue cicil 🤣
(tagih aja kalo udah mulai jarang updates)

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

::: info Kenapa sih design nya gini?
Design ini adalah design tahap awal, yang bisa berubah sesuai dengan kebutuhan dan kondisi:
- Ada 1 Master Node terpisah untu controling K8S cluster agar tidak terjadi throttle ketika high traffict dan mudah scalling nya `(ini pake ip public dulu, nanti bisa di private dan diakses via VPN)`
- Ada 2 Slave Node untuk Load Ballancer, Karena untuk backup bila salah satu Node tumbang masih bisa handle traffict masuk `(Never Trust your Machine always On)`
- Ada 4 Slave Node untuk Apps+Apps Replica dan DB+DB Replica dan backup bila salah ada nodes yang mati, serta hanya tersambung dengan private Network `(Agar supaya ga bisa diakses dari public, mere secure duh!)`
:::

## Monkey Calculation and Cost Estimation

Nah di sini coba kita hitung ya, berapa biaya yang diperlukan untuk infrastruktur ini.

<iframe src="https://giphy.com/embed/zOvBKUUEERdNm" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/coding-zOvBKUUEERdNm">via GIPHY</a></p>

### Limitation

Server pasti memiliki keterbatasan, baik itu CPU, Memory, Storage, Network, dan Read/Write IO. Kita harus memperhitungkan hal ini. Contoh kasus saya akan mengambil spesifikasi server sebagai berikut dengan provider local / international:

::: info VPS Provider Lokal
Let's say, kita pake server dari provider ****** dengan usecase menggunakan VPS:
:::

1. Network 1 Gbps (50% on average -> 500 Mbps)
2. CPU 16 vCPU
3. Memory 32 GB
4. Storage 512 GB SSD
5. OS Ubuntu 22.04 LTS

::: warning Estimasi 1 VPS
Harga VPS server perbulan adalah Rp 3.700.000
:::

### Estimasi Biaya Tahap Awal

Dari diagram, terdapat 7 Nodes Server:
- 1 Master Node
- 6 Slave Node

::: danger Estimasi Awal
Berarti perkiraan biaya untuk starting point adalah Rp 3.700.000 x 7 = Rp 25.900.000 / Bulan
:::

### Infrastructure Aplikasi

Aplikasi Cukup Sederhana, Masih menggunakan Monolith Architecture, dan menggunakan 4 Container:
- 1 Container untuk 1 Apps
- 1 Container untuk 1 DB 
- 1 Container untuk 1 Bucket Storage
- 1 Container untuk 1 Cache

<iframe frameborder="0" style="width:100%;height:285px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&page-id=tsY7-0lGVVZUUPQlEOs7&title=PaaS%2FIaaS#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1-LEL-ARMx0i2xQ_OdzyG2X75lTkBiC31%26export%3Ddownload"></iframe>

Namun untuk memaksimalkan I/O atau Read/Write, kita perlu membuat replica di sisi App dan DB. Misal seperti di gambar di bawah ini:

<iframe frameborder="0" style="width:100%;height:344px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&page-id=BHM63xhQYKMuZOWPeldW&title=PaaS%2FIaaS#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1-LEL-ARMx0i2xQ_OdzyG2X75lTkBiC31%26export%3Ddownload"></iframe>

Terdapat 4 Node Replica aplikasi, 1 Write Master Dan 2 Read Replica. Serta backup DB ke Bucket.

## Tech Stack

Techstack yang akan digunakan paling tidak adalah techstack yang cloud agnostick, yang bisa dijalankan di Cloud Provider, VPS atau Baremetal. Jadi, ketika kita ingin migrasi ke provider berbeda, kita tidak perlu mengubah banyak hal.

- DNS management kita serahkan kepada `CloudFlare`
- Load Ballancer -> `NginX`/`Pingora`
- Container Orkestrasi -> `Kubernetes`
- S3 Storage -> `MinIO`/`R2`
- Database -> `PostgreSQL`/`MySQL`
- Cache -> `Redis`/`Dragonfly`
- Bahasa pemrograman kita ada banyak pilihan seperti:
    - `PHP` -> `Laravel`/`CodeIgniter`
    - `Rust` -> `Actix`/`Axum`/`Loco`
    - `Python` -> `Django`/`Flask`/`FastAPI`/`Socketify`

Mari kita benchmark dahulu setiap bahasa pemrograman tersebut.

[Hasil Benchmark di sini!](/posts/benchmark)

::: warning ⏳ Tobe Continue >>
Tulisan belom beres, capek nulisnya. Nanti dilanjutin lagi.
:::