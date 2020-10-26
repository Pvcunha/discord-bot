const fs = require('fs');

const dir = "./scripts/"

module.exports = (prefix) => {
    const scripts = {};

    const on_dir = fs.readdirSync(dir);
    on_dir.forEach( script => {
        scripts[prefix+script.replace(".js", "")] = require("."+dir+script);
    });
    return scripts;
}