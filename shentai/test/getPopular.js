const API = require('../')
const sHentai = new API

async function test() {
    // Getting Daily Popular Doujins
    let doujins = await sHentai.getPopular()
    console.log(doujins);

    // or

    await sHentai.getPopular().then(doujins => console.log(doujins));
    
    // Check for all errors in a library without catch(i stop using reject, when after 15^ node.js, Promise use default strict mode for reject)
    if (doujins.status) return doujin.message;
}
test()