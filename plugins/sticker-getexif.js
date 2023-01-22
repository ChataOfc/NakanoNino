import { extractMetadata } from 'wa-sticker-formatter'
import { format } from 'util'

let handler = async (m, { conn }) => {
    if (m.quoted && /sticker/.test(m.quoted.mtype)) {
        let img = await m.quoted.download()
        if (!img) throw '*[❗] Tidak Dapat Mengekstrak Stiker Metadata*'
        let metaData = await extractMetadata(img)
        await m.reply(format(metaData))
    } else throw '*[❗] Reply Sticker Dengan Caption #getexif*'
}
handler.help = handler.alias = ['getexif']
handler.tags = ['tools']
handler.command = /^(getexif)$/i
handler.register = true
handler.limit = true
export default handler