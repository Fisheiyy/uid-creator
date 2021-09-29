const fs = require('fs-extra')
var i = 0

function wait(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

var files = fs.readdirSync('.\\uidify', 'utf8')
var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#']
files.forEach(files => {
    i++
    process.title = `Renamed: ${i}`
    var rand30chars = characters[Math.floor(Math.random() * 39)] + characters[Math.floor(Math.random() * 39)] + characters[Math.floor(Math.random() * 39)] + characters[Math.floor(Math.random() * 39)] + characters[Math.floor(Math.random() * 39)] + "-" + characters[Math.floor(Math.random() * 39)] + characters[Math.floor(Math.random() * 39)] + characters[Math.floor(Math.random() * 39)] + characters[Math.floor(Math.random() * 39)] + characters[Math.floor(Math.random() * 39)] + "-" + characters[Math.floor(Math.random() * 39)] + characters[Math.floor(Math.random() * 39)] + characters[Math.floor(Math.random() * 39)] + characters[Math.floor(Math.random() * 39)] + characters[Math.floor(Math.random() * 39)] + "-" + characters[Math.floor(Math.random() * 39)] + characters[Math.floor(Math.random() * 39)] + characters[Math.floor(Math.random() * 39)] + characters[Math.floor(Math.random() * 39)] + characters[Math.floor(Math.random() * 39)] + "-" + characters[Math.floor(Math.random() * 39)] + characters[Math.floor(Math.random() * 39)] + characters[Math.floor(Math.random() * 39)] + characters[Math.floor(Math.random() * 39)] + characters[Math.floor(Math.random() * 39)] + "-" + characters[Math.floor(Math.random() * 39)] + characters[Math.floor(Math.random() * 39)] + characters[Math.floor(Math.random() * 39)] + characters[Math.floor(Math.random() * 39)] + characters[Math.floor(Math.random() * 39)]
    var file = files.split('.')
    fs.renameSync(`.\\uidify\\${file[0]}.${file[1]}`, `.\\uidify\\${rand30chars}.${file[1]}`)
    console.log(`${file[0]}.${file[1]} was renamed to ${rand30chars}.${file[1]}`)
    wait(100)
}) 