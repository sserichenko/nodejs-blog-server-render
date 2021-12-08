const fs = require('fs');
const readStrem = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStrem = fs.createWriteStream('./docs/blog4.txt');

// readStrem.on('data', (chunk) => {
//     console.log('----------NEW CHUNK----------')
//     console.log('chunk', chunk)
//     writeStrem.write('\nNEW CHUNK IN BLOG 4\n');
//     writeStrem.write(chunk)
// })

// PIPING
readStrem.pipe(writeStrem);