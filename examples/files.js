const fs = require('fs');

// reading files - ASYNC ----------------------------
// fs.readFile("./docs/blog1.txt", (err, data) => {
//     if(err){
//         console.log('error', err)
//     }
//     console.log('data: ', data.toString())
// })

// console.log('This is the last LINE!')

// writing files -------------------------------------
// fs.writeFile('./docs/blog1.txt', "Hello world", () => {
//     console.log('File was written')
// })

// fs.writeFile('./docs/blog2.txt', "Hello again", () => {
//     console.log('File was written')
// })

// directories ---------------------------------------

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log('Folder has been created')
    })
}else{
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log('Directory has been removed')
    })
}


// deleting files ------------------------------
// if(fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt', (err) => {
//         if(err){
//             console.log(err)
//         }
//         console.log('File has been deleted')
//     })
// }