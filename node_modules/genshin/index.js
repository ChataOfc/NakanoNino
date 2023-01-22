module.exports.characters = async function(search) {
    const json = require(`./characters/${search}`);
    if (!json) return;

    return json;
}

module.exports.weapons = async function(search) {
    const json = require(`./weapons/${search}`);
    if (!json) return;

    return json;
}

module.exports.elements = async function(search) {
    const json = require(`./elements/${search}`);
    if (!json) return;

    return json;
}

module.exports.potions = async function(search) {
    const json = require(`./potions/${search}`);
    if (!json) return;

    return json;
}