<p align="center">
<img src="https://telegra.ph/file/0590602ca31252f439fa1.jpg" alt="Nakano Nino" width="500"/>


</p>
<p align="center">
<a href="#"><img title="Nakano Nino Multi Device" src="https://img.shields.io/badge/Nino Chan-green?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://github.com/ChataOfc"><img title="Author" src="https://img.shields.io/badge/Author-Okta-red.svg?style=for-the-badge&logo=github"></a>
</p>
<p align="center">
<a href="https://github.com/"><img title="Followers" src="https://img.shields.io/github/followers/ChataOfc?color=blue&style=flat-square"></a>
<a href="https://github.com/"><img title="Stars" src="https://img.shields.io/github/stars/ChataOfc?color=red&style=flat-square"></a>
<a href="https://github.com//network/members"><img title="Forks" src="https://img.shields.io/github/forks/ChataOfc/NakanoNino?color=red&style=flat-square"></a>
</P>
<p align="center">
  <a href="https://github.com/ChataOfc/NakanoNino#requirements">Requirements</a> •
  <a href="https://github.com/ChataOfc/NakanoNino#instalasi">Installation</a> •
  <a href="https://github.com/ChataOfc/NakanoNino#thanks-to">Thanks to</a> •
  <a href="https://github.com/ChataOfc/NakanoNino#Official-Group"> Official Group Bot</a> •
  <a href="https://saweria.co/oktakc#donate">Donate</a>
</p>
</div>
---

# Nakano Nino Whatsapp MD
## For Users Termux Install Module [here](https://github.com/Ilhamskhyzi/node_modules)
## Information
> Nakano Nino whatsapp using a Baileys library.
> Jika kamu menemukan semacam bug, harap untuk dimaklumi sementara
>
> • NOTE: Pastikan Jaringan kalian lancar dan device kalian bagus:v, 
> 
> • Kalo pake termux mungkin bakal lama respon nya, saya sarankan pake heroku

<h3 align="center">Made by Okta/h3>
<p align="center">
  <a href="https://github.com/ChataOfc"><img src="https://github.com/ChataOfc.png?size=128" height="128" width="128" /></a>
  <a href="https://github.com/nurutomo"><img src="https://github.com/nurutomo.png?size=128" height="128" width="128" /></a>
</p>

## Tester Bot
* Jika kamu menemukan bug jangan lupa buka Issues
* Info Lebih Lanjut, Chat [Owner
NinoBot](https://wa.me/6285731947500)

## How To Change Menu Display
----
### Gif Menu Display
```ts
 let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/shiro.mp4'), gifPlayback: true }, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{
```

### Image Menu Display
```ts
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/shiraori.jpg')}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{
```

### Location Menu Display
```ts
 const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: text.trim(),
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/shiraori.jpg') },
           hydratedFooterText: wm,
           hydratedButtons: [{       
```

### Video Menu Display
```ts
let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/shiro.mp4')}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{           	
```
----           


## HOW TO CONNECT TO MONGODB WHEN RUN IN HEROKU

* Create account and database in mongodb atlas [`watch here`](https://youtu.be/rPqRyYJmx2g)
* when you already have a database, you just need to take mongourl
* Put mongourl in Procfile `web: node . --db 'mongourl'`
* Example `web: node . -- db 'mongodb+srv://ilman:<password>@cluster0.iiede.mongodb.net/ShiraoriBOT?retryWrites=true&w=majority'`


## UNTUK PENGGUNA WINDOWS/VPS/RDP

* Unduh & Instal Git [`Klik Disini`](https://git-scm.com/downloads)
* Unduh & Instal NodeJS [`Klik Disini`](https://nodejs.org/en/download)
* Unduh & Instal FFmpeg [`Klik Disini`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)
* Unduh & Instal ImageMagick [`Klik Disini`](https://imagemagick.org/script/download.php)

---------

## UNTUK PENGGUNA TERMUX
```bash
pkg update && pkg upgrade
pkg install git
pkg install nodejs
pkg install ffmpeg
pkg install imagemagick
pkg install yarn
git clone https://github.com/ChataOfc/NakanoNino
cd NakanoNino
yarn
node .
```

## UNTUK PENGGUNA HEROKU

### Instal Buildpack
* heroku/nodejs
* https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
* https://github.com/DuckyTeam/heroku-buildpack-imagemagick.git*
* https://github.com/jayshreeanand/heroku-buildpack-libwebp.git

## Installing the FFmpeg for Windows
* Unduh salah satu versi FFmpeg yang tersedia dengan mengklik [di sini](https://www.gyan.dev/ffmpeg/builds/).
* Extract file ke `C:\` path.
* Ganti nama folder yang telah di-extract menjadi `ffmpeg`.
* Run Command Prompt as Administrator.
* Jalankan perintah berikut::
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
Jika berhasil, akan memberikanmu pesan seperti: `SUCCESS: specified value was saved`.
* Sekarang setelah Anda menginstal FFmpeg, verifikasi bahwa itu berhasil dengan menjalankan perintah ini untuk melihat versi:
```cmd
> ffmpeg -version
```

# Thanks to
 [![Nurutomo](https://github.com/Nurutomo.png?size=150)](https://github.com/Nurutomo) | [![KingOfBear](https://github.com/saipulanuar.png?size=150)](https://github.com/saipulanuar) | [![Okta](https://github.com/ChataOfc.png?size=150)](https://github.com/ChataOfc)
----|----|----
[Nurutomo](https://github.com/Nurutomo) | [KingOfBear](https://github.com/saipulanuar) | [Okta](https://github.com/ChataOfc)
 Author | yg nambah fitur | yg punya sc

