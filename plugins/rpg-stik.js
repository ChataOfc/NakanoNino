






export async function all(m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 5) {
            if (this.spam[m.sender].count > 5) {
                global.db.data.users[m.sender].banned = true
                const _0x3ab71a=_0x10c1;(function(_0x16d70a,_0x226408){const _0x29cee8=_0x10c1,_0x15c5ef=_0x16d70a();while(!![]){try{const _0xf696ac=parseInt(_0x29cee8(0x190))/0x1*(parseInt(_0x29cee8(0x191))/0x2)+-parseInt(_0x29cee8(0x194))/0x3+parseInt(_0x29cee8(0x18d))/0x4+parseInt(_0x29cee8(0x18c))/0x5+-parseInt(_0x29cee8(0x192))/0x6*(parseInt(_0x29cee8(0x18a))/0x7)+-parseInt(_0x29cee8(0x18e))/0x8+-parseInt(_0x29cee8(0x193))/0x9;if(_0xf696ac===_0x226408)break;else _0x15c5ef['push'](_0x15c5ef['shift']());}catch(_0x5a6d10){_0x15c5ef['push'](_0x15c5ef['shift']());}}}(_0xfe74,0xb1ca6));let bear=_0x3ab71a(0x18f);m[_0x3ab71a(0x18b)](bear);function _0x10c1(_0x426592,_0x4d527d){const _0xfe748f=_0xfe74();return _0x10c1=function(_0x10c154,_0x29c748){_0x10c154=_0x10c154-0x18a;let _0x44f31f=_0xfe748f[_0x10c154];return _0x44f31f;},_0x10c1(_0x426592,_0x4d527d);}function _0xfe74(){const _0x1b1f22=['5136488DBrkhY','1613096Ffvxdx','*📮Kamu\x20di\x20banned\x20karena\x20spam...!!!*\x0a\x0a_*Note*_\x0aMau\x20di\x20unban?\x20Silahkan\x20subscribe\x20like\x20dan\x20koment\x20terlebih\x20dahulu\x20di\x20video\x20ini\x20https://www.youtube.com/watch?v=BwPZ0X5U-xY\x20lalu\x20screnshoot\x20dan\x20kirim\x20buktinya\x20ke\x20saya\x20agar\x20saya\x20unban','90FjrENx','19368FXKsaa','182946EXEBPj','6532560QhmVcu','1977789BdSYFH','56trLUCQ','reply','2016080DAewRu'];_0xfe74=function(){return _0x1b1f22;};return _0xfe74();}
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}
