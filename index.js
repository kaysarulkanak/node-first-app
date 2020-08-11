const puppeteer = require('puppeteer');
const fs = require('fs');
(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    });
    const page = await browser.newPage();
    await page.goto('https://www.facebook.com/kanak.islam.9');
    let selectorData = await page.evaluate(()=>{
        const title = document.querySelectorAll('h1')
        const title1 = [...title];
        return title1.map(a => a.innerText).filter(Boolean).toString()
    });
    console.log(selectorData)
    fs.readFile("./test2.txt", 'utf8',(err,data)=>{
        if(err){
            console.log(err)
        }else{
            fs.writeFile('./test2.txt', selectorData, ()=>{})
        }
    });

})();


