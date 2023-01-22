`npm i genshin`

Use **genshin** to get latest updates on the game, aswell as information on strategies, items, characters etc.
If you need any help, be sure to join our [discord server](https://discord.gg/genshin) and create a ticket!

**Characters**:

```javascript

const genshin = require('genshin')

console.log(genshin.characters('amber'))

```

outputs the following:

```json
{
    "name": "Amber",
    "quote": "Outrider Amber, at the ready!",
    "cv": "Iwami Manaka",
    "description": "A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius.Her amazing mastery of the glider has made her a three-time winner of the Gliding Champion in Mondstadt. As a rising star within the Knights of Favonius, Amber is always ready for any challenging tasks.",
    "image": "https://uploadstatic-sea.mihoyo.com/contentweb/20191009/2019100914372396510.png",
    "city": "Mondstadt",
    "url": "https://genshin.mihoyo.com/en/character/mondstadt?char=1",
    "element": "Pyro",
    "weapon": "Bow",
    "rating": 4
}
```

`                                                        `

**Weapons**:

```javascript

const genshin = require('genshin')

console.log(genshin.weapons('lionsroar'))

```

outputs the following:

```json
{
        "name": "Lions Roar",
        "url": "https://vignette.wikia.nocookie.net/gensin-impact/images/e/e6/Weapon_Lion%27s_Roar.png/revision/latest/scale-to-width-down/100?cb=20200620234652",
        "rating": 4,
        "baseatk": "42",
        "secstat": "ATK",
        "passive": "Bane of Fire and Thunder",
        "r1": "Increases DMG against enemies affected by Pyro or Electro by 20%.",
        "r2": "Increases DMG against enemies affected by Pyro or Electro by 24%.",
        "r3": "Increases DMG against enemies affected by Pyro or Electro by 28%.",
        "r4": "Increases DMG against enemies affected by Pyro or Electro by 32%.",
        "r5": "Increases DMG against enemies affected by Pyro or Electro by 36%.",
        "class": "Sword"
}
```

You get the thing.

This also applies for elements and potions.

# Currently Usable

**Characters**:

* Amber
* Ayaka
* Baizhu
* Barbara
* Beidou
* Bennett
* Childe
* Chongyun
* Cyno
* Dainsleif
* Diluc
* Fischl
* Ganyu
* Jean
* Kaeya
* Keqing
* Klee
* Lisa
* Mona
* Ningguang
* Noelle
* Qiqi
* Razor
* Sucrose
* Venti
* Xiangling
* Xiao
* Xingqiu
* Zhongli

**All Weapons**

**Potions and Elements** will be implemented between 1.3.0 and 1.5.0!
