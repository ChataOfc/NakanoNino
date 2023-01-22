import fetch from 'node-fetch' 
import moment from 'moment-timezone'
 let handler = async(m, { conn, usedPrefix, args, command }) => { 
     let name = db.data.users[m.sender].name 
 let fload = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 9998282719181899999,
    status: 404,
    surface : 404,
    message: `${ucapan()}`,
    orderTitle: `${ucapan()}`,
    thumbnail:   await (await fetch(`https://i.ibb.co/jfZVKmC/babi2.jpg`)).buffer(),
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
 let judul = ''
  const sections = [ 
                 { 
                   "rows": [{ 
                     "title": `Pemilik Bot`, 
                     "description": "Nomor Pemilik Bot (owner)", 
                     "rowId": `${usedPrefix}creator` 
                   }, { 
                     "title": "Syarat Ketentuan dan Peraturan", 
                     "description": "Harap membaca Peraturan demi kenyamanan kita bersama", 
                     "rowId": `${usedPrefix}donasi` 
                   }, { 
                     "title": `Group Official ${namebot} Bot`, 
                     "description": "Gabung untuk mendapatkan informasi mengenai bot atau sekedar meramaikan", 
                     "rowId": `${usedPrefix}gcbot` 
                   }], 
                   "title": "Informasi Bot" 
                 }, { 
                   "rows": [{ 
                     "title": `Free Trial 1 Hari`, 
                     "description": "Masukkan bot secara gratis selama 1 Hari", 
                     "rowId": `${usedPrefix}join` 
                     }], 
                   "title": "────────「 Trial 」" 
                 }, { 
                     "rows": [{ 
                       "title": `Permanent! Rp50.000`, 
                       "description": "Masukkan bot ke dalam group tanpa batasann waktu!", 
                       "rowId": ".masuk"
                   }], 
                     "title": "───────「 Permanent 」" 
                 } 
               ]
         const listMessage = {
      text: `*❏ SEWA BOT*
Untuk fitur bot bisa baca menu sampai selesai ya kak, dicoba coba dulu biar tau ( Ketik *.menu* )
Silahkan hubungi owner ( Ketik *.owner* ) jika ingin menyewa bot untuk grup chat kalian

➠ Sewa (Join Grup) harga 50K / Permanent dan apabila bot di kick dari grup sengaja atau tidak sengaja tidak bisa di join kan lagi (Hangus).
➠ Pembayaran saat ini hanya tersedia via Qris.
➠ Proses transaksi seperti pada umumnya, chat owner terlebih dahulu untuk menanyakan nomor tujuan transfer setelah itu screenshot bukti pembayaran.
➠ *Penting!* simpan nomor owner dan join ke dalam grup official dibawah untuk mengetahui update nomor bot terbaru apabila ter-banned.
➠ Bot bisa di pindah pin
dah Grup (berlaku untuk yang sewa) kedalam grup lain (hanya 1 grup)
➠ Maaf untuk yang sudah Transfer tidak dapat di Refund/dibatalkan
➠ Membeli/Sewa berarti Setuju dalam Persyaratan tersebut`,
      footer: wm,
      mentions: await conn.parseMention(judul),
      title: judul.trim(),
      buttonText: "Click Here",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: fload, mentions: await conn.parseMention(judul), contextInfo: { externalAdReply :{ 
     showAdAttribution: true, 
      }} 
   })
    
    }
handler.command = /^(sewabot|sewa|belibot|buyprem)$/i

export default handler 

function ucapan() {
    let res = ''
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = ('Hi')
  if (time >= 0) {
    res = ('Selamat Malam🌃')
  }
  if (time >= 4) {
    res = ('Selamat Pagi🌄')
  }
  if (time >= 12) {
    res = ('Selamat Siang☀️')
  }
  if (time >= 16) {
    res = ('️ Selamat Malam🌇')
  }
  if (time >= 23) {
    res = ('Selamat Malam🌙')
  }
  return res
}