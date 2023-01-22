import fs from 'fs'
import fetch from 'node-fetch'
 let handler  = async (m, { conn, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = (await import("@adiwajshing/baileys")).default;
           
           const ftrol = {
  key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 999,
                            status: 1,
                            surface : 1,
                            message: `Okta\n5 Menit`, //Kasih namalu
                            orderTitle: `Nakano Nino\n5 Menit`,
                            thumbnail: await (await fetch(giflogo2)).buffer(), //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
          //m.reply(teks)
          let jawab = `*Bot aktif selama*\n5 Menit\n\n_©ᴏᴋᴛᴀ_`.trim()
conn.sendMessage(m.chat,{text:wm}, {quoted: ftrol})
}


handler.help = ['troli']

handler.tags = ['ᴘᴇɴᴅɪɴɢ sᴛᴜғғ']

handler.command = /^troli$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false

export default handler
