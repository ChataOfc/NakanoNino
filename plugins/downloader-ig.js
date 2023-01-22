import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.instagram.com/p/CNtpwxuH5NK/?igshid=g26k5coikzwr`
    let sayang = await fetch(`https://saipulanuar.ga/api/downloader/instagram?url=${args[0]}&apikey=${bear}`)
  let json = await sayang.json()
    if (sayang.status !== 200) throw await sayang.text()
    if (!json.status) throw json
  let babi2 = json.result.post1.
	let babi = await(await fetch(babi2.url)).buffer()
  await conn.sendFile(m.chat, babi, 'ig.mp4', `*INSTAGRAM DOWNLOADER*` , m)
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig(dl)?)$/i

export default handler
