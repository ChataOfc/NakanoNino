import fetch from 'node-fetch'
import fs from 'fs';
import crypto from 'crypto'
let handler = async (m, { conn, text, usedPrefix }) => {
    const ultah = new Date('November 4 2022 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    let sewa = `*🎏 Bot Aktif Kak*

${wm}
${botdate}
`
        let img1 = fs.readFileSync('./thumbnail.jpg');
        let img2 = fs.readFileSync('./media/bawah.png');
    return conn.sendButton(m.chat, hiasan, sewa, await (await fetch(`https://telegra.ph/file/6ab4daac226292a112540.jpg`)).buffer(), [["🗳️MENU", usedPrefix + "menu"], ["🔭DONASI", usedPrefix + "donasi"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: `💌 Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `Subscribe YT My Bestie`,                                       previewType: 0,
                        thumbnail: await (await fetch(`https://i.ibb.co/jfZVKmC/babi2.jpg`)).buffer(),
                        sourceUrl: 'https://youtu.be/pwLZpdfO8AU'
            }
        }
    })
}
handler.help = ['tesbot']
handler.tags = ['owner']
handler.command = ['tesbot']
handler.owner = true
export default handler
